// Copyright 2016 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com
// www.probability-distribution.appspot.com

"use strict";

function factorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}

function atMostVariable(x, m) {
    var atMost = 0;
    for (; x >= 0; x--) {
        atMost += (Math.pow(m, x) * Math.exp(-1 * m)) / factorial(x);
    }
    return atMost;
}

function lessThanVariable(x, m) {
    var lessThan = 0, y = x - 1;
    for (; y >= 0; y--) {
        lessThan += (Math.pow(m, y) * Math.exp(-1 * m)) / factorial(y);
    }
    return lessThan;
}

function greaterThanVariable(x, m){
    return 1 - atMostVariable(x, m);
}

function atLeastVariable(x, m){
    return ((Math.pow(m, x) * Math.exp(-1 * m)) / factorial(x)) + (1 - atMostVariable(x, m));
}


// Given the variable and the total
// Calculate the mean, standard deviation, and variance
document.getElementById("variablePoissonProbabilityCalculation").addEventListener("submit", variablePoissonProbabilityCalculation);

function variablePoissonProbabilityCalculation(event) {
   event.preventDefault();
  

    var variablePP = parseFloat(document.getElementById("variablePP").value, 10) || 0,
        sampleSizePP = parseFloat(document.getElementById("sampleSizePP").value, 10) || 0;
        
    var meanPP = variablePP / sampleSizePP,
        standardDeviationPP = Math.sqrt(meanPP),
        variancePP = Math.pow(standardDeviationPP, 2);

        document.getElementById("meanPP").innerHTML = "&mu; = " + meanPP;
        document.getElementById("standardDeviationPP").innerHTML = "&sigma; = " + standardDeviationPP;
        document.getElementById("variancePP").innerHTML = "&sigma;<sup>2</sup> = " + variancePP;
}


// Given the sample size and the probability
// Calculate the mean, standard deviation, and variance
document.getElementById("sampleSizePoissonProbability").addEventListener("submit", sampleSizePoissonProbability);

function sampleSizePoissonProbability(event) {
   event.preventDefault();
  

    var sampleSizeSP = parseFloat(document.getElementById("sampleSizeSP").value, 10) || 0,
        probabilitySP = parseFloat(document.getElementById("probabilitySP").value, 10) || 0;
        
    var meanSP = sampleSizeSP * probabilitySP,
        standardDeviationSP = Math.sqrt(meanSP),
        varianceSP = Math.pow(standardDeviationSP, 2);


        document.getElementById("meanSP").innerHTML = "&mu; or E = " + meanSP;
        document.getElementById("standardDeviationSP").innerHTML = "&sigma; = " + standardDeviationSP;
        document.getElementById("varianceSP").innerHTML = "&sigma;<sup>2</sup> = " + varianceSP;
}


// Poisson Probability Distrubution Calculation
// Poisson Probability Distribution Parameters Calculation
// Calculate the detailed probabilities of the variable, and the standard deviation.
document.getElementById("poissonProbabilityCalculation").addEventListener("submit", poissonProbabilityCalculation);

function poissonProbabilityCalculation(event) {
   event.preventDefault();
  

    var ppDvariable = parseFloat(document.getElementById("ppDvariable").value, 10) || 0,
        ppDmean = parseFloat(document.getElementById("ppDmean").value, 10) || 0;
        
    var ppDprobabilityVariable = (Math.pow(ppDmean, ppDvariable) * Math.pow(Math.E, -1 * ppDmean)) / factorial(ppDvariable),
        ppDprobabilityVariableLessThan = lessThanVariable(ppDvariable, ppDmean),
        ppDprobabilityVariableGreaterThan = greaterThanVariable(ppDvariable, ppDmean),
        ppDprobabilityVariableAtMost = atMostVariable(ppDvariable, ppDmean),
        ppDprobabilityVariableAtLeast = atLeastVariable(ppDvariable, ppDmean),
        ppDstandardDeviation = Math.sqrt(ppDmean);

        document.getElementById("ppDprobabilityVariable").innerHTML = "P(x) = " + ppDprobabilityVariable;
        document.getElementById("ppDprobabilityVariableLessThan").innerHTML = "P(&lt; x) = " + ppDprobabilityVariableLessThan;
        document.getElementById("ppDprobabilityVariableGreaterThan").innerHTML = "P(&gt; x) = " + ppDprobabilityVariableGreaterThan;
        document.getElementById("ppDprobabilityVariableAtMost").innerHTML = "P(&le; x) = " + ppDprobabilityVariableAtMost;
        document.getElementById("ppDprobabilityVariableAtLeast").innerHTML = "P(&ge; x) = " + ppDprobabilityVariableAtLeast;
        document.getElementById("ppDstandardDeviation").innerHTML = "&sigma; = " + ppDstandardDeviation;
}


document.getElementById("MeanppDpoissonProbability").addEventListener("submit", MeanppDpoissonProbability);

function MeanppDpoissonProbability(event) {
   event.preventDefault();
   event.stopPropagation();
  

    var MeanppDvariable = parseFloat(document.getElementById("MeanppDvariable").value, 10) || 0,
        MeanppDstandardDeviation = parseFloat(document.getElementById("MeanppDstandardDeviation").value, 10) || 0;
        
    var MeanppDmean = Math.pow(MeanppDstandardDeviation, 2),
        MeanppDprobabilityVariable = (Math.pow(MeanppDmean, MeanppDvariable) * Math.pow(Math.E, -1 * MeanppDmean)) / factorial(MeanppDvariable),
        MeanppDprobabilityVariableLessThan = lessThanVariable(MeanppDvariable, MeanppDmean),
        MeanppDprobabilityVariableGreaterThan = greaterThanVariable(MeanppDvariable, MeanppDmean),
        MeanppDprobabilityVariableAtMost = atMostVariable(MeanppDvariable, MeanppDmean),
        MeanppDprobabilityVariableAtLeast = atLeastVariable(MeanppDvariable, MeanppDmean);

        
        document.getElementById("MeanppDmean").innerHTML = "&mu; = " + MeanppDmean;
        document.getElementById("MeanppDprobabilityVariable").innerHTML = "P(x) = " + MeanppDprobabilityVariable;
        document.getElementById("MeanppDprobabilityVariableLessThan").innerHTML = "P(&lt; x) = " + MeanppDprobabilityVariableLessThan;
        document.getElementById("MeanppDprobabilityVariableGreaterThan").innerHTML = "P(&gt; x) = " + MeanppDprobabilityVariableGreaterThan;
        document.getElementById("MeanppDprobabilityVariableAtMost").innerHTML = "P(&le; x) = " + MeanppDprobabilityVariableAtMost;
        document.getElementById("MeanppDprobabilityVariableAtLeast").innerHTML = "P(&ge; x) = " + MeanppDprobabilityVariableAtLeast;
}


document.getElementById("poissonBinomialProbability").addEventListener("submit", poissonBinomialProbability);

function poissonBinomialProbability(event) {
   event.preventDefault();
   event.stopPropagation();
  

    var pBvariable = parseFloat(document.getElementById("pBvariable").value, 10) || 0,
        pBtrials = parseFloat(document.getElementById("pBtrials").value, 10) || 0,
        pBsuccess = parseFloat(document.getElementById("pBsuccess").value, 10) || 0;
        
    var pBmean = pBtrials * pBsuccess,
        pBprobabilityVariable = (Math.pow(pBmean, pBvariable) * Math.pow(Math.E, -1 * pBmean)) / factorial(pBvariable),
        pBstandardDeviation = Math.sqrt(pBmean);

        document.getElementById("pBmean").innerHTML = "&mu; = " + pBmean;
        document.getElementById("pBprobabilityVariable").innerHTML = "P(x) = " + pBprobabilityVariable;
        document.getElementById("pBstandardDeviation").innerHTML = "&sigma; = " + pBstandardDeviation;
}


document.getElementById("pBmeanSuccessProbability").addEventListener("submit", pBmeanSuccessProbability);

function pBmeanSuccessProbability(event) {
   event.preventDefault();
   event.stopPropagation();
  

    var pBSvariable = parseFloat(document.getElementById("pBSvariable").value, 10) || 0,
        pBStrials = parseFloat(document.getElementById("pBStrials").value, 10) || 0,
        pBSstandardDeviation = parseFloat(document.getElementById("pBSstandardDeviation").value, 10) || 0;
        
    var pBSmean = Math.pow(pBSstandardDeviation, 2),
        pBSprobabilityVariable = (Math.pow(pBSmean, pBSvariable) * Math.pow(Math.E, -1 * pBSmean)) / factorial(pBSvariable),
        pBSsuccess = pBSmean / pBStrials;

        document.getElementById("pBSmean").innerHTML = "&mu; = " + pBSmean;
        document.getElementById("pBSprobabilityVariable").innerHTML = "P(x) = " + pBSprobabilityVariable;
        document.getElementById("pBSsuccess").innerHTML = "p = " + pBSsuccess;
}
