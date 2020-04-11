// Import and set up questionnaire labels
var AES_Qs1 = {
    type: 'survey-likert',
    data: {
        trial_id: "aes_qs_pg1"
    },
    preamble: "<p class='q_title'>Please rate each of the following statements on a scale of 1 ('strongly agree') to 5 ('strongly disagree'). Please do not leave any items blank</p>",
    questions: [
        {prompt: "<p class='q_para'>" + aes_csv[0][1] + '. ' + aes_csv[1][1] + "</p>", name: aes_csv[0][1], labels: aes_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + aes_csv[0][2] + '. ' + aes_csv[1][2] + "</p>", name: aes_csv[0][2], labels: aes_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + aes_csv[0][3] + '. ' + aes_csv[1][3] + "</p>", name: aes_csv[0][3], labels: aes_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + aes_csv[0][4] + '. ' + aes_csv[1][4] + "</p>", name: aes_csv[0][4], labels: aes_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + aes_csv[0][5] + '. ' + aes_csv[1][5] + "</p>", name: aes_csv[0][5], labels: aes_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + aes_csv[0][6] + '. ' + aes_csv[1][6] + "</p>", name: aes_csv[0][6], labels: aes_options, required: true, horizontal: true,}
    ],
    scale_width: 500,
};

var AES_Qs2 = {
    type: 'survey-likert',
    data: {
        trial_id: "aes_qs_pg2"
    },
    preamble: "<p class='q_title'>Please rate each of the following statements on a scale of 1 ('strongly agree') to 5 ('strongly disagree'). Please do not leave any items blank</p>",
    questions: [
        {prompt: "<p class='q_para'>" + aes_csv[0][7] + '. ' + aes_csv[1][7] + "</p>", name: aes_csv[0][7], labels: aes_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + aes_csv[0][8] + '. ' + aes_csv[1][8] + "</p>", name: aes_csv[0][8], labels: aes_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + aes_csv[0][9] + '. ' + aes_csv[1][9] + "</p>", name: aes_csv[0][9], labels: aes_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + aes_csv[0][10] + '. ' + aes_csv[1][10] + "</p>", name: aes_csv[0][10], labels: aes_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + aes_csv[0][11] + '. ' + aes_csv[1][11] + "</p>", name: aes_csv[0][11], labels: aes_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + aes_csv[0][12] + '. ' + aes_csv[1][12] + "</p>", name: aes_csv[0][12], labels: aes_options, required: true, horizontal: true,}
    ],
    scale_width: 500,
};

var AES_Qs3 = {
    type: 'survey-likert',
    data: {
        trial_id: "aes_qs_pg3"
    },
    preamble: "<p class='q_title'>Please rate each of the following statements on a scale of 1 ('strongly agree') to 5 ('strongly disagree'). Please do not leave any items blank</p>",
    questions: [
        {prompt: "<p class='q_para'>" + aes_csv[0][13] + '. ' + aes_csv[1][13] + "</p>", name: aes_csv[0][13], labels: aes_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + aes_csv[0][14] + '. ' + aes_csv[1][14] + "</p>", name: aes_csv[0][14], labels: aes_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + aes_csv[0][15] + '. ' + aes_csv[1][15] + "</p>", name: aes_csv[0][15], labels: aes_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + aes_csv[0][16] + '. ' + aes_csv[1][16] + "</p>", name: aes_csv[0][16], labels: aes_options, required: true, horizontal: true,}
    ],
    scale_width: 500,
};

var FFMQ_Qs1 = {
    type: 'survey-likert',
    data: {
        trial_id: "ffmq_qs1"
    },
    preamble: "<p class='q_title'>The following statements inquire about your thoughts and feelings in a variety of situations. " +
        "For each item, indicate how well it describes your own opinion of what is generally true for you. " +
        "READ EACH ITEM CAREFULLY BEFORE RESPONDING. Answer as honestly as you can. Thank you.</p>",
    questions: [
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][1] + '. ' + FFMQ_csv[1][1] + "</p>", name: FFMQ_csv[0][1], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][2] + '. ' + FFMQ_csv[1][2] + "</p>", name: FFMQ_csv[0][2], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][3] + '. ' + FFMQ_csv[1][3] + "</p>", name: FFMQ_csv[0][3], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][4] + '. ' + FFMQ_csv[1][4] + "</p>", name: FFMQ_csv[0][4], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][5] + '. ' + FFMQ_csv[1][5] + "</p>", name: FFMQ_csv[0][5], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][6] + '. ' + FFMQ_csv[1][6] + "</p>", name: FFMQ_csv[0][6], labels: FFMQ_options, required: true, horizontal: true,},
        ],
    scale_width: 500,
};

var FFMQ_Qs2 = {
    type: 'survey-likert',
    data: {
        trial_id: "ffmq_qs2"
    },
    preamble: "<p class='q_title'>The following statements inquire about your thoughts and feelings in a variety of situations. " +
        "For each item, indicate how well it describes your own opinion of what is generally true for you. " +
        "READ EACH ITEM CAREFULLY BEFORE RESPONDING. Answer as honestly as you can. Thank you.</p>",
    questions: [
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][7] + '. ' + FFMQ_csv[1][7] + "</p>", name: FFMQ_csv[0][7], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][8] + '. ' + FFMQ_csv[1][8] + "</p>", name: FFMQ_csv[0][8], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][9] + '. ' + FFMQ_csv[1][9] + "</p>", name: FFMQ_csv[0][9], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][10] + '. ' + FFMQ_csv[1][10] + "</p>", name: FFMQ_csv[0][10], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][11] + '. ' + FFMQ_csv[1][11] + "</p>", name: FFMQ_csv[0][11], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][12] + '. ' + FFMQ_csv[1][12] + "</p>", name: FFMQ_csv[0][12], labels: FFMQ_options, required: true, horizontal: true,},
    ],
    scale_width: 500,
};

var FFMQ_Qs3 = {
    type: 'survey-likert',
    data: {
        trial_id: "ffmq_qs3"
    },
    preamble: "<p class='q_title'>The following statements inquire about your thoughts and feelings in a variety of situations. " +
        "For each item, indicate how well it describes your own opinion of what is generally true for you. " +
        "READ EACH ITEM CAREFULLY BEFORE RESPONDING. Answer as honestly as you can. Thank you.</p>",
    questions: [
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][13] + '. ' + FFMQ_csv[1][13] + "</p>", name: FFMQ_csv[0][13], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][14] + '. ' + FFMQ_csv[1][14] + "</p>", name: FFMQ_csv[0][14], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][15] + '. ' + FFMQ_csv[1][15] + "</p>", name: FFMQ_csv[0][15], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][16] + '. ' + FFMQ_csv[1][16] + "</p>", name: FFMQ_csv[0][16], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][17] + '. ' + FFMQ_csv[1][17] + "</p>", name: FFMQ_csv[0][17], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][18] + '. ' + FFMQ_csv[1][18] + "</p>", name: FFMQ_csv[0][18], labels: FFMQ_options, required: true, horizontal: true,},
    ],
    scale_width: 500,
};

var FFMQ_Qs4 = {
    type: 'survey-likert',
    data: {
        trial_id: "ffmq_qs4"
    },
    preamble: "<p class='q_title'>The following statements inquire about your thoughts and feelings in a variety of situations. " +
        "For each item, indicate how well it describes your own opinion of what is generally true for you. " +
        "READ EACH ITEM CAREFULLY BEFORE RESPONDING. Answer as honestly as you can. Thank you.</p>",
    questions: [
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][19] + '. ' + FFMQ_csv[1][19] + "</p>", name: FFMQ_csv[0][19], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][20] + '. ' + FFMQ_csv[1][20] + "</p>", name: FFMQ_csv[0][20], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][21] + '. ' + FFMQ_csv[1][21] + "</p>", name: FFMQ_csv[0][21], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][22] + '. ' + FFMQ_csv[1][22] + "</p>", name: FFMQ_csv[0][22], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][23] + '. ' + FFMQ_csv[1][23] + "</p>", name: FFMQ_csv[0][23], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][24] + '. ' + FFMQ_csv[1][24] + "</p>", name: FFMQ_csv[0][24], labels: FFMQ_options, required: true, horizontal: true,},
    ],
    scale_width: 500,
};

var FFMQ_Qs5 = {
    type: 'survey-likert',
    data: {
        trial_id: "ffmq_qs5"
    },
    preamble: "<p class='q_title'>The following statements inquire about your thoughts and feelings in a variety of situations. " +
        "For each item, indicate how well it describes your own opinion of what is generally true for you. " +
        "READ EACH ITEM CAREFULLY BEFORE RESPONDING. Answer as honestly as you can. Thank you.</p>",
    questions: [
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][25] + '. ' + FFMQ_csv[1][25] + "</p>", name: FFMQ_csv[0][25], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][26] + '. ' + FFMQ_csv[1][26] + "</p>", name: FFMQ_csv[0][26], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][27] + '. ' + FFMQ_csv[1][27] + "</p>", name: FFMQ_csv[0][27], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][28] + '. ' + FFMQ_csv[1][28] + "</p>", name: FFMQ_csv[0][28], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][29] + '. ' + FFMQ_csv[1][29] + "</p>", name: FFMQ_csv[0][29], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][30] + '. ' + FFMQ_csv[1][30] + "</p>", name: FFMQ_csv[0][30], labels: FFMQ_options, required: true, horizontal: true,},
    ],
    scale_width: 500,
};

var FFMQ_Qs6 = {
    type: 'survey-likert',
    data: {
        trial_id: "ffmq_qs6"
    },
    preamble: "<p class='q_title'>The following statements inquire about your thoughts and feelings in a variety of situations. " +
        "For each item, indicate how well it describes your own opinion of what is generally true for you. " +
        "READ EACH ITEM CAREFULLY BEFORE RESPONDING. Answer as honestly as you can. Thank you.</p>",
    questions: [
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][31] + '. ' + FFMQ_csv[1][31] + "</p>", name: FFMQ_csv[0][31], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][32] + '. ' + FFMQ_csv[1][32] + "</p>", name: FFMQ_csv[0][32], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][33] + '. ' + FFMQ_csv[1][33] + "</p>", name: FFMQ_csv[0][33], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][34] + '. ' + FFMQ_csv[1][34] + "</p>", name: FFMQ_csv[0][34], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][35] + '. ' + FFMQ_csv[1][35] + "</p>", name: FFMQ_csv[0][35], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][36] + '. ' + FFMQ_csv[1][36] + "</p>", name: FFMQ_csv[0][36], labels: FFMQ_options, required: true, horizontal: true,},
    ],
    scale_width: 500,
};

var FFMQ_Qs7 = {
    type: 'survey-likert',
    data: {
        trial_id: "ffmq_qs7"
    },
    preamble: "<p class='q_title'>The following statements inquire about your thoughts and feelings in a variety of situations. " +
        "For each item, indicate how well it describes your own opinion of what is generally true for you. " +
        "READ EACH ITEM CAREFULLY BEFORE RESPONDING. Answer as honestly as you can. Thank you.</p>",
    questions: [
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][37] + '. ' + FFMQ_csv[1][37] + "</p>", name: FFMQ_csv[0][37], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][38] + '. ' + FFMQ_csv[1][38] + "</p>", name: FFMQ_csv[0][38], labels: FFMQ_options, required: true, horizontal: true,},
        {prompt: "<p class='q_para'>" + FFMQ_csv[0][39] + '. ' + FFMQ_csv[1][39] + "</p>", name: FFMQ_csv[0][39], labels: FFMQ_options, required: true, horizontal: true,},
    ],
    scale_width: 500,
};



// Qualitative data
var post_task_block = {
    type: 'survey-text',
    data: {
        trial_id: "post task questions"
    },
    questions: [
        {
            prompt: "<p style='font-size:20px'>Please summarize what you were asked to do in this task.</p>",
            rows: 5,
            columns: 90
        },
        {
            prompt: "<p style='font-size 20px'>Please comment in detail on what you experienced during the 10 minutes session. " +
                "Please note anything you noticed, regardless of how trivial you might think it is, (e.g. I thought about…, I felt…, I noticed that…, after I noticed….)</p>",
            rows: 10, columns: 120}
    ],
};

// Set up timeline
var questionnaire_part = [];
questionnaire_part.push(AES_Qs1);
questionnaire_part.push(AES_Qs2);
questionnaire_part.push(AES_Qs3);
questionnaire_part.push(FFMQ_Qs1);
questionnaire_part.push(FFMQ_Qs2);
questionnaire_part.push(FFMQ_Qs3);
questionnaire_part.push(FFMQ_Qs4);
questionnaire_part.push(FFMQ_Qs5);
questionnaire_part.push(FFMQ_Qs6);
questionnaire_part.push(FFMQ_Qs7);
questionnaire_part.push(post_task_block);
// questionnaire_part.push({type: 'fullscreen', fullscreen_mode: false}); /* exit fullscreen mode */
