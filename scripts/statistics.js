/*
    Copyright 2023 - Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    www.chukwuemeka-samuel.appspot.com
    www.samdomforpeace.appspot.com
    www.statistical-science.appspot.com
*/

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// Message Greeting
var presentDate,
    presentHour,
    greeting;

presentDate = new Date();
presentDate.getDate();

presentHour = presentDate.getHours();

if (presentHour < 12) {
    greeting = "Good morning.";
} else if (presentHour >= 12 && presentHour < 16) {
    greeting = "Good afternoon.";
} else if (presentHour >= 16 && presentHour <= 24) {
    greeting = "Good evening.";
}

document.getElementById("greetings").innerHTML = greeting;

// Solutions to the Questions
function solutions(solution) {
    var e = document.getElementById(solution);
    if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
    else e.style.display = 'block';
}

// Answers to the Questions
function toggle(answer) {
    var e = document.getElementById(answer);
    if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
    else e.style.display = 'block';
}

/* 
  MTH 245
  Given: student scores
  To Calculate: the current grade and the cumulative grade
*/

document.getElementById("gradeCourse").addEventListener("submit", gradeCourse);

function gradeCourse(event) {
    event.preventDefault();
    event.stopPropagation();

    var weightMLS = parseFloat(document.getElementById("weightMLS").value, 10) || 0,
        scoreMLS = parseFloat(document.getElementById("scoreMLS").value, 10) || 0,
        weightedScoreMLS,

        weightDB1 =+ parseFloat(document.getElementById("weightDB1").value, 10) || 0,
        scoreDB1 =+ parseFloat(document.getElementById("scoreDB1").value, 10) || 0,
        weightedScoreDB1,

        weightDB2 =+ parseFloat(document.getElementById("weightDB2").value, 10) || 0,
        scoreDB2 =+ parseFloat(document.getElementById("scoreDB2").value, 10) || 0,
        weightedScoreDB2,

        weightDB3 =+ parseFloat(document.getElementById("weightDB3").value, 10) || 0,
        scoreDB3 =+ parseFloat(document.getElementById("scoreDB3").value, 10) || 0,
        weightedScoreDB3,

        weightDB4 =+ parseFloat(document.getElementById("weightDB4").value, 10) || 0,
        scoreDB4 =+ parseFloat(document.getElementById("scoreDB4").value, 10) || 0,
        weightedScoreDB4,

        weightDB5 =+ parseFloat(document.getElementById("weightDB5").value, 10) || 0,
        scoreDB5 =+ parseFloat(document.getElementById("scoreDB5").value, 10) || 0,
        weightedScoreDB5,

        weightProject =+ parseFloat(document.getElementById("weightProject").value, 10) || 0,
        scoreProject =+ parseFloat(document.getElementById("scoreProject").value, 10) || 0,
        weightedScoreProject,

                
        sumWeightsCourse,
        sumWeightedScoresCourse,
        currentGradeCourse,
        cumulativeGradeCourse;


        weightedScoreMLS = weightMLS * scoreMLS;
        document.getElementById("weightedScoreMLS").value = weightedScoreMLS;

        weightedScoreDB1 = weightDB1 * scoreDB1;
        document.getElementById("weightedScoreDB1").value = weightedScoreDB1;

        weightedScoreDB2 = weightDB2 * scoreDB2;
        document.getElementById("weightedScoreDB2").value = weightedScoreDB2;

        weightedScoreDB3 = weightDB3 * scoreDB3;
        document.getElementById("weightedScoreDB3").value = weightedScoreDB3;

        weightedScoreDB4 = weightDB4 * scoreDB4;
        document.getElementById("weightedScoreDB4").value = weightedScoreDB4;

        weightedScoreDB5 = weightDB5 * scoreDB5;
        document.getElementById("weightedScoreDB5").value = weightedScoreDB5;

        weightedScoreProject = weightProject * scoreProject;
        document.getElementById("weightedScoreProject").value = weightedScoreProject;


        sumWeightsCourse = weightMLS + weightDB1 + weightDB2 + weightDB3 + weightDB4 + weightDB5 + weightProject;

        document.getElementById("sumWeightsCourse").value = sumWeightsCourse;
        
        sumWeightedScoresCourse = weightedScoreMLS + weightedScoreDB1 + weightedScoreDB2 + weightedScoreDB3 + weightedScoreDB4 + weightedScoreDB5 + weightedScoreProject;

        document.getElementById("sumWeightedScoresCourse").value = sumWeightedScoresCourse;

        currentGradeCourse = sumWeightedScoresCourse / sumWeightsCourse;

        document.getElementById("currentGradeCourse").value = currentGradeCourse;

        cumulativeGradeCourse = sumWeightedScoresCourse / 100;

        document.getElementById("cumulativeGradeCourse").value = cumulativeGradeCourse;        

}
// End MTH 245 MLS Grade Calculations