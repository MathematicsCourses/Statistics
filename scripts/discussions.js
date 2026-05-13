/*
    Copyright 2023 - Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    www.chukwuemeka-samuel.appspot.com
    www.samdomforpeace.appspot.com
    https://mathematicscourses.github.io/Statistics/
    https://mathematicscourses.github.io/Statistics/MyLabStatisticsGrades.html
*/

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Answers to the Questions
function toggle(answer) {
  var e = document.getElementById(answer);
  if (e.style.display === "block" || e.style.display === "") e.style.display = "none";
  else e.style.display = "block";
}

("use strict");

/* 
  MTH 245 
  Given: Student MLS scores
  To Calculate: the current MLS grade and the cumulative MLS grade
*/

document.getElementById("gradeMLS").addEventListener("submit", gradeMLS);

function gradeMLS(event) {
  event.preventDefault();
  event.stopPropagation();

  var weightOneOne1st = parseFloat(document.getElementById("weightOneOne1st").value, 10) || 0,
    scoreOneOne1st = parseFloat(document.getElementById("scoreOneOne1st").value, 10) || 0,
    weightedScoreOneOne1st,
    weightOneOne2nd = +parseFloat(document.getElementById("weightOneOne2nd").value, 10) || 0,
    scoreOneOne2nd = +parseFloat(document.getElementById("scoreOneOne2nd").value, 10) || 0,
    weightedScoreOneOne2nd,
    weightOneTwo = +parseFloat(document.getElementById("weightOneTwo").value, 10) || 0,
    scoreOneTwo = +parseFloat(document.getElementById("scoreOneTwo").value, 10) || 0,
    weightedScoreOneTwo,
    weightOneThree1st = +parseFloat(document.getElementById("weightOneThree1st").value, 10) || 0,
    scoreOneThree1st = +parseFloat(document.getElementById("scoreOneThree1st").value, 10) || 0,
    weightedScoreOneThree1st,
    weightOneThree2nd = +parseFloat(document.getElementById("weightOneThree2nd").value, 10) || 0,
    scoreOneThree2nd = +parseFloat(document.getElementById("scoreOneThree2nd").value, 10) || 0,
    weightedScoreOneThree2nd,
    weightTwoOne = +parseFloat(document.getElementById("weightTwoOne").value, 10) || 0,
    scoreTwoOne = +parseFloat(document.getElementById("scoreTwoOne").value, 10) || 0,
    weightedScoreTwoOne,
    weightTwoTwo = +parseFloat(document.getElementById("weightTwoTwo").value, 10) || 0,
    scoreTwoTwo = +parseFloat(document.getElementById("scoreTwoTwo").value, 10) || 0,
    weightedScoreTwoTwo,
    weightTwoThree = +parseFloat(document.getElementById("weightTwoThree").value, 10) || 0,
    scoreTwoThree = +parseFloat(document.getElementById("scoreTwoThree").value, 10) || 0,
    weightedScoreTwoThree,
    weightTwoFour = +parseFloat(document.getElementById("weightTwoFour").value, 10) || 0,
    scoreTwoFour = +parseFloat(document.getElementById("scoreTwoFour").value, 10) || 0,
    weightedScoreTwoFour,
    weightThreeOne1st = +parseFloat(document.getElementById("weightThreeOne1st").value, 10) || 0,
    scoreThreeOne1st = +parseFloat(document.getElementById("scoreThreeOne1st").value, 10) || 0,
    weightedScoreThreeOne1st,
    weightThreeOne2nd = +parseFloat(document.getElementById("weightThreeOne2nd").value, 10) || 0,
    scoreThreeOne2nd = +parseFloat(document.getElementById("scoreThreeOne2nd").value, 10) || 0,
    weightedScoreThreeOne2nd,
    weightThreeTwo1st = +parseFloat(document.getElementById("weightThreeTwo1st").value, 10) || 0,
    scoreThreeTwo1st = +parseFloat(document.getElementById("scoreThreeTwo1st").value, 10) || 0,
    weightedScoreThreeTwo1st,
    weightThreeTwo2nd = +parseFloat(document.getElementById("weightThreeTwo2nd").value, 10) || 0,
    scoreThreeTwo2nd = +parseFloat(document.getElementById("scoreThreeTwo2nd").value, 10) || 0,
    weightedScoreThreeTwo2nd,
    weightThreeThree1st =
      +parseFloat(document.getElementById("weightThreeThree1st").value, 10) || 0,
    scoreThreeThree1st = +parseFloat(document.getElementById("scoreThreeThree1st").value, 10) || 0,
    weightedScoreThreeThree1st,
    weightThreeThree2nd =
      +parseFloat(document.getElementById("weightThreeThree2nd").value, 10) || 0,
    scoreThreeThree2nd = +parseFloat(document.getElementById("scoreThreeThree2nd").value, 10) || 0,
    weightedScoreThreeThree2nd,
    weightFourOne1st = +parseFloat(document.getElementById("weightFourOne1st").value, 10) || 0,
    scoreFourOne1st = +parseFloat(document.getElementById("scoreFourOne1st").value, 10) || 0,
    weightedScoreFourOne1st,
    weightFourOne2nd = +parseFloat(document.getElementById("weightFourOne2nd").value, 10) || 0,
    scoreFourOne2nd = +parseFloat(document.getElementById("scoreFourOne2nd").value, 10) || 0,
    weightedScoreFourOne2nd,
    weightFourTwo1st = +parseFloat(document.getElementById("weightFourTwo1st").value, 10) || 0,
    scoreFourTwo1st = +parseFloat(document.getElementById("scoreFourTwo1st").value, 10) || 0,
    weightedScoreFourTwo1st,
    weightFourTwo2nd = +parseFloat(document.getElementById("weightFourTwo2nd").value, 10) || 0,
    scoreFourTwo2nd = +parseFloat(document.getElementById("scoreFourTwo2nd").value, 10) || 0,
    weightedScoreFourTwo2nd,
    weightFourThree = +parseFloat(document.getElementById("weightFourThree").value, 10) || 0,
    scoreFourThree = +parseFloat(document.getElementById("scoreFourThree").value, 10) || 0,
    weightedScoreFourThree,
    weightFiveOne = +parseFloat(document.getElementById("weightFiveOne").value, 10) || 0,
    scoreFiveOne = +parseFloat(document.getElementById("scoreFiveOne").value, 10) || 0,
    weightedScoreFiveOne,
    weightFiveTwo1st = +parseFloat(document.getElementById("weightFiveTwo1st").value, 10) || 0,
    scoreFiveTwo1st = +parseFloat(document.getElementById("scoreFiveTwo1st").value, 10) || 0,
    weightedScoreFiveTwo1st,
    weightFiveTwo2nd = +parseFloat(document.getElementById("weightFiveTwo2nd").value, 10) || 0,
    scoreFiveTwo2nd = +parseFloat(document.getElementById("scoreFiveTwo2nd").value, 10) || 0,
    weightedScoreFiveTwo2nd,
    weightSixOne1st = +parseFloat(document.getElementById("weightSixOne1st").value, 10) || 0,
    scoreSixOne1st = +parseFloat(document.getElementById("scoreSixOne1st").value, 10) || 0,
    weightedScoreSixOne1st,
    weightSixOne2nd = +parseFloat(document.getElementById("weightSixOne2nd").value, 10) || 0,
    scoreSixOne2nd = +parseFloat(document.getElementById("scoreSixOne2nd").value, 10) || 0,
    weightedScoreSixOne2nd,
    weightSixTwo = +parseFloat(document.getElementById("weightSixTwo").value, 10) || 0,
    scoreSixTwo = +parseFloat(document.getElementById("scoreSixTwo").value, 10) || 0,
    weightedScoreSixTwo,
    weightSixThree = +parseFloat(document.getElementById("weightSixThree").value, 10) || 0,
    scoreSixThree = +parseFloat(document.getElementById("scoreSixThree").value, 10) || 0,
    weightedScoreSixThree,
    weightSixFour = +parseFloat(document.getElementById("weightSixFour").value, 10) || 0,
    scoreSixFour = +parseFloat(document.getElementById("scoreSixFour").value, 10) || 0,
    weightedScoreSixFour,
    weightSixFive = +parseFloat(document.getElementById("weightSixFive").value, 10) || 0,
    scoreSixFive = +parseFloat(document.getElementById("scoreSixFive").value, 10) || 0,
    weightedScoreSixFive,
    weightSixSix = +parseFloat(document.getElementById("weightSixSix").value, 10) || 0,
    scoreSixSix = +parseFloat(document.getElementById("scoreSixSix").value, 10) || 0,
    weightedScoreSixSix,
    weightSevenOne1st = +parseFloat(document.getElementById("weightSevenOne1st").value, 10) || 0,
    scoreSevenOne1st = +parseFloat(document.getElementById("scoreSevenOne1st").value, 10) || 0,
    weightedScoreSevenOne1st,
    weightSevenOne2nd = +parseFloat(document.getElementById("weightSevenOne2nd").value, 10) || 0,
    scoreSevenOne2nd = +parseFloat(document.getElementById("scoreSevenOne2nd").value, 10) || 0,
    weightedScoreSevenOne2nd,
    weightSevenTwo = +parseFloat(document.getElementById("weightSevenTwo").value, 10) || 0,
    scoreSevenTwo = +parseFloat(document.getElementById("scoreSevenTwo").value, 10) || 0,
    weightedScoreSevenTwo,
    weightEightOne1st = +parseFloat(document.getElementById("weightEightOne1st").value, 10) || 0,
    scoreEightOne1st = +parseFloat(document.getElementById("scoreEightOne1st").value, 10) || 0,
    weightedScoreEightOne1st,
    weightEightOne2nd = +parseFloat(document.getElementById("weightEightOne2nd").value, 10) || 0,
    scoreEightOne2nd = +parseFloat(document.getElementById("scoreEightOne2nd").value, 10) || 0,
    weightedScoreEightOne2nd,
    weightEightTwo = +parseFloat(document.getElementById("weightEightTwo").value, 10) || 0,
    scoreEightTwo = +parseFloat(document.getElementById("scoreEightTwo").value, 10) || 0,
    weightedScoreEightTwo,
    weightEightThree = +parseFloat(document.getElementById("weightEightThree").value, 10) || 0,
    scoreEightThree = +parseFloat(document.getElementById("scoreEightThree").value, 10) || 0,
    weightedScoreEightThree,
    weightNineTwo = +parseFloat(document.getElementById("weightNineTwo").value, 10) || 0,
    scoreNineTwo = +parseFloat(document.getElementById("scoreNineTwo").value, 10) || 0,
    weightedScoreNineTwo,
    weightNineThree = +parseFloat(document.getElementById("weightNineThree").value, 10) || 0,
    scoreNineThree = +parseFloat(document.getElementById("scoreNineThree").value, 10) || 0,
    weightedScoreNineThree,
    weightTenOne1st = +parseFloat(document.getElementById("weightTenOne1st").value, 10) || 0,
    scoreTenOne1st = +parseFloat(document.getElementById("scoreTenOne1st").value, 10) || 0,
    weightedScoreTenOne1st,
    weightTenOne2nd = +parseFloat(document.getElementById("weightTenOne2nd").value, 10) || 0,
    scoreTenOne2nd = +parseFloat(document.getElementById("scoreTenOne2nd").value, 10) || 0,
    weightedScoreTenOne2nd,
    weightTenTwo1st = +parseFloat(document.getElementById("weightTenTwo1st").value, 10) || 0,
    scoreTenTwo1st = +parseFloat(document.getElementById("scoreTenTwo1st").value, 10) || 0,
    weightedScoreTenTwo1st,
    weightTenTwo2nd = +parseFloat(document.getElementById("weightTenTwo2nd").value, 10) || 0,
    scoreTenTwo2nd = +parseFloat(document.getElementById("scoreTenTwo2nd").value, 10) || 0,
    weightedScoreTenTwo2nd,
    weightTenThree = +parseFloat(document.getElementById("weightTenThree").value, 10) || 0,
    scoreTenThree = +parseFloat(document.getElementById("scoreTenThree").value, 10) || 0,
    weightedScoreTenThree,
    sumWeightsMLS,
    sumWeightedScoresMLS,
    currentGradeMLS,
    cumulativeGradeMLS;

  weightedScoreOneOne1st = weightOneOne1st * scoreOneOne1st;
  document.getElementById("weightedScoreOneOne1st").value = weightedScoreOneOne1st;

  weightedScoreOneOne2nd = weightOneOne2nd * scoreOneOne2nd;
  document.getElementById("weightedScoreOneOne2nd").value = weightedScoreOneOne2nd;

  weightedScoreOneTwo = weightOneTwo * scoreOneTwo;
  document.getElementById("weightedScoreOneTwo").value = weightedScoreOneTwo;

  weightedScoreOneThree1st = weightOneThree1st * scoreOneThree1st;
  document.getElementById("weightedScoreOneThree1st").value = weightedScoreOneThree1st;

  weightedScoreOneThree2nd = weightOneThree2nd * scoreOneThree2nd;
  document.getElementById("weightedScoreOneThree2nd").value = weightedScoreOneThree2nd;

  weightedScoreTwoOne = weightTwoOne * scoreTwoOne;
  document.getElementById("weightedScoreTwoOne").value = weightedScoreTwoOne;

  weightedScoreTwoTwo = weightTwoTwo * scoreTwoTwo;
  document.getElementById("weightedScoreTwoTwo").value = weightedScoreTwoTwo;

  weightedScoreTwoThree = weightTwoThree * scoreTwoThree;
  document.getElementById("weightedScoreTwoThree").value = weightedScoreTwoThree;

  weightedScoreTwoFour = weightTwoFour * scoreTwoFour;
  document.getElementById("weightedScoreTwoFour").value = weightedScoreTwoFour;

  weightedScoreThreeOne1st = weightThreeOne1st * scoreThreeOne1st;
  document.getElementById("weightedScoreThreeOne1st").value = weightedScoreThreeOne1st;

  weightedScoreThreeOne2nd = weightThreeOne2nd * scoreThreeOne2nd;
  document.getElementById("weightedScoreThreeOne2nd").value = weightedScoreThreeOne2nd;

  weightedScoreThreeTwo1st = weightThreeTwo1st * scoreThreeTwo1st;
  document.getElementById("weightedScoreThreeTwo1st").value = weightedScoreThreeTwo1st;

  weightedScoreThreeTwo2nd = weightThreeTwo2nd * scoreThreeTwo2nd;
  document.getElementById("weightedScoreThreeTwo2nd").value = weightedScoreThreeTwo2nd;

  weightedScoreThreeThree1st = weightThreeThree1st * scoreThreeThree1st;
  document.getElementById("weightedScoreThreeThree1st").value = weightedScoreThreeThree1st;

  weightedScoreThreeThree2nd = weightThreeThree2nd * scoreThreeThree2nd;
  document.getElementById("weightedScoreThreeThree2nd").value = weightedScoreThreeThree2nd;

  weightedScoreFourOne1st = weightFourOne1st * scoreFourOne1st;
  document.getElementById("weightedScoreFourOne1st").value = weightedScoreFourOne1st;

  weightedScoreFourOne2nd = weightFourOne2nd * scoreFourOne2nd;
  document.getElementById("weightedScoreFourOne2nd").value = weightedScoreFourOne2nd;

  weightedScoreFourTwo1st = weightFourTwo1st * scoreFourTwo1st;
  document.getElementById("weightedScoreFourTwo1st").value = weightedScoreFourTwo1st;

  weightedScoreFourTwo2nd = weightFourTwo2nd * scoreFourTwo2nd;
  document.getElementById("weightedScoreFourTwo2nd").value = weightedScoreFourTwo2nd;

  weightedScoreFourThree = weightFourThree * scoreFourThree;
  document.getElementById("weightedScoreFourThree").value = weightedScoreFourThree;

  weightedScoreFiveOne = weightFiveOne * scoreFiveOne;
  document.getElementById("weightedScoreFiveOne").value = weightedScoreFiveOne;

  weightedScoreFiveTwo1st = weightFiveTwo1st * scoreFiveTwo1st;
  document.getElementById("weightedScoreFiveTwo1st").value = weightedScoreFiveTwo1st;

  weightedScoreFiveTwo2nd = weightFiveTwo2nd * scoreFiveTwo2nd;
  document.getElementById("weightedScoreFiveTwo2nd").value = weightedScoreFiveTwo2nd;

  weightedScoreSixOne1st = weightSixOne1st * scoreSixOne1st;
  document.getElementById("weightedScoreSixOne1st").value = weightedScoreSixOne1st;

  weightedScoreSixOne2nd = weightSixOne2nd * scoreSixOne2nd;
  document.getElementById("weightedScoreSixOne2nd").value = weightedScoreSixOne2nd;

  weightedScoreSixTwo = weightSixTwo * scoreSixTwo;
  document.getElementById("weightedScoreSixTwo").value = weightedScoreSixTwo;

  weightedScoreSixThree = weightSixThree * scoreSixThree;
  document.getElementById("weightedScoreSixThree").value = weightedScoreSixThree;

  weightedScoreSixFour = weightSixFour * scoreSixFour;
  document.getElementById("weightedScoreSixFour").value = weightedScoreSixFour;

  weightedScoreSixFive = weightSixFive * scoreSixFive;
  document.getElementById("weightedScoreSixFive").value = weightedScoreSixFive;

  weightedScoreSixSix = weightSixSix * scoreSixSix;
  document.getElementById("weightedScoreSixSix").value = weightedScoreSixSix;

  weightedScoreSevenOne1st = weightSevenOne1st * scoreSevenOne1st;
  document.getElementById("weightedScoreSevenOne1st").value = weightedScoreSevenOne1st;

  weightedScoreSevenOne2nd = weightSevenOne2nd * scoreSevenOne2nd;
  document.getElementById("weightedScoreSevenOne2nd").value = weightedScoreSevenOne2nd;

  weightedScoreSevenTwo = weightSevenTwo * scoreSevenTwo;
  document.getElementById("weightedScoreSevenTwo").value = weightedScoreSevenTwo;

  weightedScoreEightOne1st = weightEightOne1st * scoreEightOne1st;
  document.getElementById("weightedScoreEightOne1st").value = weightedScoreEightOne1st;

  weightedScoreEightOne2nd = weightEightOne2nd * scoreEightOne2nd;
  document.getElementById("weightedScoreEightOne2nd").value = weightedScoreEightOne2nd;

  weightedScoreEightTwo = weightEightTwo * scoreEightTwo;
  document.getElementById("weightedScoreEightTwo").value = weightedScoreEightTwo;

  weightedScoreEightThree = weightEightThree * scoreEightThree;
  document.getElementById("weightedScoreEightThree").value = weightedScoreEightThree;

  weightedScoreNineTwo = weightNineTwo * scoreNineTwo;
  document.getElementById("weightedScoreNineTwo").value = weightedScoreNineTwo;

  weightedScoreNineThree = weightNineThree * scoreNineThree;
  document.getElementById("weightedScoreNineThree").value = weightedScoreNineThree;

  weightedScoreTenOne1st = weightTenOne1st * scoreTenOne1st;
  document.getElementById("weightedScoreTenOne1st").value = weightedScoreTenOne1st;

  weightedScoreTenOne2nd = weightTenOne2nd * scoreTenOne2nd;
  document.getElementById("weightedScoreTenOne2nd").value = weightedScoreTenOne2nd;

  weightedScoreTenTwo1st = weightTenTwo1st * scoreTenTwo1st;
  document.getElementById("weightedScoreTenTwo1st").value = weightedScoreTenTwo1st;

  weightedScoreTenTwo2nd = weightTenTwo2nd * scoreTenTwo2nd;
  document.getElementById("weightedScoreTenTwo2nd").value = weightedScoreTenTwo2nd;

  weightedScoreTenThree = weightTenThree * scoreTenThree;
  document.getElementById("weightedScoreTenThree").value = weightedScoreTenThree;

  sumWeightsMLS =
    weightOneOne1st +
    weightOneOne2nd +
    weightOneTwo +
    weightOneThree1st +
    weightOneThree2nd +
    weightTwoOne +
    weightTwoTwo +
    weightTwoThree +
    weightTwoFour +
    weightThreeOne1st +
    weightThreeOne2nd +
    weightThreeTwo1st +
    weightThreeTwo2nd +
    weightThreeThree1st +
    weightThreeThree2nd +
    weightFourOne1st +
    weightFourOne2nd +
    weightFourTwo1st +
    weightFourTwo2nd +
    weightFourThree +
    weightFiveOne +
    weightFiveTwo1st +
    weightFiveTwo2nd +
    weightSixOne1st +
    weightSixOne2nd +
    weightSixTwo +
    weightSixThree +
    weightSixFour +
    weightSixFive +
    weightSixSix +
    weightSevenOne1st +
    weightSevenOne2nd +
    weightSevenTwo +
    weightEightOne1st +
    weightEightOne2nd +
    weightEightTwo +
    weightEightThree +
    weightNineTwo +
    weightNineThree +
    weightTenOne1st +
    weightTenOne2nd +
    weightTenTwo1st +
    weightTenTwo2nd +
    weightTenThree;

  document.getElementById("sumWeightsMLS").value = sumWeightsMLS;

  sumWeightedScoresMLS =
    weightedScoreOneOne1st +
    weightedScoreOneOne2nd +
    weightedScoreOneTwo +
    weightedScoreOneThree1st +
    weightedScoreOneThree2nd +
    weightedScoreTwoOne +
    weightedScoreTwoTwo +
    weightedScoreTwoThree +
    weightedScoreTwoFour +
    weightedScoreThreeOne1st +
    weightedScoreThreeOne2nd +
    weightedScoreThreeTwo1st +
    weightedScoreThreeTwo2nd +
    weightedScoreThreeThree1st +
    weightedScoreThreeThree2nd +
    weightedScoreFourOne1st +
    weightedScoreFourOne2nd +
    weightedScoreFourTwo1st +
    weightedScoreFourTwo2nd +
    weightedScoreFourThree +
    weightedScoreFiveOne +
    weightedScoreFiveTwo1st +
    weightedScoreFiveTwo2nd +
    weightedScoreSixOne1st +
    weightedScoreSixOne2nd +
    weightedScoreSixTwo +
    weightedScoreSixThree +
    weightedScoreSixFour +
    weightedScoreSixFive +
    weightedScoreSixSix +
    weightedScoreSevenOne1st +
    weightedScoreSevenOne2nd +
    weightedScoreSevenTwo +
    weightedScoreEightOne1st +
    weightedScoreEightOne2nd +
    weightedScoreEightTwo +
    weightedScoreEightThree +
    weightedScoreNineTwo +
    weightedScoreNineThree +
    weightedScoreTenOne1st +
    weightedScoreTenOne2nd +
    weightedScoreTenTwo1st +
    weightedScoreTenTwo2nd +
    weightedScoreTenThree;

  document.getElementById("sumWeightedScoresMLS").value = sumWeightedScoresMLS;

  currentGradeMLS = sumWeightedScoresMLS / sumWeightsMLS;

  document.getElementById("currentGradeMLS").value = currentGradeMLS;

  cumulativeGradeMLS = sumWeightedScoresMLS / 100;

  document.getElementById("cumulativeGradeMLS").value = cumulativeGradeMLS;
}
// End MTH 245 MLS Grade Calculations
