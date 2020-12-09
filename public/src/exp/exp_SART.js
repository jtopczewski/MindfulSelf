// Constants
const FIXATION_DURATION = 900;
const PICTURE_DURATION = 500;
const TRIAL_REPS = 10;

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
    data: {screen_id: "instruction"},
    type: "instructions",
    pages: [
        "<p>In this task, you will see numbers from 1-9.</p>" +
        "<p>Press the <b>left key</b> for almost any numbers.</p>" +
        "<p>When you see the number 3, <b>do not press</b> any key.</p>",
        "<p>If there is a prompt, press the corresponding button to answer.</p>",
        "<p>let's practice some trials first.</p>"
    ],
    show_clickable_nav: true,
    on_finish: function(data) {
        data.view_history = JSON.parse(data.view_history);
    }
};
var instruction2 = {
    data: {screen_id: "instruction2"},
    type: "instructions",
    pages: [
        "<p>We have come to the end of the practice trials.</p>",
        "<p>Remember, press the <b>left key</b> for almost any numbers.</p>" +
        "<p>When you see the number 3, <b>do not press</b> any key.</p>" +
        "<p>If there is a prompt, press the corresponding button to answer.</p>" +
        "<p>If you are ready, click next to start the experiment.</p>",
    ],
    show_clickable_nav: true,
    on_finish: function(data) {
        data.view_history = JSON.parse(data.view_history);
    }
};

// Create stimulus
var fixation_stim = "<div style='font-size: 60px'>+</div>";
var neutral_stim = [1, 2, 4, 5, 6, 7, 8, 9];
var exp_stim = [3];

// create trial conditions
var factors = {
    condition: ["neutral", "neutral", "neutral", "exp"],
    awareness: ["yes", "no", "no", "no"]
};
var trial_conditions = jsPsych.randomization.factorial(factors, 1);

// Fixation
function createFixation(blockID) {
    var fixation = {
        type: "html-keyboard-response",
        data: {block_id: blockID, screen_id: "fixation", stimulus: "fixation"},
        stimulus: fixation_stim,
        choices: jsPsych.NO_KEYS,
        trial_duration: FIXATION_DURATION, // milliseconds
    };
    return fixation
}
var prac_fixation = createFixation("practice");
var exp_fixation = createFixation("experiment");

// Stimulus
function createTrials(blockID) {
    var trial = {
        on_start: function(trial) {
            // set stimulus
            if (jsPsych.timelineVariable('condition', true) === "neutral") {
                var stim = jsPsych.randomization.sampleWithReplacement(neutral_stim, 1);
            } else {
                var stim = jsPsych.randomization.sampleWithReplacement(exp_stim, 1);
            }
            trial.stimulus = "<div style='font-size: 60px'>" + stim + "</div>";
            // Set data in trial
            trial.data = {
                block_id: blockID,
                screen_id: 'trial',
                stimulus: stim,
                condition: jsPsych.timelineVariable('condition', true),
            };
        },
        data: {},
        type: "html-keyboard-response",
        stimulus: "",
        choices: [37],
        trial_duration: PICTURE_DURATION,
        on_finish: function (data) {
            if (data.key_press == 37) {data.key_press = "clicked"} else {data.key_press = "skipped"}
            if (data.condition === "neutral" && data.key_press === "clicked") {data.accuracy = 1}
            if (data.condition === "neutral" && data.key_press != "clicked") {data.accuracy = 0}
            if (data.condition === "exp" && data.key_press != "clicked") {data.accuracy = 1}
            if (data.condition === "exp" && data.key_press === "clicked") {data.accuracy = 0}
        }
    };
    return trial
};
var prac_trial = createTrials("practice");
var exp_trial = createTrials("experiment");

// Feedback
var feedback = {
    data: {block_id: "practice", screen_id: "feedback"},
    type: "html-keyboard-response",
    stimulus: function() {
        var last_trial_accuracy = jsPsych.data.get().last(1).values()[0].accuracy;

        console.log(last_trial_accuracy);

        if (last_trial_accuracy == 1) {
            return "<div style='font-size: 60px;'>correct!</div>"
        } else {
            return "<div style='font-size: 60px;'>incorrect!</div>"
        }
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000,
};

// Awareness
function createAwareness1(blockID) {
    var awareness_trial = {
        type: "html-keyboard-response",
        data: {block_id: blockID, screen_id: "aware"},
        on_start: function (trial) {
            if (jsPsych.timelineVariable('awareness', true) == "yes") {
                trial.stimulus = "<p>On a rating of 1 to 6, where was your attention focused just before this?</p>" +
                    "<p><b>On task</b>  1   2   3   4   5   6   <b>Off task</b></p>";
                trial.choices = [49, 50, 51, 52, 53, 54];
            } else {
                trial.stimulus = "";
                trial.choices = "";
                trial.trial_duration = 0;
            }
        },
        stimulus: "",
        choices: "",
        on_finish: function (data) {
            if (data.key_press == 49) {data.key_press = 1}
            if (data.key_press == 50) {data.key_press = 2}
            if (data.key_press == 51) {data.key_press = 3}
            if (data.key_press == 52) {data.key_press = 4}
            if (data.key_press == 53) {data.key_press = 5}
            if (data.key_press == 54) {data.key_press = 6}

            data.condition = jsPsych.timelineVariable('condition', true);
            data.stimulus = jsPsych.data.get().last(2).values()[0].stimulus;
            data.aware_trial = jsPsych.timelineVariable('awareness', true);
        }
    };
    return awareness_trial
};
var prac_aware1 = createAwareness1("practice");
var exp_aware1l = createAwareness1("experiment");

function createAwareness2(blockID) {
    var awareness2_trial = {
        type: "html-keyboard-response",
        data: {block_id: blockID, screen_id: "aware2", meta_aware_trial: "yes"},
        on_start: function(trial) {
            if (jsPsych.timelineVariable('awareness', true) == "yes") {
                trial.stimulus = "<p>On a rating of 1 to 6, How aware were you of where your attention was?</p>" +
                    "<p><b>Aware</b>  1   2   3   4   5   6   <b>Unaware</b></p>";
                trial.choices = [49, 50, 51, 52, 53, 54];
            }  else {
                trial.data = {block_id: blockID, screen_id: "aware2"};
                trial.stimulus = "";
                trial.choices = "";
                trial.trial_duration = 0;
            }
        },
        stimulus: "",
        choices: "",
        on_finish: function (data) {
            if (data.key_press == 49) {data.key_press = 1}
            if (data.key_press == 50) {data.key_press = 2}
            if (data.key_press == 51) {data.key_press = 3}
            if (data.key_press == 52) {data.key_press = 4}
            if (data.key_press == 53) {data.key_press = 5}
            if (data.key_press == 54) {data.key_press = 6}

            data.condition = jsPsych.timelineVariable('condition', true);
            data.stimulus = jsPsych.data.get().last(2).values()[0].stimulus;
            data.aware_trial = jsPsych.timelineVariable('awareness', true);
        },
    };
    return awareness2_trial
};
var prac_aware2 = createAwareness2("practice");
var exp_aware2 = createAwareness2("experiment");

// Experimental block
var prac_procedure = {
    timeline: [prac_fixation, prac_trial, feedback, prac_aware1, prac_aware2],
    timeline_variables: trial_conditions,
    randomize_order: true,
    repetitions: 1 // 1 set = 16 trials
};

var end_block = {
    on_start: function () {
        var csv = jsPsych.data.get().csv();
        var partID = jsPsych.data.get().values()[0].part_ID;
        var filename = partID + "_" + DATETODAY + ".csv";
        // downloadCSV(csv, filename);
    },
    data: {screen_id: "finish"},
    type: "instructions",
    pages: [
        "<p>We have come to the end of the experiment. Please notify the experimenter.</p>",
    ],
    show_clickable_nav: true,
    on_finish: function(data) {
        data.view_history = JSON.parse(data.view_history);
    }
};


var exp_procedure = {
    timeline: [exp_fixation, exp_trial, exp_aware1l, exp_aware2],
    timeline_variables: trial_conditions,
    randomize_order: true,
    repetitions: TRIAL_REPS // 1 set = 16 trials
};



// Set timeline
experiment_timeline = [];
experiment_timeline.push(welcome_block);
experiment_timeline.push(instruction);
experiment_timeline.push(prac_procedure);
experiment_timeline.push(instruction2);
experiment_timeline.push(exp_procedure);
experiment_timeline.push(end_block);


// Start experiment
function startMAB() {
    jsPsych.init({
        timeline: experiment_timeline,
        on_interaction_data_update: function(data) {
            var int_data = data;
            jsPsych.data.addProperties({event: int_data['event'], trial: int_data['trial']})
        },
        on_finish: function () {
            var csv = jsPsych.data.get().csv();
            var partID = jsPsych.data.get().values()[0].part_ID;
            var filename = partID + "_" + DATETODAY + ".csv";
            // downloadCSV(csv, filename);
            // jsPsych.data.displayData()
            // alert("You have finished the experiment. Do not close the window yet. Please notify the experimenter!")
        }
    })
}