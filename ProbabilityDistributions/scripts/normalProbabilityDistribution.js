// Copyright 2016 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com
// www.probability-distribution.appspot.com

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


        
// Normal Probability Distribution Calculation
document.getElementById("znormalProbability").addEventListener("submit", znormalProbability);

function znormalProbability(event) {
   event.preventDefault();
   
    var zscore = parseFloat(document.getElementById("zscore").value, 10) || 0,
        zLessThan,
        zGreaterThan;
    
        zLessThan = GAUSS(zscore),
        zGreaterThan = 1 - GAUSS(zscore);

        document.getElementById("zLessThan").innerHTML = "P(&le; z) = " + zLessThan;
        document.getElementById("zGreaterThan").innerHTML = "P(&ge; z) = " + zGreaterThan;
}


// z-score in-betweeen calculations
document.getElementById("zBetweenNormalProbability").addEventListener("submit", zBetweenNormalProbability);

function zBetweenNormalProbability(event) {
   event.preventDefault();
   event.stopPropagation();
   
    var z1score = parseFloat(document.getElementById("z1score").value, 10) || 0,
        z2score = parseFloat(document.getElementById("z2score").value, 10) || 0,
        z1LessThan,
        z1GreaterThan,
        z2LessThan,
        z2GreaterThan,
        z1Betweenz2,
        z1z2awayFrom,
    
        z1LessThan = GAUSS(z1score);
        z1GreaterThan = 1 - GAUSS(z1score);
        z2LessThan = GAUSS(z2score);
        z2GreaterThan = 1 - GAUSS(z2score);
        z1Betweenz2 = GAUSS(z2score) - GAUSS(z1score);
        z1z2awayFrom = GAUSS(z1score) + (1 - GAUSS(z2score));


        document.getElementById("z1LessThan").innerHTML = "P(z<sub>1</sub> &le; " + z1score + ")" + " = " + z1LessThan;
        document.getElementById("z1GreaterThan").innerHTML = "P(&ge; z<sub>1</sub>) = " + z1GreaterThan;
        document.getElementById("z2LessThan").innerHTML = "P(&le; z<sub>2</sub>) = " + z2LessThan;
        document.getElementById("z2GreaterThan").innerHTML = "P(&ge; z<sub>2</sub>) = " + z2GreaterThan;
        document.getElementById("z1Betweenz2").innerHTML = "P(z<sub>1</sub> &le; z &le; z<sub>2</sub>) = " + z1Betweenz2;
        document.getElementById("z1z2awayFrom").innerHTML = "P(&le; z<sub>1</sub> and &ge; z<sub>2</sub>) = " + z1z2awayFrom;
}


// z-score Calculation
// Normal Probability Distribution Calculation
document.getElementById("zVariableNormalProbability").addEventListener("submit", zVariableNormalProbability);

function zVariableNormalProbability(event) {
   event.preventDefault();
   event.stopPropagation();
   
    var zVariable = parseFloat(document.getElementById("zVariable").value, 10) || 0,
        zMean = parseFloat(document.getElementById("zMean").value, 10) || 0,
        zStandardDeviation = parseFloat(document.getElementById("zStandardDeviation").value, 10) || 0,
        zscoreVariable1,
        zscoreVariable,
        zLessThanVariable,
        zGreaterThanVariable;

        zscoreVariable1 = (zVariable - zMean) / zStandardDeviation;
        
        zscoreVariable = zscoreVariable1.toFixed(2);
            
        zLessThanVariable = GAUSS(zscoreVariable);
                
        zGreaterThanVariable = 1 - GAUSS(zscoreVariable);

        
        document.getElementById("zscoreVariable").innerHTML = "z score = " + zscoreVariable;
        document.getElementById("zLessThanVariable").innerHTML = "P(&le; x) = P(&le; z) = " + zLessThanVariable;
        document.getElementById("zGreaterThanVariable").innerHTML = "P(&ge; x) = P(&ge; z) = " + zGreaterThanVariable;
}


// Normal to Binomial Calculation
// Calculate the mean and standard deviation
document.getElementById("normalBinomial").addEventListener("submit", normalBinomial);

function normalBinomial(event) {
   event.preventDefault();
      
    var NBtrials = parseFloat(document.getElementById("NBtrials").value, 10) || 0,
        NBsuccess = parseFloat(document.getElementById("NBsuccess").value, 10) || 0;
        
    var NBfailure = 1 - NBsuccess,
        NBmean = NBtrials * NBsuccess,
        NBstandardDeviation = Math.sqrt(NBtrials * NBsuccess * NBfailure);
    
               
        document.getElementById("NBfailure").innerHTML = "q = " + NBfailure;
        document.getElementById("NBmean").innerHTML = "&mu; = " + NBmean;
        document.getElementById("NBstandardDeviation").innerHTML = "&sigma; = " + NBstandardDeviation;
}


// z-scores for Variables Calculations
// Normal Probability Distribution Calculation
document.getElementById("variableBetweenNormalProbability").addEventListener("submit", variableBetweenNormalProbability);

function variableBetweenNormalProbability(event) {
   event.preventDefault();
   event.stopPropagation();
   
    var nPvariable1 = parseFloat(document.getElementById("nPvariable1").value, 10) || 0,
        nPvariable2 = parseFloat(document.getElementById("nPvariable2").value, 10) || 0,
        nPmean = parseFloat(document.getElementById("nPmean").value, 10) || 0,
        nPstandardDeviation = parseFloat(document.getElementById("nPstandardDeviation").value, 10) || 0,
        nPzscore11,
        nPzscore22,
        nPzscore1,
        nPzscore2,
        nPzLessThanVariable1,
        nPzLessThanVariable2,
        nPzGreaterThanVariable1,
        nPzGreaterThanVariable2,
        nPzBetweenVariables,
        nPzAwayFromVariables;
        

        nPzscore11 = (nPvariable1 - nPmean) / nPstandardDeviation;
        
        nPzscore22 = (nPvariable2 - nPmean) / nPstandardDeviation;
        
        nPzscore1 = nPzscore11.toFixed(2);
        
        nPzscore2 = nPzscore22.toFixed(2); 
               
        nPzLessThanVariable1 = GAUSS(nPzscore1);
        
        nPzLessThanVariable2 = GAUSS(nPzscore2);
                
        nPzGreaterThanVariable1 = 1 - GAUSS(nPzscore1);
        
        nPzGreaterThanVariable2 = 1 - GAUSS(nPzscore2);
                            
        nPzBetweenVariables = GAUSS(nPzscore2) - GAUSS(nPzscore1);
        
        nPzAwayFromVariables = GAUSS(nPzscore2) + (1 - GAUSS(nPzscore2));

        
        document.getElementById("nPzscore1").innerHTML = "z score for x1 = z1 = " + nPzscore1;
        document.getElementById("nPzscore2").innerHTML = "z score for x2 = z2 = " + nPzscore2;
        document.getElementById("nPzLessThanVariable1").innerHTML = "P(&le; x<sub>1</sub>) = P(&le; z<sub>1</sub>) = " + nPzLessThanVariable1;
        document.getElementById("nPzLessThanVariable2").innerHTML = "P(&le; x<sub>2</sub>) = P(&le; z<sub>2</sub>) = " + nPzLessThanVariable2;
        document.getElementById("nPzGreaterThanVariable1").innerHTML = "P(&ge; x<sub>1</sub>) = P(&ge; z<sub>1</sub>) = " + nPzGreaterThanVariable1;
        document.getElementById("nPzGreaterThanVariable2").innerHTML = "P(&ge; x<sub>2</sub>) = P(&ge; z<sub>2</sub>) = " + nPzGreaterThanVariable2;
        document.getElementById("nPzBetweenVariables").innerHTML = "P(x<sub>1</sub> &le; x &le; x<sub>2</sub>) = P(z<sub>1</sub> &le; z &le; z<sub>2</sub>) = " + nPzBetweenVariables;
        document.getElementById("nPzAwayFromVariables").innerHTML = "P(&le; x<sub>1</sub> and &ge; x<sub>2</sub>) = P(&le; z<sub>1</sub> and &ge; z<sub>2</sub>) = " + nPzBetweenVariables;
}


// Normal to Binomial Calculations
// Calculate the z-score and probability
document.getElementById("normalBinomialProbability").addEventListener("submit", normalBinomialProbability);

function normalBinomialProbability(event) {
   event.preventDefault();
   event.stopPropagation();
      
    var NBPtrials = parseFloat(document.getElementById("NBPtrials").value, 10) || 0,
        NBPsuccess = parseFloat(document.getElementById("NBPsuccess").value, 10) || 0,
        NBPvariable = parseFloat(document.getElementById("NBPvariable").value, 10) || 0,
        variableCondition = document.getElementById("variableCondition").value,
        NBPfailure,
        NBPmean,
        NBPstandardDeviation,
        NBPzAtLeast,
        NBPzAtMost,
        NBPzMoreThan,
        NBPzLessThan,
        NBPzLessThanVariable1,
        NBPzLessThanVariable2,
        NBPzBetweenVariable,
        NBPzscore11,
        NBPzscore22,
        NBPzscore1,
        NBPzscore2;
        
        
       
        NBPfailure = 1 - NBPsuccess;
        
        NBPmean = NBPtrials * NBPsuccess;
        
        NBPstandardDeviation = Math.sqrt(NBPtrials * NBPsuccess * NBPfailure);
        
        
        document.getElementById("NBPfailure").innerHTML = "q = " + NBPfailure;
        document.getElementById("NBPmean").innerHTML = "&mu; = " + NBPmean;
        document.getElementById("NBPstandardDeviation").innerHTML = "&sigma; = " + NBPstandardDeviation;
                
        NBPzscore11 = ((NBPvariable - 0.5) - NBPmean) / NBPstandardDeviation;
        
        NBPzscore22 = ((NBPvariable + 0.5) - NBPmean) / NBPstandardDeviation;
        
        NBPzscore1 = NBPzscore11.toFixed(2);
        
        NBPzscore2 = NBPzscore22.toFixed(2);             
             
        
if (variableCondition === "exactly") {       
       
        NBPzLessThanVariable1 = GAUSS(NBPzscore1);      
    
        NBPzLessThanVariable2 = GAUSS(NBPzscore2);
              
        NBPzBetweenVariable = NBPzLessThanVariable2 - NBPzLessThanVariable1;
        
        document.getElementById("NBPzscore1").innerHTML = "z1 = " + NBPzscore1;
        document.getElementById("NBPzscore2").innerHTML = "z2 = " + NBPzscore2;
        document.getElementById("NBPzBetweenVariable").innerHTML = "P(exactly x) = P(exactly z) = " + NBPzBetweenVariable;
}


else if (variableCondition === "atleast") {       
        
        NBPzAtLeast = 1 - GAUSS(NBPzscore1);
        
        document.getElementById("NBPzscore").innerHTML = "z = " + NBPzscore1;
        document.getElementById("NBPzAtLeast").innerHTML = "P(at least x) = P(at least z) = " + NBPzAtLeast;                 
}

else if (variableCondition === "atmost") {       
        
        NBPzAtMost = GAUSS(NBPzscore2);
        
        document.getElementById("NBPzscore").innerHTML = "z = " + NBPzscore2;
        document.getElementById("NBPzAtMost").innerHTML = "P(at most x) = P(at most z) = " + NBPzAtMost;                 
}

else if (variableCondition === "morethan") {       
        
        NBPzMoreThan = 1 - GAUSS(NBPzscore2);
        
        document.getElementById("NBPzscore").innerHTML = "z = " + NBPzscore2;
        document.getElementById("NBPzMoreThan").innerHTML = "P(more than x) = P(more than z) = " + NBPzMoreThan;                 
}

else if (variableCondition === "lessthan") {       
        
        NBPzLessThan = GAUSS(NBPzscore1);
        
        document.getElementById("NBPzscore").innerHTML = "z = " + NBPzscore1;
        document.getElementById("NBPzLessThan").innerHTML = "P(less than x) = P(less than z) = " + NBPzLessThan;                 
}     
}


// Empirical Rule Calculations
document.getElementById("empiricalRuleCalculation").addEventListener("submit", empiricalRuleCalculation);

function empiricalRuleCalculation(event) {
   event.preventDefault();
   
    var eRmean = parseFloat(document.getElementById("eRmean").value, 10) || 0;
    var eRstandardDeviation = parseFloat(document.getElementById("eRstandardDeviation").value, 10) || 0;
    
    
        document.getElementById("one").innerHTML = "68% lie between " + (eRmean - eRstandardDeviation) + " and " + (eRmean + eRstandardDeviation);
        document.getElementById("two").innerHTML = "95% lie between " + (eRmean - 2 * eRstandardDeviation) + " and " + (eRmean + 2 * eRstandardDeviation);
        document.getElementById("three").innerHTML = "99.7% lie between " + (eRmean - 3 * eRstandardDeviation) + " and " + (eRmean + 3 * eRstandardDeviation);
        document.getElementById("four").innerHTML = "34% lie between " + (eRmean - eRstandardDeviation) + " and " + (eRmean);
        document.getElementById("five").innerHTML = "34% lie between " + (eRmean) + " and " + (eRmean + eRstandardDeviation);
        document.getElementById("six").innerHTML = "47.5% lie between " + (eRmean - 2 * eRstandardDeviation) + " and " + (eRmean);
        document.getElementById("seven").innerHTML = "47.5% lie between " + (eRmean) + " and " + (eRmean + 2 * eRstandardDeviation);
        document.getElementById("eight").innerHTML = "49.85% lie between " + (eRmean - 3 * eRstandardDeviation) + " and " + (eRmean);
        document.getElementById("nine").innerHTML = "49.85% lie between " + (eRmean) + " and " + (eRmean + 3 * eRstandardDeviation);
        document.getElementById("ten").innerHTML = "50% lie below " + (eRmean);
        document.getElementById("eleven").innerHTML = "50% lie above " + (eRmean);
        document.getElementById("twelve").innerHTML = "16% lie below " + (eRmean - eRstandardDeviation);
        document.getElementById("thirteen").innerHTML = "16% lie above " + (eRmean + eRstandardDeviation);
        document.getElementById("fourteen").innerHTML = "2.5% lie below " + (eRmean - 2 * eRstandardDeviation);
        document.getElementById("fifteen").innerHTML = "2.5% lie above " + (eRmean + 2 * eRstandardDeviation);
        document.getElementById("sixteen").innerHTML = "0.15% lie below " + (eRmean - 3 * eRstandardDeviation);
        document.getElementById("seventeen").innerHTML = "0.15% lie above " + (eRmean + 3 * eRstandardDeviation);
        document.getElementById("eighteen").innerHTML = "2.35% lie between " + (eRmean - 3 * eRstandardDeviation) + " and " + (eRmean - 2 * eRstandardDeviation);
        document.getElementById("nineteen").innerHTML = "2.35% lie between " + (eRmean + 2 * eRstandardDeviation) + " and " + (eRmean + 3 * eRstandardDeviation);
        document.getElementById("twenty").innerHTML = "13.5% lie between " + (eRmean - 2 * eRstandardDeviation) + " and " + (eRmean - eRstandardDeviation);
        document.getElementById("twentyone").innerHTML = "13.5% lie between " + (eRmean + eRstandardDeviation) + " and " + (eRmean + 2 * eRstandardDeviation);
        document.getElementById("twentytwo").innerHTML = "15.85% lie between " + (eRmean - 3 * eRstandardDeviation) + " and " + (eRmean - eRstandardDeviation);
        document.getElementById("twentythree").innerHTML = "15.85% lie between " + (eRmean + eRstandardDeviation) + " and " + (eRmean + 3 * eRstandardDeviation);
        document.getElementById("twentyfour").innerHTML = "84% lie above " + (eRmean - eRstandardDeviation);
        document.getElementById("twentyfive").innerHTML = "84% lie below " + (eRmean + eRstandardDeviation);
        document.getElementById("twentysix").innerHTML = "83.85% lie between " + (eRmean - eRstandardDeviation) + " and " + (eRmean + 3 * eRstandardDeviation);
        document.getElementById("twentyseven").innerHTML = "81.5% lie between " + (eRmean - eRstandardDeviation) + " and " + (eRmean + 2 * eRstandardDeviation);
        document.getElementById("twentyeight").innerHTML = "97.5% lie above " + (eRmean - 2 * eRstandardDeviation);
        document.getElementById("twentynine").innerHTML = "97.5% lie below " + (eRmean + 2 * eRstandardDeviation);
        document.getElementById("thirty").innerHTML = "97.35% lie between " + (eRmean - 2 * eRstandardDeviation) + " and " + (eRmean + 3 * eRstandardDeviation);
        document.getElementById("thirtyone").innerHTML = "81.5% lie between " + (eRmean - 2 * eRstandardDeviation) + " and " + (eRmean + eRstandardDeviation);
        document.getElementById("thirtytwo").innerHTML = "99.85% lie above " + (eRmean - 3 * eRstandardDeviation);
        document.getElementById("thirtythree").innerHTML = "99.85% lie below " + (eRmean + 3 * eRstandardDeviation);
        document.getElementById("thirtyfour").innerHTML = "97.35% lie between " + (eRmean - 3 * eRstandardDeviation) + " and " + (eRmean + 2 * eRstandardDeviation);
        document.getElementById("thirtyfive").innerHTML = "83.85% lie between " + (eRmean - 3 * eRstandardDeviation) + " and " + (eRmean + eRstandardDeviation);
        
}



// Chebyshev's Theorem Calculations
document.getElementById("chebyshevTheoremCalculation").addEventListener("submit", chebyshevTheoremCalculation);

function chebyshevTheoremCalculation(event) {
   event.preventDefault();
   
    var cTmean = parseFloat(document.getElementById("cTmean").value, 10) || 0;
    var cTstandardDeviation = parseFloat(document.getElementById("cTstandardDeviation").value, 10) || 0;
    var cTconstant = parseFloat(document.getElementById("cTconstant").value, 10) || 0;
    
        document.getElementById("chebyshev").innerHTML = "At least " + (100 - (100 / Math.pow(cTconstant, 2))) + "% lie between " + 
                                                        (cTmean - (cTconstant * cTstandardDeviation)) + " and " + (cTmean + (cTconstant * cTstandardDeviation));       
}



// Given: probability of an event to the left
// Calculate the z score
// Formula for the Inverse Normal Distrbution copied from http://stackoverflow.com/questions/8816729/javascript-equivalent-for-inverse-normal-function-eg-excels-normsinv-or-nor
document.getElementById("inverseNormalDistributionLeft").addEventListener("submit", inverseNormalDistributionLeft);

function inverseNormalDistributionLeft(event) {
    event.preventDefault();

    var probabilityLeft = parseFloat(document.getElementById("probabilityLeft").value, 10) || 0,
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
        r,
        zScoreLeft;
       
    var p = probabilityLeft;
        
        if ((p < 0) || (p > 1)){
        alert("Error: The probability of an event is between 0 and 1 \n 0 and 1 is inclusive \n 0 is the probability of an impossible event  \n 1 is the probability of an event that must occur.");
        zScoreLeft = "";
    }
    else if (p < p_low){
        q = Math.sqrt(-2 * Math.log(p));
        zScoreLeft = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }
    
    else if (p <= p_high){
        q = p - 0.5;
        r = q * q;
        zScoreLeft = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q / (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
    }
    
    else{
        q = Math.sqrt(-2 * Math.log(1 - p));
        zScoreLeft = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }

    
    document.getElementById("zScoreLeft").innerHTML = "The z score is " + zScoreLeft;
}


// Given: probability of an event to the right
// Calculate the z score
// Formula for the Inverse Normal Distrbution copied from http://stackoverflow.com/questions/8816729/javascript-equivalent-for-inverse-normal-function-eg-excels-normsinv-or-nor
document.getElementById("inverseNormalDistributionRight").addEventListener("submit", inverseNormalDistributionRight);

function inverseNormalDistributionRight(event) {
    event.preventDefault();
    event.stopPropagation();

    var probabilityRight = parseFloat(document.getElementById("probabilityRight").value, 10) || 0,
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
        r,
        zScoreRight;
       
    var p = 1 - probabilityRight;
        
        if ((p < 0) || (p > 1)){
        alert("Error: The probability of an event is between 0 and 1 \n 0 and 1 is inclusive \n 0 is the probability of an impossible event  \n 1 is the probability of an event that must occur.");
        zScoreRight = "";
    }
    else if (p < p_low){
        q = Math.sqrt(-2 * Math.log(p));
        zScoreRight = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }
    
    else if (p <= p_high){
        q = p - 0.5;
        r = q * q;
        zScoreRight = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q / (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
    }
    
    else{
        q = Math.sqrt(-2 * Math.log(1 - p));
        zScoreRight = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }

    
    document.getElementById("zScoreRight").innerHTML = "The z score is " + zScoreRight;
}


// Given: mean, standard deviation, probability of an event to the left
// Calculate the z score and the variable
// Formula for the Inverse Normal Distrbution copied from http://stackoverflow.com/questions/8816729/javascript-equivalent-for-inverse-normal-function-eg-excels-normsinv-or-nor
document.getElementById("inverseNormalLeft").addEventListener("submit", inverseNormalLeft);

function inverseNormalLeft(event) {
    event.preventDefault();
    event.stopPropagation();

    var inverseProbabilityLeft = parseFloat(document.getElementById("inverseProbabilityLeft").value, 10) || 0,
        meanLeft = parseFloat(document.getElementById("meanLeft").value, 10) || 0,
        standardDeviationLeft = parseFloat(document.getElementById("standardDeviationLeft").value, 10) || 0,
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
        r,
        zLeft,
        variableLeft;
       
    var p = inverseProbabilityLeft;
        
        if ((p < 0) || (p > 1)){
        alert("Error: The probability of an event is between 0 and 1 \n 0 and 1 is inclusive \n 0 is the probability of an impossible event  \n 1 is the probability of an event that must occur.");
        zLeft = "";
    }
    else if (p < p_low){
        q = Math.sqrt(-2 * Math.log(p));
        zLeft = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }
    
    else if (p <= p_high){
        q = p - 0.5;
        r = q * q;
        zLeft = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q / (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
    }
    
    else{
        q = Math.sqrt(-2 * Math.log(1 - p));
        zLeft = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }
    
    
    variableLeft = zLeft * standardDeviationLeft + meanLeft;
    
    document.getElementById("zLeft").innerHTML = "The z score is " + zLeft.toFixed(2);
    document.getElementById("variableLeft").innerHTML = "The variable is " + variableLeft;
}


// Given: mean, standard deviation, probability of an event to the right
// Calculate the z score and the variable
// Formula for the Inverse Normal Distrbution copied from http://stackoverflow.com/questions/8816729/javascript-equivalent-for-inverse-normal-function-eg-excels-normsinv-or-nor
document.getElementById("inverseNormalRight").addEventListener("submit", inverseNormalRight);

function inverseNormalRight(event) {
    event.preventDefault();
    event.stopPropagation();

    var inverseProbabilityRight = parseFloat(document.getElementById("inverseProbabilityRight").value, 10) || 0,
        meanRight = parseFloat(document.getElementById("meanRight").value, 10) || 0,
        standardDeviationRight = parseFloat(document.getElementById("standardDeviationRight").value, 10) || 0,
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
        r,
        zRight,
        variableRight;
       
    var p = 1 - inverseProbabilityRight;
        
        if ((p < 0) || (p > 1)){
        alert("Error: The probability of an event is between 0 and 1 \n 0 and 1 is inclusive \n 0 is the probability of an impossible event  \n 1 is the probability of an event that must occur.");
        zRight = "";
    }
    else if (p < p_low){
        q = Math.sqrt(-2 * Math.log(p));
        zRight = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }
    
    else if (p <= p_high){
        q = p - 0.5;
        r = q * q;
        zRight = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q / (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
    }
    
    else{
        q = Math.sqrt(-2 * Math.log(1 - p));
        zRight = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }
    
       
    variableRight = zRight * standardDeviationRight + meanRight;
    
    document.getElementById("zRight").innerHTML = "The z score is " + zRight.toFixed(2);
    document.getElementById("variableRight").innerHTML = "The variable is " + variableRight;
}
