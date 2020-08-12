/* ************************************ */
/* Define experimental variables */
/* ************************************ */

// task parameters: One set = 3 trials
GNG_PRACT_REP = 1; // original 1
GNG_EXP_REP = 2; // original 2
GNG_FIX_DUR = [500, 750, 1000, 1250, 1500];
GNG_TRIAL_DUR = 1000;



/* ************************************ */
/* Set helpers */
/* ************************************ */

var GNG_taskhelper = {};

// Task
GNG_taskhelper.fixation = "<div style='font-size: 60px'>+</div>";
GNG_taskhelper.end_block = "<p class='continue_next'>Great job and thank you! You are now finished with this part of the study." +
    "<br>We will proceed with the next section.</p>" +
    "<p class='continue_next'>Press <strong>ENTER</strong> to continue.</p>";

// Instructions
GNG_taskhelper.instr1_pg1 = "<p class='instr'>In this task, a picture will be presented at the center of the screen.</p>" +
    "<p class='instr'>You will need to press SPACEBAR if the picture is not associated with alcohol, tobacco, or cannabis. " +
    "<br>For words that are associated with alcohol, tobacco, or cannabis, press SPACEBAR.</p>" +
    "<p class='instr'>In the next few pages, you will provided with pictures of alcohol, tobacco, and cannabis.";

// Pictures
GNG_taskhelper.instr1_pg2_alc =
    "<p class='instr'> These are the alcohol pictures:</p>" +
    "<div class='GNGrow'>" +
    "<div class='GNGcolumn'><img src='../img/GoNoGo/alcohol1.jpg' style='width:100%'></div>" +
    "<div class='GNGcolumn'><img src='../img/GoNoGo/alcohol2.jpg' style='width:100%'></div>" +
    "<div class='GNGcolumn'><img src='../img/GoNoGo/alcohol3.jpg' style='width:100%'></div>" +
    "</div>";

GNG_taskhelper.instr1_pg3_tbc =
    "<p class='instr'> These are the tobacco pictures:</p>" +
    "<div class='GNGrow'>" +
    "<div class='GNGcolumn'><img src='../img/GoNoGo/tobacco1.jpg' style='width:100%'></div>" +
    "<div class='GNGcolumn'><img src='../img/GoNoGo/tobacco2.jpg' style='width:100%'></div>" +
    "<div class='GNGcolumn'><img src='../img/GoNoGo/tobacco3.jpg' style='width:100%'></div>" +
    "</div>";

GNG_taskhelper.instr1_pg4_cnb =
    "<p class='instr'> These are the cannabis pictures:</p>" +
    "<div class='GNGrow'>" +
    "<div class='GNGcolumn'><img src='../img/GoNoGo/cannabis1.jpg' style='width:100%'></div>" +
    "<div class='GNGcolumn'><img src='../img/GoNoGo/cannabis2.jpg' style='width:100%'></div>" +
    "<div class='GNGcolumn'><img src='../img/GoNoGo/cannabis3.jpg' style='width:100%'></div>" +
    "</div>";

GNG_taskhelper.instr1_pg5 =
    "<p class='instr'>Remember, press SPACEBAR if the picture is not associated with alcohol, tobacco, or cannabis. " +
    "<br>For words that are associated with alcohol, tobacco, or cannabis, press SPACEBAR.</p>" +
    "<p class='instr'>We will try some practice rounds in the next few slides. " +
    "You will also be given feedback on whether you pressed the correct key.";


GNG_taskhelper.instr2_pg1 =
    "<p class='instr'>We have now completed the practice block.</p>";

GNG_taskhelper.instr2_pg2 =
    "<p class='instr'>We will not proceed with the experimental block.</p>" +
    "<p class='instr'>Remember, press SPACEBAR if the picture is not associated with alcohol, tobacco, or cannabis." +
    "<br>For words that are associated with alcohol, tobacco, or cannabis, press SPACEBAR.</p>" +
    "<p class='instr'>In the experimental trials, there will not be any feedback given to you. " +
    "<br>Please complete the task as quickly and as accurately as possible.</p>";

GNG_taskhelper.end_block =
    "<p class='continue_next'>Great job and thank you! You are now finished with this part of the study." +
    "<br>We will proceed with the next section.</p>" +
    "<p class='continue_next'>Press <strong>ENTER</strong> to continue.</p>";


/* ************************************ */
/* Instructions */
/* ************************************ */

var GNG_instr1 = {
    type: 'instructions',
    data: {
        exp_id: "gng-task",
        trial_id: "instructions"
    },
    pages: [
        GNG_taskhelper.instr1_pg1,
        GNG_taskhelper.instr1_pg2_alc, GNG_taskhelper.instr1_pg3_tbc, GNG_taskhelper.instr1_pg4_cnb,
        GNG_taskhelper.instr1_pg5
    ],
    show_clickable_nav: true,
    show_page_number: true
};
var GNG_instr2 = {
    type: 'instructions',
    data: {
        exp_id: "gng-task",
        trial_id: "instructions"
    },
    pages: [
        GNG_taskhelper.instr2_pg1,
        GNG_taskhelper.instr2_pg2,
    ],
    show_clickable_nav: true,
    show_page_number: true
};
var GNG_end_block = {
    type: "html-keyboard-response",
    data: {
        exp_id: "gng-task",
        trial_id: "end_block"
    },
    stimulus: GNG_taskhelper.end_block,
    choices: [13]
};


/* ************************************ */
/* Set up stimuli */
/* ************************************ */

// Fixation
var GNG_fixation = {
    type: "html-keyboard-response",
    data: {
        exp_id: "gng-task",
        trial_id: "fixation",
        stimulus: "fixation"},
    stimulus: GNG_taskhelper.fixation,
    choices: jsPsych.NO_KEYS,
    trial_duration: function(){
        return jsPsych.randomization.sampleWithoutReplacement(GNG_FIX_DUR, 1)[0];
    }, // milliseconds
};

// Trials
var GNG_practice_trial = {
    on_start: function(trial){
        stimulus = jsPsych.timelineVariable('stimulus', true);
        data = jsPsych.timelineVariable('data', true);
        console.log(data)
        trial.stimulus = "<img src= " + stimulus + " style='width:50%'>";
        trial.data = {
            exp_id: "gng-task",
            trial_id: "practice",
            stimulus: data["stimulus"],
            ATC: data["ATC"],
            correct_response: data["correct_response"]
        }
    },
    type: "html-keyboard-response",
    stimulus: "",
    prompt: "",
    choices: [32],
    trial_duration: GNG_TRIAL_DUR,
    on_finish: function(data){
        var trial_data = JSON.parse(JSON.stringify(data));
        if (trial_data.key_press === trial_data.correct_response) {
            data.accuracy = 1;
        } else {
            data.accuracy = 0;
        }
    }
};
var GNG_exp_trial = {
    on_start: function(trial){
        stimulus = jsPsych.timelineVariable('stimulus', true);
        data = jsPsych.timelineVariable('data', true);
        console.log(data)
        trial.stimulus = "<img src= " + stimulus + " style='width:50%'>";
        trial.data = {
            exp_id: "gng-task",
            trial_id: "exp-trials",
            stimulus: data["stimulus"],
            ATC: data["ATC"],
            correct_response: data["correct_response"]
        }
    },
    type: "html-keyboard-response",
    stimulus: "",
    prompt: "",
    choices: [32],
    trial_duration: GNG_TRIAL_DUR,
    on_finish: function(data){
        var trial_data = JSON.parse(JSON.stringify(data));
        if (trial_data.key_press === trial_data.correct_response) {
            data.accuracy = 1;
        } else {
            data.accuracy = 0;
        }
    }
};

// Trial feedback
var GNG_pract_trial_feedback = {
    type: 'html-keyboard-response',
    on_start: function(trial) {
        // Set data in trial
        trial.data = {
            exp_id: "gng-task",
            trial_id: "practice-trial-feedback",
            stimulus: jsPsych.timelineVariable('stimulus', true)
        };
    },
    data: "",
    trial_duration: 1000,
    choices: jsPsych.NO_KEYS,
    stimulus: function() {
        var accuracy = JSON.parse(jsPsych.data.getLastTrialData().values()[0]["accuracy"]);
        if (accuracy == 1) {
            return "<div class='gng_feedback'><p style='color:#008000'>correct</p></div>";
        } else {
            return "<div class='gng_feedback'><p style='color:#ff0000'>incorrect</p></div>";
        }
    },

};


// Procedure
var GNG_pract_procedure = {
    timeline: [GNG_fixation, GNG_practice_trial, GNG_pract_trial_feedback],
    timeline_variables: GoNoGo_Pract_stimuli,
    randomize_order: true,
    repetitions: GNG_PRACT_REP
};

var GNG_exp_procedure = {
    timeline: [GNG_fixation, GNG_exp_trial],
    timeline_variables: GoNoGo_Exp_stimuli,
    randomize_order: true,
    repetitions: GNG_EXP_REP
}

/* ************************************ */
/* Set up timeline */
/* ************************************ */

var gonogo_block = [];
gonogo_block.push(GNG_instr1);
gonogo_block.push(GNG_pract_procedure);
gonogo_block.push(GNG_instr2);
gonogo_block.push(GNG_exp_procedure);
gonogo_block.push(GNG_end_block);





