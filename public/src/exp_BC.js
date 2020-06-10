/* ************************************ */
/* Define experimental variables */
/* ************************************ */

// task variables
var bc_stim = 'Breath counting task in progress...<br>Keep your eyes closed';
var runTime = 0;  // ms
var runTime2 = 0;  // ms
var taskTime = 5 * 60; // 5 minutes in seconds

// Set instructions helpers
var bc_instrhelper = {};


// Common instructions
bc_instrhelper.instr1_pg1 =
    "<p>In this task, we would like you to be aware of your breath. </p>" +
    "<p>Please read and then follow the demonstration below:" +
    "<br>Close your eyes, count to three breaths (in and out is one breath) and then open your eyes.</p> " +
    "<p>Use this same technique when counting your breaths in this task. There's no need to control the breath. Just breathe normally. </p>";

bc_instrhelper.instr1_pg4 =
    "<p>We suggest you sit in an upright, relaxed posture that feels comfortable. </p>" +
    "<p>Place the keyboard so that you can comfortably rest your fingers of your dominant hand over the down arrow and right arrow keys. </p>" +
    "<p>The task will last about 10 minutes separated into 5-minutes block. " +
    "<br>Your eyes will be closed, so a bell will sound to end the task; then you can open your eyes. </p>" +
    "<p><strong>Ensure that your computer's volume is set high enough for you to hear the end tone.</strong></p>" +
    "<p>Click the button below to test the volume. Adjust the volume until it is not too loud and comfortable for you.</p>" +
    "<input type='button' value='TEST VOLUME' onclick='beep()'>" +
    "<p> Once you have adjusted your volume, you can continue";

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

var bc1_first_block = {
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
        trial_id: "breath_counting1"
    },
    stimulus: "",
    choices: [40, 39],     // 40 = down arrow, 39 = right arrow
    timing_response: -1,   // until response
    response_ends_trial: true,
    on_finish: function() {
        jsPsych.data.addDataToLastTrial({'addingOnTrial': 'added!'})
    }
};
var bc1_block = {
    type: 'html-keyboard-response',
    stimulus: bc_stim,
    is_html: true,
    data: {
        exp_id: "breath-counting-task",
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

var bc_cont_block = {
    type: "html-keyboard-response",
    data: {
        exp_id: "breath-counting-task",
        trial_id: "cont_bc"
    },
    stimulus: bc_instrhelper.continue_next,
    choices: [13]
};

var bc2_first_block = {
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
        trial_id: "breath_counting2"
    },
    stimulus: "",
    choices: [40, 39],     // 40 = down arrow, 39 = right arrow
    timing_response: -1,   // until response
    response_ends_trial: true,
    on_finish: function() {
        jsPsych.data.addDataToLastTrial({'addingOnTrial': 'added!'})
    }
};
var bc2_block = {
    type: 'html-keyboard-response',
    stimulus: bc_stim,
    is_html: true,
    data: {
        exp_id: "breath-counting-task",
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

var bc_exp = [];
bc_exp.push(welcome_block);
bc_exp.push(bc_instr);
bc_exp.push(bc1_first_block);
bc_exp.push(bc1_node);
bc_exp.push(bc_beep_block);
bc_exp.push(bc_cont_block);
bc_exp.push(bc2_first_block);
bc_exp.push(bc2_node);
bc_exp.push(bc_beep_block);
bc_exp.push(bc_end_block);