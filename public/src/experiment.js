
/* ************************************ */
/* Welcome and instructions */
/* ************************************ */



// define welcome message trial
var welcome_block = {
    type: "html-button-response",
    data: {
        exp_id: "welcome",
        trial_id: "welcome"
    },
    choices: ['Click here to continue'],
    on_trial_start: function() { setTimeout(function() {setDisplay("jspsych-btn","")}, 1000)},
    stimulus: "Welcome to the experiment.",
};


// Set up timeline
// bc_exp.push({type: 'fullscreen', fullscreen_mode: true}); /* enter fullscreen mode */

// bc_exp.push({type: 'fullscreen', fullscreen_mode: false }); /* exit fullscreen mode */

function startExperiment() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: true,
        on_interaction_data_update: function(data) {
            var trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [...bc_exp, ...aes_block, ...ffmq_block,
            ...FIST_block, ...fadplus_block, ...pss_block,
            ...aut_block, ...panas_block,
            ...sesiat_block],

        /* on_close currently not working */
        on_close: function() {

            $.ajax({
                type: "POST",
                url: "/experiment-data",
                data: JSON.stringify(jsPsych.data.get().values()),
                contentType: "application/json"
            })
            // jsPsych.data.displayData()
        },

        on_finish: function() {
            console.log("posting data")
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
                    alert("Problem occurred while writing data to Dropbox. " +
                        "Data will be saved to your computer. " +
                        "Please contact the experimenter regarding this issue!");
                    var csv = jsPsych.data.get().csv();
                    var filename = jsPsych.data.get().values()[0].part_ID + "_" + DATE + ".csv";
                    downloadCSV(csv, filename);
                    window.location.href = "finish";
                });
            // jsPsych.data.displayData()
        }
    });
}