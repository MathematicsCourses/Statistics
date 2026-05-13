// Copyright 2017 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemeka-samuel.appspot.com
// www.samplingdistribution.appspot.com


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


// z-score Calculation
// Central Limit Theorem Calculation
document.getElementById("cLTzVariableNormalProbability").addEventListener("submit", cLTzVariableNormalProbability);

function cLTzVariableNormalProbability(event) {
   event.preventDefault();
   event.stopPropagation();
   
    var cLTzVariable = parseFloat(document.getElementById("cLTzVariable").value, 10) || 0,
        cLTzMean = parseFloat(document.getElementById("cLTzMean").value, 10) || 0,
        cLTzStandardDeviation = parseFloat(document.getElementById("cLTzStandardDeviation").value, 10) || 0,
        cLTzSampleSize = parseFloat(document.getElementById("cLTzSampleSize").value, 10) || 0,
        cLTzscoreVariable,
        cLTzscoreVariable1,
        cLTzLessThanVariable,
        cLTzGreaterThanVariable;

        cLTzscoreVariable = (cLTzVariable - cLTzMean) / (cLTzStandardDeviation / Math.sqrt(cLTzSampleSize));
        
        cLTzscoreVariable1 = cLTzscoreVariable.toFixed(7);
    
        cLTzLessThanVariable = GAUSS(cLTzscoreVariable1);
        
        cLTzGreaterThanVariable = 1 - cLTzLessThanVariable;
    
                
        document.getElementById("cLTzscoreVariable").innerHTML = "z score = " + cLTzscoreVariable.toFixed(2);
        document.getElementById("cLTzLessThanVariable").innerHTML = "P(&le; x) = P(&le; z) = " + cLTzLessThanVariable;
        document.getElementById("cLTzGreaterThanVariable").innerHTML = "P(&ge; x) = P(&ge; z) = " + cLTzGreaterThanVariable;
}


// z-scores for Variables Calculations
// Central Limit Theorem Calculation
document.getElementById("cLTvariableBetweenNormalProbability").addEventListener("submit", cLTvariableBetweenNormalProbability);

function cLTvariableBetweenNormalProbability(event) {
   event.preventDefault();
   event.stopPropagation();
   
    var cLTnPvariable1 = parseFloat(document.getElementById("cLTnPvariable1").value, 10) || 0,
        cLTnPvariable2 = parseFloat(document.getElementById("cLTnPvariable2").value, 10) || 0,
        cLTnPmean = parseFloat(document.getElementById("cLTnPmean").value, 10) || 0,
        cLTnPstandardDeviation = parseFloat(document.getElementById("cLTnPstandardDeviation").value, 10) || 0,
        cLTnPsampleSize = parseFloat(document.getElementById("cLTnPsampleSize").value, 10) || 0,
        cLTnPzscore1,
        cLTnPzscore11,
        cLTnPzscore2,
        cLTnPzscore22,
        cLTnPzLessThanVariable1,
        cLTnPzLessThanVariable2,
        cLTnPzGreaterThanVariable1,
        cLTnPzGreaterThanVariable2,
        cLTnPzBetweenVariable,
        cLTnPzAwayFromVariable;
        
        cLTnPzscore1 = (cLTnPvariable1 - cLTnPmean) / (cLTnPstandardDeviation / Math.sqrt(cLTnPsampleSize));
        
        cLTnPzscore2 = (cLTnPvariable2 - cLTnPmean) / (cLTnPstandardDeviation / Math.sqrt(cLTnPsampleSize));
               
        cLTnPzscore11 = cLTnPzscore1.toFixed(7);
        
        cLTnPzscore22 = cLTnPzscore2.toFixed(7);
    
        cLTnPzLessThanVariable1 = GAUSS(cLTnPzscore11);
        
        cLTnPzLessThanVariable2 = GAUSS(cLTnPzscore22);
        
        cLTnPzGreaterThanVariable1 = 1 - GAUSS(cLTnPzscore11);           
              
        cLTnPzGreaterThanVariable2 = 1 - GAUSS(cLTnPzscore22);  
        
        cLTnPzBetweenVariable = cLTnPzLessThanVariable2 - cLTnPzLessThanVariable1;
        
        cLTnPzAwayFromVariable = cLTnPzLessThanVariable1 + (1 - cLTnPzLessThanVariable2);
              
                              
        document.getElementById("cLTnPzscore1").innerHTML = "z score for x1 = z1 = " + cLTnPzscore1.toFixed(2);
        document.getElementById("cLTnPzscore2").innerHTML = "z score for x2 = z2 = " + cLTnPzscore2.toFixed(2);
        document.getElementById("cLTnPzLessThanVariable1").innerHTML = "P(&le; x1) = P(&le; z1) = " + cLTnPzLessThanVariable1;
        document.getElementById("cLTnPzLessThanVariable2").innerHTML = "P(&le; x2) = P(&le; z2) = " + cLTnPzLessThanVariable2;
        document.getElementById("cLTnPzGreaterThanVariable1").innerHTML = "P(&ge; x1) = P(&ge; z1) = " + cLTnPzGreaterThanVariable1;
        document.getElementById("cLTnPzGreaterThanVariable2").innerHTML = "P(&ge; x2) = P(&ge; z2) = " + cLTnPzGreaterThanVariable2;
        document.getElementById("cLTnPzBetweenVariable").innerHTML = "P(x1 &le; x &le; x2) = P(z1 &le; z &le; z2) = " + cLTnPzBetweenVariable;
        document.getElementById("cLTnPzAwayFromVariable").innerHTML = "P(&le; x1 and &ge; x2) = P(&le; z1 and &ge; z2) = " + cLTnPzAwayFromVariable;
}



// Given: population mean, sample mean, number of standard deviations from the population mean
// Calculate the detailed probability of the sample mean
document.getElementById("probabilitySD").addEventListener("submit", probabilitySD);

function probabilitySD(event) {
    event.preventDefault();

    var populationMeanSD = parseFloat(document.getElementById("populationMeanSD").value, 10) || 0,
        populationStandardDeviationSD = parseFloat(document.getElementById("populationStandardDeviationSD").value, 10) || 0,
        sampleSizeSD = parseFloat(document.getElementById("sampleSizeSD").value, 10) || 0,
        numberSD = parseFloat(document.getElementById("numberSD").value, 10) || 0,
        numberSD1options = document.getElementById("numberSD1options").value,
        numberSD2options = document.getElementById("numberSD2options").value,
        sampleMean,
        sampleStandardDeviation,
        probabilitySD1lessThan,
        probabilitySD1moreThan,
        probabilitySD2lessThan,
        probabilitySD2moreThan,
        probabilitySDwithin,
        probabilitySDaway;
        
            
        sampleMean = populationMeanSD;
        
        sampleStandardDeviation = populationStandardDeviationSD / Math.sqrt(sampleSizeSD);
                
        document.getElementById("sampleMean").innerHTML = "The sample mean is " + sampleMean;
        
        document.getElementById("sampleStandardDeviation").innerHTML = "The sample standard deviation is " + sampleStandardDeviation;
        
        if ((numberSD1options === "lessThan") && (numberSD2options === "below")){
            probabilitySD1lessThan = GAUSS(-1 * numberSD);
            document.getElementById("probabilitySD1lessThan").innerHTML = "P(&le; " + numberSD + " standard deviations below) = " + probabilitySD1lessThan;
        }
        
        if ((numberSD1options === "moreThan") && (numberSD2options === "below")){
            probabilitySD1moreThan = 1 - GAUSS(-1 * numberSD);
            document.getElementById("probabilitySD1moreThan").innerHTML = "P(&ge; " + numberSD + " standard deviations below) = " + probabilitySD1moreThan;
        }
        
        if ((numberSD1options === "lessThan") && (numberSD2options === "above")){
            probabilitySD2lessThan = GAUSS(numberSD);
            document.getElementById("probabilitySD2lessThan").innerHTML = "P(&le; " + numberSD + " standard deviations above) = " + probabilitySD2lessThan;
        }
        
        if ((numberSD1options === "moreThan") && (numberSD2options === "above")){
            probabilitySD2moreThan = 1 - GAUSS(numberSD);
            document.getElementById("probabilitySD2moreThan").innerHTML = "P(&ge; " + numberSD + " standard deviations above) = " + probabilitySD2moreThan;
        }
        
        if ((numberSD1options === "within") && (numberSD2options === "of")){
            probabilitySDwithin = GAUSS(numberSD) - GAUSS(-1 * numberSD);
            document.getElementById("probabilitySDwithin").innerHTML = "P(within " + numberSD + " standard deviations of) = " + probabilitySDwithin;
        }
        
        if ((numberSD1options === "moreThan") && (numberSD2options === "away")){
            probabilitySDaway = GAUSS(-1 * numberSD) + (1 - GAUSS(numberSD));
            document.getElementById("probabilitySDaway").innerHTML = "P(more than " + numberSD + " standard deviations away from) = " + probabilitySDaway;
        }
}



// Given: population mean, sample mean, a given value from the population mean
// Calculate z and the detailed probability of the sample mean
document.getElementById("probabilityValueSD").addEventListener("submit", probabilityValueSD);

function probabilityValueSD(event) {
    event.preventDefault();

    var populationMeanValueSD = parseFloat(document.getElementById("populationMeanValueSD").value, 10) || 0,
        populationStandardDeviationValueSD = parseFloat(document.getElementById("populationStandardDeviationValueSD").value, 10) || 0,
        sampleSizeValueSD = parseFloat(document.getElementById("sampleSizeValueSD").value, 10) || 0,
        numberValueSD = parseFloat(document.getElementById("numberValueSD").value, 10) || 0,
        numberValueSD1options = document.getElementById("numberValueSD1options").value,
        numberValueSD2options = document.getElementById("numberValueSD2options").value,
        sampleMeanValue,
        sampleStandardDeviationValue,
        zscoreValueLess1,
        zscoreValueMore1,
        zscoreValueLess,
        zscoreValueMore,
        probabilityValueSD1lessThan,
        probabilityValueSD1moreThan,
        probabilityValueSD2lessThan,
        probabilityValueSD2moreThan,
        probabilityValueSDwithin,
        probabilityValueSDaway;
        
            
        sampleMeanValue = populationMeanValueSD;
        
        sampleStandardDeviationValue = populationStandardDeviationValueSD / Math.sqrt(sampleSizeValueSD);
                
        document.getElementById("sampleMeanValue").innerHTML = "The sample mean is " + sampleMeanValue;
        
        document.getElementById("sampleStandardDeviationValue").innerHTML = "The sample standard deviation is " + sampleStandardDeviationValue;
        
        zscoreValueLess1 = (-1 * numberValueSD) / sampleStandardDeviationValue;
        
        zscoreValueLess = zscoreValueLess1.toFixed(7);
        
        zscoreValueMore1 = numberValueSD / sampleStandardDeviationValue;
        
        zscoreValueMore = zscoreValueMore1.toFixed(7);
        
                
        if ((numberValueSD1options === "lessThan") && (numberValueSD2options === "below")){
            document.getElementById("zscoreValueLess").innerHTML = "The z score is " + zscoreValueLess;
            probabilityValueSD1lessThan = GAUSS(zscoreValueLess);
            document.getElementById("probabilityValueSD1lessThan").innerHTML = "P(&le; " + numberValueSD + " below) = " + probabilityValueSD1lessThan;
        }
        
        if ((numberValueSD1options === "moreThan") && (numberValueSD2options === "below")){
            document.getElementById("zscoreValueLess").innerHTML = "The z score is " + zscoreValueLess;
            probabilityValueSD1moreThan = 1 - GAUSS(zscoreValueLess);
            document.getElementById("probabilityValueSD1moreThan").innerHTML = "P(&ge; " + numberValueSD + " below) = " + probabilityValueSD1moreThan;
        }
        
        if ((numberValueSD1options === "lessThan") && (numberValueSD2options === "above")){
            document.getElementById("zscoreValueMore").innerHTML = "The z score is " + zscoreValueMore;
            probabilityValueSD2lessThan = GAUSS(zscoreValueMore);
            document.getElementById("probabilityValueSD2lessThan").innerHTML = "P(&le; " + numberValueSD + " above) = " + probabilityValueSD2lessThan;
        }
        
        if ((numberValueSD1options === "moreThan") && (numberValueSD2options === "above")){
            document.getElementById("zscoreValueMore").innerHTML = "The z score is " + zscoreValueMore;
            probabilityValueSD2moreThan = 1 - GAUSS(zscoreValueMore);
            document.getElementById("probabilityValueSD2moreThan").innerHTML = "P(&ge; " + numberValueSD + " above) = " + probabilityValueSD2moreThan;
        }
        
        if ((numberValueSD1options === "within") && (numberValueSD2options === "of")){
            document.getElementById("zscoreValueLess").innerHTML = "The first z score is " + zscoreValueLess;
            document.getElementById("zscoreValueMore").innerHTML = "The second z score is " + zscoreValueMore;
            probabilityValueSDwithin = GAUSS(zscoreValueMore) - GAUSS(zscoreValueLess);
            document.getElementById("probabilityValueSDwithin").innerHTML = "P(within " + numberValueSD + " of) = " + probabilityValueSDwithin;
        }
        
        if ((numberValueSD1options === "moreThan") && (numberValueSD2options === "away")){
            document.getElementById("zscoreValueLess").innerHTML = "The first z score is " + zscoreValueLess;
            document.getElementById("zscoreValueMore").innerHTML = "The second z score is " + zscoreValueMore;
            probabilityValueSDaway = GAUSS(zscoreValueLess) + (1 - GAUSS(zscoreValueMore));
            document.getElementById("probabilityValueSDaway").innerHTML = "P(more than " + numberValueSD + " away from) = " + probabilityValueSDaway;
        }
}



// Given: population mean, population standard deviation, sample size, detailed probability - less than and greater than
// Calculate the z score and the variable
document.getElementById("inverseProbability").addEventListener("submit", inverseProbability);

function inverseProbability(event) {
    event.preventDefault();

    var inversePopulationMean = parseFloat(document.getElementById("inversePopulationMean").value, 10) || 0,
        inversePopulationStandardDeviation = parseFloat(document.getElementById("inversePopulationStandardDeviation").value, 10) || 0,
        inverseSampleSize = parseFloat(document.getElementById("inverseSampleSize").value, 10) || 0,
        inverseProbability1 = parseFloat(document.getElementById("inverseProbability1").value, 10) || 0,
        inverseProbabilityUnit = document.getElementById("inverseProbabilityUnit").value,
        zScoreInverse,
        variable,
        a1 = -39.6968302866538,
        a2 = 220.946098424521,
        a3 = -275.928510446969,
        a4 = 138.357751867269,
        a5 = -30.6647980661472,
        a6 = 2.50662827745924,
        b1 = -54.4760987982241,
        b2 = 161.585836858041,
        b3 = -155.698979859887,
        b4 = 66.8013118877197,
        b5 = -13.2806815528857,
        c1 = -7.78489400243029E-03,
        c2 = -0.322396458041136,
        c3 = -2.40075827716184,
        c4 = -2.54973253934373,
        c5 = 4.37466414146497,
        c6 = 2.93816398269878,
        d1 = 7.78469570904146E-03,
        d2 = 0.32246712907004,
        d3 = 2.445134137143,
        d4 = 3.75440866190742,
        p_low = 0.02425,
        p_high = 1 - p_low,
        q,
        r;

        
    if (inverseProbabilityUnit === "lessThanProbability") {
        var p = inverseProbability1;

        if ((p < 0) || (p > 1)) {
            alert("Error: The probability of an event is between 0 and 1 \n 0 and 1 is inclusive \n 0 is the probability of an impossible event  \n 1 is the probability of an event that must occur.");
            zScoreInverse = "";
        } else if (p < p_low) {
            q = Math.sqrt(-2 * Math.log(p));
            zScoreInverse = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
        } else if (p <= p_high) {
            q = p - 0.5;
            r = q * q;
            zScoreInverse = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q / (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
        } else {
            q = Math.sqrt(-2 * Math.log(1 - p));
            zScoreInverse = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
        }
        
        
        document.getElementById("zScoreInverse").innerHTML = "The z score is " + zScoreInverse.toFixed(2);
    }
        
        if (inverseProbabilityUnit === "greaterThanProbability") {
        var p = 1 - inverseProbability1;

        if ((p < 0) || (p > 1)) {
            alert("Error: The probability of an event is between 0 and 1 \n 0 and 1 is inclusive \n 0 is the probability of an impossible event  \n 1 is the probability of an event that must occur.");
            zScoreInverse = "";
        } else if (p < p_low) {
            q = Math.sqrt(-2 * Math.log(p));
            zScoreInverse = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
        } else if (p <= p_high) {
            q = p - 0.5;
            r = q * q;
            zScoreInverse = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q / (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
        } else {
            q = Math.sqrt(-2 * Math.log(1 - p));
            zScoreInverse = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
        }

       
        document.getElementById("zScoreInverse").innerHTML = "The z score is " + zScoreInverse.toFixed(2);
    }
        
        variable = ((zScoreInverse * inversePopulationStandardDeviation) / Math.sqrt(inverseSampleSize)) + inversePopulationMean;
    
    document.getElementById("variable").innerHTML = "The value of the variable is " + variable;
}


document.getElementById("sampleDistribution").addEventListener("submit", sampleDistribution);

function sampleDistribution(event) {
   event.preventDefault();
  

    var populationMean = parseFloat(document.getElementById("sDmean").value, 10) || 0,
        populationStandardDeviation = parseFloat(document.getElementById("sDstandardDeviation").value, 10) || 0,
        sampleSize = parseFloat(document.getElementById("sDsampleSize").value, 10) || 0;
        
    var meanSampleMeans = populationMean,
        standardDeviationSampleMeans = populationStandardDeviation / Math.sqrt(sampleSize);

        document.getElementById("meanSampleMeans").innerHTML = "&mu;<sub>x&#772;</sub> = " + meanSampleMeans;
        document.getElementById("standardDeviationSampleMeans").innerHTML = "&sigma;<sub>x&#772;</sub> = " + standardDeviationSampleMeans;
}