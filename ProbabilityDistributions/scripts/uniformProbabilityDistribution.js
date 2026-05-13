// Copyright 2016 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com
// www.probability-distribution.appspot.com


"use strict";


// Uniform Probability Distrubution Calculation
// Uniform Probability Distribution Parameters Calculation
// Less Than and More Than
document.getElementById("uniformProbabilityCalculation1").addEventListener("submit", uniformProbabilityCalculation1);

function uniformProbabilityCalculation1(event) {
   event.preventDefault();
   
    var minimumValue1 = parseFloat(document.getElementById("minimumValue1").value, 10) || 0,
        maximumValue1 = parseFloat(document.getElementById("maximumValue1").value, 10) || 0,
        variableValue = parseFloat(document.getElementById("variableValue").value, 10) || 0,
        variableValueCondition = document.getElementById("variableValueCondition").value,
        length1,
        height1,
        uniformProbability1;
        
        length1 = maximumValue1 - minimumValue1;
        
        height1 = 1 / length1;
        
        document.getElementById("length1").innerHTML = "The length of the uniform distribution is " + length1;
        document.getElementById("height1").innerHTML = "The height of the uniform distribution is " + height1;
        
    if (variableValueCondition === "less") {
        uniformProbability1 = variableValue * height1;
        document.getElementById("uniformProbability1").innerHTML = "The probability less than the variable is " + uniformProbability1;
    } 
    
    else if (variableValueCondition === "more") {
        uniformProbability1 = (length1 - variableValue) * height1;
        document.getElementById("uniformProbability1").innerHTML = "The probability greater than the variable is " + uniformProbability1;
    }
}


// Uniform Probability Distrubution Calculation
// Uniform Probability Distribution Parameters Calculation
document.getElementById("uniformProbabilityCalculation2").addEventListener("submit", uniformProbabilityCalculation2);

function uniformProbabilityCalculation2(event) {
   event.preventDefault();
   
    var minimumValue2 = parseFloat(document.getElementById("minimumValue2").value, 10) || 0,
        maximumValue2 = parseFloat(document.getElementById("maximumValue2").value, 10) || 0,
        firstValue = parseFloat(document.getElementById("firstValue").value, 10) || 0,
        secondValue = parseFloat(document.getElementById("secondValue").value, 10) || 0,
        length2,
        height2,
        uniformProbability2;
        
        length2 = maximumValue2 - minimumValue2;
        
        height2 = 1 / length2;
        
        document.getElementById("length2").innerHTML = "The length of the uniform distribution is " + length2;
        document.getElementById("height2").innerHTML = "The height of the uniform distribution is " + height2;
        
       
    uniformProbability2 = (secondValue - firstValue) * height2;
    
    document.getElementById("uniformProbability2").innerHTML = "The probability that the variable is between the values is " + uniformProbability2;
}