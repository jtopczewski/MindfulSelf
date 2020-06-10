/* ************************************ */
/* Define experimental variables */
/* ************************************ */

// task variables
const OFFICE_WORDS = ["notebook", "folder", "paper"];
const ME_WORDS = ["I", "me", "myself"];
const FEAR_WORDS = ["fright", "anxiety", "horror", "fear", "terror"];

const fright_options = ["Not afraid at all", "less afraid", "Somewhat afraid", "Afraid", "Very afraid"];


// task parameters: One set = 6 trials
IAT_PRACT_REP = 1; // original 1
IAT_TEST_REP = 4; // original 4
IAT_FIX_DUR = 1500;
// Set helpers
var IAT_taskhelper = {};

// Instructions 1
IAT_taskhelper.instr1_pg1 = "<p class='instr'>In this task, words will be presented in the middle of the screen.</p>" +
    "<p class='instr'>These words belong to one of three categories: Me, fear, office equipment. <br>Your task is to sort these words into their " +
    "<p class='instr'>These categories are presented below the word, and in two columns. " +
    "<br>One of the categories is in one column while the other two are in another column.</p>" +
    "<p class='instr'>Press <b>F</b> if the word belongs to the category on left. <br>Press <b>J</b> if the word belongs to the category on the right.";

IAT_taskhelper.instr1_pg2 = "<p class='instr'>At the start of the experiment, you will also watch one or two horror clips of less than one minute each.</p>" +
    "<p class='instr'>Additionally, throughout the task, monotonic scary background sounds will be played.</p>" +
    "<p class='instr'>The video and sound will only be played during the experimental blocks but not during practice.</p>";

IAT_taskhelper.instr1_pg3 = "<p class='instr'>There are two stages to the task, with each stage consisting of a practice block and three test blocks. " +
    "<p class='instr'>We wil begin with the first stage.</p>" +
    "<p class='instr'>In the first stage, <span class='iat_leftcat'>'me'</span> and <span class='iat_leftcat'>'Fear'</span> are grouped on the <span class='iat_leftcat'>left</span> " +
    "while <span class='iat_rightcat'>'Office equipment'</span> is grouped on the <span class='iat_rightcat'>right.</span></p>" +
    "<p class='instr'>Press <span class='iat_leftcat'>F</span> if the word belongs to the category on <span class='iat_leftcat'>left ('me' and 'Fear' words).</span> " +
    "<br>Press <span class='iat_rightcat'>J</span> if the word belongs to the category on the <span class='iat_rightcat'>right ('Office equipment' words).</span>" +
    "<p class='instr'>Press complete the task as quick and as accurate as possible</p>" +
    "<p class='instr'>Press Next to start the practice block.</p>";

// Instructions 2
IAT_taskhelper.instr2_pg1 = "<p class='instr'>Thank you for completing the practice block. We will now proceed to the experimental block.</p>" +
    "<p class='instr'>Remember, press <span class='iat_leftcat'>F</span> if the word belongs to the category on <span class='iat_leftcat'>left ('me' and 'Fear' words).</span> " +
    "<br>Press <span class='iat_rightcat'>J</span> if the word belongs to the category on the <span class='iat_rightcat'>right ('Office equipment' words).</span>" +
    "<p class='instr'>Press complete the task as quick and as accurate as possible</p>" +
    "<p class='instr'>Press Next to start the experimental block.</p>" +
    "<p class='instr'>Remember, we will begin with one to two horror video clips, and the task will be accompanied by monotonic scary background sounds</p>";

// Instructions 3
IAT_taskhelper.instr3_pg1 =
    "<p class='instr'>Welcome to the second stage!</p> " +
    "<p class='instr'>In the second stage, <span class='iat_leftcat'>'me'</span> is now grouped on the <span class='iat_leftcat'>left</span> " +
    "while <span class='iat_rightcat'>'Fear'</span> and <span class='iat_rightcat'>'Office equipment'</span> are grouped on the <span class='iat_rightcat'>right.</span></p>" +
    "<p class='instr'>Press <span class='iat_leftcat'>F</span> if the word belongs to the category on <span class='iat_leftcat'>left ('me' words).</span> " +
    "<br>Press <span class='iat_rightcat'>J</span> if the word belongs to the category on the <span class='iat_rightcat'>right ('Fear' and 'Office equipment' words).</span>" +
    "<p class='instr'>Press complete the task as quick and as accurate as possible</p>" +
    "<p class='instr'>Press Next to start the practice block.</p>";

// Instructions 4
IAT_taskhelper.instr4_pg1 = "<p class='instr'>Thank you for completing the practice block. We will now proceed to the experimental block.</p>" +
    "<p class='instr'>Remember, press <span class='iat_leftcat'>F</span> if the word belongs to the category on <span class='iat_leftcat'>left ('me' words).</span> " +
    "<br>Press <span class='iat_rightcat'>J</span> if the word belongs to the category on the <span class='iat_rightcat'>right ('Fear' and 'Office equipment' words).</span>" +
    "<p class='instr'>Press complete the task as quick and as accurate as possible</p>" +
    "<p class='instr'>Press Next to start the experimental block.</p>" +
    "<p class='instr'>Remember, we will begin with one to two horror video clips, and the task will be accompanied by monotonic scary background sounds</p>";

// Task stimuli
IAT_taskhelper.fixation = "<div style='font-size: 60px'>+</div>";

IAT_taskhelper.congr_task_left =
    "<div class='row'>" +
    "<div class='column'><p class='iat-cat-text'>Fear<br>Me</p></div>" +
    "<div class='column'><p class='iat-cat-text'>Office equipment</p></div>" +
    "</div>";
IAT_taskhelper.congr_task_right =
    "<div class='row'>" +
    "<div class='column'><p class='iat-cat-text'>Office equipment</p></div>" +
    "<div class='column'><p class='iat-cat-text'>Fear<br>Me</p></div>" +
    "</div>";

IAT_taskhelper.incongr_task_left =
    "<div class='row'>" +
    "<div class='column'><p class='iat-cat-text'>Fear<br>Office equipment</p></div>" +
    "<div class='column'><p class='iat-cat-text'>Me</p></div>" +
    "</div>";
IAT_taskhelper.incongr_task_right =
    "<div class='row'>" +
    "<div class='column'><p class='iat-cat-text'>Me</p></div>" +
    "<div class='column'><p class='iat-cat-text'>Fear<br>Office equipment</p></div>" +
    "</div>";


IAT_taskhelper.cont_next =
    "<p class='continue_next'>Press <strong>ENTER</strong> to continue to the next set.</p>";

IAT_taskhelper.end_block = "<p class='continue_next'>Great job and thank you! You are now finished with this part of the study." +
    "<br>We will proceed with the next section.</p>" +
    "<p class='continue_next'>Press <strong>ENTER</strong> to continue.</p>";

/* ************************************ */
/* Instructions */
/* ************************************ */

var IAT_instr = {
    type: 'instructions',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "instructions"
    },
    pages: [
        IAT_taskhelper.instr1_pg1,
        IAT_taskhelper.instr1_pg2,
        IAT_taskhelper.instr1_pg3,

    ],
    show_clickable_nav: true,
    show_page_number: true
};
var IAT_instr2 = {
    type: 'instructions',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "instructions"
    },
    pages: [
        IAT_taskhelper.instr2_pg1,
    ],
    show_clickable_nav: true,
    show_page_number: true
};
var IAT_instr3 = {
    type: 'instructions',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "instructions"
    },
    pages: [
        IAT_taskhelper.instr3_pg1,
    ],
    show_clickable_nav: true,
    show_page_number: true
};
var IAT_instr4 = {
    type: 'instructions',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "instructions"
    },
    pages: [
        IAT_taskhelper.instr4_pg1,
    ],
    show_clickable_nav: true,
    show_page_number: true
};
var IAT_cont_next = {
    type: "html-keyboard-response",
    data: {
        exp_id: "ses-iat-task",
        trial_id: "continue_next"
    },
    stimulus: IAT_taskhelper.cont_next,
    choices: [13]
};
var IAT_end_block = {
    type: "html-keyboard-response",
    data: {
        exp_id: "ses-iat-task",
        trial_id: "end_block"
    },
    stimulus: IAT_taskhelper.end_block,
    choices: [13]
};


/* ************************************ */
/* Set up stimuli */
/* ************************************ */

// set factorial design
const IAT_factors = {
    condition: ["office", "me", "fear"],
    location: ["left", "right",]
};
var IAT_conditions = jsPsych.randomization.factorial(IAT_factors, 1);

// define scary background sound
const snd1 = new Audio("../sound/sesiat_sound1.wav"); snd1.loop = true;
const snd2 = new Audio("../sound/sesiat_sound2.wav"); snd2.loop = true;
const snd3 = new Audio("../sound/sesiat_sound3.wav"); snd3.loop = true;

var IAT_beep_pairs1 = {
    start: "",
    stop: ""};
IAT_beep_pairs1.start = {
    type: 'call-function',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "beep-start"
    },
    func: function() {
        snd1.play()
    }
};
IAT_beep_pairs1.stop = {
    type: 'call-function',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "beep-start"
    },
    func: function() {
        snd1.pause();
        snd1.currentTime = 0;
    }
};

var IAT_beep_pairs2 = {
    start: "",
    stop: ""};
IAT_beep_pairs2.start = {
    type: 'call-function',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "beep-start"
    },
    func: function() {
        snd2.play()
    }
};
IAT_beep_pairs2.stop = {
    type: 'call-function',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "beep-start"
    },
    func: function() {
        snd2.pause();
        snd2.currentTime = 0;
    }
};

var IAT_beep_pairs3 = {
    start: "",
    stop: ""};
IAT_beep_pairs3.start = {
    type: 'call-function',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "beep-start"
    },
    func: function() {
        snd3.play()
    }
};
IAT_beep_pairs3.stop = {
    type: 'call-function',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "beep-start"
    },
    func: function() {
        snd3.pause();
        snd3.currentTime = 0;
    }
};

const IAT_sounds = [IAT_beep_pairs1, IAT_beep_pairs2, IAT_beep_pairs3];
var IAT_sound_conditions = jsPsych.randomization.repeat(IAT_sounds, 2);


// Videos
const iat_videos = {
    condition: [
        '../video/sesiat_1_grudge2.mp4',
        '../video/sesiat_2_grudge2.mp4'
    ]
};
var iat_video_conditions = jsPsych.randomization.factorial(iat_videos, 4);
function createVideoArray() {
    var videoarray = [];
    for (var i = 0; i < 8; ++i) {
        var videotrial = {
            type: 'video-keyboard-response',
            sources: [
                iat_video_conditions[i].condition,
            ],
            data: {
                exp_id: "ses-iat-task",
                trial_id: "IAT-video-"  + i+1
            },
            width: 700,
            trial_ends_after_video: true,
            choices: jsPsych.NO_KEYS,
        };
        videoarray[i] = videotrial;
    }
    return videoarray;
};
var iat_videos_array = createVideoArray();


// Fixation
var IAT_fixation = {
    type: "html-keyboard-response",
    data: {
        exp_id: "ses-iat-task",
        trial_id: "fixation",
        stimulus: "fixation"},
    stimulus: IAT_taskhelper.fixation,
    choices: jsPsych.NO_KEYS,
    trial_duration: IAT_FIX_DUR, // milliseconds
};

// function to create ses-iat trials
function create_sesiatTrials(TRIALID, STAGEID) {

    var TRIAL = {
        on_start: function (trial) {
            // Set fear key
            FEARLOCATION = jsPsych.timelineVariable('location', true);

            // Congruent Left: left = Me + fear, Right = Office
            if(STAGEID === "congruent" && FEARLOCATION == "left") {
                FEARKEY = 70;
                MEKEY = 70;
                OFFKEY = 74;
                TASKPROMPT = IAT_taskhelper.congr_task_left;
            }
            // Congruent Right: left = Office, Right = Me + fear
            if(STAGEID === "congruent" && FEARLOCATION == "right") {
                FEARKEY = 74;
                MEKEY = 74;
                OFFKEY = 70;
                TASKPROMPT = IAT_taskhelper.congr_task_right;
            }

            // Incongruent Left: left = Me, Right = Office + fear
            if(STAGEID === "incongruent" && FEARLOCATION == "left") {
                FEARKEY = 70;
                MEKEY = 74;
                OFFKEY = 70;
                TASKPROMPT = IAT_taskhelper.incongr_task_left;
            }
            // Incongruent Right: left = Office + fear, Right = Me
            if(STAGEID === "incongruent" && FEARLOCATION == "right") {
                FEARKEY = 74;
                MEKEY = 70;
                OFFKEY = 74;
                TASKPROMPT = IAT_taskhelper.incongr_task_right;
            }


            if (jsPsych.timelineVariable('condition', true) === "office") {
                trial_stim = jsPsych.randomization.sampleWithReplacement(OFFICE_WORDS, 1)[0];
                correct_response = OFFKEY;
            } else if (jsPsych.timelineVariable('condition', true) === "me") {
                trial_stim = jsPsych.randomization.sampleWithReplacement(ME_WORDS, 1)[0];
                correct_response = MEKEY;
            } else {
                trial_stim = jsPsych.randomization.sampleWithReplacement(FEAR_WORDS, 1)[0];
                correct_response = FEARKEY;
            };

            trial.stimulus = "<p class='iat-stim-text'>" + trial_stim + "</p>";
            trial.data = {
                exp_id: "ses-iat-task",
                trial_id: TRIALID,
                stage_id: STAGEID,
                location: FEARLOCATION,
                stimulus: trial_stim,
                correct_response: correct_response
            };
            trial.prompt = TASKPROMPT;
        },
        data: "",
        type: "html-keyboard-response",
        stimulus: "",
        prompt: "",
        choices: [70, 74],
        // post_trial_gap: 1500,
        on_finish: function (data) {
            var trial_data = JSON.parse(JSON.stringify(data));
            if (trial_data.key_press === trial_data.correct_response) {
                data.accuracy = 1;
            } else {
                data.accuracy = 0;
            }
        }
    };
    return TRIAL
}

// Trial feedback
var IAT_pract_trial_feedback = {
    type: 'html-keyboard-response',
    on_start: function(trial) {
        // Set data in trial
        trial.data = {
            exp_id: "ses-iat-task",
            trial_id: "practice-trial-feedback",
            stage_id: jsPsych.data.getLastTrialData().values()[0]["stage_id"],
            stimulus: jsPsych.timelineVariable('stimulus', true),

        };
    },
    data: "",
    trial_duration: 1000,
    choices: jsPsych.NO_KEYS,
    stimulus: function() {
        var accuracy = JSON.parse(jsPsych.data.getLastTrialData().values()[0]["accuracy"]);
        if (accuracy == 1) {
            return "<div class='iat_feedback'>correct</div>";
        } else {
            return "<div class='iat_feedback'>incorrect</div>";
        }
    },

};

/* ************************************ */
/* Set up experimental blocks */
/* ************************************ */

// Congruent block: categories me and fear were assigned different response key
var IAT_congr_pract_trial = create_sesiatTrials("congruent-practice", "congruent")
var IAT_congr_exp_trial = create_sesiatTrials("congruent-test", "congruent")
var IAT_prac_congr_procedure = {
    timeline: [IAT_fixation, IAT_congr_pract_trial, IAT_pract_trial_feedback],
    timeline_variables: IAT_conditions,
    randomize_order: true,
    repetitions: IAT_PRACT_REP, // 1 set = 6 trials
};
var IAT_exp_congr_procedure = {
    timeline: [IAT_fixation, IAT_congr_exp_trial],
    timeline_variables: IAT_conditions,
    randomize_order: true,
    repetitions: IAT_TEST_REP, // 1 set = 3 trials
};


// Incongruent block: categories me and fear were assigned the same response key
var IAT_incongr_pract_trial = create_sesiatTrials("incongruent-practice", "incongruent")
var IAT_incongr_exp_trial = create_sesiatTrials("incongruent-test", "incongruent")
var IAT_prac_incongr_procedure = {
    timeline: [IAT_fixation, IAT_incongr_pract_trial, IAT_pract_trial_feedback],
    timeline_variables: IAT_conditions,
    randomize_order: true,
    repetitions: IAT_PRACT_REP, // 1 set = 3 trials
};
var IAT_exp_incongr_procedure = {
    timeline: [IAT_fixation, IAT_incongr_exp_trial],
    timeline_variables: IAT_conditions,
    randomize_order: true,
    repetitions: IAT_TEST_REP, // 1 set = 3 trials
};

// Add question about fright
var sesiat_fright_question = {
    type: 'survey-likert',
    preamble: "<p class='q_title'>Please rate each of the following statements on a scale of 1 ('Not afraid at all') to 5 ('Very afraid') regarding the task you just completed. " +
        "Please do not leave any items blank</p>",
    questions: [
        {
            prompt: "How afraid are you of horror clips normally?",
            name: "Normally Afraid",
            labels: fright_options,
            required: true,
            horizontal: true},
        {
            prompt: "How afraid are you by the clips shown in this task?",
            name: "Task Afraid",
            labels: fright_options,
            required: true,
            horizontal: true}
    ],
    data: {
        exp_id: "ses-iat-task",
        trial_id: "fright-question",
    },
};


/* ************************************ */
/* Set up timeline */
/* ************************************ */

var sesiat_block = [];
sesiat_block.push(IAT_instr);

// ========================
// Congruent block
// ========================

// Congruent practice block
sesiat_block.push(IAT_prac_congr_procedure);
sesiat_block.push(IAT_instr2);

// // Congruent experimental block 1
sesiat_block.push(iat_videos_array[0]);
sesiat_block.push(iat_videos_array[1]);
sesiat_block.push(IAT_sound_conditions[0].start);
sesiat_block.push(IAT_exp_congr_procedure);
sesiat_block.push(IAT_sound_conditions[0].stop);
sesiat_block.push(IAT_cont_next);

// Congruent experimental block 2
sesiat_block.push(iat_videos_array[2]);
sesiat_block.push(IAT_sound_conditions[1].start);
sesiat_block.push(IAT_exp_congr_procedure);
sesiat_block.push(IAT_sound_conditions[1].stop);
sesiat_block.push(IAT_cont_next);

// Congruent experimental block 3
sesiat_block.push(iat_videos_array[3]);
sesiat_block.push(IAT_sound_conditions[2].start);
sesiat_block.push(IAT_exp_congr_procedure);
sesiat_block.push(IAT_sound_conditions[2].stop);
sesiat_block.push(IAT_cont_next);


// ========================
// Incongruent block
// ========================

// Incongruent practice block
sesiat_block.push(IAT_instr3);
sesiat_block.push(IAT_prac_incongr_procedure);
sesiat_block.push(IAT_instr4);

// Incongruent experimental block 1
sesiat_block.push(iat_videos_array[4]);
sesiat_block.push(iat_videos_array[5]);
sesiat_block.push(IAT_sound_conditions[3].start);
sesiat_block.push(IAT_exp_incongr_procedure);
sesiat_block.push(IAT_sound_conditions[3].stop);
sesiat_block.push(IAT_cont_next);

// Incongruent experimental block 2
sesiat_block.push(iat_videos_array[6]);
sesiat_block.push(IAT_sound_conditions[4].start);
sesiat_block.push(IAT_exp_incongr_procedure);
sesiat_block.push(IAT_sound_conditions[4].stop);
sesiat_block.push(IAT_cont_next);

// Incongruent experimental block 3
sesiat_block.push(iat_videos_array[7]);
sesiat_block.push(IAT_sound_conditions[5].start);
sesiat_block.push(IAT_exp_incongr_procedure);
sesiat_block.push(IAT_sound_conditions[5].stop);
sesiat_block.push(IAT_end_block);

// Questionnaire about fright
sesiat_block.push(sesiat_fright_question);