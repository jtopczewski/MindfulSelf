// Constants
FIXATION_DURATION = 500;
PICTURE_DURATION = 500;
PROBE_DURATION = 500;

// Date
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

const DATETODAY = yyyy + + mm + dd;

// Welcome screen
var welcome_block = {
    data: {
        screen_id: "welcome",
    },
    type: "survey-html-form",
    preamble: "Welcome to the experiment! Please fill in the form below",
    html: "<p>Participant ID: <input name='part_ID' type='text' /></p> " +
        "<p>Age:  <input name ='age' type='text' /></p>" +
        "<p>Gender: <input name ='gender' type='text' /></p>",
    on_finish: function(data) {
        data.responses = JSON.parse(data.responses);
        jsPsych.data.addProperties({
            part_ID: data.responses.part_ID,
            age: data.responses.age,
            gender: data.responses.gender,
        })
    }
};

// Instructions
var instruction = {
    data: {
        screen_id: "instruction"
    },
    type: "instructions",
    pages: [
        "<p>In this study you will see two pictures followed by a cue.</p>" +
        "<p> Press <b>F</b> if the cue is on the left.<br>Press <b>J</b> if the cue is on the right.</p>"
    ],
    show_clickable_nav: true,
    on_finish: function(data) {
        data.view_history = JSON.parse(data.view_history);
    }
};
"../sound/bell.wav"
// Create stimulus
var fixation_stim = "<div style='font-size: 60px'>+</div>";
var neutral_stims = ["../img/MAB/neutral1.jpg", "../img/MAB/img/neutral2.jpg", "../img/MAB/img/neutral3.jpg", "../img/MAB/img/neutral4.jpg", ];
var exp_stims = ["../img/MAB/img/exp1.jpg", "../img/MAB/img/exp2.jpg", "../img/MAB/img/exp3.jpg", "../img/MAB/img/exp4.jpg"];

/*
var factors = {
    probe_direction: ["left", "right"],
    trialtype: ["neutral", "exp"],
    condition: ["congruent", "incongruent"],
    awareness: ["yes", "no", "no", "no"]
};
var trial_conditions = jsPsych.randomization.factorial(factors, 1);
*/


var exp_factors = {
    probe_direction: ["left", "right"],
    trialtype: ["exp"],
    condition: ["congruent", "incongruent"],
    awareness: ["yes", "no", "no", "no"]
};
var exp_trial_conditions = jsPsych.randomization.factorial(exp_factors, 1);

var neutral_factors = {
    probe_direction: ["left", "right"],
    trialtype: ["neutral"],
    condition: ["congruent", "incongruent"],
    awareness: ["no"]
};
var neutral_trial_conditions = jsPsych.randomization.factorial(neutral_factors, 1);

trial_conditions = [...neutral_trial_conditions, ...exp_trial_conditions];


// Fixation
var fixation = {
    type: "html-keyboard-response",
    data: {screen_id: "fixation", stimulus: "fixation"},
    stimulus: fixation_stim,
    choices: jsPsych.NO_KEYS,
    trial_duration: FIXATION_DURATION, // milliseconds
};

// Stimulus
var exp_trial = {
    on_start: function(trial) {
        // set stimulus
        if (jsPsych.timelineVariable('trialtype', true) === "neutral") {  // if neutral trial, both stimuli are equal
            var stim_1 = jsPsych.randomization.sampleWithReplacement(neutral_stims, 1);
            var stim_2 = stim_1;
        } else {  // if experimental trial, need to check if it is congruent or incongruent trial
            if (jsPsych.timelineVariable('condition', true) === "congruent"){ // if congruent trial
                if (jsPsych.timelineVariable('probe_direction', true) === "left") { // if probe is on left
                    var stim_1 = jsPsych.randomization.sampleWithReplacement(exp_stims, 1);
                    var stim_2 = jsPsych.randomization.sampleWithReplacement(neutral_stims, 1);
                } else { // if probe is on right
                    var stim_1 = jsPsych.randomization.sampleWithReplacement(neutral_stims, 1);
                    var stim_2 = jsPsych.randomization.sampleWithReplacement(exp_stims, 1);
                }
            } else { // if incongruent trial
                if (jsPsych.timelineVariable('probe_direction', true) === "left") { // if probe is on left
                    var stim_1 = jsPsych.randomization.sampleWithReplacement(neutral_stims, 1);
                    var stim_2 = jsPsych.randomization.sampleWithReplacement(exp_stims, 1);
                } else { // if probe is on right
                    var stim_1 = jsPsych.randomization.sampleWithReplacement(exp_stims, 1);
                    var stim_2 = jsPsych.randomization.sampleWithReplacement(neutral_stims, 1);
                }
            }
        }

        var trial_stim = "<div style='float: left; border: 5px; margin: 50px'><img src=\"" + stim_1 + "\" \/></div>" +
            "<div style='float: right; border: 5px; margin: 50px'><img src=\"" + stim_2 + "\" \/></div>";
        trial.stimulus = trial_stim;

        // Set congruency
        var pair_stim_cong = [stim_1, stim_2];

        // Set data in trial
        trial.data = {
            screen_id: 'trial',
            trialtype: jsPsych.timelineVariable('trialtype', true),
            probe_direction: jsPsych.timelineVariable('probe_direction', true),
            stimulus: pair_stim_cong,
            stimulus_l: stim_1,
            stimulus_r: stim_2,
            congruency: jsPsych.timelineVariable('condition', true)
        };
    },
    data: {},
    type: "html-keyboard-response",
    stimulus: "",
    choices: jsPsych.NO_KEYS,
    trial_duration: PICTURE_DURATION,
};

var probe_trial = {
    type: "html-keyboard-response",
    stimulus: function () {
        if (jsPsych.timelineVariable('probe_direction', true) == "left") {
            return "<div style='float: left; border: 5px; font-size: 125px; padding-right: 600px'>·</div>";
        } else
            return "<div style='float: left; border: 5px; font-size: 125px; padding-left: 600px'>·</div>";
    },
    choices: ['f', 'j'],
    trial_duration: PROBE_DURATION,
    on_finish: function (data) {
        data.screen_id = "probe";
        data.trialtype = jsPsych.timelineVariable('trialtype', true);
        data.probe_direction = jsPsych.timelineVariable('probe_direction', true);
        data.congruency = jsPsych.timelineVariable('condition', true);
        data.stimulus = jsPsych.data.get().last(2).values()[0].stimulus;
        data.stimulus_l = jsPsych.data.get().last(2).values()[0].stimulus_l;
        data.stimulus_r = jsPsych.data.get().last(2).values()[0].stimulus_r;

        if (String.fromCharCode(data.key_press) == "F") {data.key_press = "left"}
        if (String.fromCharCode(data.key_press) == "J") {data.key_press = "right"}

        if (data.key_press == "left" && data.probe_direction == "left") {
            data.accuracy = 1
        }
        else if (data.key_press == "right" && data.probe_direction == "right") {
            data.accuracy = 1
        } else {
            data.accuracy = 0
        }
    }
};

// Awareness
var awareness_trial = {
    type: "html-keyboard-response",
    data: {screen_id: "aware"},
    on_start: function(trial) {
        if (jsPsych.timelineVariable('awareness', true) == "yes") {
            trial.stimulus = "<p>Did one of the pictures affect your response?</p>" +
                "<p>1 = Left Picture</p>" +
                "<p>2 = Right picture</p>" +
                "<p>3 = None</p>";
            trial.choices =  [49, 50, 51];
        } else {
            trial.stimulus = "";
            trial.choices = "";
            trial.trial_duration = 0;
        }
    },
    stimulus: "",
    choices: "",
    on_finish: function (data) {
        if (data.key_press == 49) {data.key_press = "Left"}
        if (data.key_press == 50) {data.key_press = "Right"}
        if (data.key_press == 51) {data.key_press = "None"}

        data.trialtype = jsPsych.timelineVariable('trialtype', true);
        data.probe_direction = jsPsych.timelineVariable('probe_direction', true);
        data.congruency = jsPsych.timelineVariable('condition', true);

        data.stimulus = jsPsych.data.get().last(2).values()[0].stimulus;
        data.stimulus_l = jsPsych.data.get().last(2).values()[0].stimulus_l;
        data.stimulus_r = jsPsych.data.get().last(2).values()[0].stimulus_r;

        data.aware_trial = jsPsych.timelineVariable('awareness', true);
    }
};

var meta_awareness_trial = {
    type: "html-keyboard-response",
    data: "",
    on_start: function(trial) {
        var trial_aware_condition = jsPsych.timelineVariable('awareness', true);
        var trial_aware_choice = jsPsych.data.get().last(1).values()[0].key_press;

        if (trial_aware_condition == "yes" && trial_aware_choice != "None") {
            trial.data = {screen_id: "meta-aware", meta_aware_trial: "yes"};
            trial.stimulus = "<p>How did the picture affect you?</p>" +
                "<p>1 = My attention moved away from the picture</p>" +
                "<p>2 = My attention moved towards the picture</p>";
            trial.choices =  [49, 50];
        } else {
            trial.data = {screen_id: "meta-aware", meta_aware_trial: "no"};
            trial.stimulus = "";
            trial.choices = "";
            trial.trial_duration = 0;
        }
    },
    stimulus: "",
    choices: "",
    on_finish: function (data) {
        if (data.key_press == 49) {data.key_press = "away"};
        if (data.key_press == 50) {data.key_press = "towards"};

        data.trialtype = jsPsych.timelineVariable('trialtype', true);
        data.probe_direction = jsPsych.timelineVariable('probe_direction', true);
        data.congruency = jsPsych.timelineVariable('condition', true);

        data.stimulus = jsPsych.data.get().last(2).values()[0].stimulus;
        data.stimulus_l = jsPsych.data.get().last(2).values()[0].stimulus_l;
        data.stimulus_r = jsPsych.data.get().last(2).values()[0].stimulus_r;
    },
};


// Experimental block
var procedure = {
    timeline: [fixation, exp_trial, probe_trial, awareness_trial, meta_awareness_trial],
    timeline_variables: trial_conditions,
    randomize_order: true,
    repetitions: 1 // 1 set = 32 trials
};

// Set timeline
experiment_timeline = [];
experiment_timeline.push(welcome_block);
// experiment_timeline.push(instruction);
experiment_timeline.push(procedure);


// Start experiment
function startMAB() {

    jsPsych.init({
        timeline: experiment_timeline,
        on_finish: function () {
            var csv = jsPsych.data.get().csv();
            // var partID = jsPsych.data.get().values()[0].part_ID;
            // var filename = partID + "_" + DATETODAY + ".csv";
            var filename = "test.csv";
            downloadCSV(csv, filename);
            jsPsych.data.displayData()
        }
    })
}