/*
    Copyright 2016 - Samuel Dominic Chukwuemeka (Samdom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.chukwuemeka-samuel.appspot.com
    www.samdomforpeace.com
    www.samdomforpeace.appspot.com
    www.probability-distribution.appspot.com/probability-distribution-calculators.html
*/

"use strict";


// Probability Distrubution Calculation
// Enter data values horizontally
document.getElementById("probabilityDistributionCalculation").addEventListener("submit", probabilityDistributionCalculation);

function probabilityDistributionCalculation(event) 
{
    event.preventDefault();

    var randomVariable = document.getElementById('randomVariable').value,
        probabilityRandomVariable = document.getElementById('probabilityRandomVariable').value,
        rVariableSplit = randomVariable.split(','),
        rVariable = rVariableSplit.map(Number),
        rVariableSize = rVariable.length,
        probabilityRvariableSplit = probabilityRandomVariable.split(','),
        probabilityRvariable = probabilityRvariableSplit.map(Number),
        probabilityRvariableSize = probabilityRvariable.length,
        variableProbability = [],
        meanRandomVariable = 0,
        variableSquared = [],
        variableSquaredProbability = [],
        summationVariableSquaredProbability = 0,
        meanSquaredRandomVariable,
        difference,
        sdRandomVariable,
        minimum,
        maximum;


    for (var i = 0; i < rVariableSize, i < probabilityRvariableSize; i++) 
    {
        variableProbability[i] = rVariable[i] * probabilityRvariable[i];
        meanRandomVariable += variableProbability[i];
        variableSquared[i] = Math.pow(rVariable[i], 2);
        variableSquaredProbability[i] = variableSquared[i] * probabilityRvariable[i];
        summationVariableSquaredProbability += variableSquaredProbability[i];
    }

    meanSquaredRandomVariable = Math.pow(meanRandomVariable, 2);

    difference = summationVariableSquaredProbability - meanSquaredRandomVariable;

    sdRandomVariable = Math.sqrt(difference);

    minimum = meanRandomVariable - (2 * sdRandomVariable);

    maximum = meanRandomVariable + (2 * sdRandomVariable);

    document.getElementById("variableProbability").value = variableProbability.join(", ");
    document.getElementById("meanRandomVariable").value = meanRandomVariable;
    document.getElementById("variableSquared").value = variableSquared.join(", ");
    document.getElementById("variableSquaredProbability").value = variableSquaredProbability.join(", ");
    document.getElementById("summationVariableSquaredProbability").value = summationVariableSquaredProbability;
    document.getElementById("meanSquaredRandomVariable").value = meanSquaredRandomVariable;
    document.getElementById("difference").value = difference;
    document.getElementById("sdRandomVariable").value = sdRandomVariable;
    document.getElementById("minimum").innerHTML = "The minimum usual value is " + minimum;
    document.getElementById("maximum").innerHTML = "The maximum usual value is " + maximum;
}



// Probability Distrubution Calculation
// Enter data values vertically
document.getElementById("probabilityDistributionCalculationVertical").addEventListener("submit", probabilityDistributionCalculationVertical);

function probabilityDistributionCalculationVertical(event) 
{
    event.preventDefault();

    var randomVariableVertical = document.getElementById('randomVariableVertical').value,
        probabilityRandomVariableVertical = document.getElementById('probabilityRandomVariableVertical').value,
        rVariableSplitVertical = randomVariableVertical.split('\n'),
        rVariableVertical = rVariableSplitVertical.map(Number),
        rVariableSizeVertical = rVariableVertical.length,
        probabilityRvariableSplitVertical = probabilityRandomVariableVertical.split('\n'),
        probabilityRvariableVertical = probabilityRvariableSplitVertical.map(Number),
        probabilityRvariableSizeVertical = probabilityRvariableVertical.length,
        variableProbabilityVertical = [],
        meanRandomVariableVertical = 0,
        variableSquaredVertical = [],
        variableSquaredProbabilityVertical = [],
        summationVariableSquaredProbabilityVertical = 0,
        meanSquaredRandomVariableVertical,
        differenceVertical,
        sdRandomVariableVertical,
        minimumVertical,
        maximumVertical;


    for (var i = 0; i < rVariableSizeVertical, i < probabilityRvariableSizeVertical; i++) 
    {
        variableProbabilityVertical[i] = rVariableVertical[i] * probabilityRvariableVertical[i];
        meanRandomVariableVertical += variableProbabilityVertical[i];
        variableSquaredVertical[i] = Math.pow(rVariableVertical[i], 2);
        variableSquaredProbabilityVertical[i] = variableSquaredVertical[i] * probabilityRvariableVertical[i];
        summationVariableSquaredProbabilityVertical += variableSquaredProbabilityVertical[i];
    }

    meanSquaredRandomVariableVertical = Math.pow(meanRandomVariableVertical, 2);

    differenceVertical = summationVariableSquaredProbabilityVertical - meanSquaredRandomVariableVertical;

    sdRandomVariableVertical = Math.sqrt(differenceVertical);

    minimumVertical = meanRandomVariableVertical - (2 * sdRandomVariableVertical);

    maximumVertical = meanRandomVariableVertical + (2 * sdRandomVariableVertical);

    document.getElementById("variableProbabilityVertical").value = variableProbabilityVertical.join("\n");
    document.getElementById("meanRandomVariableVertical").value = meanRandomVariableVertical;
    document.getElementById("variableSquaredVertical").value = variableSquaredVertical.join("\n");
    document.getElementById("variableSquaredProbabilityVertical").value = variableSquaredProbabilityVertical.join("\n");
    document.getElementById("summationVariableSquaredProbabilityVertical").value = summationVariableSquaredProbabilityVertical;
    document.getElementById("meanSquaredRandomVariableVertical").value = meanSquaredRandomVariableVertical;
    document.getElementById("differenceVertical").value = differenceVertical;
    document.getElementById("sdRandomVariableVertical").value = sdRandomVariableVertical;
    document.getElementById("minimumVertical").innerHTML = "The minimum usual value is " + minimumVertical;
    document.getElementById("maximumVertical").innerHTML = "The maximum usual value is " + maximumVertical;
}