/* ************************************ */
/* Define experimental variables */
/* ************************************ */

// task variables
var stim = '';
var runTime = 0;  // ms
var runTime2 = 0;  // ms
var taskTime = 5; // 15 minutes in seconds

// Set instructions helpers
var instructionshelper = {};

instructionshelper.task_start = "<p class='bc_start'>Place your attention on the breath.</p>" +
    "<p class='bc_start'>Press the down arrow after your first exhale as you count 'one'', " +
    "then close your eyes and continue counting breaths and pressing the correct arrow key (1-8 = down, 9 = right).</p>";

instructionshelper.continue_next = "<p class='continue_next'>Great job and thank you! You are now finished with this part of the study.</p>" +
    "<p class='continue_next'>Press <strong>ENTER</strong> to continue.</p>";

/* ************************************ */
/* Welcome and instructions */
/* ************************************ */

// define welcome message trial
var welcome_block = {
    type: "html-button-response",
    data: {
        exp_id: "breath-counting-task",
        trial_id: "welcome"
    },
    choices: ['Click here to continue'],
    on_trial_start: function() { setTimeout(function() {setDisplay("jspsych-btn","")}, 1000)},
    stimulus: "Welcome to the experiment.",
};



var instructions = {
    type: 'instructions',
    data: {
        exp_id: "breath-counting-task",
        trial_id: "instructions"
    },
    pages: [
        "<p>In this task, we would like you to be aware of your breath. </p>" +
        "<p>Close your eyes and notice whether you are breathing in or out, until you have counted three breaths (in and out is one breath), then open your eyes. </p> " +
        "<p>Use this same technique when counting your breaths in this task. There's no need to control the breath. Just breathe normally. </p>",
        "<p>At some point, you may notice your attention has wandered from the breath. That's okay. Just gently place it back on the breath. </p>" +
        "<p>To help you stay with the breath, you'll use a small part of your attention to silently count breaths from 1 to 9, again and again. " +
        "<strong><em>An in and out breath together make one count.</em></strong></p>" +
        "<p>Say the count softly in your mind so it only gets a little attention while most of the attention is on feeling the breath. </p>",
        "<p>Press the <em><strong>down arrow</strong> once on <strong>breaths 1-8</strong></em>, and the <em><strong>right arrow</strong> once on <strong>breath 9</strong>.</em></p> " +
        "<p>This means you'll be pressing a button once with each breath. Each time you reach breath 9, start counting again at 1.</p>" +
        "<p><div class='table'><table align='center'><tr><td>Breath number</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>1</td><td>2</td><td>etc.</td></tr>" +
        "<tr><td>Press this key once</td><td>&darr;</td><td>&darr;</td><td>&darr;</td><td>&darr;</td><td>&darr;</td><td>&darr;</td><td>&darr;</td><td>&darr;</td><td>&rarr;</td><td>&darr;</td><td>&darr;</td><td>etc.</td></tr></table></div></p>",
        "<p>We suggest you sit in an upright, relaxed posture that feels comfortable. </p>" +
        "<p>Place the keyboard so that you can comfortably rest the index and middle fingers of your dominant hand over the down arrow and right arrow keys. </p>" +
        "<p>The task will last about 10 minutes separated into 5-minutes block. Your eyes will be closed, so a tone will sound to end the task. </p>" +
        "<p><strong>Ensure that your computer's volume is set high enough for you to hear the end tone.</strong></p>" +
        "<p>Click the button below to test the volume. Adjust the volume until it is not too loud and comfortable for you.</p>" +
        "<input type='button' value='TEST VOLUME' onclick='beep()'>" +
        "<p> Once you have adjusted your volume, you can continue"],
    show_clickable_nav: true,
    show_page_number: true
};


/* ************************************ */
/* Set up jsPsych blocks */
/* ************************************ */

var bc1_first_block = {
    type: "html-keyboard-response",
    data: {
        trial_id: "breath_counting1"
    },
    stimulus: instructionshelper.task_start,
    choices: [40, 39],     // 40 = down arrow, 39 = right arrow
    timing_response: -1,   // until response
    response_ends_trial: true,
    on_finish: function() {
        jsPsych.data.addDataToLastTrial({'addingOnTrial': 'added!'})
    }
};
var bc1_block = {
    type: 'html-keyboard-response',
    stimulus: stim,
    is_html: true,
    data: {
        trial_id: "breath_counting1"
    },
    choices: [40, 39],     // 40 = down arrow, 39 = right arrow
    timing_response: -1,   // until response
    response_ends_trial: true,
    post_trial_gap: 0,
    on_finish: function() {
        jsPsych.data.addDataToLastTrial({'addingOnTrial': 'added!'})
    }
};
var bc1_node = {
    timeline: [bc1_block],
    /* stopping criteria */
    loop_function: function(data) {
        for (var i = 0; i < 1; i++) {
            if ((data.values()[i].trial_type == 'html-keyboard-response') && (data.values()[i].rt != -1)) {
                rt = data.values()[i].rt;
                runTime = runTime + rt;
            }
        }
        if (runTime <= taskTime * 1000) {
            return true
        } else if (runTime > taskTime * 1000) {
            return false
        }
    }
};

var bc2_first_block = {
    type: "html-keyboard-response",
    data: {
        trial_id: "breath_counting2"
    },
    stimulus: instructionshelper.task_start,
    choices: [40, 39],     // 40 = down arrow, 39 = right arrow
    timing_response: -1,   // until response
    response_ends_trial: true,
    on_finish: function() {
        jsPsych.data.addDataToLastTrial({'addingOnTrial': 'added!'})
    }
};
var bc2_block = {
    type: 'html-keyboard-response',
    stimulus: stim,
    is_html: true,
    data: {
        trial_id: "breath_counting2"
    },
    choices: [40, 39],     // 40 = down arrow, 39 = right arrow
    timing_response: -1,   // until response
    response_ends_trial: true,
    post_trial_gap: 0,
    on_finish: function() {
        jsPsych.data.addDataToLastTrial({'addingOnTrial': 'added!'})
    }
};
var bc2_node = {
    timeline: [bc2_block],
    /* stopping criteria */
    loop_function: function(data) {
        for (var j = 0; j < 1; j++) {
            if ((data.values()[j].trial_type == 'html-keyboard-response') && (data.values()[j].rt != -1)) {
                rt = data.values()[j].rt;
                runTime2 = runTime2 + rt;
            }
        }
        if (runTime2 <= taskTime * 1000) {
            return true
        } else if (runTime2 > taskTime * 1000) {
            return false
        }
    }
};

// define bell sound
var beep = function() {
    var snd = new Audio("../sound/bell.wav");
    snd.play();
};

var beep_block = {
    type: 'call-function',
    func: beep
};

// define end experiment
var end_block = {
    type: "html-keyboard-response",
    data: {
        exp_id: "breath-counting-task",
        trial_id: "end_bc"
    },
    stimulus: instructionshelper.continue_next,
    choices: [13]
};
// Set up timeline
// breathcounting_experiment.push({type: 'fullscreen', fullscreen_mode: true}); /* enter fullscreen mode */
var breathcounting_experiment = [];
breathcounting_experiment.push(welcome_block);
breathcounting_experiment.push(instructions);
breathcounting_experiment.push(bc1_first_block);
breathcounting_experiment.push(bc1_node);
breathcounting_experiment.push(beep_block);
breathcounting_experiment.push(end_block);
breathcounting_experiment.push(bc2_first_block);
breathcounting_experiment.push(bc2_node);
breathcounting_experiment.push(beep_block);
breathcounting_experiment.push(end_block);
// breathcounting_experiment.push({type: 'fullscreen', fullscreen_mode: false }); /* exit fullscreen mode */

function startExperiment() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: true,
        on_interaction_data_update: function(data) {
            var trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [...breathcounting_experiment,...questionnaire_part],
        on_finish: function() {
            $.ajax({
                type: "POST",
                url: "/experiment-data",
                data: JSON.stringify(jsPsych.data.get().values()),
                contentType: "application/json"
            })
                .done(function() {
                    window.location.href = "finish";
                })
                .fail(function() {
                    alert("A problem occurred while writing to the database. Please contact the researcher for more information.")
                    window.location.href = "/";
                });

            // var csv = jsPsych.data.get().csv();
            // var filename = jsPsych.data.get().select('ID_DATE').values[0];
            // window.save2Dropbox(csv, filename)
        }
    });
}