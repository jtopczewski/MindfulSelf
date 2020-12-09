/* ************************************ */
/* Define experimental variables */
/* ************************************ */

// CONSTANTS
const FDBCK_DUR = 1000;

// functions
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
};


// Set instructions helpers
var fist_instrhelper = {};

// Instructions 2Match
fist_instrhelper.instr1_pg1 =
    "<p>In this task, you will be presented with four cards. </p>" +
    "<p>Your task is to match three pairs of cards that are the same in one way, yet different from the other two cards." +
    "<br>The cards are labelled 1 to 4 from the top to bottom:</p>" +
    "<p><img src='../../img/FIST/NumLoc.jpg' width='333' height='333'></p>" +
    "<p>There will be boxes below the cards to type your answers. Please type the pair of numbers together. " +
    "<br>For example, if cards 1 and 2 match, type 12 in the box</p>" +
    "<p>At the end of each trial, you will be asked how similar each pair is.</p>";

fist_instrhelper.instr1_pg3 =
    "<div class='FIST_stimHeader'>Now you choose</div>" +
    "<img src='../../img/FIST/2Match_1.jpg' width='333' height='333'>" +
    "<br>The first pair is card 1 and 3." +
    "<br>The second pair is card 2 and 3.</br>";

fist_instrhelper.instr1_pg4 =
    "<div class='FIST_stimHeader'>How are they the same?</div>" +
    "<img src='../../img/FIST/2Match_1.jpg' width='333' height='333'>" +
    "<br>The first pair (1 & 3) is similar in <b>shape</b>." +
    "<br>The second pair (2 & 3) is similar in <b>size</b>.</br>" +
    "<p> You only need to type one word for this (i.e., shape, size, color, number).</p>";

// Instructions 4Match
fist_instrhelper.instr2_pg1 =
    "<p>In the next screen, you will see 4 cards instead of 3. </p>" +
    "<p>Your task is to match three pairs of cards that are the same in one way, yet different from the other two cards." +
    "<br>There are four possible solutions, but you are required to match only three.</p> " +
    "<p>At the end of each trial, you will be asked how similar each pair is.</p>";

fist_instrhelper.instr2_pg2 =
    "Now you choose" +
    "<br><img src='../../img/FIST/Demo1.jpg' width='333' height='333'>" +
    "<p>The first pair is picture 1 and 3." +
    "<br>The second pair is picture 1 and 4." +
    "<br>The third pair is picture 2 and 3." +
    "<br>The fourth pair is picture 3 and 4.</p>";

fist_instrhelper.instr2_pg3 =
    "How are they the same?" +
    "<br><img src='../../img/FIST/Demo1.jpg' width='333' height='333'>" +
    "<p>The first pair (1 & 3) is similar in <b>shape</b>." +
    "<br>The first pair (1 & 4) is similar in <b>number</b>." +
    "<br>The second pair (2 & 3) is similar in <b>size</b>." +
    "<br>The fourth pair (3 & 4) is similar in <b>color</b>.</p>";


// Practice
fist_instrhelper.pract_instr =
    "<p>Thank you for completing the demonstration. </p>" +
    "<p>Now we will proceed to some practice trials. " +
    "You will be given feedback on how you are doing during the practice.</p>" +
    "<p>Although there is no time limit, please complete the task as accurate and as quickly as you can.</p>" +
    "<p>If you cannot find a match, it is okay to leave the box empty.</p>" +
    "<p>Once you click the button, the practice trials will start.</p>";

// Experiment
fist_instrhelper.exp_instr_pg1 =
    "<p>Thank you for completing the practice. </p>" +
    "<p>Now we will proceed with the real experiment. ";

fist_instrhelper.exp_instr_pg2 =
    "<p>Remember, your task is to match three pairs of cards that are the same in one way, yet different from the other two cards. " +
    "The cards are labelled 1 to 4 from the top to bottom</p>" +
    "<p>There will be boxes below the cards to type your answers. Please type the pair of numbers together. " +
    "<br>For example, if cards 1 and 2 match, type 12 in the box.</p>" +
    "<p>If you cannot find a match, it is okay to leave the box empty.</p>" +
    "<p>At the end of each trial, you will be asked how similar each pair is.</p>" +
    "<p>Although there is no time limit, please complete the task as accurate and as quickly as you can.</p>";

// End block
fist_instrhelper.end_block = "<p class='continue_next'>Great job and thank you! You are now finished with this part of the study." +
    "<br>We will proceed with some questionnaires in the next few pages.</p>" +
    "<p class='continue_next'>Press <strong>ENTER</strong> to continue.</p>";

// Instructions
var fist_instr1 = {
    type: 'instructions',
    data: {
        exp_id: "FIST-task",
        trial_id: "instructions1"
    },
    pages: [
        // Page 1
        fist_instrhelper.instr1_pg1,
        // Page 2
        "In the next screen, you will see an example with only three cards instead of four.",

        // Page 3
        fist_instrhelper.instr1_pg3,

        // Page 4
        fist_instrhelper.instr1_pg4,

        // Page 5
        "In the next screen, we will try a similar example",
    ],
    show_clickable_nav: true,
    show_page_number: true
};

// test simple 2-match
var fist_match2 = {
    type: 'survey-html-form',
    data: {
        exp_id: "FIST-task",
        trial_id: "2match-demo",
        stimulus: '../img/FIST/2Match_2.jpg',

    },
    preamble:
        "<div class='FIST_stimHeader'>Now you choose</div>" +
        "<img src='../../img/FIST/2Match_2.jpg' width='333' height='333'>",
    html: '<p><input name="firstpair" type="text" />, <input name="secondpair" type="text" /></p>',
    on_finish: function (data) {
        var firstpair = JSON.parse(data.responses)["firstpair"];
        var secondpair = JSON.parse(data.responses)["secondpair"];
        var subjectpairs = [firstpair, secondpair];

        var correct_num_pairs = ["12", "13"];
        var correct_type_pairs = ["sizes", "numbers"];
        data.correct_num_pairs = correct_num_pairs.toString();
        data.correct_type_pairs = correct_type_pairs.toString();

        var i;
        var accuracy = 0;

        // Loop to check accuracy
        for (i = 0; i < subjectpairs.length; i++) {
            subjectpairs_i = subjectpairs[i];

            // Does the exact match exist?
            var check = correct_num_pairs.includes(subjectpairs_i);
            if (check === true) {
                var indexx = correct_num_pairs.indexOf(subjectpairs_i);
                correct_num_pairs.splice(indexx, 1);
                accuracy += 1;
            } else {
                // Does the reverse string match? e.g. if 13 is not a match, is 31 a match?
                var check2 = correct_num_pairs.includes(reverseString(subjectpairs_i));
                if (check2 === true) {
                    indexx = correct_num_pairs.indexOf(reverseString(subjectpairs_i));
                    correct_num_pairs.splice(indexx, 1);
                    accuracy += 1;
                }
            }
        }

        // Append accuracy and no. correct responses
        data.n_correct = accuracy;
        if (accuracy === 2) {
            data.accuracy = 1
        } else {
            data.accuracy = 0
        }
    }
};
var fist_match2_feedback = {
    type: 'html-keyboard-response',
    data: {
        exp_id: "FIST-task",
        trial_id: "2match-demo-feedback",
        stimulus: '../img/FIST/2Match_2.jpg',
    },
    stimulus: function() {
        var n_correct = JSON.parse(jsPsych.data.getLastTrialData().values()[0]["n_correct"]);
        return "<div class='FIST_feedback'>you got " + n_correct + " correct</div>";
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: FDBCK_DUR,
    on_finish: function(data) {

        var correct_num_pairs = ["12", "13"];
        var correct_type_pairs = ["sizes", "numbers"];

        // set data correct pairs
        data.correct_num_pairs = correct_num_pairs.toString();
        data.correct_type_pairs = correct_type_pairs.toString();

    }
};
var fist_match2_how = {
    type: 'survey-html-form',
    data: {
        exp_id: "FIST-task",
        trial_id: "2match-demo-how",
        stimulus: '../img/FIST/2Match_2.jpg',
    },
    preamble: function(){
        var responsepairs = JSON.parse(jsPsych.data.get().last(2).values()[0]["responses"]);

        return "<div class='FIST_stimHeader'>How are they the same?</div>" +
            "<img src='../../img/FIST/2Match_2.jpg' width='333' height='333'>" +
            "<br>You have chosen " + responsepairs["firstpair"] + " and " + responsepairs["secondpair"]
    },
    html: '<p><input name="firstpair" type="text" />, <input name="secondpair" type="text" /></p>',
    on_finish: function (data) {
        // Get type-pairs response
        subjectpairs = [];
        for(var i in JSON.parse(data.responses))
            subjectpairs.push(JSON.parse(data.responses)[i].toLowerCase());
        // Get responses from previous number pairs part
        var responsepairs = JSON.parse(jsPsych.data.get().last(3).values()[0]["responses"]);
        responsepairs_arr = []; // This is the numbers written down from previous part
        for(var i in responsepairs)
            responsepairs_arr.push(responsepairs[i]);

        // Get correct number-type pairs
        var correct_num_pairs = ["12", "13"];
        var correct_type_pairs = ["sizes", "numbers"];
        data.correct_num_pairs = correct_num_pairs.toString();
        data.correct_type_pairs = correct_type_pairs.toString();
        correct_num_type_pairs = {};
        for (i = 0; i < correct_num_pairs.length; i++) {
            correct_num_type_pairs[correct_num_pairs[i]] = correct_type_pairs[i]
        }

        var i;
        var accuracy = 0;

        // Get what participant should answer based on number-pairs response
        sub_response = [];
        for (i = 0; i < responsepairs_arr.length; i++) {
            arr_i = responsepairs_arr[i]

            // if exist correct paris, get what they should have responded
            var check1 = correct_num_pairs.includes(arr_i);
            var check2 = correct_num_pairs.includes(reverseString(arr_i));

            if (check1 === true) {
                sub_response.push(correct_num_type_pairs[arr_i]);
            }
            if (check2 === true) {
                sub_response.push(correct_num_type_pairs[reverseString(arr_i)]);
            }
        };
        sub_response = sub_response.filter((x, i, a) => a.indexOf(x) == i) // Get only unique

        // Loop to check accuracy
        for (i = 0; i < subjectpairs.length; i++) {
            subjectpairs_i = subjectpairs[i];
            if(subjectpairs_i === "colours"||subjectpairs_i === "colors"||subjectpairs_i === "color"||subjectpairs_i === "colour"){
                subjectpairs_i = "colors";
            }
            // Check for every element in num_pairs
            for (ii = 0; ii < sub_response.length; ii++) {

                // If answer is blank
                if (subjectpairs_i == "") {
                    accuracy += 0;
                } else {
                    // Compare against response

                    var check = sub_response[ii].includes(subjectpairs_i);
                    if (check === true) {
                        sub_response.splice(ii, 1);
                        accuracy += 1;
                        break
                    }
                }
            }
        }

        // Append accuracy and no. correct responses
        data.n_correct = accuracy;
        if (accuracy === 2) {
            data.accuracy = 1
        } else {
            data.accuracy = 0
        }
    }

};
var fist_match2_how_feedback = {
    type: 'html-keyboard-response',
    data: {
        exp_id: "FIST-task",
        trial_id: "2match-demo-how-feedback",
        stimulus: '../img/FIST/2Match_2.jpg',
    },
    stimulus: function() {

        // Return feedback
        var n_correct = JSON.parse(jsPsych.data.getLastTrialData().values()[0]["n_correct"]);
        return "<div class='FIST_feedback'>you got " + n_correct + " correct</div>";
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: FDBCK_DUR,
    on_finish: function(data) {
        var correct_num_pairs = ["12", "13"];
        var correct_type_pairs = ["sizes", "numbers"];

        // set data correct pairs
        data.correct_num_pairs = correct_num_pairs.toString();
        data.correct_type_pairs = correct_type_pairs.toString();

    }
};

// Demonstration 3-match
var fist_instr2 = {
    type: 'instructions',
    data: {
        exp_id: "FIST-task",
        trial_id: "instructions2"
    },
    pages: [
        // Page 1
        fist_instrhelper.instr2_pg1,

        // Page 2
        fist_instrhelper.instr2_pg2,

        // Page 3
        fist_instrhelper.instr2_pg3,

        // Page 4
        "In the next screen, we will try a similar example",
    ],
    show_clickable_nav: true,
    show_page_number: true
};

var fist_match3 = {
    type: 'survey-html-form',
    data: {
        exp_id: "FIST-task",
        trial_id: "3match-demo",
        stimulus: '../img/FIST/Demo2.jpg',
    },
    preamble:
        "<div class='FIST_stimHeader'>Now you choose</div>" +
        "<img src='../../img/FIST/Demo2.jpg' width='333' height='333'>",
    html: '<p><input name="firstpair" type="text" />, ' +
        '<input name="secondpair" type="text" />, ' +
        '<input name="thirdpair" type="text" /></p>',
    on_finish: function (data) {
        var firstpair = JSON.parse(data.responses)["firstpair"];
        var secondpair = JSON.parse(data.responses)["secondpair"];
        var thirdpair = JSON.parse(data.responses)["thirdpair"];
        var subjectpairs = [firstpair, secondpair, thirdpair];

        var correct_num_pairs = ["12", "13", "24", "34"];
        var correct_type_pairs = ["colors", "numbers", "sizes", "shapes"];
        data.correct_num_pairs = correct_num_pairs.toString();
        data.correct_type_pairs = correct_type_pairs.toString();

        var i;
        var accuracy = 0;
        // Loop to check accuracy
        for (i = 0; i < subjectpairs.length; i++) {
            subjectpairs_i = subjectpairs[i];

            // Does the exact match exist?
            var check = correct_num_pairs.includes(subjectpairs_i);
            if (check === true) {
                var indexx = correct_num_pairs.indexOf(subjectpairs_i);
                correct_num_pairs.splice(indexx, 1);
                accuracy += 1;
            } else {
                // Does the reverse string match? e.g. if 13 is not a match, is 31 a match?
                var check2 = correct_num_pairs.includes(reverseString(subjectpairs_i));
                if (check2 === true) {
                    indexx = correct_num_pairs.indexOf(reverseString(subjectpairs_i));
                    correct_num_pairs.splice(indexx, 1);
                    accuracy += 1;
                }
            }
        }

        // Append accuracy and no. correct responses
        data.n_correct = accuracy;
        if (accuracy === 3) {
            data.accuracy = 1
        } else {
            data.accuracy = 0
        }
    }
};
var fist_match3_feedback = {
    type: 'html-keyboard-response',
    data: {
        exp_id: "FIST-task",
        trial_id: "3match-demo-feedback",
        stimulus: '../img/FIST/Demo2.jpg',
    },
    stimulus: function() {
        var n_correct = JSON.parse(jsPsych.data.getLastTrialData().values()[0]["n_correct"]);
        return "<div class='FIST_feedback'>you got " + n_correct + " correct</div>";
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: FDBCK_DUR,
    on_finish: function(data) {
        var correct_num_pairs = ["12", "13", "24", "34"];
        var correct_type_pairs = ["colors", "numbers", "sizes", "shapes"];

        // set data correct pairs
        data.correct_num_pairs = correct_num_pairs.toString();
        data.correct_type_pairs = correct_type_pairs.toString();
    }
};
var fist_match3_how = {
    type: 'survey-html-form',
    data: {
        exp_id: "FIST-task",
        trial_id: "3match-demo-how",
        stimulus: '../img/FIST/Demo2.jpg',
    },
    preamble: function(){
        var responsepairs = JSON.parse(jsPsych.data.get().last(2).values()[0]["responses"]);
        return "<div class='FIST_stimHeader'>How are they the same?</div>" +
            "<img src='../../img/FIST/Demo2.jpg' width='333' height='333'>" +
            "<br>You have chosen " + responsepairs["firstpair"] + " , " + responsepairs["secondpair"] + " , and " + responsepairs["thirdpair"];
    },
    html: '<p><input name="firstpair" type="text" />, ' +
        '<input name="secondpair" type="text" />, ' +
        '<input name="thirdpair" type="text" /></p>',
    on_finish: function (data) {
        // Get type-pairs response
        subjectpairs = [];
        for(var i in JSON.parse(data.responses))
            subjectpairs.push(JSON.parse(data.responses)[i].toLowerCase());

        // Get responses from previous number pairs part
        var responsepairs = JSON.parse(jsPsych.data.get().last(3).values()[0]["responses"]);
        responsepairs_arr = []; // This is the numbers written down from previous part
        for(var i in responsepairs)
            responsepairs_arr.push(responsepairs[i]);

        // Get correct number-type pairs
        var correct_num_pairs = ["12", "13", "24", "34"];
        var correct_type_pairs = ["colors", "numbers", "sizes", "shapes"];
        data.correct_num_pairs = correct_num_pairs.toString();
        data.correct_type_pairs = correct_type_pairs.toString();
        correct_num_type_pairs = {};
        for (i = 0; i < correct_num_pairs.length; i++) {
            correct_num_type_pairs[correct_num_pairs[i]] = correct_type_pairs[i]
        }

        var i;
        var accuracy = 0;

        // Get what participant should answer based on number-pairs response
        sub_response = [];
        for (i = 0; i < responsepairs_arr.length; i++) {
            arr_i = responsepairs_arr[i]

            // if exist correct paris, get what they should have responded
            var check1 = correct_num_pairs.includes(arr_i);
            var check2 = correct_num_pairs.includes(reverseString(arr_i));

            if (check1 === true) {
                sub_response.push(correct_num_type_pairs[arr_i]);
            }
            if (check2 === true) {
                sub_response.push(correct_num_type_pairs[reverseString(arr_i)]);
            }
        };
        sub_response = sub_response.filter((x, i, a) => a.indexOf(x) == i) // Get only unique

        // Loop to check accuracy
        for (i = 0; i < subjectpairs.length; i++) {
            subjectpairs_i = subjectpairs[i];

            if(subjectpairs_i === "colours"||subjectpairs_i === "colors"||subjectpairs_i === "color"||subjectpairs_i === "colour"){
                subjectpairs_i = "colors";
            }
            // Check for every element in num_pairs
            for (ii = 0; ii < sub_response.length; ii++) {

                // If answer is blank
                if (subjectpairs_i == "") {
                    accuracy += 0;
                } else {
                    // Compare against response
                    var check = sub_response[ii].includes(subjectpairs_i);
                    if (check === true) {
                        sub_response.splice(ii, 1);
                        accuracy += 1;
                        break
                    }
                }
            }
        }

        // Append accuracy and no. correct responses
        data.n_correct = accuracy;
        if (accuracy === 3) {
            data.accuracy = 1
        } else {
            data.accuracy = 0
        }
    }

};
var fist_match3_how_feedback = {
    type: 'html-keyboard-response',
    data: {
        exp_id: "FIST-task",
        trial_id: "3match-demo-how-feedback",
        stimulus: '../img/FIST/Demo2.jpg',
    },
    stimulus: function() {

        // Return feedback
        var n_correct = JSON.parse(jsPsych.data.getLastTrialData().values()[0]["n_correct"]);
        return "<div class='FIST_feedback'>you got " + n_correct + " correct</div>";
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: FDBCK_DUR,
    on_finish: function(data) {
        var correct_num_pairs = ["12", "13", "24", "34"];
        var correct_type_pairs = ["colors", "numbers", "sizes", "shapes"];

        // set data correct pairs
        data.correct_num_pairs = correct_num_pairs.toString();
        data.correct_type_pairs = correct_type_pairs.toString();
    }
};


/* ************************************ */
/* Set up jsPsych practice block */
/* ************************************ */

var fist_prac_instr = {
    type: 'instructions',
    data: {
        exp_id: "FIST-task",
        trial_id: "practice-instructions"
    },
    pages: [
        // Page 1
        fist_instrhelper.pract_instr,
    ],
    show_clickable_nav: true,
    show_page_number: true
};

// Set practice stimuli
var fist_practArray = [fist_pract1, fist_pract2, fist_pract3];
var fist_practArray_shuf = jsPsych.randomization.repeat(fist_practArray, 1);

// Set practice trials
var fist_prac_trial = {
    type: 'survey-html-form',
    on_start: function(trial) {
        stimulus = jsPsych.timelineVariable('stimulus', true);

        // Set trial parameters
        trial.preamble =
            "<div class='FIST_stimHeader'>Now you choose</div>" +
            "<img src=" + stimulus + " width='333' height='333'>";
        trial.data = {
            exp_id: "FIST-task",
            trial_id: "practice-trial",
            stimulus: stimulus,
        };
    },
    data: "",
    preamble: "",
    html: '<p><input name="firstpair" type="text" />, ' +
        '<input name="secondpair" type="text" />, ' +
        '<input name="thirdpair" type="text" /></p>',
    on_finish: function (data) {
        var firstpair = JSON.parse(data.responses)["firstpair"];
        var secondpair = JSON.parse(data.responses)["secondpair"];
        var thirdpair = JSON.parse(data.responses)["thirdpair"];
        var subjectpairs = [firstpair, secondpair, thirdpair];

        // set data correct pairs
        var correct_num_pairs = jsPsych.timelineVariable('correct_num_pairs', true);
        var correct_type_pairs = jsPsych.timelineVariable('correct_type_pairs', true);
        data.correct_num_pairs = correct_num_pairs.toString();
        data.correct_type_pairs = correct_type_pairs.toString();
        var i;
        var accuracy = 0;

        // Loop to check accuracy
        for (i = 0; i < subjectpairs.length; i++) {
            subjectpairs_i = subjectpairs[i];

            // Does the exact match exist?
            var check = correct_num_pairs.includes(subjectpairs_i);
            if (check === true) {
                var indexx = correct_num_pairs.indexOf(subjectpairs_i);
                correct_num_pairs.splice(indexx, 1);
                accuracy += 1;
            } else {
                // Does the reverse string match? e.g. if 13 is not a match, is 31 a match?
                var check2 = correct_num_pairs.includes(reverseString(subjectpairs_i));
                if (check2 === true) {
                    indexx = correct_num_pairs.indexOf(reverseString(subjectpairs_i));
                    correct_num_pairs.splice(indexx, 1);
                    accuracy += 1;
                }
            }

            if (subjectpairs_i === "") {
                accuracy += 0;
            }
        }

        // Append accuracy and no. correct responses
        data.n_correct = accuracy;
        if (accuracy === 3) {
            data.accuracy = 1
        } else {
            data.accuracy = 0
        }
    }
};
var fist_prac_trial_feedback = {
    type: 'html-keyboard-response',
    on_start: function(trial) {
        // Set data in trial
        trial.data = {
            exp_id: "FIST-task",
            trial_id: "practice-trial-feedback",
            stimulus: jsPsych.timelineVariable('stimulus', true),
        };
    },
    data: "",
    stimulus: function() {
        var n_correct = JSON.parse(jsPsych.data.getLastTrialData().values()[0]["n_correct"]);
        return "<div class='FIST_feedback'>you got " + n_correct + " correct</div>";
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: FDBCK_DUR,
    on_finish: function(data) {
        var correct_num_pairs = jsPsych.data.get().last(2).values()[0]["correct_num_pairs"].split(',');
        var correct_type_pairs = jsPsych.data.get().last(2).values()[0]["correct_type_pairs"].split(',');

        // set data correct pairs
        data.correct_num_pairs = correct_num_pairs.toString();
        data.correct_type_pairs = correct_type_pairs.toString();

    }
};
var fist_prac_how = {
    type: 'survey-html-form',
    on_start: function(trial) {
        stimulus = jsPsych.timelineVariable('stimulus', true);
        var responsepairs = JSON.parse(jsPsych.data.get().last(2).values()[0]["responses"]);

        // Set trial parameters
        trial.preamble =
            "<div class='FIST_stimHeader'>How are they the same?</div>" +
            "<img src=" + stimulus + " width='333' height='333'>" +
            "<br>You have chosen " + responsepairs["firstpair"] + " , " + responsepairs["secondpair"] + " , and " + responsepairs["thirdpair"];

        trial.data = {
            exp_id: "FIST-task",
            trial_id: "practice-trial-how",
            stimulus: stimulus,
        };
    },
    html: '<p><input name="firstpair" type="text" />, ' +
        '<input name="secondpair" type="text" />, ' +
        '<input name="thirdpair" type="text" /></p>',
    on_finish: function (data) {

        // Get type-pairs response
        subjectpairs = [];
        for(var i in JSON.parse(data.responses))
            subjectpairs.push(JSON.parse(data.responses)[i].toLowerCase());

        // Get responses from previous number pairs part
        var responsepairs = JSON.parse(jsPsych.data.get().last(3).values()[0]["responses"]);
        responsepairs_arr = []; // This is the numbers written down from previous part
        for(var i in responsepairs)
            responsepairs_arr.push(responsepairs[i]);

        // Get correct number-type pairs
        var correct_num_pairs = jsPsych.data.get().last(2).values()[0]["correct_num_pairs"].split(',');
        var correct_type_pairs = jsPsych.data.get().last(2).values()[0]["correct_type_pairs"].split(',');
        data.correct_num_pairs = correct_num_pairs.toString();
        data.correct_type_pairs = correct_type_pairs.toString();
        correct_num_type_pairs = {};
        for (i = 0; i < correct_num_pairs.length; i++) {
            correct_num_type_pairs[correct_num_pairs[i]] = correct_type_pairs[i];
        }

        var i;
        var accuracy = 0;

        // Get what participant should answer based on number-pairs response
        sub_response = [];
        for (i = 0; i < responsepairs_arr.length; i++) {
            arr_i = responsepairs_arr[i]

            // if exist correct paris, get what they should have responded
            var check1 = correct_num_pairs.includes(arr_i);
            var check2 = correct_num_pairs.includes(reverseString(arr_i));

            if (check1 === true) {
                sub_response.push(correct_num_type_pairs[arr_i]);
            }
            if (check2 === true) {
                sub_response.push(correct_num_type_pairs[reverseString(arr_i)]);
            }
        };
        sub_response = sub_response.filter((x, i, a) => a.indexOf(x) == i) // Get only unique

        // Loop to check accuracy
        for (i = 0; i < subjectpairs.length; i++) {
            subjectpairs_i = subjectpairs[i];
            if(subjectpairs_i === "colours"||subjectpairs_i === "colors"||subjectpairs_i === "color"||subjectpairs_i === "colour"){
                subjectpairs_i = "colors";
            }
            // Check for every element in num_pairs
            for (ii = 0; ii < sub_response.length; ii++) {

                // If answer is blank
                if (subjectpairs_i == "") {
                    accuracy += 0;
                } else {
                    // Compare against response
                    var check = sub_response[ii].includes(subjectpairs_i);
                    if (check === true) {
                        sub_response.splice(ii, 1);
                        accuracy += 1;
                        break
                    }
                }
            }
        }

        // Append accuracy and no. correct responses
        data.n_correct = accuracy;
        if (accuracy === 3) {
            data.accuracy = 1
        } else {
            data.accuracy = 0
        }
    }

};
var fist_prac_how_feedback = {
    type: 'html-keyboard-response',
    on_start: function(trial) {
        // Set data in trial
        trial.data = {
            exp_id: "FIST-task",
            trial_id: "practice-trial-how-feedback",
            stimulus: jsPsych.timelineVariable('stimulus', true),
            correct_num_pairs: jsPsych.timelineVariable('correct_num_pairs', true).toString(),
            correct_type_pairs: jsPsych.timelineVariable('correct_type_pairs', true).toString()
        };
    },
    data: "",
    stimulus: function() {
        // Return feedback
        var n_correct = JSON.parse(jsPsych.data.getLastTrialData().values()[0]["n_correct"]);
        return "<div class='FIST_feedback'>you got " + n_correct + " correct</div>";
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: FDBCK_DUR,
};

// Set practice procedure
var fist_pract_procedure = {
    timeline: [fist_prac_trial, fist_prac_trial_feedback, fist_prac_how, fist_prac_how_feedback],
    timeline_variables: fist_practArray_shuf,
    randomize_order: true,
    repetitions: 1 // 1 set = 3 trials
};


/* ************************************ */
/* Set up jsPsych experiment block */
/* ************************************ */

var fist_exp_instr = {
    type: 'instructions',
    data: {
        exp_id: "FIST-task",
        trial_id: "exp-instructions"
    },
    pages: [
        // Page 1
        fist_instrhelper.exp_instr_pg1,

        // Page 2
        fist_instrhelper.exp_instr_pg2,
    ],
    show_clickable_nav: true,
    show_page_number: true
};

// Set experimental stimuli
var fist_expArray = [
    fist_Flex1, fist_Flex2, fist_Flex3, fist_Flex4, fist_Flex5, fist_Flex6, fist_Flex7, fist_Flex8, fist_Flex9, fist_Flex10,
    fist_Flex11, fist_Flex12, fist_Flex13, fist_Flex14, fist_Flex15, fist_Flex16, fist_Flex17, fist_Flex18, fist_Flex19, fist_Flex20,
];
var fist_expArray_shuf = jsPsych.randomization.repeat(fist_expArray, 1);

// Set experimental trials
var fist_exp_trial = {
    type: 'survey-html-form',
    on_start: function(trial) {
        stimulus = jsPsych.timelineVariable('stimulus', true);

        // Set trial parameters
        trial.preamble =
            "<div class='FIST_stimHeader'>Now you choose</div>" +
            "<img src=" + stimulus + " width='333' height='333'>";
        trial.data = {
            exp_id: "FIST-task",
            trial_id: "exp-trial",
            stimulus: stimulus,
        };
    },
    data: "",
    preamble: "",
    html: '<p><input name="firstpair" type="text" />, ' +
        '<input name="secondpair" type="text" />, ' +
        '<input name="thirdpair" type="text" /></p>',
    on_finish: function (data) {
        var firstpair = JSON.parse(data.responses)["firstpair"];
        var secondpair = JSON.parse(data.responses)["secondpair"];
        var thirdpair = JSON.parse(data.responses)["thirdpair"];
        var subjectpairs = [firstpair, secondpair, thirdpair];

        // set data correct pairs
        var correct_num_pairs = jsPsych.timelineVariable('correct_num_pairs', true);
        var correct_type_pairs = jsPsych.timelineVariable('correct_type_pairs', true);
        data.correct_num_pairs = correct_num_pairs.toString();
        data.correct_type_pairs = correct_type_pairs.toString();

        var i;
        var accuracy = 0;

        // Loop to check accuracy
        for (i = 0; i < subjectpairs.length; i++) {
            subjectpairs_i = subjectpairs[i];

            // Does the exact match exist?
            var check = correct_num_pairs.includes(subjectpairs_i);
            if (check === true) {
                var indexx = correct_num_pairs.indexOf(subjectpairs_i);
                correct_num_pairs.splice(indexx, 1);
                accuracy += 1;
            } else {
                // Does the reverse string match? e.g. if 13 is not a match, is 31 a match?
                var check2 = correct_num_pairs.includes(reverseString(subjectpairs_i));
                if (check2 === true) {
                    indexx = correct_num_pairs.indexOf(reverseString(subjectpairs_i));
                    correct_num_pairs.splice(indexx, 1);
                    accuracy += 1;
                }
            }

            if (subjectpairs_i === "") {
                accuracy += 0;
            }
        }

        // Append accuracy and no. correct responses
        data.n_correct = accuracy;
        if (accuracy === 3) {
            data.accuracy = 1
        } else {
            data.accuracy = 0
        }
    }
};
var fist_exp_how = {
    type: 'survey-html-form',
    on_start: function(trial) {
        stimulus = jsPsych.timelineVariable('stimulus', true);


        var responsepairs = JSON.parse(jsPsych.data.get().last(1).values()[0]["responses"]);
        var firstpair = responsepairs["firstpair"];
        var secondpair = responsepairs["secondpair"];
        var thirdpair = responsepairs["thirdpair"];

        // Set trial parameters
        trial.preamble =
            "<div class='FIST_stimHeader'>How are they the same?</div>" +
            "<img src=" + stimulus + " width='333' height='333'>" +
            "<br>You have chosen " + firstpair + " , " + secondpair + " , and " + thirdpair;
        trial.data = {
            exp_id: "FIST-task",
            trial_id: "exp-trial-how",
            stimulus: stimulus,
        };
    },
    html: '<p><input name="firstpair" type="text" />, ' +
        '<input name="secondpair" type="text" />, ' +
        '<input name="thirdpair" type="text" /></p>',
    on_finish: function (data) {

        // Get type-pairs response
        subjectpairs = [];
        for(var i in JSON.parse(data.responses))
            subjectpairs.push(JSON.parse(data.responses)[i].toLowerCase());

        // Get responses from previous number pairs part
        var responsepairs = JSON.parse(jsPsych.data.get().last(2).values()[0]["responses"]);
        responsepairs_arr = []; // This is the numbers written down from previous part
        for(var i in responsepairs)
            responsepairs_arr.push(responsepairs[i]);

        // Get correct number-type pairs
        var correct_num_pairs = jsPsych.data.get().last(2).values()[0]["correct_num_pairs"].split(',');
        var correct_type_pairs = jsPsych.data.get().last(2).values()[0]["correct_type_pairs"].split(',');
        data.correct_num_pairs = correct_num_pairs.toString();
        data.correct_type_pairs = correct_type_pairs.toString();
        correct_num_type_pairs = {};
        for (i = 0; i < correct_num_pairs.length; i++) {
            correct_num_type_pairs[correct_num_pairs[i]] = correct_type_pairs[i];
        }

        var i;
        var accuracy = 0;

        // Get what participant should answer based on number-pairs response
        sub_response = [];
        for (i = 0; i < responsepairs_arr.length; i++) {
            arr_i = responsepairs_arr[i]

            // if exist correct paris, get what they should have responded
            var check1 = correct_num_pairs.includes(arr_i);
            var check2 = correct_num_pairs.includes(reverseString(arr_i));

            if (check1 === true) {
                sub_response.push(correct_num_type_pairs[arr_i]);
            }
            if (check2 === true) {
                sub_response.push(correct_num_type_pairs[reverseString(arr_i)]);
            }
        };
        sub_response = sub_response.filter((x, i, a) => a.indexOf(x) == i) // Get only unique

        // Loop to check accuracy
        for (i = 0; i < subjectpairs.length; i++) {
            subjectpairs_i = subjectpairs[i];
            if(subjectpairs_i === "colours"||subjectpairs_i === "colors"||subjectpairs_i === "color"||subjectpairs_i === "colour"){
                subjectpairs_i = "colors";
            }

            // Check for every element in num_pairs
            for (ii = 0; ii < sub_response.length; ii++) {
                // If answer is blank
                if (subjectpairs_i == "") {
                    accuracy += 0;
                } else {
                    // Compare against response
                    var check = sub_response[ii].includes(subjectpairs_i);
                    if (check === true) {
                        sub_response.splice(ii, 1);
                        accuracy += 1;
                        break
                    }
                }
            }
        }

        // Append accuracy and no. correct responses
        data.n_correct = accuracy;
        if (accuracy === 3) {
            data.accuracy = 1
        } else {
            data.accuracy = 0
        }
    }

};

// Set practice procedure
var fist_exp_procedure = {
    timeline: [fist_exp_trial, fist_exp_how],
    timeline_variables: fist_expArray_shuf,
    randomize_order: true,
    repetitions: 1 // 1 set = 30 trials
};

// end experiment block
var fist_end_block = {
    type: "html-keyboard-response",
    data: {
        exp_id: "FIST-task",
        trial_id: "end_bc"
    },
    stimulus: fist_instrhelper.end_block,
    choices: [13]
};


/* *************** */
/* Set up timeline */
/* *************** */

// FIST_instr.push({type: 'fullscreen', fullscreen_mode: true}); /* enter fullscreen mode */
var FIST_instr = [];
FIST_instr.push(fist_instr1);
FIST_instr.push(fist_match2);
FIST_instr.push(fist_match2_feedback);
FIST_instr.push(fist_match2_how);
FIST_instr.push(fist_match2_how_feedback);
FIST_instr.push(fist_instr2);
FIST_instr.push(fist_match3);
FIST_instr.push(fist_match3_feedback);
FIST_instr.push(fist_match3_how);
FIST_instr.push(fist_match3_how_feedback);

// practice trials
var FIST_prac = [];
FIST_prac.push(fist_prac_instr);
FIST_prac.push(fist_pract_procedure);

// experimental trials
var FIST_test = [];
FIST_test.push(fist_exp_instr);
FIST_test.push(fist_exp_procedure);
FIST_test.push(fist_end_block);

FIST_block = [...FIST_instr, ...FIST_prac, ...FIST_test];
// FIST_instr.push({type: 'fullscreen', fullscreen_mode: false }); /* exit fullscreen mode */
