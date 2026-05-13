/*
    Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.probability.appspot.com
    www.chukwuemeka-samuel.appspot.com
*/

//"use strict";

// Solutions to the Questions
function solutions(solution) {
    var e = document.getElementById(solution);
    if (e.style.display === 'block' || e.style.display === '')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}


function toggle(id) {
    var e = document.getElementById(id);
    if (e.style.display === 'none')
        e.style.display = 'inline-block';
    else
        e.style.display = 'none';
}



// Accordion 
function events() {
    var x = document.getElementById("eventTypes");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Accordion 
function rules() {
    var x = document.getElementById("rulesProbability");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Accordion 
function examples() {
    var x = document.getElementById("solvedExamplesProbability");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


// Open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}