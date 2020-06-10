// Set Date
var TODAY = new Date();
var DD = String(TODAY.getDate()).padStart(2, '0');
var MM = String(TODAY.getMonth() + 1).padStart(2, '0');
var YYYY = TODAY.getFullYear();
const DATE = YYYY + MM + DD;


var welcome = {};

// --------------  things that vary from task to task --------------

welcome.task = {};
welcome.task.blurb = '<b>"Body-mind training"</b> is a short mindfulness intervention study investigating how mindfulness affects the self.';
welcome.task.time = '60 minutes';

// --------------  things that vary between ethics approvals --------------

welcome.ethics = {};
welcome.ethics.invite =
    "You are invited to participate in a study of Mindfulness and the Self. " +
    "We hope to learn about what affects a person's experience during mindfulness.";

welcome.ethics.description =
    'In this study, you will perform several tasks, including a breath counting task for about 10 minutes, and tasks that measure different aspects of mental flexibility. ' +
    'Additionally, you will also complete several questionnaires in between tasks. ' +
    'The total time required for the study is approximately ' + welcome.task.time + '.' +

    '<p>As one of the tasks requires you to be exposed to several short horror clips (less than 1 minute), you might feel shocked for a moment. ' +
    'No other discomforts or inconveniences besides some boredom are reasonably expected. ' +
    'No risks are reasonably expected as a result of your participation in this study.' +
    'We cannot and do not guarantee or promise that the shock is short-lasting from this study.</p>';

// ----------------------- function to start the task ------------------
welcome.run = function() { 
    document.getElementById("welcome").innerHTML =
        welcome.section.header +
        welcome.section.consent +
        welcome.section.demographics;
};

// ------------- actions to take at the end of each click ----------------
welcome.click = {};
welcome.click.start = function() {
    welcome.helpers.setDisplay('start', 'none');
    welcome.helpers.setDisplay('consent', '');
    welcome.helpers.setHeader(' ');   
};
welcome.click.consent = function() {
    welcome.helpers.setDisplay('consent', 'none');
    welcome.helpers.setDisplay('demographics', '');
    welcome.helpers.setHeader(' ');
};
welcome.click.demographics = function() {
    BC_EXP_CONDITIONS = ["BC", "MF"];
    bc_condition = jsPsych.randomization.sampleWithReplacement(BC_EXP_CONDITIONS, 1);
    welcome.helpers.setDisplay('demographics', 'none');
    welcome.helpers.setDisplay('header', 'none');
    jsPsych.data.addProperties({  // record the condition assignment in the jsPsych data
        ID: document.getElementById("partID").value,
        ID_DATE: document.getElementById("partID").value + "_" + DATE,
        gender: welcome.helpers.getRadioButton("gender"),
        age: document.getElementById("age").value,
        bc_condition: bc_condition[0]
    });
    startExperiment(); // start the jsPsych experiment
};


// ------------- html for the various sections ----------------
welcome.section = {};
welcome.section.header =
    '<!-- ####################### Heading ####################### -->' +
    '<a name="top"></a>' +
    '<h1 style="text-align:center; width:1200px" id="header" class="header">' +
    '   &nbsp;The Mindful Self</h1>';

welcome.section.consent =
    '	<!-- ####################### Consent ####################### -->' +
    '	<div class="consent" style="width:1000px">' +
    '		<!-- Text box for the splash page -->' +
    '		<div class="consent" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:right">' +
    // Purpose of Study
    '			<p><b>Purpose of Study</b></p>' +
    '			<p>' + welcome.ethics.invite + '</p>' +
    // Description of Study and Risks
    '			<p><b>Description of Study and Risks</b></p>' +
    '			<p>' + welcome.ethics.description + '</p>' +
    // PARTICIPANT CONSENT
    '			<p align="center">' +
    '           <input type="button" id="consentButton" class="consent jspsych-btn" value="Continue" onclick="welcome.click.consent()" >' +
    '			</p></div><br><br></div>';

welcome.section.demographics =
 '	<!-- ####################### Demographics ####################### -->' +
    '	<div class="demographics" style="display:none; align:center; width: 1000px">' +
    '		<div class="demographics" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:right">' +
    '			<!-- Explanatory text -->' +
    '            <p font-size:110%><b>Demographic information:</b></p>' +
    '			<!-- ID/Name -->' +
    '           <label for="partID"><b>ID: &nbsp;</b></label><input id="partID" name="partID" /><br/><br/>' +
    '			<!-- Gender -->' +
    '           <label for="gender"><b>Gender: &nbsp;</b></label>' +
    '           <input type="radio" name="gender" value="male" /> Male &nbsp; ' +
    '           <input type="radio" name="gender" value="female" /> Female &nbsp;' +
    '           <input type="radio" name="gender" value="other" /> Other<br/><br/>' +
    '			<!-- Age -->' +
    '           <label for="age"><b>Age: &nbsp;</b></label><input id="age" name="age" /><br/><br/>' +
    '		<br><br>' +
    '		<!-- Demographics  button -->' +
    '        <p align="center">' +
    '                <input type="button" class="demographics jspsych-btn"' +
    '                        id="demographicsButton" value="Next >"' +
    '                       onclick="welcome.click.demographics()">' +
    '       </p></div>';



// ----------------------- helper functions ------------------

welcome.helpers = {};
welcome.helpers.getRadioButton = function(name) { // get the value of a radio button
    var i, radios = document.getElementsByName(name);
    for (i = 0; i < radios.length; i = i + 1) {
        if (radios[i].checked) {
            return (radios[i].value);
        }
    }
    return ("NA");
};
welcome.helpers.setDisplay = function(theClass, theValue) { // toggle display status
    var i, classElements = document.getElementsByClassName(theClass);
    for (i = 0; i < classElements.length; i = i + 1) {
        classElements[i].style.display = theValue;
    }
};
welcome.helpers.setVisibility = function(theClass, theValue) { // toggle visibility
    var i, classElements = document.getElementsByClassName(theClass);
    for (i = 0; i < classElements.length; i = i + 1) {
        classElements[i].style.visibility = theValue;
    }
};
welcome.helpers.setHeader = function(theValue) { // alter the header
    document.getElementById("header").innerText = theValue;
};