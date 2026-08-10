// Copyright 2017 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// 
// https://samuelchukwuemeka.github.io/sampling-distributions/


"use strict";

// Reference for some functions/formulas: John C. Pezzullo @ http://statpages.info/scicalc.html

function CHISQ(x, n) {
    if (x > 1000 | n > 1000) {
        var q = NORM((Math.pow(x / n, 1 / 3) + 2 / (9 * n) - 1) / Math.sqrt(2 / (9 * n))) / 2;
        if (x > n) {
            return q;
        }
        {
            return 1 - q;
        }
    }
    var p = Math.exp(-0.5 * x);
    if ((n % 2) === 1) {
        p = p * Math.sqrt(2 * x / Math.PI);
    }
    var k = n;
    while (k >= 2) {
        p = p * x / k;
        k = k - 2;
    }
    var t = p;
    var a = n;
    while (t > 1e-15 * p) {
        a = a + 2;
        t = t * x / a;
        p = p + t;
    }
    return 1 - p;
}

function NORM(z) {
    var q = z * z;
    if (Math.abs(z) > 7) {
        return (1 - 1 / q + 3 / (q * q)) * Math.exp(-q / 2) / (Math.abs(z) * Math.sqrt(Math.PI / 2));
    } else {
        return CHISQ(q, 1);
    }
}

function ANORM(p) {
    var v = 0.5;
    var dv = 0.5;
    var z = 0;
    while (dv > 1e-15) {
        z = 1 / v - 1;
        dv = dv / 2;
        if (NORM(z) > p) {
            v = v - dv;
        } else {
            v = v + dv;
        }
    }
    return z;
}

function GAUSS(z) {
    return ((z < 0) ? ((z < -10) ? 0 : CHISQ(z * z, 1) / 2) : ((z > 10) ? 1 : 1 - CHISQ(z * z, 1) / 2));
}

function ACHISQ(p, n) {
    var v = 0.5;
    var dv = 0.5;
    var x = 0;
    while (dv > 1e-15) {
        x = 1 / v - 1;
        dv = dv / 2;
        if (CHISQ(x, n) > p) {
            v = v - dv;
        } else {
            v = v + dv;
        }
    }
    return x;
}

function AGAUSS(p) {
    if (p > 0.5) {
        return Math.sqrt(ACHISQ(2 * (1 - p), 1));
    } else {
        return -1*Math.sqrt(ACHISQ((2 * p, 1)));
    }
}


// Given: population proportion, sample proportion, sample size
// Calculate the mean and standard deviation of the sample proportion
document.getElementById("sampleProportionMSD").addEventListener("submit", sampleProportionMSD);

function sampleProportionMSD(event) {
    event.preventDefault();

    var populationProportion = parseFloat(document.getElementById("populationProportion").value, 10) || 0,
        sampleProportion = parseFloat(document.getElementById("sampleProportion").value, 10) || 0,
        sampleSize = parseFloat(document.getElementById("sampleSize").value, 10) || 0,
        populationProportionUnit = document.getElementById("populationProportionUnit").value,
        sampleProportionUnit = document.getElementById("sampleProportionUnit").value,
        meanSampleProportion,
        standardDeviationSampleProportion,
        complementPopulationProportion;
       
        if (populationProportionUnit === "percent") {
            populationProportion = populationProportion / 100;
        }
        
        if (sampleProportionUnit === "percent") {
            sampleProportion = sampleProportion / 100;
        }
        
        complementPopulationProportion = 1 - populationProportion;

        meanSampleProportion = populationProportion;
        
        standardDeviationSampleProportion = Math.sqrt((populationProportion * complementPopulationProportion) / sampleSize);
    
    document.getElementById("meanSampleProportion").innerHTML = "The mean of the sample proportions is " + meanSampleProportion;
    document.getElementById("standardDeviationSampleProportion").innerHTML = "The standard deviation of the sample proportions is " + standardDeviationSampleProportion;
}


// Given: population proportion, sample proportion, sample size
// Calculate the mean and standard deviation of the sample proportion
document.getElementById("sampleProportionProbability").addEventListener("submit", sampleProportionProbability);

function sampleProportionProbability(event) {
    event.preventDefault();

    var populationProportionMSDZ = parseFloat(document.getElementById("populationProportionMSDZ").value, 10) || 0,
        sampleProportionMSDZ = parseFloat(document.getElementById("sampleProportionMSDZ").value, 10) || 0,
        sampleSizeMSDZ = parseFloat(document.getElementById("sampleSizeMSDZ").value, 10) || 0,
        populationProportionUnitMSDZ = document.getElementById("populationProportionUnitMSDZ").value,
        sampleProportionUnitMSDZ = document.getElementById("sampleProportionUnitMSDZ").value,
        meanSampleProportionProbability,
        standardDeviationSampleProportionProbability,
        complementPopulationProportionMSDZ,
        zScore,
        zScore1,
        probabilityLess,
        probabilityMore;
       
        if (populationProportionUnitMSDZ === "percent") {
            populationProportionMSDZ = populationProportionMSDZ / 100;
        }
        
        if (sampleProportionUnitMSDZ === "percent") {
            sampleProportionMSDZ = sampleProportionMSDZ / 100;
        }
        
        complementPopulationProportionMSDZ = 1 - populationProportionMSDZ;

        meanSampleProportionProbability = populationProportionMSDZ;
        
        standardDeviationSampleProportionProbability = Math.sqrt((populationProportionMSDZ * complementPopulationProportionMSDZ) / sampleSizeMSDZ);
        
        zScore1 = (sampleProportionMSDZ - populationProportionMSDZ) / standardDeviationSampleProportionProbability;
        
        zScore = zScore1.toFixed(7);
    
        probabilityLess = GAUSS(zScore);
        
        probabilityMore = 1 - probabilityLess;
    
    document.getElementById("meanSampleProportionProbability").innerHTML = "The mean of the sample proportions is " + meanSampleProportionProbability;
    document.getElementById("standardDeviationSampleProportionProbability").innerHTML = "The standard deviation of the sample proportions is " + standardDeviationSampleProportionProbability;
    document.getElementById("zScore").innerHTML = "The z score is " + zScore;
    document.getElementById("probabilityLess").innerHTML = "P(&le; z)= " + probabilityLess;
    document.getElementById("probabilityMore").innerHTML = "P(&ge; z)= " + probabilityMore;
}


// Given: population proportion, individual, sample size
// Calculate the sample proportion, mean, and standard deviation of the sample proportion
document.getElementById("sampleProportionIndividualProbability").addEventListener("submit", sampleProportionIndividualProbability);

function sampleProportionIndividualProbability(event) {
    event.preventDefault();

    var populationProportionMSDZI = parseFloat(document.getElementById("populationProportionMSDZI").value, 10) || 0,
        individualMSDZI = parseFloat(document.getElementById("individualMSDZI").value, 10) || 0,
        sampleSizeMSDZI = parseFloat(document.getElementById("sampleSizeMSDZI").value, 10) || 0,
        populationProportionUnitMSDZI = document.getElementById("populationProportionUnitMSDZI").value,
        sampleProportionProbabilityI,
        meanSampleProportionProbabilityI,
        standardDeviationSampleProportionProbabilityI,
        complementPopulationProportionMSDZI,
        zScoreI,
        zScoreI1,
        probabilityLessI,
        probabilityMoreI;
       
        if (populationProportionUnitMSDZI === "percent") {
            populationProportionMSDZI = populationProportionMSDZI / 100;
        }
        
        sampleProportionProbabilityI = individualMSDZI / sampleSizeMSDZI;
        
        complementPopulationProportionMSDZI = 1 - populationProportionMSDZI;

        meanSampleProportionProbabilityI = populationProportionMSDZI;
        
        standardDeviationSampleProportionProbabilityI = Math.sqrt((populationProportionMSDZI * complementPopulationProportionMSDZI) / sampleSizeMSDZI);
        
        zScoreI1 = (sampleProportionProbabilityI - populationProportionMSDZI) / standardDeviationSampleProportionProbabilityI;
        
        zScoreI = zScoreI1.toFixed(7);
    
        probabilityLessI = GAUSS(zScoreI);
        
        probabilityMoreI = 1 - probabilityLessI;
        
    document.getElementById("sampleProportionProbabilityI").innerHTML = "The sample proportion is " + sampleProportionProbabilityI  + " or " + (sampleProportionProbabilityI * 100) + "%";
    document.getElementById("meanSampleProportionProbabilityI").innerHTML = "The mean of the sample proportions is " + meanSampleProportionProbabilityI;
    document.getElementById("standardDeviationSampleProportionProbabilityI").innerHTML = "The standard deviation of the sample proportions is " + standardDeviationSampleProportionProbabilityI;
    document.getElementById("zScoreI").innerHTML = "The z score is " + zScoreI;
    document.getElementById("probabilityLessI").innerHTML = "P(&le; z)= " + probabilityLessI;
    document.getElementById("probabilityMoreI").innerHTML = "P(&ge; z)= " + probabilityMoreI;
}



// Given: population proportion, sample size, number of standard errors from the population proportion
// Calculate the detailed probability of the sample proportion
document.getElementById("probabilitySE").addEventListener("submit", probabilitySE);

function probabilitySE(event) {
    event.preventDefault();

    var populationProportionSE = parseFloat(document.getElementById("populationProportionSE").value, 10) || 0,
        sampleSizeSE = parseFloat(document.getElementById("sampleSizeSE").value, 10) || 0,
        numberSE = parseFloat(document.getElementById("numberSE").value, 10) || 0,
        populationProportionUnitSE = document.getElementById("populationProportionUnitSE").value,
        numberSE1options = document.getElementById("numberSE1options").value,
        numberSE2options = document.getElementById("numberSE2options").value,
        complementPopulationProportionSE,
        standardError,
        probabilitySE1lessThan,
        probabilitySE1moreThan,
        probabilitySE2lessThan,
        probabilitySE2moreThan,
        probabilitySEwithin,
        probabilitySEaway;
        
            
        if (populationProportionUnitSE === "percent"){
            populationProportionSE = populationProportionSE / 100;
        }
        
        complementPopulationProportionSE = 1 - populationProportionSE;
        
        standardError = Math.sqrt((populationProportionSE * complementPopulationProportionSE) / sampleSizeSE);
        
        document.getElementById("standardError").innerHTML = "The standard error is " + standardError;
        
        if ((numberSE1options === "lessThan") && (numberSE2options === "below")){
            probabilitySE1lessThan = GAUSS(-1 * numberSE);
            document.getElementById("probabilitySE1lessThan").innerHTML = "P(&le; " + numberSE + " standard errors below) = " + probabilitySE1lessThan;
        }
        
        if ((numberSE1options === "moreThan") && (numberSE2options === "below")){
            probabilitySE1moreThan = 1 - GAUSS(-1 * numberSE);
            document.getElementById("probabilitySE1moreThan").innerHTML = "P(&ge; " + numberSE + " standard errors below) = " + probabilitySE1moreThan;
        }
        
        if ((numberSE1options === "lessThan") && (numberSE2options === "above")){
            probabilitySE2lessThan = GAUSS(numberSE);
            document.getElementById("probabilitySE2lessThan").innerHTML = "P(&le; " + numberSE + " standard errors above) = " + probabilitySE2lessThan;
        }
        
        if ((numberSE1options === "moreThan") && (numberSE2options === "above")){
            probabilitySE2moreThan = 1 - GAUSS(numberSE);
            document.getElementById("probabilitySE2moreThan").innerHTML = "P(&ge; " + numberSE + " standard errors above) = " + probabilitySE2moreThan;
        }
        
        if ((numberSE1options === "within") && (numberSE2options === "of")){
            probabilitySEwithin = GAUSS(numberSE) - GAUSS(-1 * numberSE);
            document.getElementById("probabilitySEwithin").innerHTML = "P(within " + numberSE + " standard errors of) = " + probabilitySEwithin;
        }
        
        if ((numberSE1options === "moreThan") && (numberSE2options === "away")){
            probabilitySEaway = GAUSS(-1 * numberSE) + (1 - GAUSS(numberSE));
            document.getElementById("probabilitySEaway").innerHTML = "P(more than " + numberSE + " standard errors away from) = " + probabilitySEaway;
        }
}



// Given: population proportion, sample size, number of standard errors from the population proportion
// Calculate z and the detailed probability of the sample proportion
document.getElementById("probabilityValueSE").addEventListener("submit", probabilityValueSE);

function probabilityValueSE(event) {
    event.preventDefault();

    var populationProportionValueSE = parseFloat(document.getElementById("populationProportionValueSE").value, 10) || 0,
        sampleSizeValueSE = parseFloat(document.getElementById("sampleSizeValueSE").value, 10) || 0,
        numberValueSE = parseFloat(document.getElementById("numberValueSE").value, 10) || 0,
        populationProportionUnitValueSE = document.getElementById("populationProportionUnitValueSE").value,
        numberValueSE1options = document.getElementById("numberValueSE1options").value,
        numberValueSE2options = document.getElementById("numberValueSE2options").value,
        complementPopulationProportionValueSE,
        standardErrorValue,
        zscoreLess1,
        zscoreMore1,
        zscoreLess,
        zscoreMore,
        probabilityValueSE1lessThan,
        probabilityValueSE1moreThan,
        probabilityValueSE2lessThan,
        probabilityValueSE2moreThan,
        probabilityValueSEwithin,
        probabilityValueSEaway;
        
            
        if (populationProportionUnitValueSE === "percent"){
            populationProportionValueSE = populationProportionValueSE / 100;
        }
                       
        complementPopulationProportionValueSE = 1 - populationProportionValueSE;
        
        standardErrorValue = Math.sqrt((populationProportionValueSE * complementPopulationProportionValueSE) / sampleSizeValueSE);
        
        document.getElementById("standardErrorValue").innerHTML = "The standard error is " + standardErrorValue;
        
        zscoreLess1 = (-1 * numberValueSE) / standardErrorValue;
        
        zscoreLess = zscoreLess1.toFixed(7);
        
        zscoreMore1 = numberValueSE / standardErrorValue;
        
        zscoreMore = zscoreMore1.toFixed(7);
    
        
        
        if ((numberValueSE1options === "lessThan") && (numberValueSE2options === "below")){
            document.getElementById("zscoreLess").innerHTML = "The z score is " + zscoreLess;
            probabilityValueSE1lessThan = GAUSS(zscoreLess);
            document.getElementById("probabilityValueSE1lessThan").innerHTML = "P(&le; " + numberValueSE + " below) = " + probabilityValueSE1lessThan;
        }
        
        if ((numberValueSE1options === "moreThan") && (numberValueSE2options === "below")){
            document.getElementById("zscoreLess").innerHTML = "The z score is " + zscoreLess;
            probabilityValueSE1moreThan = 1 - GAUSS(zscoreLess);
            document.getElementById("probabilityValueSE1moreThan").innerHTML = "P(&ge; " + numberValueSE + " below) = " + probabilityValueSE1moreThan;
        }
        
        if ((numberValueSE1options === "lessThan") && (numberValueSE2options === "above")){
            document.getElementById("zscoreMore").innerHTML = "The z score is " + zscoreMore;
            probabilityValueSE2lessThan = GAUSS(zscoreMore);
            document.getElementById("probabilityValueSE2lessThan").innerHTML = "P(&le; " + numberValueSE + " above) = " + probabilityValueSE2lessThan;
        }
        
        if ((numberValueSE1options === "moreThan") && (numberValueSE2options === "above")){
            document.getElementById("zscoreMore").innerHTML = "The z score is " + zscoreMore;
            probabilityValueSE2moreThan = 1 - GAUSS(zscoreMore);
            document.getElementById("probabilityValueSE2moreThan").innerHTML = "P(&ge; " + numberValueSE + " above) = " + probabilityValueSE2moreThan;
        }
        
        if ((numberValueSE1options === "within") && (numberValueSE2options === "of")){
            document.getElementById("zscoreLess").innerHTML = "The first z score is " + zscoreLess;
            document.getElementById("zscoreMore").innerHTML = "The second z score is " + zscoreMore;
            probabilityValueSEwithin = GAUSS(zscoreMore) - GAUSS(zscoreLess);
            document.getElementById("probabilityValueSEwithin").innerHTML = "P(within " + numberValueSE + " of) = " + probabilityValueSEwithin;
        }
        
        if ((numberValueSE1options === "moreThan") && (numberValueSE2options === "away")){
            document.getElementById("zscoreLess").innerHTML = "The first z score is " + zscoreLess;
            document.getElementById("zscoreMore").innerHTML = "The second z score is " + zscoreMore;
            probabilityValueSEaway = GAUSS(zscoreLess) + (1 - GAUSS(zscoreMore));
            document.getElementById("probabilityValueSEaway").innerHTML = "P(more than " + numberValueSE + " away from) = " + probabilityValueSEaway;
        }
}



// Given: population proportion, sample size, detailed probability - less than and greater than
// Calculate the z score, standard error, and the sample proportion
document.getElementById("inverseProportionProbability").addEventListener("submit", inverseProportionProbability);

function inverseProportionProbability(event) {
    event.preventDefault();

    var inversePopulationProportion = parseFloat(document.getElementById("inversePopulationProportion").value, 10) || 0,
        inverseProportionSampleSize = parseFloat(document.getElementById("inverseProportionSampleSize").value, 10) || 0,
        inversePopulationProportionUnit = document.getElementById("inversePopulationProportionUnit").value,
        inverseProportionProbability1 = parseFloat(document.getElementById("inverseProportionProbability1").value, 10) || 0,
        inverseProportionProbabilityUnit = document.getElementById("inverseProportionProbabilityUnit").value,
        inverseComplementPopulationProportion,
        inverseProportionStandardError,
        zScoreProportionInverse,
        variableProportion;


        if (inversePopulationProportionUnit === "percent"){
            inversePopulationProportion = inversePopulationProportion / 100;
        }

        inverseComplementPopulationProportion = 1 - inversePopulationProportion;
        
        inverseProportionStandardError = Math.sqrt((inversePopulationProportion * inverseComplementPopulationProportion) / inverseProportionSampleSize);
        
        document.getElementById("inverseProportionStandardError").innerHTML = "The standard error is " + inverseProportionStandardError;
       
        if (inverseProportionProbabilityUnit === "lessThanProportionProbability") {
            zScoreProportionInverse = AGAUSS(inverseProportionProbability1);
            document.getElementById("zScoreProportionInverse").innerHTML = "The z score is " + zScoreProportionInverse;
        }
        
        if (inverseProportionProbabilityUnit === "greaterThanProportionProbability") {
            zScoreProportionInverse = AGAUSS(1 - inverseProportionProbability1);
            document.getElementById("zScoreProportionInverse").innerHTML = "The z score is " + zScoreProportionInverse;
        }
        
        variableProportion = (zScoreProportionInverse * inverseProportionStandardError) + inversePopulationProportion;
    
    document.getElementById("variableProportion").innerHTML = "The sample proportion is " + variableProportion;
}



document.getElementById("samplingDistributionSampleProportionNormal").addEventListener("submit", samplingDistributionSampleProportionNormal);

function samplingDistributionSampleProportionNormal(event) {
   event.preventDefault();
     

    var SDSPsampleSize = parseFloat(document.getElementById("SDSPsampleSize").value, 10) || 0,
        SDSPpopulationSize = parseFloat(document.getElementById("SDSPpopulationSize").value, 10) || 0,
        SDSPpopulationProportion = parseFloat(document.getElementById("SDSPpopulationProportion").value, 10) || 0,
        complementPopulationProportion,
        isDistributionNormal;
        
        complementPopulationProportion = 1 - SDSPpopulationProportion;

    if (SDSPsampleSize <= (0.05 * SDSPpopulationSize) && (SDSPsampleSize * SDSPpopulationProportion * complementPopulationProportion >= 10)){
        isDistributionNormal = "The sampling distribution of p&#770; is approximately normal";
    }
    
    
    if   (SDSPsampleSize <= (0.05 * SDSPpopulationSize) && (SDSPsampleSize * SDSPpopulationProportion * complementPopulationProportion < 10)){
        isDistributionNormal = "The sampling distribution of p&#770; is not normal";
    }
        
    var SDSPmean = SDSPpopulationProportion,
        SDSPstandardDeviation = Math.sqrt((SDSPpopulationProportion * complementPopulationProportion) / SDSPsampleSize);

        
        document.getElementById("isDistributionNormal").innerHTML = isDistributionNormal;
        document.getElementById("complementPopulationProportion").innerHTML = "q = " + complementPopulationProportion;
        document.getElementById("SDSPmean").innerHTML = "&mu;<sub>p&#770;</sub> = " + SDSPmean;
        document.getElementById("SDSPstandardDeviation").innerHTML = "&sigma;<sub>p&#770;</sub> = " + SDSPstandardDeviation;
}