// Set Date
var TODAY = new Date();
var DD = String(TODAY.getDate()).padStart(2, '0');
var MM = String(TODAY.getMonth() + 1).padStart(2, '0');
var YYYY = TODAY.getFullYear();
const DATE = YYYY + MM + DD;


var welcome = {};

// --------------  things that vary from task to task --------------

welcome.task = {};
welcome.task.blurb = '<b>"Improving performances through attention and self-control training"</b> ' +
    'aims to explore the individual differences in response to mental training. ' +
    'We hope that this study will provide valuable information about the effects of training on the brain and behavior.';
welcome.task.time = '30 minutes';
welcome.task.pay = '$60';

// --------------  things that vary between ethics approvals --------------

welcome.ethics = {};
welcome.ethics.approval = 'XXXX';
welcome.ethics.name = 'Improving performances through attention and self-control training';
welcome.ethics.invite = "You are invited to participate in a study to test individual differences in response to training in college students. " +
    "The study will help us learn the potential individual differences in training and performance";
welcome.ethics.description = 'We will schedule you for 5 separate mental training sessions using computerized working memory task. ' +
    'You will also be asked to complete brief questionnaires related to stress and mood. The total time for each visit will be less than 60 min';
welcome.ethics.risk = 'There is very little risk to you to participate in this study. ' +
    'You may be uncomfortable filling our information about stress and mood and mental training';


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

    // Get Day number
    daynumber = document.getElementById("day").value

    if(daynumber === "NA"){
        alert("Please select a day!");
    }

    welcome.helpers.setDisplay('demographics', 'none');
    welcome.helpers.setDisplay('header', 'none');
    jsPsych.data.addProperties({  // record the condition assignment in the jsPsych data
        ID: document.getElementById("partID").value,
        ID_DATE: document.getElementById("partID").value + "_" + DATE,
        daynumber: document.getElementById("day").value,
        gender: welcome.helpers.getRadioButton("gender"),
        age: document.getElementById("age").value
    });
    // startExperiment(); // start the jsPsych experiment
    console.log("Running Day")

    if (daynumber == 1) {
        startDay1();
    } else if (daynumber == 5) {
        startDay5();
    } else {
        startDay();
    }

};


// ------------- html for the various sections ----------------
welcome.section = {};
welcome.section.header =
    '<!-- ####################### Heading ####################### -->' +
    '<a name="top"></a>' +
    '<h1 style="text-align:center; width:1200px" id="header" class="header">' +
    '   &nbsp; Working Memory Training</h1>';

welcome.section.consent =
    '	<!-- ####################### Consent ####################### -->' +
    '	<div class="consent" style="width:1000px">' +
    '		<!-- Text box for the splash page -->' +
    '		<div class="consent" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:right">' +
    '			<p align="right">Approval No ' + welcome.ethics.approval + '</p>' +
    '			<p align="center"><b>TEXAS TECH UNIVERSITY<br>' +
    '			PARTICIPANT INFORMATION STATEMENT</b><br><br>' + welcome.ethics.name + '</p>' +
    '			<p><b>Purpose of Study</b></p>' +
    '			<p>' + welcome.ethics.invite + '</p>' +
    '			<p><b>Description of Study and Risks</b></p>' +
    '			<p>' + welcome.ethics.description + '</p>' +
    '			<p>' + welcome.ethics.risk + '</p>' +
    '			<p><b>Confidentiality and Disclosure of Information</b></p>' +
    '			<p>Any information that is obtained in connection with this study and that can be identified with you will remain confidential and will be disclosed only with your permission or except as required by law.  ' +
    '               If you give us your permission by clicking on the "I agree" button below, we plan to publish the results in academic journals and discuss the results at scientific conferences. ' +
    '               In any publication, information will be provided in such a way that you cannot be identified.</p>' +
    '			<p><b>Recompense to participants</b></p>' +
    '			<p>The pay for completing this study is <b>' + welcome.task.pay + '</b></p>' +
    '			<p><b>Your consent</b></p>' +
    '			<p>Your decision whether or not to participate will not prejudice your future relations with Texas Tech University.  ' +
    '               If you decide to participate, you are free to withdraw your consent and to discontinue participation at any time without prejudice.</p>' +
    '			<p><b>Inquiries</b></p>' +
    '			<p>If you have any questions or concerns following your participation, Professor XXX (+XXXX, email. XXXX@ttu.edu) will be happy to address them. <p> ' +
    '			<p>Please keep a copy of this information sheet (you can download the pdf <a href="files/info.pdf" target="_blank">here</a>)</p>' +
    '			<br>' +
    '			<p align="center"><b>PARTICIPANT CONSENT</b></p>' +
    '			By continuing, you are making a decision whether or not to participate.  ' +
    '           Clicking the button below indicates that, having read the information provided on the participant information sheet, you have decided to participate.' +
    '			<br>' +
    '			<p align="center">' +
    '           <input type="button" id="consentButton" class="consent jspsych-btn" value="I agree" onclick="welcome.click.consent()" >' +
    '			</p>' +
    '			<p>To withdraw your consent, simply close the browser tab. Your data will be deleted from our records.</p>' +
    '		</div><br><br></div>';

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
    '			<!-- Day Number -->' +
    '           <label for="day"><b>Day Number: &nbsp;</b></label><input id="day" name="day" /><br/><br/>' +
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