// Import and set up questionnaire labels
function populateQs(start, end, qs, qs_options){
    diff = end-start;
    var Qs = [];
    for (var i=0; i<=diff; i++) {
        Qs[i] = {
            prompt: "<p class='q_para'>" + qs[0][i+start] + '. ' + qs[1][i+start] + "</p>",
            name: qs[0][i+start],
            labels: qs_options,
            required: true,
            horizontal: true,};
    }
    return Qs
};

// AES
var AES_Qs1 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "aes_qs_pg1"
    },
    preamble: "<p class='q_title'>Please rate each of the following statements on a scale of 1 ('strongly agree') to 5 ('strongly disagree') regarding the breath-counting task you just completed. " +
        "Please do not leave any items blank</p>",
    questions: populateQs(1, 9, aes_csv, aes_options),
    scale_width: 500,
};
var AES_Qs2 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "aes_qs_pg2"
    },
    preamble: "<p class='q_title'>Please rate each of the following statements on a scale of 1 ('strongly agree') to 5 ('strongly disagree') regarding the breath-counting task you just completed. " +
        "Please do not leave any items blank</p>",
    questions: populateQs(10, 18, aes_csv, aes_options),
    scale_width: 500,
};
var AES_Qs3 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "aes_qs_pg3"
    },
    preamble: "<p class='q_title'>Please rate each of the following statements on a scale of 1 ('strongly agree') to 5 ('strongly disagree') regarding the breath-counting task you just completed. " +
        "Please do not leave any items blank</p>",
    questions: populateQs(19, 26, aes_csv, aes_options),
    scale_width: 500,
};

// FFMQ
var FFMQ_Qs1 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "ffmq_qs1"
    },
    preamble: "<p class='q_title'>The following statements inquire about your thoughts and feelings in a variety of situations. " +
        "For each item, indicate how well it describes your own opinion of what is generally true for you. " +
        "READ EACH ITEM CAREFULLY BEFORE RESPONDING. Answer as honestly as you can. Thank you.</p>",
    questions: populateQs(1, 8, FFMQ_csv, FFMQ_options),
    scale_width: 500,
};
var FFMQ_Qs2 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "ffmq_qs2"
    },
    preamble: "<p class='q_title'>The following statements inquire about your thoughts and feelings in a variety of situations. " +
        "For each item, indicate how well it describes your own opinion of what is generally true for you. " +
        "READ EACH ITEM CAREFULLY BEFORE RESPONDING. Answer as honestly as you can. Thank you.</p>",
    questions: populateQs(9, 16, FFMQ_csv, FFMQ_options),
    scale_width: 500,
};
var FFMQ_Qs3 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "ffmq_qs3"
    },
    preamble: "<p class='q_title'>The following statements inquire about your thoughts and feelings in a variety of situations. " +
        "For each item, indicate how well it describes your own opinion of what is generally true for you. " +
        "READ EACH ITEM CAREFULLY BEFORE RESPONDING. Answer as honestly as you can. Thank you.</p>",
    questions: populateQs(17, 24, FFMQ_csv, FFMQ_options),
    scale_width: 500,
};
var FFMQ_Qs4 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "ffmq_qs4"
    },
    preamble: "<p class='q_title'>The following statements inquire about your thoughts and feelings in a variety of situations. " +
        "For each item, indicate how well it describes your own opinion of what is generally true for you. " +
        "READ EACH ITEM CAREFULLY BEFORE RESPONDING. Answer as honestly as you can. Thank you.</p>",
    questions: populateQs(25, 32, FFMQ_csv, FFMQ_options),
    scale_width: 500,
};
var FFMQ_Qs5 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "ffmq_qs5"
    },
    preamble: "<p class='q_title'>The following statements inquire about your thoughts and feelings in a variety of situations. " +
        "For each item, indicate how well it describes your own opinion of what is generally true for you. " +
        "READ EACH ITEM CAREFULLY BEFORE RESPONDING. Answer as honestly as you can. Thank you.</p>",
    questions: populateQs(33, 39, FFMQ_csv, FFMQ_options),
    scale_width: 500,
};

// FADplus
var FADplus_Qs1 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "fadplus_qs1"
    },
    preamble: "<p class='q_title'>For each statement below, indicate how much you agree or disagree. </p>",
    questions: populateQs(1, 9, FADplus_csv, FADplus_options),
    scale_width: 500,
};
var FADplus_Qs2 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "fadplus_qs2"
    },
    preamble: "<p class='q_title'>For each statement below, indicate how much you agree or disagree. </p>",
    questions: populateQs(10, 18, FADplus_csv, FADplus_options),
    scale_width: 500,
};
var FADplus_Qs3 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "fadplus_qs3"
    },
    preamble: "<p class='q_title'>For each statement below, indicate how much you agree or disagree. </p>",
    questions: populateQs(19, 27, FADplus_csv, FADplus_options),
    scale_width: 500,
};

// PSS
var PSS_Qs1 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "pss_qs1"
    },
    preamble: "<p class='q_title'>The questions in this scale ask you about your feelings and thoughts during the last week. " +
        "In each case, you will be asked to indicate by circling how often you felt or thought a certain way.</p>",
    questions: populateQs(1, 10, PSS_csv, PSS_options),
    scale_width: 500,
};

// PANAS
var PANAS_Qs1 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "panas_qs1"
    },
    preamble:
        "<p class='q_title'>This scale consists of a number of words that describe different feelings and emotions. " +
        "Read each item and then mark the appropriate answer in the space next to that word." +
        "Indicate to what extent you GENERALLY feel this way, that is how you feel ON AVERAGE.</p>" +
        "<p>Indicate the extent you have felt this way over the past week.</p>",
    questions: populateQs(1, 10, PANAS_csv, PANAS_options),
    scale_width: 500,
};
var PANAS_Qs2 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "panas_qs2"
    },
    preamble:
        "<p class='q_title'>This scale consists of a number of words that describe different feelings and emotions. " +
        "Read each item and then mark the appropriate answer in the space next to that word." +
        "Indicate to what extent you GENERALLY feel this way, that is how you feel ON AVERAGE.</p>" +
        "<p>Indicate the extent you have felt this way over the past week.</p>",
    questions: populateQs(11, 20, PANAS_csv, PANAS_options),
    scale_width: 500,
};

// SMS
var SMS_Qs1 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "sms_qs1"
    },
    preamble:
        "<p class='q_title'>Below is a list of statements. " +
        "Please use the rating scale to indicate how well each statement describes your experiences in the past 20 minutes</p>",
    questions: populateQs(1, 10, SMS_csv, SMS_options),
    scale_width: 500,
};
var SMS_Qs2 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "sms_qs2"
    },
    preamble:
        "<p class='q_title'>Below is a list of statements. " +
        "Please use the rating scale to indicate how well each statement describes your experiences in the past 20 minutes</p>",
    questions: populateQs(11, 21, SMS_csv, SMS_options),
    scale_width: 500,
};

// MAIA-2
var MAIA_Qs1 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "maia_qs1"
    },
    preamble:
        "<p class='q_title'>Below you will find a list of statements. " +
        "Please indicate how often each statement applies to you generally in daily life.</p>",
    questions: populateQs(1, 10, MAIA_csv, MAIA_options),
    scale_width: 500,
};
var MAIA_Qs2 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "maia_qs2"
    },
    preamble:
        "<p class='q_title'>Below you will find a list of statements. " +
        "Please indicate how often each statement applies to you generally in daily life.</p>",
    questions: populateQs(11, 20, MAIA_csv, MAIA_options),
    scale_width: 500,
};
var MAIA_Qs3 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "maia_qs3"
    },
    preamble:
        "<p class='q_title'>Below you will find a list of statements. " +
        "Please indicate how often each statement applies to you generally in daily life.</p>",
    questions: populateQs(21, 30, MAIA_csv, MAIA_options),
    scale_width: 500,
};
var MAIA_Qs4 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "maia_qs4"
    },
    preamble:
        "<p class='q_title'>Below you will find a list of statements. " +
        "Please indicate how often each statement applies to you generally in daily life.</p>",
    questions: populateQs(31, 37, MAIA_csv, MAIA_options),
    scale_width: 500,
};


// Qualitative data
var post_BC_qs1 = {
    type: 'survey-text',
    data: {
        exp_id: "questionnaire",
        trial_id: "postbc1"
    },
    questions: [
        {
            prompt: "<p style='font-size:20px'>Please summarize what you were asked to do during the breath-counting task.</p>",
            rows: 5,
            columns: 90
        }
    ],
};
var post_BC_qs2 = {
    type: 'survey-text',
    data: {
        exp_id: "questionnaire",
        trial_id: "postbc2"
    },
    questions: [
        {
            prompt: "<p style='font-size 20px'>Please comment in detail on what you experienced during the 10 minutes breath-counting task. " +
                "Please note anything you noticed, regardless of how trivial you might think it is (e.g. I thought about…, I felt…, I noticed that…, after I noticed….).</p>",
            rows: 10, columns: 120}
    ],
};

// Set up timeline
var post_bc_block1 = [];
post_bc_block1.push(post_BC_qs1);
var post_bc_block2= [];
post_bc_block2.push(post_BC_qs2);

var aes_block = [];
aes_block.push(AES_Qs1);
aes_block.push(AES_Qs2);
aes_block.push(AES_Qs3);

var ffmq_block = [];
ffmq_block.push(FFMQ_Qs1);
ffmq_block.push(FFMQ_Qs2);
ffmq_block.push(FFMQ_Qs3);
ffmq_block.push(FFMQ_Qs4);
ffmq_block.push(FFMQ_Qs5);

var fadplus_block = [];
fadplus_block.push(FADplus_Qs1);
fadplus_block.push(FADplus_Qs2);
fadplus_block.push(FADplus_Qs3);

var pss_block = [];
pss_block.push(PSS_Qs1);

var panas_block = [];
panas_block.push(PANAS_Qs1);
panas_block.push(PANAS_Qs2);

var sms_block = [];
sms_block.push(SMS_Qs1);
sms_block.push(SMS_Qs2);

var maia_block = [];
maia_block.push(MAIA_Qs1);
maia_block.push(MAIA_Qs2);
maia_block.push(MAIA_Qs3);
maia_block.push(MAIA_Qs4);

// questionnaire_part.push({type: 'fullscreen', fullscreen_mode: false}); /* exit fullscreen mode */
