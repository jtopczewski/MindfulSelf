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

var AES_Qs1 = {
    type: 'survey-likert',
    data: {
        trial_id: "aes_qs_pg1"
    },
    preamble: "<p class='q_title'>Please rate each of the following statements on a scale of 1 ('strongly agree') to 5 ('strongly disagree'). Please do not leave any items blank</p>",
    questions: populateQs(1, 8, aes_csv, aes_options),
    scale_width: 500,
};

var AES_Qs2 = {
    type: 'survey-likert',
    data: {
        trial_id: "aes_qs_pg2"
    },
    preamble: "<p class='q_title'>Please rate each of the following statements on a scale of 1 ('strongly agree') to 5 ('strongly disagree'). Please do not leave any items blank</p>",
    questions: populateQs(9, 16, aes_csv, aes_options),
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
    questions: populateQs(1, 8, FFMQ_csv, FFMQ_options),
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
    questions: populateQs(9, 16, FFMQ_csv, FFMQ_options),
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
    questions: populateQs(17, 24, FFMQ_csv, FFMQ_options),
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
    questions: populateQs(25, 32, FFMQ_csv, FFMQ_options),
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
    questions: populateQs(33, 39, FFMQ_csv, FFMQ_options),
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
questionnaire_part.push(FFMQ_Qs1);
questionnaire_part.push(FFMQ_Qs2);
questionnaire_part.push(FFMQ_Qs3);
questionnaire_part.push(FFMQ_Qs4);
questionnaire_part.push(FFMQ_Qs5);
questionnaire_part.push(post_task_block);
// questionnaire_part.push({type: 'fullscreen', fullscreen_mode: false}); /* exit fullscreen mode */
