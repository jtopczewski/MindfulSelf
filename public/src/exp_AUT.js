/* ************************************ */
/* Define experimental variables */
/* ************************************ */

// Set task variables
AUT_trial_duration_minutes = 3;
AUT_trial_duration = AUT_trial_duration_minutes * 60 * 1000;

// Set instructions helpers
var aut_instrhelper = {};

aut_instrhelper.page1 =
    "<p>In this task, we would like you to list as many possible uses for a common item such as a brick, a paperclip, or a newspaper. " +
    "<br>Each object cue has a common use. " +
    "Your task will be to list as many other uses for the object cue as you can. " +
    "<br>Focus on generating unusual and creative uses for the object cue. </p>" +

    "<p>For example, please name all the possible uses of a brick. You might respond: </p>" +
    "<p>• a paperweight" +
    "<br>• a doorstop" +
    "<br>• to throw threw a window" +
    "<br>• to use as a weapon" +
    "<br>• to hit my sister on the head with" +
    "<br>• a mock coffin at a Barbie funeral</p>";

aut_instrhelper.page2 =
    "<p>You will be presented with 3 object cues one at a time. " +
    "<p>For each cue, you have up to 5 minutes to write down any use you think of." +
    "<br>After you typed each use, please continue to the next line." +
    "<p>When you feel like you are done with the cue, press continue to go on to the next one.</p>";

aut_instrhelper.end_block = "<p class='continue_next'>Great job and thank you! You are now finished with this part of the study." +
    "<br>We will proceed with some questionnaires in the next few pages.</p>" +
    "<p class='continue_next'>Press <strong>ENTER</strong> to continue.</p>";

var aut_instr = {
    type: 'instructions',
    data: {
        exp_id: "aut-task",
        trial_id: "instructions"
    },
    pages: [
        // Page 1
        aut_instrhelper.page1,
        // Page 2
        aut_instrhelper.page2,
    ],
    show_clickable_nav: true,
    show_page_number: true
};


/* ************************************ */
/* Set up jsPsych blocks */
/* ************************************ */

var aut_1 = {
    type: "survey-text",
    data: {
        exp_id: "aut-task",
        trial_id: "aut_1"
    },
    questions: [{
        prompt: "<p class='AUTstimHeader'>Please name all the possible uses of a <span class='AUTstim'>garden hose</span>.</p>",
        rows: 10,
        columns: 90
        }],
    trial_duration: AUT_trial_duration
};
var aut_2 = {
    type: "survey-text",
    data: {
        exp_id: "aut-task",
        trial_id: "aut_2"
    },
    questions: [{
        prompt: "<p class='AUTstimHeader'>Please name all the possible uses of a <span  class='AUTstim'>wallet</span>.</p>",
        rows: 10,
        columns: 90
        }],
    trial_duration: AUT_trial_duration
};
var aut_3 = {
    type: "survey-text",
    data: {
        exp_id: "aut-task",
        trial_id: "aut_3"
    },
    questions: [{
        prompt: "<p class='AUTstimHeader'>Please name all the possible uses of a <span  class='AUTstim'>newspaper</span>.</p>",
        rows: 10,
        columns: 90
    }],
    trial_duration: AUT_trial_duration
};


// define end experiment
var aut_end_block = {
    type: "html-keyboard-response",
    data: {
        exp_id: "aut-task",
        trial_id: "end_aut"
    },
    stimulus: aut_instrhelper.end_block,
    choices: [13]
};

var aut_block = [];
aut_block.push(aut_instr);
aut_block.push(aut_1);
aut_block.push(aut_2);
aut_block.push(aut_3);
aut_block.push(aut_end_block);
