/* ************************************ */
/* Define experimental variables */
/* ************************************ */

// Set task variables
var sequence = [];
var fixation_stim = "<img class='center-fit' src='../img/WMT/cross.bmp'>"
var n_back_set = ["../img/WMT/1f.bmp", "../img/WMT/2f.bmp", "../img/WMT/3f.bmp", "../img/WMT/4f.bmp"];

var n_back_instr_set = ["../img/WMT/intro1.jpg", "../img/WMT/intro2.jpg", "../img/WMT/intro3.jpg", "../img/WMT/intro4.jpg"];

// Constants
const nbackarray = [0, 1, 2, 3];
const PERCENTCORRECT = 0.20;
const FIXATION_DURATION = 500; // 500
const PICTURE_DURATION = 2000; // 2000
const FDBCK_DUR = 1;
const NTRIALS = 20;
const NBLOCKS = 1;
var HOWMANYBACK;
var SEQLENGTH;
var letter1;

// Date
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
const DATETODAY = yyyy + + mm + dd;


function shuffle(array) {array.sort(() => Math.random() - 0.5)}
function permutator(inputArr) {
    var results = [];

    function permute(arr, memo) {
        var cur, memo = memo || [];

        for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
        }

        return results;
    }

    return permute(inputArr);
}

var allbackarray = permutator(nbackarray);

// Set instructions helpers
var wmt_instrhelper = {};

wmt_instrhelper.page1 =
    "<div class='WMT_instr'>" +
    "<p><img src='../img/WMT/instrsample.jpg' width='900'></p>" +
    "</div>";

wmt_instrhelper.page2_1back =
    "<div class='WMT_instr'>" +
    "<p><img src='../img/WMT/instr1back.jpg' width='900'></p>" +
    "</div>";

wmt_instrhelper.page2_2back =
    "<div class='WMT_instr'>" +
    "<p><img src='../img/WMT/instr2back.jpg' width='900'></p>" +
    "</div>";

wmt_instrhelper.page2_3back =
    "<div class='WMT_instr'>" +
    "<p><img src='../img/WMT/instr3back.jpg' width='900'></p>" +
    "</div>";

wmt_instrhelper.page3 =
    "<div class='WMT_instr'>" +
    "<p><img src='../img/WMT/instrpg2.jpg' width='900'></p>" +
    "</div>";

wmt_instrhelper.page4 =
    "<div class='WMT_instr'>" +
    "<p><img src='../img/WMT/instrpg3.jpg' width='900'></p>" +
    "</div>";

wmt_instrhelper.transition =
    "<div class='WMT_instr'>" +
    "<p>Great job and thank you for completing the practice block. We will now proceed to the experimental block.</p>" +
    "<p>This time, there will not be any feedback, so you will have to carry on until the task is finished." +
    "<p>The experiment will start once you press the button.</p>" +
    "</div>";

wmt_instrhelper.end_block =
    "<div class='WMT_instr'>" +
    "<p class='continue_next'>Great job and thank you! You are now finished with this block." +
    "<br>Please continue to the next block.</p>" +
    "</div>";

/* Instructions */
var wmt_instr = {
    type: 'instructions',
    data: {
        exp_id: "WMT",
        trial_id: "instructions"
    },
    pages: [
        // Page 1
        wmt_instrhelper.page1,
        wmt_instrhelper.page2_1back, wmt_instrhelper.page2_2back, wmt_instrhelper.page2_3back,
        wmt_instrhelper.page3,
        wmt_instrhelper.page4,
    ],
    show_clickable_nav: true,
    show_page_number: true,
};

/* N-back Instructions */
function makeNbackInstr() {

    var Nbackinstr = [];
    for (var i = 0; i <= 7; ++i) {
        var N_back_instr_i = {
            type: 'html-keyboard-response',
            data: {
                exp_id: "WMT",
                phase: "nback-instr"
            },
            stimulus: "<p><img src=" + n_back_instr_set[i] + " width='800'></p>",
        };
        Nbackinstr[i] = N_back_instr_i;
    }
    return Nbackinstr
};
N_back_instr = makeNbackInstr();

/* Fixation */
var WMT_fixation = {
    type: "html-keyboard-response",
    data: {stimulus: "fixation"},
    stimulus: fixation_stim,
    choices: jsPsych.NO_KEYS,
    trial_duration: FIXATION_DURATION, // milliseconds
};

/* N Back sequence trials */
var n_back_trial = {
    on_start: function(trial) {
        HOWMANYBACK = jsPsych.timelineVariable('nback', true);


            phase = jsPsych.timelineVariable('phase', true);
            nback = jsPsych.timelineVariable('nback', true);
            mymatch = jsPsych.timelineVariable('match', true);


        if (sequence.length < HOWMANYBACK) {
            var letter = jsPsych.randomization.sampleWithoutReplacement(n_back_set, 1)[0]
        } else {
            if (jsPsych.timelineVariable('match', true) == true) { // If match
                var letter = sequence[sequence.length - HOWMANYBACK];
            } else { // Not match
                var possible_letters = jsPsych.randomization.sampleWithoutReplacement(n_back_set, 2);
                if (possible_letters[0] != sequence[sequence.length - HOWMANYBACK]) {
                    var letter = possible_letters[0];
                } else {
                    var letter = possible_letters[1];
                }
            }
        }
        sequence.push(letter);
        letter1 = "<img class='center-fit' src=" + letter + ">";
        letter = letter.replace(/^.*[\\\/]/, '');
        trial.stimulus = letter1;

        trial.data = {
            exp_id: 'WMT',
                phase: phase,
                nback: nback,
                match: mymatch,
                stimulus: letter,
        };

    },
    type: 'html-keyboard-response',

    choices: ['A', 'L'],
    stimulus: "",
    data: "",
    trial_duration: PICTURE_DURATION,
    response_ends_trial: false,
    // post_trial_gap: POSTTRIAL_DURATION,
    on_finish: function (data) {
        if (data.match == true) {
            data.correct = (data.key_press === 65)
        }
        if (data.match == false) {
            data.correct = (data.key_press === 76)
        }
    }
}

/* feedback */
var feedback = {
    type: 'html-keyboard-response',
    data: {
        exp_id: "WMT",
        phase: "feedback",
    },
    stimulus: function() {
        var check = JSON.parse(jsPsych.data.getLastTrialData().values()[0]["correct"]);

        if (check === true) {
            return "<div class='WMT_feedback' style='color:green;'>Correct!</div>";
        } else {
            return "<div class='WMT_feedback' style='color:red;'>Incorrect!</div>";
        }

    },
    choices: jsPsych.NO_KEYS,
    trial_duration: FDBCK_DUR,
    on_finish: function(data) {

    }
};
var overallfeedback = {
    type: 'html-keyboard-response',
    stimulus: function(){
        var test_trials = jsPsych.data.get().values().filter(trial => trial.phase == 'practice');
        var lastRow = test_trials[test_trials.length-1];

        test_trials = test_trials.filter(trial => trial.nback == lastRow["nback"]);

        HOWMANYBACK = lastRow["nback"]
        SEQLENGTH = test_trials.length;

        test_trials = test_trials.slice(HOWMANYBACK, SEQLENGTH);
        var n_match = test_trials.filter(trial => trial.match == true).length;
        var n_nonmatch = test_trials.filter(trial => trial.match == false).length;


        var all_correct = test_trials.filter(trial => trial.correct == true).length;
        var n_correct = test_trials.filter(trial => trial.match == true && trial.correct == true).length;
        var false_alarms = test_trials.filter(trial => trial.match == false && trial.correct == false).length;

        var percentage = all_correct/(SEQLENGTH-HOWMANYBACK) * 100;

        var html =
            "<div class='WMT_feedback' style='width:800px;'>"+
            "<p>All done!</p>"+
            "<p>Accuracy: " + percentage + "%</p>"+
            "<p>Press any key to begin.</p>" +
            "</div>";

        return html;
    },
}

/* Transition */
var wmt_transition = {
    type: 'instructions',
    data: {
        exp_id: "WMT",
        trial_id: "endpractice"
    },
    pages: [
        // Page 1
        wmt_instrhelper.transition,
    ],
    show_clickable_nav: true,
    show_page_number: true,
};

var wmt_blocktransition = {
    type: 'instructions',
    data: {
        exp_id: "WMT",
        trial_id: "blocktransition"
    },
    pages: [
        // Page 1
        wmt_instrhelper.end_block,
    ],
    show_clickable_nav: true,
    show_page_number: true,
};


function makeNbackSeq(TYPE){
    var n_back_sequences = [];
    for (var i = 0; i <= 3; ++i) {
        NBACK=i+1
        n_back_sequences[i] = createseqence(NBACK, TYPE);
    }

    return n_back_sequences
};
function createseqence(NBACK, TYPE){

    SEQLENGTH = NTRIALS + NBACK;
    var FIRSTNTRIALS = NBACK
    var NMATCHTRILS = PERCENTCORRECT*NTRIALS
    var NNONMATCHTRIALS = NTRIALS - NMATCHTRILS

    var firsttrials = Array(FIRSTNTRIALS).fill({match: false, nback: NBACK, seqlen: SEQLENGTH, phase: TYPE});
    var matchtrials = Array(NMATCHTRILS).fill({match: true, nback: NBACK, seqlen: SEQLENGTH, phase: TYPE});
    var unmatchtrials = Array(NNONMATCHTRIALS).fill({match: false, nback: NBACK, seqlen: SEQLENGTH, phase: TYPE});

    var n_back_trials = matchtrials.concat(unmatchtrials);
    shuffle(n_back_trials);

    n_back_trials = firsttrials.concat(n_back_trials);
    if (TYPE === 'practice'){
        n_back_sequence = {
            timeline: [WMT_fixation, n_back_trial, feedback],
            timeline_variables: n_back_trials,
        }

    } else if (TYPE === 'exp') {
        n_back_sequence = {
            timeline: [WMT_fixation, n_back_trial],
            timeline_variables: n_back_trials,
        }
    }

    return n_back_sequence
}
n_back_sequences_practice = makeNbackSeq('practice');
n_back_sequences_exp = makeNbackSeq('exp');


// Practice block
var wmt_prac_block = [];
wmt_prac_block.push(wmt_instr);
for (var i = 0; i <= 2; ++i) {
    wmt_prac_block.push(N_back_instr[i]);
    wmt_prac_block.push(n_back_sequences_practice[i]);
    wmt_prac_block.push(overallfeedback);
}
wmt_prac_block.push(wmt_transition);

// Real block
var wmt_exp_block = [];
for (var x = 1; x <= NBLOCKS; ++x) {

    // shuffle(nbackarray); // shuffle if only RWMT
    var nbackindex = Math.floor(Math.random() * allbackarray .length)
    var targetindex = allbackarray[nbackindex]

    allbackarray.splice(nbackindex, 1);

    for (var i = 0; i <= 3; ++i) {
        nbacktest_i = targetindex[i]
        wmt_exp_block.push(N_back_instr[nbacktest_i]);
        wmt_exp_block.push(n_back_sequences_exp[nbacktest_i]);
    }
    wmt_exp_block.push(wmt_blocktransition);
}
