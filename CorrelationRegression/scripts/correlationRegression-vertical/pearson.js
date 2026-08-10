/*
    Copyright 2022 - Samuel Dominic Chukwuemeka (Samdom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    
   https://samuelchukwuemeka.github.io/correlation-regression/correlationRegressionCalculators-vertical
*/



// Student Critical T Values
// Reference for some functions/formulas: John C. Pezzullo @ http://statpages.info/scicalc.html
function CHISQ(x, n) 
{
    if (x > 1000 | n > 1000) 
    {
        var q = NORM((Math.pow(x / n, 1 / 3) + 2 / (9 * n) - 1) / Math.sqrt(2 / (9 * n))) / 2;
        if (x > n) 
        {
            return q;
        }
        else 
        {
            return 1 - q;
        }
    }
    var p = Math.exp(-0.5 * x);
    if ((n % 2) === 1) 
    {
        p = p * Math.sqrt(2 * x / Math.PI);
    }
    var k = n;
    while (k >= 2) 
    {
        p = p * x / k;
        k = k - 2;
    }
    var t = p;
    var a = n;
    while (t > 1e-15 * p) 
    {
        a = a + 2;
        t = t * x / a;
        p = p + t;
    }
    return 1 - p;
}

function NORM(z) 
{
    var q = z * z;
    if (Math.abs(z) > 7) 
    {
        return (1 - 1 / q + 3 / (q * q)) * Math.exp(-q / 2) / (Math.abs(z) * Math.sqrt(Math.PI / 2));
    } 
    else 
    {
        return CHISQ(q, 1);
    }
}

function ANORM(p) 
{
    var v = 0.5;
    var dv = 0.5;
    var z = 0;
    while (dv > 1e-15) 
    {
        z = 1 / v - 1;
        dv = dv / 2;
        if (NORM(z) > p) 
        {
            v = v - dv;
        } 
        else 
        {
            v = v + dv;
        }
    }
    return z;
}

function GAUSS(z) 
{
    return ((z < 0) ? ((z < -10) ? 0 : CHISQ(z * z, 1) / 2) : ((z > 10) ? 1 : 1 - CHISQ(z * z, 1) / 2));
}

function ACHISQ(p, n) 
{
    var v = 0.5;
    var dv = 0.5;
    var x = 0;
    while (dv > 1e-15) 
    {
        x = 1 / v - 1;
        dv = dv / 2;
        if (CHISQ(x, n) > p) 
        {
            v = v - dv;
        } 
        else 
        {
            v = v + dv;
        }
    }
    return x;
}

function AGAUSS(p) 
{
    if (p > 0.5) 
    {
        return Math.sqrt(ACHISQ(2 * (1 - p), 1));
    } 
    else 
    {
        return -1*Math.sqrt(ACHISQ((2 * p, 1)));
    }
}

function STATCOM(q, i, j, b) 
{
    var g = 1;
    var z = g;
    var k = i;
    while (k <= j) 
    {
        g = g * q * k / (k - b);
        z = z + g;
        k = k + 2;
    }
    return z;
}

function STUDT(t, df) 
{
    t = Math.abs(t);
    var w = t / Math.sqrt(df);
    var th = Math.atan(w);
    if (df === 1) 
    {
        return 1 - th / (Math.PI / 2);
    }
    var sth = Math.sin(th);
    var cth = Math.cos(th);
    if ((df % 2) === 1)
    {
        return 1 - (th + sth * cth * STATCOM(cth * cth, 2, df - 3, -1)) / (Math.PI / 2);
    } else
    {
        return 1 - sth * STATCOM(cth * cth, 1, df - 3, -1);
    }
}

function INVSTUDT(p, df) 
{
    var v = 0.5;
    var dv = 0.5;
    var t = 0;
    while (dv > 1e-15) 
    {
        t = 1 / v - 1;
        dv = dv / 2;
        if (STUDT(t, df) > p) 
        {
            v = v - dv;
        } 
        else 
        {
            v = v + dv;
        }
    }
    return t;
}

/*
    Case 1 (First Formula)
    (Mean and Standard Deviation is used)
    Given: Datasets X and Y, Level of Significance
    (If the significance level is not given, use 5% or 0.05
    To Calculate: Pearson correlation coefficient, Least-squares regression line, Residuals, other details 
    Show all steps
*/
document.getElementById("pearson1").addEventListener("submit", pearson1);

function pearson1(event) 
{
    event.preventDefault();

    var datasetXA = document.getElementById('datasetXA').value,
        datasetYA = document.getElementById('datasetYA').value,
        datasetSplitXA = datasetXA.split('\n'),
        datasetSplitYA = datasetYA.split('\n'),
        dataXA = datasetSplitXA.map(Number),
        dataYA = datasetSplitYA.map(Number),
        sampleSizeXA = dataXA.length,
        sampleSizeYA = dataYA.length,
        significanceLevelA = parseFloat(document.getElementById("significanceLevelA").value, 10) || 0,
        significanceLevelUnitA = document.getElementById("significanceLevelUnitA").value,
        sumXA = 0,
        meanXA,
        deviationMeanXA = [],
        squareDeviationMeanXA = [],
        sumSquareDeviationMeanXA = 0,
        standardDeviationXA,
        quotientXA = [],
        sumYA = 0,
        meanYA,
        deviationMeanYA = [],
        squareDeviationMeanYA = [],
        sumSquareDeviationMeanYA = 0,
        standardDeviationYA,
        quotientYA = [],
        productQuotientsA = [],
        sumProductsA = 0,
        sampleSizeLessA = sampleSizeXA - 1,
        correlationCoefficientA,
        predictedYA = [],
        residualsA = [],
        squareResidualsA = [],
        sumSquareResidualsA = 0,
        degreesFreedomA,
        criticalTA,
        criticalRA,
        relationshipA,
        slopeA,
        interceptA,
        regressionLineA;
        
        
        if (sampleSizeXA !== sampleSizeYA){
            alert("The two sample sizes must be the same.\nIn other words, the sample size of dataset X must be equal to the sample size of dataset Y\nPlease review.");
            return;
        }
                        
        for(var i = 0; i < sampleSizeXA, i < sampleSizeYA; i++)
        {
            sumXA += dataXA[i];
            
            sumYA += dataYA[i];
        }

        meanXA = sumXA / sampleSizeXA;

        meanYA = sumYA / sampleSizeYA;
        
        for(var i = 0; i < sampleSizeXA, i < sampleSizeYA; i++)
        {
            deviationMeanXA[i] = dataXA[i] - meanXA;
            squareDeviationMeanXA[i] = Math.pow(deviationMeanXA[i], 2);
            sumSquareDeviationMeanXA += squareDeviationMeanXA[i];

            deviationMeanYA[i] = dataYA[i] - meanYA;
            squareDeviationMeanYA[i] = Math.pow(deviationMeanYA[i], 2);
            sumSquareDeviationMeanYA += squareDeviationMeanYA[i];
        }

        standardDeviationXA = Math.sqrt(sumSquareDeviationMeanXA / sampleSizeLessA);
        
        standardDeviationYA = Math.sqrt(sumSquareDeviationMeanYA / sampleSizeLessA);

        for(var i = 0; i < sampleSizeXA, i < sampleSizeYA; i++)
        {
            quotientXA[i] = deviationMeanXA[i] / standardDeviationXA;

            quotientYA[i] = deviationMeanYA[i] / standardDeviationYA;

            productQuotientsA[i] = quotientXA[i] * quotientYA[i];

            sumProductsA += productQuotientsA[i];
        }

        correlationCoefficientA = sumProductsA / sampleSizeLessA;

        slopeA = correlationCoefficientA * (standardDeviationYA / standardDeviationXA);

        interceptA = meanYA - (slopeA * meanXA);
         
        regressionLineA = "The least-squares regression line is : &ycirc; = " + slopeA + "* x + " + interceptA;       
        
        for (var i = 0; i < sampleSizeXA, i < sampleSizeYA; i++) 
        {
            predictedYA[i] = slopeA * dataXA[i] + interceptA;
            
            residualsA[i] = dataYA[i] - predictedYA[i];

            squareResidualsA[i] = Math.pow(residualsA[i], 2);

            sumSquareResidualsA += squareResidualsA[i];
        }
                           
    document.getElementById("sumXA").value = sumXA;
    document.getElementById("sampleSizeXA").value = sampleSizeXA;
    document.getElementById("meanXA").value = meanXA;
    document.getElementById("deviationMeanXA").value = deviationMeanXA.join("\n");
    document.getElementById("squareDeviationMeanXA").value = squareDeviationMeanXA.join("\n");
    document.getElementById("sumSquareDeviationMeanXA").value = sumSquareDeviationMeanXA;
    document.getElementById("standardDeviationXA").value = standardDeviationXA;
    
    document.getElementById("sumYA").value = sumYA;
    document.getElementById("sampleSizeYA").value = sampleSizeYA;
    document.getElementById("meanYA").value = meanYA;
    document.getElementById("deviationMeanYA").value = deviationMeanYA.join("\n");
    document.getElementById("squareDeviationMeanYA").value = squareDeviationMeanYA.join("\n");
    document.getElementById("sumSquareDeviationMeanYA").value = sumSquareDeviationMeanYA;
    document.getElementById("standardDeviationYA").value = standardDeviationYA;

    document.getElementById("quotientXA").value = quotientXA.join("\n");
    document.getElementById("quotientYA").value = quotientYA.join("\n");
    document.getElementById("productQuotientsA").value = productQuotientsA.join("\n");
    document.getElementById("sumProductsA").value = sumProductsA;
    document.getElementById("sampleSizeLessA").value = sampleSizeLessA;  
    document.getElementById("correlationCoefficientA").value = correlationCoefficientA;
    document.getElementById("predictedYA").value = predictedYA.join("\n");
    document.getElementById("residualsA").value = residualsA.join("\n");
    document.getElementById("squareResidualsA").value = squareResidualsA.join("\n");
    document.getElementById("sumSquareResidualsA").value = sumSquareResidualsA;
    
    degreesFreedomA = sampleSizeXA - 2;
    
    if (significanceLevelUnitA === "percent") 
    {
        significanceLevelA = significanceLevelA / 100;
    }

    criticalTA = INVSTUDT(significanceLevelA, degreesFreedomA);

    criticalRA = Math.sqrt(Math.pow(criticalTA, 2) / (Math.pow(criticalTA, 2) + degreesFreedomA));


    if ((correlationCoefficientA > 0) && (correlationCoefficientA > criticalRA)) 
    {
        relationshipA = "The Pearson linear correlation coefficient is positive <br>";
        relationshipA += "The critical value for the Pearson correlation coefficient for n = " + sampleSizeXA + " is " + criticalRA + "<br>";
        relationshipA += "The absolute value of the Pearson correlation coefficient is greater than the critical value <br>";
        relationshipA += "Therefore, there is a positive linear relation between the variables";
        document.getElementById("relationshipA").innerHTML = relationshipA;
        document.getElementById("slopeA").innerHTML = "The slope of the least-squares regression line is " + slopeA;
        document.getElementById("interceptA").innerHTML = "The y-intercept of the least-squares regression line is " + interceptA;
        document.getElementById("regressionLineA").innerHTML = regressionLineA;
    }

    if ((correlationCoefficientA < 0) && (Math.abs(correlationCoefficientA) > criticalRA)) 
    {
        relationshipA = "The Pearson linear correlation coefficient is negative <br>";
        relationshipA += "The critical value for the Pearson correlation coefficient for n = " + sampleSizeXA + " is " + criticalRA + "<br>";
        relationshipA += "The absolute value of the Pearson correlation coefficient is greater than the critical value <br>";
        relationshipA += "Therefore, there is a negative linear relation between the variables";
        document.getElementById("relationshipA").innerHTML = relationshipA;
        document.getElementById("slopeA").innerHTML = "The slope of the least-squares regression line is " + slopeA;
        document.getElementById("interceptA").innerHTML = "The y-intercept of the least-squares regression line is " + interceptA;
        document.getElementById("regressionLineA").innerHTML = regressionLineA;
    }

    if ((correlationCoefficientA > 0) && (Math.abs(correlationCoefficientA < criticalRA))) 
    {
        relationshipA = "The Pearson linear correlation coefficient is positive <br>";
        relationshipA += "The critical value for the Pearson correlation coefficient for n = " + sampleSizeXA + " is " + criticalRA + "<br>";
        relationshipA += "The absolute value of the Pearson correlation coefficient is less than the critical value <br>";
        relationshipA += "Therefore, no linear relation exists between the variables <br>";
        relationshipA += "Because no linear relationship exists; the sample mean for Y, which is =  " + meanYA + " is used as the predicted Y for any X";
        document.getElementById("relationshipA").innerHTML = relationshipA;
        document.getElementById("slopeA").innerHTML = "The slope of the least-squares regression line is " + slopeA;
        document.getElementById("interceptA").innerHTML = "The y-intercept of the least-squares regression line is " + interceptA;
        document.getElementById("regressionLineA").innerHTML = regressionLineA;
    }

    if ((correlationCoefficientA < 0) && (Math.abs(correlationCoefficientA) < criticalRA)) 
    {
        relationshipA = "The Pearson linear correlation coefficient is negative <br>";
        relationshipA += "The critical value for the Pearson correlation coefficient for n = " + sampleSizeXA + " is " + criticalRA + "<br>";
        relationshipA += "The absolute value of the Pearson correlation coefficient is less than the critical value <br>";
        relationshipA += "Therefore, no linear relation exists between the variables <br>";
        relationshipA += "Because no linear relationship exists; the sample mean for Y, which is =  " + meanYA + " is used as the predicted Y for any X";
        document.getElementById("relationshipA").innerHTML = relationshipA;
        document.getElementById("slopeA").innerHTML = "The slope of the least-squares regression line is " + slopeA;
        document.getElementById("interceptA").innerHTML = "The y-intercept of the least-squares regression line is " + interceptA;
        document.getElementById("regressionLineA").innerHTML = regressionLineA;
    }

    if (correlationCoefficientA === 0) 
    {
        relationshipA = "The critical value for the Pearson correlation coefficient for n = " + sampleSizeXA + " is " + criticalRA + "<br>";
        relationshipA += "The absolute value of the Pearson correlation coefficient is 0 <br>";
        relationshipA += "Therefore, no linear relation exists between the variables <br>";
        relationshipA += "Because no linear relationship exists; the sample mean for Y, which is =  " + meanYA + " is used as the predicted Y for any X";
        document.getElementById("relationshipA").innerHTML = relationshipA;
        document.getElementById("slopeA").innerHTML = "The slope of the least-squares regression line is " + slopeA;
        document.getElementById("interceptA").innerHTML = "The y-intercept of the least-squares regression line is " + interceptA;
        document.getElementById("regressionLineA").innerHTML = regressionLineA;
    }
}


/*
    Case 1 (Second Formula)
    (Mean and Standard Deviation is not used)
    Given: Datasets X and Y, Level of Significance
    (If the significance level is not given, use 5% or 0.05
    To Calculate: Pearson correlation coefficient, Least-squares regression line, Residuals, other details 
    Show all steps
*/
document.getElementById("pearson2").addEventListener("submit", pearson2);

function pearson2(event) 
{
    event.preventDefault();

    var datasetXB = document.getElementById('datasetXB').value,
        datasetYB = document.getElementById('datasetYB').value,
        datasetSplitXB = datasetXB.split('\n'),
        datasetSplitYB = datasetYB.split('\n'),
        dataXB = datasetSplitXB.map(Number),
        dataYB = datasetSplitYB.map(Number),
        sampleSizeXB = dataXB.length,
        sampleSizeYB = dataYB.length,
        significanceLevelB = parseFloat(document.getElementById("significanceLevelB").value, 10) || 0,
        significanceLevelUnitB = document.getElementById("significanceLevelUnitB").value,
        sumXB = 0,
        squareDataXB = [],
        sumSquareDataXB = 0,
        sumYB = 0,
        squareDataYB = [],
        sumSquareDataYB = 0,
        productB = [],
        sumProductsB = 0,
        firstPartNumeratorB,
        secondPartNumeratorB,
        numeratorB,
        firstPartDenominatorXB,
        secondPartDenominatorXB,
        differenceXB,
        squareRootDifferenceXB,
        firstPartDenominatorYB,
        secondPartDenominatorYB,
        differenceYB,
        squareRootDifferenceYB,
        denominatorB,
        correlationCoefficientB,
        sampleSizeLessB = sampleSizeXB - 1,
        meanXB,
        meanYB,
        standardDeviationXB,
        standardDeviationYB,
        predictedYB = [],
        residualsB = [],
        squareResidualsB = [],
        sumSquareResidualsB = 0,
        degreesFreedomB,
        criticalTB,
        criticalRB,
        relationshipB,
        slopeB,
        interceptB,
        regressionLineB;
        
        
        if (sampleSizeXB !== sampleSizeYB){
            alert("The two sample sizes must be the same.\nIn other words, the sample size of dataset X must be equal to the sample size of dataset Y\nPlease review.");
            return;
        }
                        
        for(var i = 0; i < sampleSizeXB, i < sampleSizeYB; i++)
        {
            sumXB += dataXB[i];
            
            sumYB += dataYB[i];
        }

        meanXB = sumXB / sampleSizeXB;

        meanYB = sumYB / sampleSizeYB;
        
        for(var i = 0; i < sampleSizeXB, i < sampleSizeYB; i++)
        {
            squareDataXB[i] = Math.pow(dataXB[i], 2);
            sumSquareDataXB += squareDataXB[i];

            squareDataYB[i] = Math.pow(dataYB[i], 2);
            sumSquareDataYB += squareDataYB[i];
        }

        for(var i = 0; i < sampleSizeXB, i < sampleSizeYB; i++)
        {
            productB[i] = dataXB[i] * dataYB[i];
            sumProductsB += productB[i];
        }

        firstPartNumeratorB = sampleSizeXB * sumProductsB;

        secondPartNumeratorB = sumXB * sumYB;

        numeratorB = firstPartNumeratorB - secondPartNumeratorB;

        firstPartDenominatorXB = sampleSizeXB * sumSquareDataXB;

        secondPartDenominatorXB = Math.pow(sumXB, 2);

        differenceXB = firstPartDenominatorXB - secondPartDenominatorXB;

        squareRootDifferenceXB = Math.sqrt(differenceXB);

        firstPartDenominatorYB = sampleSizeYB * sumSquareDataYB;

        secondPartDenominatorYB = Math.pow(sumYB, 2);

        differenceYB = firstPartDenominatorYB - secondPartDenominatorYB;

        squareRootDifferenceYB = Math.sqrt(differenceYB);

        denominatorB = squareRootDifferenceXB * squareRootDifferenceYB;

        correlationCoefficientB = numeratorB / denominatorB;

        standardDeviationXB = Math.sqrt(differenceXB / (sampleSizeXB * sampleSizeLessB));

        standardDeviationYB = Math.sqrt(differenceYB / (sampleSizeYB * sampleSizeLessB));

        slopeB = correlationCoefficientB * (standardDeviationYB / standardDeviationXB);

        interceptB = meanYB - (slopeB * meanXB);
         
        regressionLineB = "The least-squares regression line is : &ycirc; = " + slopeB + "* x + " + interceptB;       
        
        for (var i = 0; i < sampleSizeXB, i < sampleSizeYB; i++) 
        {
            predictedYB[i] = slopeB * dataXB[i] + interceptB;
            
            residualsB[i] = dataYB[i] - predictedYB[i];

            squareResidualsB[i] = Math.pow(residualsB[i], 2);

            sumSquareResidualsB += squareResidualsB[i];
        }
                           

    document.getElementById("sampleSizeXB").value = sampleSizeXB;
    document.getElementById("sumXB").value = sumXB;
    document.getElementById("meanXB").value = meanXB;
    document.getElementById("standardDeviationXB").value = standardDeviationXB;
    document.getElementById("squareDataXB").value = squareDataXB.join("\n");
    document.getElementById("sumSquareDataXB").value = sumSquareDataXB;
    
    document.getElementById("sampleSizeYB").value = sampleSizeYB;
    document.getElementById("sumYB").value = sumYB;
    document.getElementById("meanYB").value = meanYB;
    document.getElementById("standardDeviationYB").value = standardDeviationYB;
    document.getElementById("squareDataYB").value = squareDataYB.join("\n");
    document.getElementById("sumSquareDataYB").value = sumSquareDataYB;

    document.getElementById("productB").value = productB.join("\n");
    document.getElementById("sumProductsB").value = sumProductsB;
    document.getElementById("firstPartNumeratorB").value = firstPartNumeratorB;  
    document.getElementById("secondPartNumeratorB").value = secondPartNumeratorB;
    document.getElementById("numeratorB").value = numeratorB;
    document.getElementById("firstPartDenominatorXB").value = firstPartDenominatorXB;  
    document.getElementById("secondPartDenominatorXB").value = secondPartDenominatorXB;
    document.getElementById("squareRootDifferenceXB").value = squareRootDifferenceXB;
    document.getElementById("firstPartDenominatorYB").value = firstPartDenominatorYB;  
    document.getElementById("secondPartDenominatorYB").value = secondPartDenominatorYB;
    document.getElementById("squareRootDifferenceYB").value = squareRootDifferenceYB;
    document.getElementById("denominatorB").value = denominatorB; 

    document.getElementById("correlationCoefficientB").value = correlationCoefficientB;
    document.getElementById("predictedYB").value = predictedYB.join("\n");
    document.getElementById("residualsB").value = residualsB.join("\n");
    document.getElementById("squareResidualsB").value = squareResidualsB.join("\n");
    document.getElementById("sumSquareResidualsB").value = sumSquareResidualsB;
    
    degreesFreedomB = sampleSizeXB - 2;
    
    if (significanceLevelUnitB === "percent") 
    {
        significanceLevelB = significanceLevelB / 100;
    }

    criticalTB = INVSTUDT(significanceLevelB, degreesFreedomB);

    criticalRB = Math.sqrt(Math.pow(criticalTB, 2) / (Math.pow(criticalTB, 2) + degreesFreedomB));


    if ((correlationCoefficientB > 0) && (correlationCoefficientB > criticalRB)) 
    {
        relationshipB = "The Pearson linear correlation coefficient is positive <br>";
        relationshipB += "The critical value for the Pearson correlation coefficient for n = " + sampleSizeXB + " is " + criticalRB + "<br>";
        relationshipB += "The absolute value of the Pearson correlation coefficient is greater than the critical value <br>";
        relationshipB += "Therefore, there is a positive linear relation between the variables";
        document.getElementById("relationshipB").innerHTML = relationshipB;
        document.getElementById("slopeB").innerHTML = "The slope of the least-squares regression line is " + slopeB;
        document.getElementById("interceptB").innerHTML = "The y-intercept of the least-squares regression line is " + interceptB;
        document.getElementById("regressionLineB").innerHTML = regressionLineB;
    }

    if ((correlationCoefficientB < 0) && (Math.abs(correlationCoefficientB) > criticalRB)) 
    {
        relationshipB = "The Pearson linear correlation coefficient is negative <br>";
        relationshipB += "The critical value for the Pearson correlation coefficient for n = " + sampleSizeXB + " is " + criticalRB + "<br>";
        relationshipB += "The absolute value of the Pearson correlation coefficient is greater than the critical value <br>";
        relationshipB += "Therefore, there is a negative linear relation between the variables";
        document.getElementById("relationshipB").innerHTML = relationshipB;
        document.getElementById("slopeB").innerHTML = "The slope of the least-squares regression line is " + slopeB;
        document.getElementById("interceptB").innerHTML = "The y-intercept of the least-squares regression line is " + interceptB;
        document.getElementById("regressionLineB").innerHTML = regressionLineB;
    }

    if ((correlationCoefficientB > 0) && (Math.abs(correlationCoefficientB < criticalRB))) 
    {
        relationshipB = "The Pearson linear correlation coefficient is positive <br>";
        relationshipB += "The critical value for the Pearson correlation coefficient for n = " + sampleSizeXB + " is " + criticalRB + "<br>";
        relationshipB += "The absolute value of the Pearson correlation coefficient is less than the critical value <br>";
        relationshipB += "Therefore, no linear relation exists between the variables <br>";
        relationshipB += "Because no linear relationship exists; the sample mean for Y, which is =  " + meanYB + " is used as the predicted Y for any X";
        document.getElementById("relationshipB").innerHTML = relationshipB;
        document.getElementById("slopeB").innerHTML = "The slope of the least-squares regression line is " + slopeB;
        document.getElementById("interceptB").innerHTML = "The y-intercept of the least-squares regression line is " + interceptB;
        document.getElementById("regressionLineB").innerHTML = regressionLineB;
    }

    if ((correlationCoefficientB < 0) && (Math.abs(correlationCoefficientB) < criticalRB)) 
    {
        relationshipB = "The Pearson linear correlation coefficient is negative <br>";
        relationshipB += "The critical value for the Pearson correlation coefficient for n = " + sampleSizeXB + " is " + criticalRB + "<br>";
        relationshipB += "The absolute value of the Pearson correlation coefficient is less than the critical value <br>";
        relationshipB += "Therefore, no linear relation exists between the variables <br>";
        relationshipB += "Because no linear relationship exists; the sample mean for Y, which is =  " + meanYB + " is used as the predicted Y for any X";
        document.getElementById("relationshipB").innerHTML = relationshipB;
        document.getElementById("slopeB").innerHTML = "The slope of the least-squares regression line is " + slopeB;
        document.getElementById("interceptB").innerHTML = "The y-intercept of the least-squares regression line is " + interceptB;
        document.getElementById("regressionLineB").innerHTML = regressionLineB;
    }

    if (correlationCoefficientB === 0) 
    {
        relationshipB = "The critical value for the Pearson correlation coefficient for n = " + sampleSizeXB + " is " + criticalRB + "<br>";
        relationshipB += "The absolute value of the Pearson correlation coefficient is 0 <br>";
        relationshipB += "Therefore, no linear relation exists between the variables <br>";
        relationshipB += "Because no linear relationship exists; the sample mean for Y, which is =  " + meanYB + " is used as the predicted Y for any X";
        document.getElementById("relationshipB").innerHTML = relationshipB;
        document.getElementById("slopeB").innerHTML = "The slope of the least-squares regression line is " + slopeB;
        document.getElementById("interceptB").innerHTML = "The y-intercept of the least-squares regression line is " + interceptB;
        document.getElementById("regressionLineB").innerHTML = regressionLineB;
    }
}


/*
    Case 2: Least-Squares Regression Line
    Given: Pearson's correlation coefficient, Mean of data X, Standard Deviation of data X, Mean of data Y, Standard Deviation of data Y
    To Calculate: Least-squares regression line, other details
*/
document.getElementById("pearson3").addEventListener("submit", pearson3);

function pearson3(event) 
{
    event.preventDefault();
    event.stopPropagation();

    var correlationCoefficientC = parseFloat(document.getElementById("correlationCoefficientC").value, 10) || 0,
        meanXC = parseFloat(document.getElementById("meanXC").value, 10) || 0,
        standardDeviationXC = parseFloat(document.getElementById("standardDeviationXC").value, 10) || 0,
        meanYC = parseFloat(document.getElementById("meanYC").value, 10) || 0,
        standardDeviationYC = parseFloat(document.getElementById("standardDeviationYC").value, 10) || 0,
        slopeC,
        interceptC,
        regressionLineC;

        if((correlationCoefficientC < 0) || (correlationCoefficientC > 1))
        {
            alert("The Pearson correlation coefficient must:\nnot be less than 0\nnot be greater than 1\nPlease review");
            return;
        }

        slopeC = correlationCoefficientC * (standardDeviationYC / standardDeviationXC);

        interceptC = meanYC - (slopeC * meanXC);

        regressionLineC = "The least-squares regression line is: &ycirc; = " + slopeC + "* x + " + interceptC;

    document.getElementById("slopeC").innerHTML = "The slope of the least-squares regression line is " + slopeC;
    document.getElementById("interceptC").innerHTML = "The y-intercept of the least-squares regression line is " + interceptC;
    document.getElementById("regressionLineC").innerHTML = regressionLineC;
}
  
        
/*
    Case 3: Least-Squares Regression Model
    Given: data X, Least-squares regression line
    To Calculate: Mean value of response variable
*/
document.getElementById("pearson4").addEventListener("submit", pearson4);

function pearson4(event) 
{
    event.preventDefault();
    event.stopPropagation();

    var slopeRegressionModelD = parseFloat(document.getElementById("slopeRegressionModelD").value, 10) || 0,
        interceptRegressionModelD = parseFloat(document.getElementById("interceptRegressionModelD").value, 10) || 0,
        predictorVariableXD = parseFloat(document.getElementById("predictorVariableXD").value, 10) || 0,
        meanResponseVariableD;
        
                      
        meanResponseVariableD = slopeRegressionModelD * predictorVariableXD + interceptRegressionModelD;
                
    document.getElementById("meanResponseVariableD").innerHTML = "The mean value of the response variable is: " + meanResponseVariableD;                                    
}


/*
    Case 4: Residuals
    Given: Input, Least-squares regression line (required), Output (optional) 
    To Calculate: Predicted Output, Residual
*/
document.getElementById("pearson5").addEventListener("submit", pearson5);

function pearson5(event) 
{
    event.preventDefault();
    event.stopPropagation();

    var variableXE = parseFloat(document.getElementById("variableXE").value, 10) || 0,
        variableYE = parseFloat(document.getElementById("variableYE").value, 10) || 0,
        slopeResidualE = parseFloat(document.getElementById("slopeResidualE").value, 10) || 0,
        interceptResidualE = parseFloat(document.getElementById("interceptResidualE").value, 10) || 0,
        predictedYE,
        residualE,
        interpretResidualE;
        
                      
        predictedYE = slopeResidualE * variableXE + interceptResidualE;
        
        residualE = variableYE - predictedYE;
        
        if(residualE > 0)
        {
            interpretResidualE = "The residual is positive <br>";
            interpretResidualE += "This means that the Observed Y is greater than the Predicted Y <br>";
            interpretResidualE += "This means that the given Y is above average for terms with the given X";
        }
        
        if(residualE < 0)
        {
            interpretResidualE = "The residual is negative <br>";
            interpretResidualE += "This means that the Observed Y is less than the Predicted Y <br>";
            interpretResidualE += "This means that the given Y is below average for terms with the given X";
        }
        
        
        if(residualE === 0)
        {
            interpretResidualE = "The residual is zero <br>";
            interpretResidualE += "This means that the Observed Y is the Predicted Y <br>";
            interpretResidualE += "This means that the given Y is the average for terms with the given X";
        }
        
    document.getElementById("predictedYE").innerHTML = "The predicted Y is " + predictedYE;                                    
    document.getElementById("residualE").innerHTML = "The residual is " + residualE;
    document.getElementById("interpretResidualE").innerHTML = interpretResidualE;
}


/*
    Case 5: Multiple Linear Regression for Two Independent Variables
    Given:</u> Datasets X<sub>1</sub>, X<sub>2</sub>, Y 
    To Calculate: Multiple Regression Equation, other details
    Show all steps
*/
document.getElementById("pearson6").addEventListener("submit", pearson6);

function pearson6(event) 
{
    event.preventDefault();

    var datasetX1F = document.getElementById('datasetX1F').value,
        datasetX2F = document.getElementById('datasetX2F').value,
        datasetYF = document.getElementById('datasetYF').value,
        datasetSplitX1F = datasetX1F.split('\n'),
        datasetSplitX2F = datasetX2F.split('\n'),
        datasetSplitYF = datasetYF.split('\n'),
        dataX1F = datasetSplitX1F.map(Number),
        dataX2F = datasetSplitX2F.map(Number),
        dataYF = datasetSplitYF.map(Number),
        sampleSizeX1F = dataX1F.length,
        sampleSizeX2F = dataX2F.length,
        sampleSizeYF = dataYF.length,
        squareDataX1F = [],
        sumSquareDataX1F = 0,
        sumX1F = 0,
        squareSumX1F,
        regressionSumX1F,
        squareDataX2F = [],
        sumSquareDataX2F = 0,
        sumX2F = 0,
        squareSumX2F,
        regressionSumX2F,
        productDataX1X2F = [],
        sumProductDataX1X2F = 0,
        productSumsX1X2F,
        regressionSumX1X2F,
        productDataX1YF = [],
        sumProductDataX1YF = 0,
        productSumsX1YF,
        regressionSumX1YF,
        productDataX2YF = [],
        sumProductDataX2YF = 0,
        productSumsX2YF,
        regressionSumX2YF,
        slopeX1F,
        slopeX2F,
        interceptYF,
        multipleLinearRegressionEquationF,
        meanX1F,
        meanX2F,
        sumYF = 0,
        meanYF,
        firstPart1NumeratorF,
        secondPart1NumeratorF,
        firstPartDenominatorF,
        secondPartDenominatorF,
        firstPart2NumeratorF,
        secondPart2NumeratorF,
        numerator1F,       
        numerator2F,
        denominatorF,
        predictedYF = [],
        residualsF = [];
        
        if ((sampleSizeX1F !== sampleSizeX2F) || (sampleSizeX1F !== sampleSizeYF) || (sampleSizeX2F !== sampleSizeYF)) 
        {
           alert("The three sample sizes must be the same.\nPlease review.");
           return;
        }
        
        for (var i = 0; i < sampleSizeX1F, i < sampleSizeX2F, i < sampleSizeYF; i++)
        {
            sumX1F += dataX1F[i];
            meanX1F = sumX1F / sampleSizeX1F;
            
            sumX2F += dataX2F[i];
            meanX2F = sumX2F / sampleSizeX2F;
            
            sumYF += dataYF[i];
            meanYF = sumYF / sampleSizeYF;
        }

        squareSumX1F = Math.pow(sumX1F, 2);

        squareSumX2F = Math.pow(sumX2F, 2);
    
        for (var i = 0; i < sampleSizeX1F, i < sampleSizeX2F, i < sampleSizeYF; i++)
        {
            squareDataX1F[i] = Math.pow(dataX1F[i], 2);
            sumSquareDataX1F += squareDataX1F[i];
            
            squareDataX2F[i] = Math.pow(dataX2F[i], 2);
            sumSquareDataX2F += squareDataX2F[i];
            
            productDataX1X2F[i] = dataX1F[i] * dataX2F[i];
            sumProductDataX1X2F += productDataX1X2F[i];
            squareSumProductDataX1X2F = Math.pow(sumProductDataX1X2F, 2);
            
            productDataX1YF[i] = dataX1F[i] * dataYF[i];
            sumProductDataX1YF += productDataX1YF[i];
            
            productDataX2YF[i] = dataX2F[i] * dataYF[i];
            sumProductDataX2YF += productDataX2YF[i];
        }

        regressionSumX1F = sumSquareDataX1F - (squareSumX1F / sampleSizeX1F);

        regressionSumX2F = sumSquareDataX2F - (squareSumX2F / sampleSizeX2F);

        productSumsX1X2F = sumX1F * sumX2F;

        regressionSumX1X2F = sumProductDataX1X2F - (productSumsX1X2F / sampleSizeX1F);

        productSumsX1YF = sumX1F * sumYF;

        regressionSumX1YF = sumProductDataX1YF - (productSumsX1YF / sampleSizeYF);

        productSumsX2YF = sumX2F * sumYF;

        regressionSumX2YF = sumProductDataX2YF - (productSumsX2YF / sampleSizeYF);

        firstPart1NumeratorF = regressionSumX2F * regressionSumX1YF;

        secondPart1NumeratorF = regressionSumX1X2F * regressionSumX2YF;

        firstPartDenominatorF = regressionSumX1F * regressionSumX2F;

        secondPartDenominatorF = Math.pow(regressionSumX1X2F, 2);

        numerator1F = firstPart1NumeratorF - secondPart1NumeratorF;

        denominatorF = firstPartDenominatorF - secondPartDenominatorF;

        firstPart2NumeratorF = regressionSumX1F * regressionSumX2YF;

        secondPart2NumeratorF = regressionSumX1X2F * regressionSumX1YF;

        numerator2F = firstPart2NumeratorF - secondPart2NumeratorF;

        slopeX1F = numerator1F / denominatorF;

        slopeX2F = numerator2F / denominatorF;

        interceptYF = meanYF - (slopeX1F * meanX1F) - (slopeX2F * meanX2F);
        
        multipleLinearRegressionEquationF = interceptYF + " + " + slopeX1F + " * x1 + " + slopeX2F + " * x2";
        
        
        for (var i = 0; i < sampleSizeX1F, i < sampleSizeX2F, i < sampleSizeYF; i++)
        {                    
            predictedYF[i] = interceptYF + slopeX1F * dataX1F[i] + slopeX2F * dataX2F[i];
                                  
            residualsF[i] = dataYF[i] - predictedYF[i];
        }
          
        
    document.getElementById("sampleSizeX1F").value = sampleSizeX1F;

    document.getElementById("squareDataX1F").value = squareDataX1F.join("\n");
    document.getElementById("sumSquareDataX1F").value = sumSquareDataX1F;
    document.getElementById("sumX1F").value = sumX1F;
    document.getElementById("squareSumX1F").value = squareSumX1F;
    document.getElementById("regressionSumX1F").value = regressionSumX1F;
    
    document.getElementById("squareDataX2F").value = squareDataX2F.join("\n");
    document.getElementById("sumSquareDataX2F").value = sumSquareDataX2F;
    document.getElementById("sumX2F").value = sumX2F;
    document.getElementById("squareSumX2F").value = squareSumX2F;
    document.getElementById("regressionSumX2F").value = regressionSumX2F;
        
    document.getElementById("productDataX1X2F").value = productDataX1X2F.join("\n");
    document.getElementById("sumProductDataX1X2F").value = sumProductDataX1X2F;
    document.getElementById("productSumsX1X2F").value = productSumsX1X2F;
    document.getElementById("regressionSumX1X2F").value = regressionSumX1X2F;

    document.getElementById("productDataX1YF").value = productDataX1YF.join("\n");
    document.getElementById("sumProductDataX1YF").value = sumProductDataX1YF;
    document.getElementById("productSumsX1YF").value = productSumsX1YF;
    document.getElementById("regressionSumX1YF").value = regressionSumX1YF;

    document.getElementById("productDataX2YF").value = productDataX2YF.join("\n");
    document.getElementById("sumProductDataX2YF").value = sumProductDataX2YF;
    document.getElementById("productSumsX2YF").value = productSumsX2YF;
    document.getElementById("regressionSumX2YF").value = regressionSumX2YF;
    
    document.getElementById("slopeX1F").value = slopeX1F;
    document.getElementById("slopeX2F").value = slopeX2F;
    document.getElementById("interceptYF").value = interceptYF;
    
    document.getElementById("multipleLinearRegressionEquationF").value = multipleLinearRegressionEquationF;
    
    document.getElementById("predictedYF").value = predictedYF.join("\n");
    document.getElementById("residualsF").value = residualsF.join("\n");
}