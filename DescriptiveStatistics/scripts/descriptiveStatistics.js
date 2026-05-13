// Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.sequences.appspot.com
// www.chukwuemeka-samuel.appspot.com

//"use strict";

// Solutions to the Questions
function solutions(solution) {
    var e = document.getElementById(solution);
    if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
    else e.style.display = 'block';
}


function toggle(id) {
    var e = document.getElementById(id);
    if (e.style.display === 'none')
        e.style.display = 'inline-block';
    else
        e.style.display = 'none';
}

// Accordion 
function statisticsStory() {
    var x = document.getElementById("story");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function statisticsOverview() {
    var x = document.getElementById("overview");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function statisticsMeasuresCenter() {
    var x = document.getElementById("center");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function statisticsMeasuresVariation() {
    var x = document.getElementById("variation");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function statisticsMeasuresPosition() {
    var x = document.getElementById("position");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function statisticsMeasuresShape() {
    var x = document.getElementById("shape");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function statisticsProjects() {
    var x = document.getElementById("projects");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}