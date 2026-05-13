// Copyright 2016 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com
// www.probability-distribution.appspot.com

"use strict";

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
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
        cLTzSampleSize = parseFloat(document.getElementById("cLTzSampleSize").value, 10) || 0;

    var cLTzscoreVariable = (cLTzVariable - cLTzMean) / (cLTzStandardDeviation / Math.sqrt(cLTzSampleSize)),
    
        cLTzscoreBetween = 1 / Math.sqrt(2 * Math.PI) * (cLTzscoreVariable - (Math.pow(cLTzscoreVariable, 3)/6) + 
            (Math.pow(cLTzscoreVariable, 5)/40) - (Math.pow(cLTzscoreVariable, 7)/336) + (Math.pow(cLTzscoreVariable, 9)/3456) - 
            (Math.pow(cLTzscoreVariable, 11)/42240) + (Math.pow(cLTzscoreVariable, 13)/599040) -
            (Math.pow(cLTzscoreVariable, 15)/ (15 * Math.pow(2, 7) * factorial(7))) + 
            (Math.pow(cLTzscoreVariable, 17)/(17 * Math.pow(2, 8) * factorial(8))) - 
            (Math.pow(cLTzscoreVariable, 19)/(19 * Math.pow(2, 9) * factorial(9))) +
            (Math.pow(cLTzscoreVariable, 21)/(21 * Math.pow(2, 10) * factorial(10))) -
            (Math.pow(cLTzscoreVariable, 23)/(23 * Math.pow(2, 11) * factorial(11))) +
            (Math.pow(cLTzscoreVariable, 25)/(25 * Math.pow(2, 12) * factorial(12))) -
            (Math.pow(cLTzscoreVariable, 27)/(27 * Math.pow(2, 13) * factorial(13))) +
            (Math.pow(cLTzscoreVariable, 29)/(29 * Math.pow(2, 14) * factorial(14))) -
            (Math.pow(cLTzscoreVariable, 31)/(31 * Math.pow(2, 15) * factorial(15))) +
            (Math.pow(cLTzscoreVariable, 33)/(33 * Math.pow(2, 16) * factorial(16))) -
            (Math.pow(cLTzscoreVariable, 35)/(35 * Math.pow(2, 17) * factorial(17))) +
            (Math.pow(cLTzscoreVariable, 37)/(37 * Math.pow(2, 18) * factorial(18))) -
            (Math.pow(cLTzscoreVariable, 39)/(39 * Math.pow(2, 19) * factorial(19))) +
            (Math.pow(cLTzscoreVariable, 41)/(41 * Math.pow(2, 20) * factorial(20))) -
            (Math.pow(cLTzscoreVariable, 43)/(43 * Math.pow(2, 21) * factorial(21))) +
            (Math.pow(cLTzscoreVariable, 45)/(45 * Math.pow(2, 22) * factorial(22))) -
            (Math.pow(cLTzscoreVariable, 47)/(47 * Math.pow(2, 23) * factorial(23))) +
            (Math.pow(cLTzscoreVariable, 49)/(49 * Math.pow(2, 24) * factorial(24))) -
            (Math.pow(cLTzscoreVariable, 51)/(51 * Math.pow(2, 25) * factorial(25)))
            ),
        cLTzLessThanVariable = 0.5 + cLTzscoreBetween,
        cLTzGreaterThanVariable = 0.5 - cLTzscoreBetween;

        
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
        cLTnPsampleSize = parseFloat(document.getElementById("cLTnPsampleSize").value, 10) || 0;

    var cLTnPzscore1 = (cLTnPvariable1 - cLTnPmean) / (cLTnPstandardDeviation / Math.sqrt(cLTnPsampleSize)),
        cLTnPzscore2 = (cLTnPvariable2 - cLTnPmean) / (cLTnPstandardDeviation / Math.sqrt(cLTnPsampleSize)),
    
            cLTzx1Between = 1 / Math.sqrt(2 * Math.PI) * (cLTnPzscore1 - (Math.pow(cLTnPzscore1, 3)/6) + 
            (Math.pow(cLTnPzscore1, 5)/40) - (Math.pow(cLTnPzscore1, 7)/336) + (Math.pow(cLTnPzscore1, 9)/3456) - 
            (Math.pow(cLTnPzscore1, 11)/42240) + (Math.pow(cLTnPzscore1, 13)/599040) -
            (Math.pow(cLTnPzscore1, 15)/ (15 * Math.pow(2, 7) * factorial(7))) + 
            (Math.pow(cLTnPzscore1, 17)/(17 * Math.pow(2, 8) * factorial(8))) - 
            (Math.pow(cLTnPzscore1, 19)/(19 * Math.pow(2, 9) * factorial(9))) +
            (Math.pow(cLTnPzscore1, 21)/(21 * Math.pow(2, 10) * factorial(10))) -
            (Math.pow(cLTnPzscore1, 23)/(23 * Math.pow(2, 11) * factorial(11))) +
            (Math.pow(cLTnPzscore1, 25)/(25 * Math.pow(2, 12) * factorial(12))) -
            (Math.pow(cLTnPzscore1, 27)/(27 * Math.pow(2, 13) * factorial(13))) +
            (Math.pow(cLTnPzscore1, 29)/(29 * Math.pow(2, 14) * factorial(14))) -
            (Math.pow(cLTnPzscore1, 31)/(31 * Math.pow(2, 15) * factorial(15))) +
            (Math.pow(cLTnPzscore1, 33)/(33 * Math.pow(2, 16) * factorial(16))) -
            (Math.pow(cLTnPzscore1, 35)/(35 * Math.pow(2, 17) * factorial(17))) +
            (Math.pow(cLTnPzscore1, 37)/(37 * Math.pow(2, 18) * factorial(18))) -
            (Math.pow(cLTnPzscore1, 39)/(39 * Math.pow(2, 19) * factorial(19))) +
            (Math.pow(cLTnPzscore1, 41)/(41 * Math.pow(2, 20) * factorial(20))) -
            (Math.pow(cLTnPzscore1, 43)/(43 * Math.pow(2, 21) * factorial(21))) +
            (Math.pow(cLTnPzscore1, 45)/(45 * Math.pow(2, 22) * factorial(22))) -
            (Math.pow(cLTnPzscore1, 47)/(47 * Math.pow(2, 23) * factorial(23))) +
            (Math.pow(cLTnPzscore1, 49)/(49 * Math.pow(2, 24) * factorial(24))) -
            (Math.pow(cLTnPzscore1, 51)/(51 * Math.pow(2, 25) * factorial(25)))
            ),
        cLTnPzLessThanVariable1 = 0.5 + cLTzx1Between,
        cLTnPzGreaterThanVariable1 = 0.5 - cLTzx1Between,
        
            cLTzx2Between = 1 / Math.sqrt(2 * Math.PI) * (cLTnPzscore2 - (Math.pow(cLTnPzscore2, 3)/6) + 
            (Math.pow(cLTnPzscore2, 5)/40) - (Math.pow(cLTnPzscore2, 7)/336) + (Math.pow(cLTnPzscore2, 9)/3456) - 
            (Math.pow(cLTnPzscore2, 11)/42240) + (Math.pow(cLTnPzscore2, 13)/599040) -
            (Math.pow(cLTnPzscore2, 15)/ (15 * Math.pow(2, 7) * factorial(7))) + 
            (Math.pow(cLTnPzscore2, 17)/(17 * Math.pow(2, 8) * factorial(8))) - 
            (Math.pow(cLTnPzscore2, 19)/(19 * Math.pow(2, 9) * factorial(9))) +
            (Math.pow(cLTnPzscore2, 21)/(21 * Math.pow(2, 10) * factorial(10))) -
            (Math.pow(cLTnPzscore2, 23)/(23 * Math.pow(2, 11) * factorial(11))) +
            (Math.pow(cLTnPzscore2, 25)/(25 * Math.pow(2, 12) * factorial(12))) -
            (Math.pow(cLTnPzscore2, 27)/(27 * Math.pow(2, 13) * factorial(13))) +
            (Math.pow(cLTnPzscore2, 29)/(29 * Math.pow(2, 14) * factorial(14))) -
            (Math.pow(cLTnPzscore2, 31)/(31 * Math.pow(2, 15) * factorial(15))) +
            (Math.pow(cLTnPzscore2, 33)/(33 * Math.pow(2, 16) * factorial(16))) -
            (Math.pow(cLTnPzscore2, 35)/(35 * Math.pow(2, 17) * factorial(17))) +
            (Math.pow(cLTnPzscore2, 37)/(37 * Math.pow(2, 18) * factorial(18))) -
            (Math.pow(cLTnPzscore2, 39)/(39 * Math.pow(2, 19) * factorial(19))) +
            (Math.pow(cLTnPzscore2, 41)/(41 * Math.pow(2, 20) * factorial(20))) -
            (Math.pow(cLTnPzscore2, 43)/(43 * Math.pow(2, 21) * factorial(21))) +
            (Math.pow(cLTnPzscore2, 45)/(45 * Math.pow(2, 22) * factorial(22))) -
            (Math.pow(cLTnPzscore2, 47)/(47 * Math.pow(2, 23) * factorial(23))) +
            (Math.pow(cLTnPzscore2, 49)/(49 * Math.pow(2, 24) * factorial(24))) -
            (Math.pow(cLTnPzscore2, 51)/(51 * Math.pow(2, 25) * factorial(25)))
            ),
        cLTnPzLessThanVariable2 = 0.5 + cLTzx2Between,
        
        cLTnPzGreaterThanVariable2 = 0.5 - cLTzx2Between,
        
        cLTnPzBetweenVariable = cLTnPzLessThanVariable2 - cLTnPzLessThanVariable1,

        cLTnPzAwayFromVariable = cLTnPzLessThanVariable1 + (1 - cLTnPzLessThanVariable2);

        
        document.getElementById("cLTnPzscore1").innerHTML = "z score for x<sub>1</sub> = z<sub>1</sub> = " + cLTnPzscore1.toFixed(2);
        document.getElementById("cLTnPzscore2").innerHTML = "z score for x<sub>2</sub> = z<sub>2</sub> = " + cLTnPzscore2.toFixed(2);
        document.getElementById("cLTnPzLessThanVariable1").innerHTML = "P(&le; x<sub>1</sub>) = P(&le; z<sub>1</sub>) = " + cLTnPzLessThanVariable1;
        document.getElementById("cLTnPzLessThanVariable2").innerHTML = "P(&le; x<sub>2</sub>) = P(&le; z<sub>2</sub>) = " + cLTnPzLessThanVariable2;
        document.getElementById("cLTnPzGreaterThanVariable1").innerHTML = "P(&ge; x<sub>1</sub>) = P(&ge; z<sub>1</sub>) = " + cLTnPzGreaterThanVariable1;
        document.getElementById("cLTnPzGreaterThanVariable2").innerHTML = "P(&ge; x<sub>2</sub>) = P(&ge; z<sub>2</sub>) = " + cLTnPzGreaterThanVariable2;
        document.getElementById("cLTnPzBetweenVariable").innerHTML = "P(x<sub>1</sub> &le; x &le; x<sub>2</sub>) = P(z<sub>1</sub> &le; z &le; z<sub>2</sub>) = " + cLTnPzBetweenVariable;
        document.getElementById("cLTnPzAwayFromVariable").innerHTML = "P(&le; x<sub>1</sub> and &ge; x<sub>2</sub>) = P(&le; z<sub>1</sub> and &ge; z<sub>2</sub>) = " + cLTnPzAwayFromVariable;
}


