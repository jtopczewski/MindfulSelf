/* ************************************ */
/* Define experimental variables */
/* ************************************ */

// function for countdown timer
var countdowntimer = function() {
    document.getElementById("countdown").value = "Start counting your pulse now";
    setTimeout("alert('You can stop counting now')", 30000);
};


// task variables
var bc_stim = 'Breath counting task in progress...<br>Keep your eyes closed until you hear the bell';
var runTime1 = 0;  // ms
var runTime2 = 0;  // ms
var runTime3 = 0;  // ms
var runTime4 = 0;  // ms
var taskTime = 5 * 60; // 5 minutes in seconds

// Set instructions helpers
var bc_instrhelper = {};

// Common instructions
bc_instrhelper.instr1_pg1 =
    "<p>In this task, we would like you to be aware of your breath. </p>" +
    "<p>Please read and then follow the demonstration below:" +
    "<br>Close your eyes, count to three breaths (in and out is one breath) and then open your eyes.</p> " +
    "<p>Use this same technique when counting your breaths in this task. There's no need to control the breath. Just breathe normally. </p>";

// Heart Rate instructions
bc_instrhelper.hr_pre =
    "<p>Before we begin, we would like to measure your heart rate." +
    "<p><img src='../img/heartrate.png' style='width:300px;height:150px;'></p>" +
    "<br>1. Take your index and middle fingers and place them on the side of your neck between the windpipe and the large muscle of your neck. " +
    "<br>2. Press lightly in the hollow area until you locate your pulse.</p>" +
    "<p>We will take your pulse for 30 seconds. Once you are able to locate your pulse, press the button to start counting your pulse." +
    " Once the timer stops, please write down the count in the box below.</p>" +
    "<input type='button' name='clickMe' id='countdown' value='Click to start' onclick='countdowntimer()'/>"

bc_instrhelper.hr_post =
    "<p>Once again, we would like to measure your heart rate." +
    "<br><img src='../img/heartrate.png' style='width:630px;height:315px;'>" +
    "<br>1. Take your index and middle fingers and place them on the side of your neck between the windpipe and the large muscle of your neck. " +
    "<br>2. Press lightly in the hollow area until you locate your pulse.</p>" +
    "<p>We will take your pulse for 30 seconds. Once you are able to locate your pulse, press the button to start counting your pulse." +
    "Once the timer stops, please write down the count in the box below.</p>" +
    "<input type='button' name='clickMe' id='countdown' value='Click to start' onclick='countdowntimer()'/>"

// Breath-counting condition instructions
bc_instrhelper.BCinstr1_pg2 =
    "<p>At some point, you may notice your attention has wandered from the breath. That's okay. Just gently place your attention back on the breath. </p>" +
    "<p>To help you stay with the breath, you'll use a small part of your attention to silently count breaths from 1 to 9, again and again. " +
    "<strong><em>An in and out breath together make one count.</em></strong></p>" +
    "<p>Say the count softly in your mind so it only gets a little attention while most of the attention is on feeling the breath. </p>";
bc_instrhelper.BCinstr1_pg3 =
    "<p>Press the <em><strong>down arrow</strong> once on <strong>breaths 1-8</strong></em>, and the <em><strong>right arrow</strong> once on <strong>breath 9</strong>.</em></p> " +
    "<p>This means you'll be pressing a button once with each breath. Each time you reach breath 9, start counting again at 1.</p>" +
    "<p><div class='table'><table align='center'><tr><td>Breath number</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>1</td><td>2</td><td>etc.</td></tr>" +
    "<tr><td>Press this key once</td><td>&darr;</td><td>&darr;</td><td>&darr;</td><td>&darr;</td><td>&darr;</td><td>&darr;</td><td>&darr;</td><td>&darr;</td><td>&rarr;</td><td>&darr;</td><td>&darr;</td><td>etc.</td></tr></table></div></p>" +
    "<p>If you forgot which breath number you are at, you can reset the count from 1.</p>";


// Mindfulness condition instructions
bc_instrhelper.MFinstr1_pg2 =
    "<p>At some point, you may notice your attention has wandered from the breath. That's okay. Just gently place your attention back on the breath. </p>" +
    "<strong><em>An in and out breath together make one count.</em></strong></p>";
bc_instrhelper.MFinstr1_pg3 =
    "<p>Additionally, to ensure you are following the task instructions, we would like you to complete a simple task at the same time.</p>" +
    "<p>Press the <em><strong>down arrow</strong> once on <strong>every breath</strong></p> ";

bc_instrhelper.instr1_pg4 =
    "<p>We suggest you sit in an upright, relaxed posture that feels comfortable. </p>" +
    "<p>Place the keyboard so that you can comfortably rest your fingers of your dominant hand over the down arrow and right arrow keys. </p>" +
    "<p>The task will last about 20 minutes separated into 5-minutes block. " +
    "<br>Your eyes will be closed, so a bell will sound to end the task; then you can open your eyes. </p>" +
    "<p><strong>Ensure that your computer's volume is set high enough for you to hear the end tone.</strong></p>" +
    "<p>Click the button below to test the volume. Adjust the volume until it is not too loud and comfortable for you.</p>" +
    "<input type='button' value='TEST VOLUME' onclick='beep()'>" +
    "<p>Once you have adjusted your volume, you can continue";

// start task
bc_instrhelper.BCtask_start = "<p class='bc_start'>Close your eyes and place your attention on the breath.</p>" +
    "<p class='bc_start'>Press the down arrow after your first exhale as you count 'one', " +
    "then close your eyes and continue counting breaths and pressing the correct arrow key (1-8 = down, 9 = right)." +
    "<br>When you hear the bell, you can open your eyes.</p>" +
    "<p class='bc_start'>The experiment will start the moment you press the down button.</p>";

bc_instrhelper.MFtask_start = "<p class='bc_start'>Close your eyes and place your attention on the breath.</p>" +
    "<p class='bc_start'>Press the down arrow after your first exhale, " +
    "then close your eyes and continue counting breaths and pressing the down arrow key every time you exhale." +
    "<br>When you hear the bell, you can open your eyes.</p>" +
    "<p class='bc_start'>The experiment will start the moment you press the down button.</p>";


bc_instrhelper.continue_next = "<p class='continue_next'>Press <strong>ENTER</strong> to continue.</p>";

bc_instrhelper.end_block = "<p class='continue_next'>Great job and thank you! You are now finished with this part of the study." +
    "<br>We will proceed with some questionnaires in the next few pages.</p>" +
    "<p class='continue_next'>Press <strong>ENTER</strong> to continue.</p>";

var bc_instr = {
    on_start: function (trial){
        var bc_condition = jsPsych.data.get().values()[0].bc_condition;
        if (bc_condition == "BC") {
            trial.pages = [
            bc_instrhelper.instr1_pg1,
            bc_instrhelper.BCinstr1_pg2,
            bc_instrhelper.BCinstr1_pg3,
            bc_instrhelper.instr1_pg4,
            ]
        } else {
            trial.pages = [
                bc_instrhelper.instr1_pg1,
                bc_instrhelper.MFinstr1_pg2,
                bc_instrhelper.MFinstr1_pg3,
                bc_instrhelper.instr1_pg4,
            ]
        }
    },
    type: 'instructions',
    data: {
        exp_id: "breath-counting-task",
        trial_id: "instructions"
    },
    pages: ["", ""],
    show_clickable_nav: true,
    show_page_number: true
};


/* ************************************ */
/* Set up jsPsych blocks */
/* ************************************ */

// Heart Rate block
var hr_instr_pre = {
    type: 'survey-text',
    data: {
        exp_id: "breath-counting-task",
        trial_id: "hr-pre"
    },
    preamble: bc_instrhelper.hr_pre,
    questions: [{prompt: "", placeholder: 'Heart Rate', name: 'HeartRate'}]
};
var hr_instr_post = {
    type: 'survey-text',
    data: {
        exp_id: "breath-counting-task",
        trial_id: "hr-post"
    },
    preamble: bc_instrhelper.hr_post,
    questions: [{prompt: "", placeholder: 'Heart Rate', name: 'HeartRate'}]
};


var bc_cont_block = {
    type: "html-keyboard-response",
    data: {
        exp_id: "breath-counting-task",
        trial_id: "cont_bc"
    },
    stimulus: bc_instrhelper.continue_next,
    choices: [13]
};

// Functions to create Block variables
function firstblock(blockid){

    var first_block = {
        on_start: function(trial) {
            var bc_condition = jsPsych.data.get().values()[0].bc_condition;
            if (bc_condition == "BC") {
                trial.stimulus = bc_instrhelper.BCtask_start
            } else {
                trial.stimulus = bc_instrhelper.MFtask_start
            }
        },
        type: "html-keyboard-response",
        data: {
            exp_id: "breath-counting-task",
            trial_id: blockid
        },
        stimulus: "",
        choices: [40, 39],     // 40 = down arrow, 39 = right arrow
        timing_response: -1,   // until response
        response_ends_trial: true,
        on_finish: function() {
            jsPsych.data.addDataToLastTrial({'addingOnTrial': 'added!'})
        }
    };

    return first_block
} //"breath_counting1"
function continueblock(blockid){
    var continueblock = {
        type: 'html-keyboard-response',
        stimulus: bc_stim,
        is_html: true,
        data: {
            exp_id: "breath-counting-task",
            trial_id: blockid
        },
        choices: [40, 39],     // 40 = down arrow, 39 = right arrow
        timing_response: -1,   // until response
        response_ends_trial: true,
        post_trial_gap: 0,
        on_finish: function() {
            jsPsych.data.addDataToLastTrial({'addingOnTrial': 'added!'})
        }
    };

    return continueblock

}

// Block 1
var bc1_first_block = firstblock("breath_counting1");
var bc1_block = continueblock("breath_counting1");
var bc1_node = {
    timeline: [bc1_block],
    /* stopping criteria */
    loop_function: function(data) {
        for (var j = 0; j < 1; j++) {
            if ((data.values()[j].trial_type == 'html-keyboard-response') && (data.values()[j].rt != -1)) {
                rt = data.values()[j].rt;
                runTime1 = runTime1 + rt;
            }
        }
        if (runTime1 <= taskTime * 1000) {
            return true
        } else if (runTime1 > taskTime * 1000) {
            return false
        }
    }
};

// Block 2
var bc2_first_block = firstblock("breath_counting2");
var bc2_block = continueblock("breath_counting2");
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

// Block 3
var bc3_first_block = firstblock("breath_counting3");
var bc3_block = continueblock("breath_counting3");
var bc3_node = {
    timeline: [bc3_block],
    /* stopping criteria */
    loop_function: function(data) {
        for (var j = 0; j < 1; j++) {
            if ((data.values()[j].trial_type == 'html-keyboard-response') && (data.values()[j].rt != -1)) {
                rt = data.values()[j].rt;
                runTime3 = runTime3 + rt;
            }
        }
        if (runTime3 <= taskTime * 1000) {
            return true
        } else if (runTime3 > taskTime * 1000) {
            return false
        }
    }
};

// Block 4
var bc4_first_block = firstblock("breath_counting4");
var bc4_block = continueblock("breath_counting4");
var bc4_node = {
    timeline: [bc4_block],
    /* stopping criteria */
    loop_function: function(data) {
        for (var j = 0; j < 1; j++) {
            if ((data.values()[j].trial_type == 'html-keyboard-response') && (data.values()[j].rt != -1)) {
                rt = data.values()[j].rt;
                runTime4 = runTime4 + rt;
            }
        }
        if (runTime4 <= taskTime * 1000) {
            return true
        } else if (runTime4 > taskTime * 1000) {
            return false
        }
    }
};


// define bell sound
var beep = function() {
    var snd = new Audio("../sound/bell.wav");
    snd.play();
};
var bc_beep_block = {
    type: 'call-function',
    data: {
        exp_id: "breath-counting-task",
        trial_id: "beep"
    },
    func: beep
};

// define end experiment
var bc_end_block = {
    type: "html-keyboard-response",
    data: {
        exp_id: "breath-counting-task",
        trial_id: "end_bc"
    },
    stimulus: bc_instrhelper.end_block,
    choices: [13]
};

// Block 1
var bc_block1 = [];
bc_block1.push(hr_instr_pre);
bc_block1.push(bc_instr);
bc_block1.push(bc1_first_block);
bc_block1.push(bc1_node);
bc_block1.push(bc_beep_block);
bc_block1.push(bc_cont_block);

// Block 2
var bc_block2 = [];
bc_block2.push(bc2_first_block);
bc_block2.push(bc2_node);
bc_block2.push(bc_beep_block);
bc_block2.push(bc_cont_block);

// Block 3
var bc_block3 = [];
bc_block3.push(bc3_first_block);
bc_block3.push(bc3_node);
bc_block3.push(bc_beep_block);
bc_block3.push(bc_cont_block);

// Block 4
var bc_block4 = [];
bc_block4.push(bc4_first_block);
bc_block4.push(bc4_node);
bc_block4.push(bc_beep_block);

// End block
bc_block4.push(hr_instr_post);
bc_block4.push(bc_end_block);

bc_block = [...bc_block1, ...bc_block2, ...bc_block3, ...bc_block4];