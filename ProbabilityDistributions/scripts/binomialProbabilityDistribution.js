// Copyright 2016 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// https://samuelchukwuemeka.github.io/probability-distributions/

"use strict";

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function combination(n, x) {
    if (x > n) {
        return "Error: x cannot be greater than n";
    }
    return factorial(n) / (factorial(n-x) * factorial(x));
}



// Binomial Probability Distrubution Calculation
// Binomial Probability Distribution Parameters Calculation
document.getElementById("binomialProbabilityCalculation").addEventListener("submit", binomialProbabilityCalculation);

function binomialProbabilityCalculation(event) {
   event.preventDefault();
      
    var variable = parseFloat(document.getElementById("variable").value, 10) || 0,
        trials = parseFloat(document.getElementById("trials").value, 10) || 0,
        success = parseFloat(document.getElementById("success").value, 10) || 0;

    
    function atLeastVariable(n, x, p, q) {
        var atLeast = 0;
        for (; x <= n; x++) {
            atLeast += combination(n, x) * Math.pow(p, x) * Math.pow(q, n - x);
        }
        return atLeast;
    }

    function greaterThanVariable(n, x, p, q) {
        var greaterThan = 0, y = x + 1;
        for (; y <= n; y++) {
            greaterThan += combination(n, y) * Math.pow(p, y) * Math.pow(q, n - y);
        }
        return greaterThan;
    }

    function atMostVariable(n, x, p, q) {
        var atMost = 0;
        for (; x >= 0; x--) {
            atMost += combination(n, x) * Math.pow(p, x) * Math.pow(q, n - x);
        }
        return atMost;
    }

    function lessThanVariable(n, x, p, q) {
        var lessThan = 0, y = x - 1;
        for (; y >= 0; y--) {
            lessThan += combination(n, y) * Math.pow(p, y) * Math.pow(q, n - y);
        }
        return lessThan;
    }
    
    
    var failure = 1 - success,
        probabilityVariable = combination(trials, variable) * Math.pow(success, variable) * Math.pow(failure, trials - variable),
        probabilityVariableTrials = Math.pow(success, trials),
        probabilityatLeastVariable = atLeastVariable(trials, variable, success, failure),
        probabilityatMostVariable = atMostVariable(trials, variable, success, failure), 
        probabilityGreaterThanVariable = greaterThanVariable(trials, variable, success, failure),
        probabilityLessThanVariable = lessThanVariable(trials, variable, success, failure),
        mean = trials * success,
        standardDeviation = Math.sqrt(trials * success * failure);

         
      
        document.getElementById("failure").innerHTML = "q = " + failure;
        document.getElementById("probabilityVariable").innerHTML = "P(x) = " + probabilityVariable;
        document.getElementById("probabilityVariableTrials").innerHTML = "P(x = n) = " + probabilityVariableTrials;
        document.getElementById("probabilityatLeastVariable").innerHTML = "P(at least x) = " + probabilityatLeastVariable;
        document.getElementById("probabilityatMostVariable").innerHTML = "P(at most x) = " + probabilityatMostVariable;
        document.getElementById("probabilityGreaterThanVariable").innerHTML = "P(greater than x) = " + probabilityGreaterThanVariable;
        document.getElementById("probabilityLessThanVariable").innerHTML = "P(less than x) = " + probabilityLessThanVariable;
        document.getElementById("mean").innerHTML = "&mu; = " + mean;
        document.getElementById("standardDeviation").innerHTML = "&sigma; = " + standardDeviation;

}


// Calculate the probability of success, mean, and standard deviation.
document.getElementById("successMeanStandardDeviation").addEventListener("submit", successMeanStandardDeviation);

function successMeanStandardDeviation(event) {
   event.preventDefault();
   event.stopPropagation();


    var smsdProbability = parseFloat(document.getElementById("smsdProbability").value, 10) || 0,
        smsdVariable = parseFloat(document.getElementById("smsdVariable").value, 10) || 0,
        smsdTrials = parseFloat(document.getElementById("smsdTrials").value, 10) || 0,
        smsdFailure = parseFloat(document.getElementById("smsdFailure").value, 10) || 0,


        smsdSuccess = Math.pow((smsdProbability/(combination(smsdTrials, smsdVariable) * Math.pow(smsdFailure, smsdTrials - smsdVariable))),(1/smsdVariable)),
        smsdMean = smsdTrials * smsdSuccess,
        smsdStandardDeviation = Math.sqrt(smsdTrials * smsdSuccess * smsdFailure);

        
        document.getElementById("smsdSuccess").innerHTML = "p = " + smsdSuccess;
        document.getElementById("smsdMean").innerHTML = "&mu; = " + smsdMean;
        document.getElementById("smsdStandardDeviation").innerHTML = "&sigma; = " + smsdStandardDeviation;
       
}


// Calculate the probability of failure, mean, and standard deviation.
document.getElementById("failureMeanStandardDeviation").addEventListener("submit", failureMeanStandardDeviation);

function failureMeanStandardDeviation(event) {
    event.preventDefault();
    event.stopPropagation();


    var fmsdProbability = parseFloat(document.getElementById("fmsdProbability").value, 10) || 0,
        fmsdVariable = parseFloat(document.getElementById("fmsdVariable").value, 10) || 0,
        fmsdTrials = parseFloat(document.getElementById("fmsdTrials").value, 10) || 0,
        fmsdSuccess = parseFloat(document.getElementById("fmsdSuccess").value, 10) || 0,


        fmsdFailure = Math.pow(fmsdProbability/(combination(fmsdTrials, fmsdVariable) * Math.pow(fmsdSuccess, fmsdVariable)),(1/(fmsdTrials - fmsdVariable))),
        fmsdMean = fmsdTrials * fmsdSuccess,
        fmsdStandardDeviation = Math.sqrt(fmsdTrials * fmsdSuccess * fmsdFailure);

        
        document.getElementById("fmsdFailure").innerHTML = "q = " + fmsdFailure;
        document.getElementById("fmsdMean").innerHTML = "&mu; = " + fmsdMean;
        document.getElementById("fmsdStandardDeviation").innerHTML = "&sigma; = " + fmsdStandardDeviation;
       
}


//Calculate the probability of failure, probability of success, and the number of trials.
document.getElementById("failureSuccessTrials").addEventListener("submit", failureSuccessTrials);

function failureSuccessTrials(event) {
    event.preventDefault();
    event.stopPropagation();


    var fsnMean = parseFloat(document.getElementById("fsnMean").value, 10) || 0,
        fsnStandardDeviation = parseFloat(document.getElementById("fsnStandardDeviation").value, 10) || 0,
        

        fsnFailure = Math.pow(fsnStandardDeviation, 2) / fsnMean,
        fsnSuccess = 1 - fsnFailure,
        fsnTrials = fsnMean / fsnSuccess,
        fsnMax = fsnMean + 2 * fsnStandardDeviation,
        fsnMin = fsnMean - 2 * fsnStandardDeviation;

        
        document.getElementById("fsnFailure").innerHTML = "q = " + fsnFailure;
        document.getElementById("fsnSuccess").innerHTML = "p = " + fsnSuccess;
        document.getElementById("fsnTrials").innerHTML = "n = " + fsnTrials;
        document.getElementById("fsnMax").innerHTML = "The maximum usual value = " + fsnMax;
        document.getElementById("fsnMin").innerHTML = "The minimum usual value = " + fsnMin;
}



// Binomial Probability Distribution Parameters Calculation
document.getElementById("binomialProbabilityParameters").addEventListener("submit", binomialProbabilityParameters);

function binomialProbabilityParameters(event) {
   event.preventDefault();
   
    var trialsParameters = parseFloat(document.getElementById("trialsParameters").value, 10) || 0,
        successParameters = parseFloat(document.getElementById("successParameters").value, 10) || 0;

    
    var failureParameters = 1 - successParameters,
        meanParameters = trialsParameters * successParameters,
        standardDeviationParameters = Math.sqrt(trialsParameters * successParameters * failureParameters),
        minimumUsualValue = meanParameters - (2 * standardDeviationParameters),
        maximumUsualValue = meanParameters + (2 * standardDeviationParameters);

         
      
        document.getElementById("failureParameters").innerHTML = "q = " + failureParameters;
        document.getElementById("meanParameters").innerHTML = "&mu; = " + meanParameters;
        document.getElementById("standardDeviationParameters").innerHTML = "&sigma; = " + standardDeviationParameters;
        document.getElementById("minimumUsualValue").innerHTML = "The minimum usual value = " + minimumUsualValue;
        document.getElementById("maximumUsualValue").innerHTML = "The maximum usual value = " + maximumUsualValue;
}


// Binomial Probability Distribution Parameters Failure Calculation
document.getElementById("binomialProbabilityParametersFailure").addEventListener("submit", binomialProbabilityParametersFailure);

function binomialProbabilityParametersFailure(event) {
   event.preventDefault();
   
    var trialsParametersFailure = parseFloat(document.getElementById("trialsParametersFailure").value, 10) || 0,
        failureParametersFailure = parseFloat(document.getElementById("failureParametersFailure").value, 10) || 0;

    
    var successParametersFailure = 1 - failureParametersFailure,
        meanParametersFailure = trialsParametersFailure * successParametersFailure,
        standardDeviationParametersFailure = Math.sqrt(trialsParametersFailure * successParametersFailure * failureParametersFailure),
        minimumUsualValueFailure = meanParametersFailure - (2 * standardDeviationParametersFailure),
        maximumUsualValueFailure = meanParametersFailure + (2 * standardDeviationParametersFailure);

         
      
        document.getElementById("successParametersFailure").innerHTML = "q = " + successParametersFailure;
        document.getElementById("meanParametersFailure").innerHTML = "&mu; = " + meanParametersFailure;
        document.getElementById("standardDeviationParametersFailure").innerHTML = "&sigma; = " + standardDeviationParametersFailure;
        document.getElementById("minimumUsualValueFailure").innerHTML = "The minimum usual value = " + minimumUsualValueFailure;
        document.getElementById("maximumUsualValueFailure").innerHTML = "The maximum usual value = " + maximumUsualValueFailure;
}

// Calculate the probability of success, mean, and standard deviation.
document.getElementById("successMeanStandardDeviation").addEventListener("submit", successMeanStandardDeviation);

function successMeanStandardDeviation(event) {
   event.preventDefault();
   event.stopPropagation();


    var smsdProbability = parseFloat(document.getElementById("smsdProbability").value, 10) || 0,
        smsdVariable = parseFloat(document.getElementById("smsdVariable").value, 10) || 0,
        smsdTrials = parseFloat(document.getElementById("smsdTrials").value, 10) || 0,
        smsdFailure = parseFloat(document.getElementById("smsdFailure").value, 10) || 0,


        smsdSuccess = Math.pow((smsdProbability/(combination(smsdTrials, smsdVariable) * Math.pow(smsdFailure, smsdTrials - smsdVariable))),(1/smsdVariable)),
        smsdMean = smsdTrials * smsdSuccess,
        smsdStandardDeviation = Math.sqrt(smsdTrials * smsdSuccess * smsdFailure);

        
        document.getElementById("smsdSuccess").innerHTML = "p = " + smsdSuccess;
        document.getElementById("smsdMean").innerHTML = "&mu; = " + smsdMean;
        document.getElementById("smsdStandardDeviation").innerHTML = "&sigma; = " + smsdStandardDeviation;
       
}


// Calculate the probability of failure, mean, and standard deviation.
document.getElementById("failureMeanStandardDeviation").addEventListener("submit", failureMeanStandardDeviation);

function failureMeanStandardDeviation(event) {
    event.preventDefault();
    event.stopPropagation();


    var fmsdProbability = parseFloat(document.getElementById("fmsdProbability").value, 10) || 0,
        fmsdVariable = parseFloat(document.getElementById("fmsdVariable").value, 10) || 0,
        fmsdTrials = parseFloat(document.getElementById("fmsdTrials").value, 10) || 0,
        fmsdSuccess = parseFloat(document.getElementById("fmsdSuccess").value, 10) || 0,


        fmsdFailure = Math.pow(fmsdProbability/(combination(fmsdTrials, fmsdVariable) * Math.pow(fmsdSuccess, fmsdVariable)),(1/(fmsdTrials - fmsdVariable))),
        fmsdMean = fmsdTrials * fmsdSuccess,
        fmsdStandardDeviation = Math.sqrt(fmsdTrials * fmsdSuccess * fmsdFailure);

        
        document.getElementById("fmsdFailure").innerHTML = "q = " + fmsdFailure;
        document.getElementById("fmsdMean").innerHTML = "&mu; = " + fmsdMean;
        document.getElementById("fmsdStandardDeviation").innerHTML = "&sigma; = " + fmsdStandardDeviation;
       
}


//Calculate the probability of failure, probability of success, and the number of trials.
document.getElementById("failureSuccessTrials").addEventListener("submit", failureSuccessTrials);

function failureSuccessTrials(event) {
    event.preventDefault();
    event.stopPropagation();


    var fsnMean = parseFloat(document.getElementById("fsnMean").value, 10) || 0,
        fsnStandardDeviation = parseFloat(document.getElementById("fsnStandardDeviation").value, 10) || 0,
        

        fsnFailure = Math.pow(fsnStandardDeviation, 2) / fsnMean,
        fsnSuccess = 1 - fsnFailure,
        fsnTrials = fsnMean / fsnSuccess,
        fsnMax = fsnMean + 2 * fsnStandardDeviation,
        fsnMin = fsnMean - 2 * fsnStandardDeviation;

        
        document.getElementById("fsnFailure").innerHTML = "q = " + fsnFailure;
        document.getElementById("fsnSuccess").innerHTML = "p = " + fsnSuccess;
        document.getElementById("fsnTrials").innerHTML = "n = " + fsnTrials;
        document.getElementById("fsnMax").innerHTML = "The maximum usual value = " + fsnMax;
        document.getElementById("fsnMin").innerHTML = "The minimum usual value = " + fsnMin;
}

