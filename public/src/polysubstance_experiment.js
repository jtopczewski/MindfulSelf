/* **************************************** */
/* Set up experiment procedure and timeline */
/* **************************************** */

// Set up functions
function CloseSave() {
    $.ajax({
        type: "POST",
        url: "/polysub-experiment-data",
        data: JSON.stringify(jsPsych.data.get().values()),
        contentType: "application/json"
    })
    // jsPsych.data.displayData()
}
function FinishSave() {

    $.ajax({
        type: "POST",
        url: "/polysub-experiment-data",
        data: JSON.stringify(jsPsych.data.get().values()),
        contentType: "application/json"
    })
        .done(function() {
            window.location.href = "finish";
        })
        .fail(function() {
            alert("Problem occurred while writing data to Dropbox. " +
                "Data will be saved to your computer. " +
                "Please contact the experimenter regarding this issue!");
            var csv = jsPsych.data.get().csv();
            var filename = jsPsych.data.get().values()[0].ID_DATE + "_day_" + jsPsych.data.get().values()[0].daynumber + ".csv";
            downloadCSV(csv, filename);
            window.location.href = "finish";
        });
    // jsPsych.data.displayData()
}

// define welcome message trial
var welcome_screen = {
    type: "html-button-response",
    data: {
        exp_id: "welcome",
        trial_id: "welcome"
    },
    choices: ['Click here to continue'],
    on_trial_start: function() { setTimeout(function() {setDisplay("jspsych-btn","")}, 1000)},
    stimulus: "Welcome to the experiment.",
};

welcome_block = [];
welcome_block.push(welcome_screen);

// Set up full screen mode
// bc_exp.push({type: 'fullscreen', fullscreen_mode: true}); /* enter fullscreen mode */
// bc_exp.push({type: 'fullscreen', fullscreen_mode: false }); /* exit fullscreen mode */

// Pre-test
function startDay1() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: true,
        on_interaction_data_update: function(data) {
            var trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [
            ...welcome_block,
            ...gonogo_block,
            ...fadplus_block, ...maia_block
        ],

        /* on_close currently not working */
        on_close: function() {
            CloseSave()
        },
        on_finish: function() {
            FinishSave()
        }
    });
}

// Breath-counting
function startDay2() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: true,
        on_interaction_data_update: function(data) {
            var trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [
            ...welcome_block,
            ...bc_block, ...post_bc_block1, ...post_bc_block2, ...sms_block, ...aes_block
        ],

        /* on_close currently not working */
        on_close: function() {
            CloseSave()
        },
        on_finish: function() {
            FinishSave()
        }
    });
}
function startDay3() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: true,
        on_interaction_data_update: function(data) {
            var trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [
            ...welcome_block,
            ...bc_block, ...post_bc_block2, ...sms_block, ...aes_block
        ],

        /* on_close currently not working */
        on_close: function() {
            CloseSave()
        },
        on_finish: function() {
            FinishSave()
        }
    });
}
function startDay4() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: true,
        on_interaction_data_update: function(data) {
            var trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [
            ...welcome_block,
            ...bc_block, ...post_bc_block2, ...sms_block, ...aes_block
        ],

        /* on_close currently not working */
        on_close: function() {
            CloseSave()
        },
        on_finish: function() {
            FinishSave()
        }
    });
}
function startDay5() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: true,
        on_interaction_data_update: function(data) {
            var trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [
            ...welcome_block,
            ...bc_block, ...post_bc_block2, ...sms_block, ...aes_block
        ],

        /* on_close currently not working */
        on_close: function() {
            CloseSave()
        },
        on_finish: function() {
            FinishSave()
        }
    });
}
function startDay6() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: true,
        on_interaction_data_update: function(data) {
            var trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [
            ...welcome_block,
            ...bc_block, ...post_bc_block2, ...sms_block, ...aes_block
        ],

        /* on_close currently not working */
        on_close: function() {
            CloseSave()
        },
        on_finish: function() {
            FinishSave()
        }
    });
}

// Post-test
function startDay7() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: true,
        on_interaction_data_update: function(data) {
            var trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [
            ...welcome_block,
            ...gonogo_block, ...maia_block
        ],

        /* on_close currently not working */
        on_close: function() {
            CloseSave()
        },
        on_finish: function() {
            FinishSave()
        }
    });
}
