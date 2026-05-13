// Copyright 2019 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com
// www.expressions-equations.appspot.com/calculators.html

"use strict";


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


// Tab 1
function openLink(evt, linkName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("myLink");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

// Tab 2
function openLink1(evt, linkName1) {
  var j, y, tablinks1;
  y = document.getElementsByClassName("myLink1");
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";
  }
  tablinks1 = document.getElementsByClassName("tablink1");
  for (j = 0; j < y.length; j++) {
    tablinks1[j].className = tablinks1[j].className.replace(" w3-red", "");
  }
  document.getElementById(linkName1).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

// Tab 3
function openLink2(evt, linkName2) {
  var a, c, tablinks2;
  c = document.getElementsByClassName("myLink2");
  for (a = 0; a < c.length; a++) {
    c[a].style.display = "none";
  }
  tablinks2 = document.getElementsByClassName("tablink2");
  for (a = 0; a < c.length; a++) {
    tablinks2[a].className = tablinks2[a].className.replace(" w3-red", "");
  }
  document.getElementById(linkName2).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

// Tab 6
function openLink5(evt, linkName5) {
  var e, f, tablinks5;
  f = document.getElementsByClassName("myLink5");
  for (e = 0; e < f.length; e++) {
    f[e].style.display = "none";
  }
  tablinks5 = document.getElementsByClassName("tablink5");
  for (e = 0; e < f.length; e++) {
    tablinks5[e].className = tablinks5[e].className.replace(" w3-red", "");
  }
  document.getElementById(linkName5).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

// Click on the first tablink on load
document.getElementsByClassName("tablink")[0].click();

// Click on the second tablink on load
document.getElementsByClassName("tablink1")[0].click();

// Click on the third tablink on load
document.getElementsByClassName("tablink2")[0].click();

// Click on the sixth tablink on load
document.getElementsByClassName("tablink5")[0].click();


