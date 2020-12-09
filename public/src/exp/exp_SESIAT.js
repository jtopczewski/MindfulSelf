/* ************************************ */
/* Define experimental variables */
/* ************************************ */

// task variables
const OFFICE_WORDS = ["notebook", "folder", "paper"];
const ME_WORDS = ["I", "me", "myself"];
const FEAR_WORDS = ["fright", "anxiety", "horror", "fear", "terror"];

const fright_options = ["Not afraid at all", "less afraid", "Somewhat afraid", "Afraid", "Very afraid"];
const cat_tables =
    "<table style='border-collapse:collapse;border-spacing:0' class='tg' align='center'>" +
    "<thead><tr><th style='background-color:#333333;border-color:black;border-style:solid;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:18px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>" +
    "<span style='font-weight:bold'>Category</span></th>" +
    "<th style='background-color:#333333;border-color:black;border-style:solid;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:18px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>" +
    "<span style='font-weight:bold'>Words</span></th></tr></thead>" +
    "<tbody>" +
    "<tr>" +
    "<td style='border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:18px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>Me</td>" +
    "<td style='border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:18px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>I, Me, Myself</td>" +
    "</tr>" +
    "<tr>" +
    "<td style='border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:18px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>Fear</td>" +
    "<td style='border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:18px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>Fear, Fright, Anxiety, Horror, Panic, Terror</td>" +
    "</tr>" +
    "<tr>" +
    "<td style='border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:18px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>Office Equipment</td>" +
    "<td style='border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:18px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>Notebook, Folder, Paper</td>" +
    "</tr>" +
    "</tbody>" +
    "</table>";

// task parameters: One set = 3 trials
IAT_PRACT_REP = 7; // original 1
IAT_TEST_REP = 7; // original 4
IAT_FIX_DUR = 1500;
// Set helpers
var IAT_taskhelper = {};

// Task stimuli
IAT_taskhelper.fixation = "<div style='font-size: 60px'>+</div>";

IAT_taskhelper.congr_task_left =
    "<div class='row'>" +
    "<div class='column'><p class='iat-cat-text'>Fear<br>Me</p></div>" +
    "<div class='column'><p class='iat-cat-text'><br>Office equipment</p></div>" +
    "</div>";
IAT_taskhelper.congr_task_right =
    "<div class='row'>" +
    "<div class='column'><p class='iat-cat-text'><br>Office equipment</p></div>" +
    "<div class='column'><p class='iat-cat-text'>Fear<br>Me</p></div>" +
    "</div>";

IAT_taskhelper.incongr_task_left =
    "<div class='row'>" +
    "<div class='column'><p class='iat-cat-text'>Fear<br>Office equipment</p></div>" +
    "<div class='column'><p class='iat-cat-text'><br>Me</p></div>" +
    "</div>";
IAT_taskhelper.incongr_task_right =
    "<div class='row'>" +
    "<div class='column'><p class='iat-cat-text'><br>Me</p></div>" +
    "<div class='column'><p class='iat-cat-text'>Fear<br>Office equipment</p></div>" +
    "</div>";

IAT_taskhelper.cont_next =
    "<p class='continue_next'>Press <strong>ENTER</strong> to continue to the next set.</p>";

IAT_taskhelper.end_block = "<p class='continue_next'>Great job and thank you! You are now finished with this part of the study." +
    "<br>We will proceed with the next section.</p>" +
    "<p class='continue_next'>Press <strong>ENTER</strong> to continue.</p>";


// Instructions 1
IAT_taskhelper.instr1_pg1 = "<p class='instr'>In this task, words will be presented at the center of the screen after the other.</p>" +
    "<p class='instr'>You will need to sort these words into categories according to their literal meaning. " +
    "<br>The categories and the words that fit into them are as follows: </p>" + cat_tables;

IAT_taskhelper.instr1_pg2 = "<p class='instr'>In this task, you need to sort words presented at the center of the screen into categories." +
    "<br>The names of the categories are presented at the bottom of the screen. " +
    "<p class='instr'>If the word at the center fits one of the categories at the <span class='iat_leftcat'>bottom-left side</span> of the screen, press <span class='iat_leftcat'>F</span>." +
    "<br>If the word at the center fits one of the categories at the <span class='iat_rightcat'>bottom-right side</span> of the screen, press <span class='iat_rightcat'>J</span>.</p>" +
    "<p class='instr'>During the task, the categories that fit each button will remain at the bottom of the screen. Each word fits into one category only.</p>" +
    "<p class='instr'>Sort the words as quickly as you can while making as few mistakes as possible.</p>";

// Instructions 2
IAT_taskhelper.instr2_pg1 = "<p class='instr'>Thank you for completing the practice block. We will now proceed to the experimental block.</p>" +
    "<p class='instr'>Now, during the rest of the task, you are going to watch short videos that might be unpleasant." +
    "<br>You should watch each video to the end without looking away from the screen." +
    "<br>There's no need to press anything or react while watching the videos. You should just watch them.</p>";

// Instructions 3
IAT_taskhelper.instr3_pg1 = "<p class='instr'><b><u>Remember:</u></b>" +
    "<br>If the word at the center of the screen fits one of the categories on the <span class='iat_leftcat'>bottom-left side</span> of the screen, press <span class='iat_leftcat'>F</span>." +
    "<br>If the word at the center of the screen fits one of the categories on the <span class='iat_rightcat'>bottom-right side</span> of the screen, press <span class='iat_rightcat'>J</span>. </p>" +
    "<p class='instr'>Press complete the task as quick and as accurate as possible.</p>";

// Stage Switch

// Instructions 4
IAT_taskhelper.instr4_pg1 =
    "<p class='instr'>Now, you need to sort the words that will be presented in the center of the screen into categories again. " +
    "<br><b>Notice that the fear category switched sides.</b>" +
    "<p class='instr'>If the word at the center fits one of the categories at the <span class='iat_leftcat'>bottom-left side</span> of the screen, press <span class='iat_leftcat'>F</span>." +
    "<br>If the word at the center fits one of the categories at the <span class='iat_rightcat'>bottom-right side</span> of the screen, press <span class='iat_rightcat'>J</span>.</p>" +
    "<p class='instr'>Sort the words as quickly as you can while making as few mistakes as possible.</p>";



/* ************************************ */
/* Instructions */
/* ************************************ */

var IAT_instr1a = {
    type: 'instructions',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "instructions"
    },
    pages: [IAT_taskhelper.instr1_pg1],
    show_clickable_nav: true,
    show_page_number: true
};
var IAT_instr1b = {
    on_start: function (trial){
        var ses_stage = jsPsych.data.get().values()[0].ses_stages.split(',');
        if (ses_stage[0] == "congruent") {
            trial.pages = [IAT_taskhelper.instr1_pg2 + IAT_taskhelper.congr_task_left]
        } else {
            trial.pages = [IAT_taskhelper.instr1_pg2 + IAT_taskhelper.incongr_task_right]
        }
    },
    type: 'instructions',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "instructions"
    },
    pages: [""],
    show_clickable_nav: true,
    show_page_number: true
};
var IAT_instr2 = {
    type: 'instructions',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "instructions"
    },
    pages: [IAT_taskhelper.instr2_pg1],
    show_clickable_nav: true,
    show_page_number: true
};
var IAT_instr3 = {
    on_start: function (trial){
        var ses_stage = jsPsych.data.get().values()[0].ses_stages.split(',');
        if (ses_stage[0] == "congruent") {
            trial.pages = [IAT_taskhelper.instr3_pg1 + IAT_taskhelper.congr_task_left]
        } else {
            trial.pages = [IAT_taskhelper.instr3_pg1 + IAT_taskhelper.incongr_task_right]
        }
    },
    type: 'instructions',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "instructions"
    },
    pages: [""],
    show_clickable_nav: true,
    show_page_number: true
};
var IAT_instr4 = {
    on_start: function (trial){
        var ses_stage = jsPsych.data.get().values()[0].ses_stages.split(',');
        if (ses_stage[1] == "incongruent") {
            trial.pages = [IAT_taskhelper.instr4_pg1 + IAT_taskhelper.incongr_task_right]
        } else {
            trial.pages = [IAT_taskhelper.instr4_pg1 + IAT_taskhelper.congr_task_left]
        }
    },
    type: 'instructions',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "instructions"
    },
    pages: [""],
    show_clickable_nav: true,
    show_page_number: true
};
var IAT_instr5 = {
    on_start: function (trial){
        var ses_stage = jsPsych.data.get().values()[0].ses_stages.split(',');
        if (ses_stage[1] == "incongruent") {
            trial.pages = [IAT_taskhelper.instr3_pg1 + IAT_taskhelper.incongr_task_right]
        } else {
            trial.pages = [IAT_taskhelper.instr3_pg1 + IAT_taskhelper.congr_task_left]
        }
    },
    type: 'instructions',
    data: {
        exp_id: "ses-iat-task",
        trial_id: "instructions"
    },
    pages: [""],
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
        '../video/sesiat_Clip1.mp4',
        '../video/sesiat_Clip2.mp4',
        '../video/sesiat_Clip3.mp4',
        '../video/sesiat_Clip4.mp4',
        '../video/sesiat_Clip5.mp4',
        '../video/sesiat_Clip6.mp4',
        '../video/sesiat_Clip7.mp4',
        '../video/sesiat_Clip8.mp4',
    ]
};
var iat_video_conditions = jsPsych.randomization.factorial(iat_videos, 1);
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
            choices: [120],
            on_finish: function (data) {
                if(data.key_press == 120){
                    jsPsych.endExperiment('The experiment was ended prematurely.');
                }
            }
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
            var ses_stages = jsPsych.data.get().values()[0].ses_stages.split(',');
            if(STAGEID === "stage1") {
                ses_stage = ses_stages[0];
            } else {
                ses_stage = ses_stages[1];
            }

            // Congruent Left: left = Me + fear, Right = Office
            if(ses_stage === "congruent") {
                FEARKEY = 70;
                MEKEY = 70;
                OFFKEY = 74;
                TASKPROMPT = IAT_taskhelper.congr_task_left;
            }

            // Incongruent Left: left = Me, Right = Office + fear
            if(ses_stage === "incongruent") {
                FEARKEY = 74;
                MEKEY = 70;
                OFFKEY = 74;
                TASKPROMPT = IAT_taskhelper.incongr_task_right
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
                stage_id: ses_stage,
                stimulus: trial_stim,
                correct_response: correct_response
            };
            trial.prompt = TASKPROMPT;
        },
        data: "",
        type: "html-keyboard-response",
        stimulus: "",
        prompt: "",
        choices: [70, 74, 120],
        // post_trial_gap: 1500,
        on_finish: function (data) {
            var trial_data = JSON.parse(JSON.stringify(data));
            if (trial_data.key_press === trial_data.correct_response) {
                data.accuracy = 1;
            } else {
                data.accuracy = 0;
            }

            if(data.key_press == 120){
                jsPsych.endExperiment('The experiment was ended prematurely.');
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

// Stage 1 block: categories me and fear were assigned different response key
var IAT_stage1_pract_trial = create_sesiatTrials("stage1-practice", "stage1")
var IAT_stage1_exp_trial = create_sesiatTrials("stage1-test", "stage1")
var IAT_prac_stage1_procedure = {
    timeline: [IAT_fixation, IAT_stage1_pract_trial, IAT_pract_trial_feedback],
    timeline_variables: IAT_conditions,
    randomize_order: true,
    repetitions: IAT_PRACT_REP, // 1 set = 3 trials
};
var IAT_exp_stage1_procedure = {
    timeline: [IAT_fixation, IAT_stage1_exp_trial],
    timeline_variables: IAT_conditions,
    randomize_order: true,
    repetitions: IAT_TEST_REP, // 1 set = 3 trials
};


// Stage 2 block: categories me and fear were assigned the same response key
var IAT_stage2_pract_trial = create_sesiatTrials("stage2-practice", "stage2")
var IAT_stage2_exp_trial = create_sesiatTrials("stage2-test", "stage2")
var IAT_prac_stage2_procedure = {
    timeline: [IAT_fixation, IAT_stage2_pract_trial, IAT_pract_trial_feedback],
    timeline_variables: IAT_conditions,
    randomize_order: true,
    repetitions: IAT_PRACT_REP*2, // 1 set = 3 trials
};
var IAT_exp_stage2_procedure = {
    timeline: [IAT_fixation, IAT_stage2_exp_trial],
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
sesiat_block.push(IAT_instr1a);
sesiat_block.push(IAT_instr1b);

// ========================
// Stage 1 block
// ========================

// Stage 1 practice block
sesiat_block.push(IAT_prac_stage1_procedure);
sesiat_block.push(IAT_instr2);

// Stage 1 experimental block 1
sesiat_block.push(iat_videos_array[0]);
sesiat_block.push(iat_videos_array[1]);
sesiat_block.push(IAT_instr3);
sesiat_block.push(IAT_sound_conditions[0].start);
sesiat_block.push(IAT_exp_stage1_procedure);
sesiat_block.push(IAT_sound_conditions[0].stop);
sesiat_block.push(IAT_cont_next);

// Congruent experimental block 2
sesiat_block.push(iat_videos_array[2]);
sesiat_block.push(IAT_sound_conditions[1].start);
sesiat_block.push(IAT_exp_stage1_procedure);
sesiat_block.push(IAT_sound_conditions[1].stop);
sesiat_block.push(IAT_cont_next);

// Congruent experimental block 3
sesiat_block.push(iat_videos_array[3]);
sesiat_block.push(IAT_sound_conditions[2].start);
sesiat_block.push(IAT_exp_stage1_procedure);
sesiat_block.push(IAT_sound_conditions[2].stop);
sesiat_block.push(IAT_cont_next);


// ========================
// Stage 2 block
// ========================

// Stage 2 practice block
sesiat_block.push(IAT_instr4);
sesiat_block.push(IAT_prac_stage2_procedure);
sesiat_block.push(IAT_instr2);

// Stage 2 experimental block 1
sesiat_block.push(iat_videos_array[4]);
sesiat_block.push(iat_videos_array[5]);
sesiat_block.push(IAT_instr5);
sesiat_block.push(IAT_sound_conditions[3].start);
sesiat_block.push(IAT_exp_stage2_procedure);
sesiat_block.push(IAT_sound_conditions[3].stop);
sesiat_block.push(IAT_cont_next);

// Stage 2 experimental block 2
sesiat_block.push(iat_videos_array[6]);
sesiat_block.push(IAT_sound_conditions[4].start);
sesiat_block.push(IAT_exp_stage2_procedure);
sesiat_block.push(IAT_sound_conditions[4].stop);
sesiat_block.push(IAT_cont_next);

// Stage 2 experimental block 3
sesiat_block.push(iat_videos_array[7]);
sesiat_block.push(IAT_sound_conditions[5].start);
sesiat_block.push(IAT_exp_stage2_procedure);
sesiat_block.push(IAT_sound_conditions[5].stop);
sesiat_block.push(IAT_end_block);

// Questionnaire about fright
sesiat_block.push(sesiat_fright_question);