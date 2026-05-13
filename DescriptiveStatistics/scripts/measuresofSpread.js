/*
    Copyright 2017 - Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.descriptive-statistics.appspot.com
    www.descriptive-statistics.appspot.com/descriptive-statistics-calculators.html
    www.descriptive-statistics.appspot.com/descriptiveStatistics.html
    www.descriptive-statistics.appspot.com/measuresCenter.html
    www.descriptive-statistics.appspot.com/measuresPosition.html
    www.descriptive-statistics.appspot.com/measuresVariation.html
    www.descriptive-statistics.appspot.com/statistics.html
    www.descriptive-statistics.appspot.com/project.html
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
*/

"use strict";

/*
Case 1 (First Method) 
Given: Raw Dataset 
Sort the Data
To Calculate: Range, Variance, Standard Deviation, Coefficient of Variation, Mean Deviation 
Show all steps
*/
document.getElementById("measuresVariation1").addEventListener("submit", measuresVariation1);

function measuresVariation1(event) 
{
    event.preventDefault();

    var datasetA = document.getElementById('datasetA').value,
        datasetSplitA = datasetA.split(','),
        dataA = datasetSplitA.map(Number),
        dataAA = datasetSplitA.map(Number),
        dataSortAA = dataAA.sort(function(a, b) {return a - b;}),
        minimumA,
        maximumA,
        rangeA,
        sumA = 0,
        sampleSizeA = dataA.length,
        meanA,
        deviationMeanA = [],
        squareDeviationMeanA = [],
        sumSquareDeviationMeanA = 0,
        sampleSizeLessA = sampleSizeA - 1,
        varianceA,
        standardDeviationA,
        coefficientVariationA,
        absoluteDeviationMeanA = [],
        sumAbsoluteDeviationMeanA = 0,
        meanAbsoluteDeviationA,
        populationSizeA = sampleSizeA,
        populationVarianceA,
        populationStandardDeviationA,
        populationCoefficientVariationA;       
        
        minimumA = dataSortAA[0];
        
        maximumA = dataSortAA[sampleSizeA - 1];
        
        rangeA = maximumA - minimumA;
                        
        for (var i = 0; i < sampleSizeA; i++)
        {
            sumA += dataA[i];
            meanA = sumA / sampleSizeA;
        }           
                               
        for (var i = 0; i < sampleSizeA; i++)
        {
            deviationMeanA[i] = dataA[i] - meanA;
            
            squareDeviationMeanA[i] = Math.pow(deviationMeanA[i], 2);

            sumSquareDeviationMeanA += squareDeviationMeanA[i];

            varianceA = sumSquareDeviationMeanA / sampleSizeLessA;

            standardDeviationA = Math.sqrt(varianceA);

            absoluteDeviationMeanA[i] = Math.abs(deviationMeanA[i]); 

            sumAbsoluteDeviationMeanA += absoluteDeviationMeanA[i];

            meanAbsoluteDeviationA = sumAbsoluteDeviationMeanA / sampleSizeA;

            populationVarianceA = sumSquareDeviationMeanA / sampleSizeA;

            populationStandardDeviationA = Math.sqrt(populationVarianceA);
        }
        
        coefficientVariationA = (standardDeviationA / meanA) * 100;

        populationCoefficientVariationA = (populationStandardDeviationA / meanA) * 100;
        
        
        document.getElementById("sortedDataA").value = dataSortAA.join(", ");  
        document.getElementById("minimumA").value = minimumA;
        document.getElementById("maximumA").value = maximumA;
        document.getElementById("rangeA").value = rangeA;
        document.getElementById("sumA").value = sumA;
        document.getElementById("sampleSizeA").value = sampleSizeA;
        document.getElementById("meanA").value = meanA;
        document.getElementById("deviationMeanA").value = deviationMeanA.join(", ");
        document.getElementById("squareDeviationMeanA").value = squareDeviationMeanA.join(", ");
        document.getElementById("sumSquareDeviationMeanA").value = sumSquareDeviationMeanA;
        document.getElementById("sampleSizeLessA").value = sampleSizeLessA;
        document.getElementById("varianceA").value = varianceA;
        document.getElementById("standardDeviationA").value = standardDeviationA;
        document.getElementById("coefficientVariationA").value = coefficientVariationA;
        document.getElementById("absoluteDeviationMeanA").value = absoluteDeviationMeanA.join(", ");
        document.getElementById("sumAbsoluteDeviationMeanA").value = sumAbsoluteDeviationMeanA;
        document.getElementById("meanAbsoluteDeviationA").value = meanAbsoluteDeviationA;
        document.getElementById("populationSizeA").value = populationSizeA;
        document.getElementById("populationVarianceA").value = populationVarianceA;
        document.getElementById("populationStandardDeviationA").value = populationStandardDeviationA;
        document.getElementById("populationCoefficientVariationA").value = populationCoefficientVariationA;
}


/*
Case 2 (First Method) 
Given: Ungrouped Dataset and Frequency
To Calculate: Variance, Standard Deviation, Coefficient of Variation, Mean Deviation 
Show all steps
*/
document.getElementById("measuresVariation2").addEventListener("submit", measuresVariation2);

function measuresVariation2(event) 
{
    event.preventDefault();

    var datasetB = document.getElementById('datasetB').value,
        datasetSplitB = datasetB.split(','),
        dataB = datasetSplitB.map(Number),
        freqB = document.getElementById('freqB').value,
        freqSplitB = freqB.split(','),
        frequencyB = freqSplitB.map(Number),
        sampleSizeB = dataB.length,
        frequencySizeB = frequencyB.length,
        productDataFrequencyB = [],
        sumProductDataFrequencyB = 0,
        sumFrequencyB = 0,
        meanB,
        deviationMeanB = [],
        squareDeviationMeanB = [],
        productFrequencySquareDeviationMeanB = [],
        sumProductFrequencySquareDeviationMeanB = 0,
        sumFrequencyLessB,
        varianceB,
        standardDeviationB,
        coefficientVariationB,
        absoluteDeviationMeanB = [],
        productFrequencyAbsoluteDeviationMeanB = [],
        sumProductFrequencyAbsoluteDeviationMeanB = 0,
        meanAbsoluteDeviationB,
        populationSizeB,
        populationVarianceB,
        populationStandardDeviationB,
        populationCoefficientVariationB; 

        if(sampleSizeB !== frequencySizeB)
        {
            alert("The size of the dataset must be equal to the size of the frequency.\nPlease review.");
            return;
        }
                        
        for (var i = 0; i < sampleSizeB, i < frequencySizeB; i++)
        {
            sumFrequencyB += frequencyB[i];

            productDataFrequencyB[i] = frequencyB[i] * dataB[i];

            sumProductDataFrequencyB += productDataFrequencyB[i];

            meanB = sumProductDataFrequencyB / sumFrequencyB;
        }

        populationSizeB = sumFrequencyB;

        for (var i = 0; i < sampleSizeB, i < frequencySizeB; i++)
        {
            deviationMeanB[i] = dataB[i] - meanB;

            squareDeviationMeanB[i] = Math.pow(deviationMeanB[i], 2);

            productFrequencySquareDeviationMeanB[i] = frequencyB[i] * squareDeviationMeanB[i];

            sumProductFrequencySquareDeviationMeanB += productFrequencySquareDeviationMeanB[i];

            sumFrequencyLessB = sumFrequencyB - 1;

            varianceB = sumProductFrequencySquareDeviationMeanB / sumFrequencyLessB;

            standardDeviationB = Math.sqrt(varianceB);

            coefficientVariationB = (standardDeviationB / meanB) * 100;

            absoluteDeviationMeanB[i] = Math.abs(deviationMeanB[i]); 

            productFrequencyAbsoluteDeviationMeanB[i] = frequencyB[i] * absoluteDeviationMeanB[i];

            sumProductFrequencyAbsoluteDeviationMeanB += productFrequencyAbsoluteDeviationMeanB[i];

            meanAbsoluteDeviationB = sumProductFrequencyAbsoluteDeviationMeanB / sumFrequencyB;

            populationVarianceB = sumProductFrequencySquareDeviationMeanB / populationSizeB;

            populationStandardDeviationB = Math.sqrt(populationVarianceB);

            populationCoefficientVariationB = (populationStandardDeviationB / meanB) * 100;
        }           
                                             
        
    document.getElementById("productDataFrequencyB").value = productDataFrequencyB.join(", ");
    document.getElementById("sumProductDataFrequencyB").value = sumProductDataFrequencyB;
    document.getElementById("sumFrequencyB").value = sumFrequencyB;
    document.getElementById("meanB").value = meanB;
    document.getElementById("deviationMeanB").value = deviationMeanB.join(", ");
    document.getElementById("squareDeviationMeanB").value = squareDeviationMeanB.join(", ");
    document.getElementById("productFrequencySquareDeviationMeanB").value = productFrequencySquareDeviationMeanB.join(", ");
    document.getElementById("sumProductFrequencySquareDeviationMeanB").value = sumProductFrequencySquareDeviationMeanB;
    document.getElementById("sumFrequencyLessB").value = sumFrequencyLessB;
    document.getElementById("varianceB").value = varianceB;
    document.getElementById("standardDeviationB").value = standardDeviationB;
    document.getElementById("coefficientVariationB").value = coefficientVariationB;
    document.getElementById("absoluteDeviationMeanB").value = absoluteDeviationMeanB.join(", ");
    document.getElementById("productFrequencyAbsoluteDeviationMeanB").value = productFrequencyAbsoluteDeviationMeanB.join(", ");
    document.getElementById("sumProductFrequencyAbsoluteDeviationMeanB").value = sumProductFrequencyAbsoluteDeviationMeanB;
    document.getElementById("meanAbsoluteDeviationB").value = meanAbsoluteDeviationB;
    document.getElementById("populationSizeB").value = populationSizeB;
    document.getElementById("populationVarianceB").value = populationVarianceB;
    document.getElementById("populationStandardDeviationB").value = populationStandardDeviationB;
    document.getElementById("populationCoefficientVariationB").value = populationCoefficientVariationB;
}


/*
Case 3 (First Method) 
Given: Grouped Dataset (Lower Class Limit and Upper Class Limit) and Frequency
To Calculate: Variance, Standard Deviation, Coefficient of Variation, Mean Deviation 
Show all steps
*/
document.getElementById("measuresVariation3").addEventListener("submit", measuresVariation3);

function measuresVariation3(event) 
{
    event.preventDefault();

    var datasetLowerC = document.getElementById('datasetLowerC').value,
        datasetLowerSplitC = datasetLowerC.split(','),
        dataLowerC = datasetLowerSplitC.map(Number),
        datasetUpperC = document.getElementById('datasetUpperC').value,
        datasetUpperSplitC = datasetUpperC.split(','),
        dataUpperC = datasetUpperSplitC.map(Number),
        freqC = document.getElementById('freqC').value,
        freqSplitC = freqC.split(','),
        frequencyC = freqSplitC.map(Number),
        sampleSizeLowerC = dataLowerC.length,
        sampleSizeUpperC = dataUpperC.length,
        frequencySizeC = frequencyC.length,
        midpointC = [],
        productMidpointFrequencyC = [],
        sumProductMidpointFrequencyC = 0,
        sumFrequencyC = 0,
        meanC,
        deviationMeanC = [],
        squareDeviationMeanC = [],
        productFrequencySquareDeviationMeanC = [],
        sumProductFrequencySquareDeviationMeanC = 0,
        sumFrequencyLessC,
        varianceC,
        standardDeviationC,
        coefficientVariationC,
        absoluteDeviationMeanC = [],
        productFrequencyAbsoluteDeviationMeanC = [],
        sumProductFrequencyAbsoluteDeviationMeanC = 0,
        meanAbsoluteDeviationC,
        populationSizeC,
        populationVarianceC,
        populationStandardDeviationC,
        populationCoefficientVariationC;     

        if((sampleSizeLowerC !== sampleSizeUpperC) || (sampleSizeLowerC !== frequencySizeC) || (sampleSizeUpperC !== frequencySizeC))
        {
            alert("All sizes (size of the lower limit, size of the upper limit, and size of the frequency) must be equal.\nPlease review.");
            return;
        }
                        
        for (var i = 0; i < sampleSizeLowerC, i < sampleSizeUpperC, i < frequencySizeC; i++)
        {
            midpointC[i] = (dataLowerC[i] + dataUpperC[i]) / 2;

            productMidpointFrequencyC[i] = midpointC[i] * frequencyC[i];

            sumProductMidpointFrequencyC += productMidpointFrequencyC[i];

            sumFrequencyC += frequencyC[i];

            meanC = sumProductMidpointFrequencyC / sumFrequencyC;
        }

        populationSizeC = sumFrequencyC;

        for (var i = 0; i < sampleSizeLowerC, i < sampleSizeUpperC, i < frequencySizeC; i++)
        {
            deviationMeanC[i] = midpointC[i] - meanC;

            squareDeviationMeanC[i] = Math.pow(deviationMeanC[i], 2);

            productFrequencySquareDeviationMeanC[i] = frequencyC[i] * squareDeviationMeanC[i];

            sumProductFrequencySquareDeviationMeanC += productFrequencySquareDeviationMeanC[i];

            sumFrequencyLessC = sumFrequencyC - 1;

            varianceC = sumProductFrequencySquareDeviationMeanC / sumFrequencyLessC;

            standardDeviationC = Math.sqrt(varianceC);

            coefficientVariationC = (standardDeviationC / meanC) * 100;

            absoluteDeviationMeanC[i] = Math.abs(deviationMeanC[i]); 

            productFrequencyAbsoluteDeviationMeanC[i] = frequencyC[i] * absoluteDeviationMeanC[i];

            sumProductFrequencyAbsoluteDeviationMeanC += productFrequencyAbsoluteDeviationMeanC[i];

            meanAbsoluteDeviationC = sumProductFrequencyAbsoluteDeviationMeanC / sumFrequencyC;

            populationVarianceC = sumProductFrequencySquareDeviationMeanC / populationSizeC;

            populationStandardDeviationC = Math.sqrt(populationVarianceC);

            populationCoefficientVariationC = (populationStandardDeviationC / meanC) * 100;
        }           
                                             
    
    document.getElementById("midpointC").value = midpointC.join(", ");
    document.getElementById("productMidpointFrequencyC").value = productMidpointFrequencyC.join(", ");
    document.getElementById("sumProductMidpointFrequencyC").value = sumProductMidpointFrequencyC;
    document.getElementById("sumFrequencyC").value = sumFrequencyC;
    document.getElementById("meanC").value = meanC;
    document.getElementById("deviationMeanC").value = deviationMeanC.join(", ");
    document.getElementById("squareDeviationMeanC").value = squareDeviationMeanC.join(", ");
    document.getElementById("productFrequencySquareDeviationMeanC").value = productFrequencySquareDeviationMeanC.join(", ");
    document.getElementById("sumProductFrequencySquareDeviationMeanC").value = sumProductFrequencySquareDeviationMeanC;
    document.getElementById("sumFrequencyLessC").value = sumFrequencyLessC;
    document.getElementById("varianceC").value = varianceC;
    document.getElementById("standardDeviationC").value = standardDeviationC;
    document.getElementById("coefficientVariationC").value = coefficientVariationC;
    document.getElementById("absoluteDeviationMeanC").value = absoluteDeviationMeanC.join(", ");
    document.getElementById("productFrequencyAbsoluteDeviationMeanC").value = productFrequencyAbsoluteDeviationMeanC.join(", ");
    document.getElementById("sumProductFrequencyAbsoluteDeviationMeanC").value = sumProductFrequencyAbsoluteDeviationMeanC;
    document.getElementById("meanAbsoluteDeviationC").value = meanAbsoluteDeviationC;
    document.getElementById("populationSizeC").value = populationSizeC;
    document.getElementById("populationVarianceC").value = populationVarianceC;
    document.getElementById("populationStandardDeviationC").value = populationStandardDeviationC;
    document.getElementById("populationCoefficientVariationC").value = populationCoefficientVariationC;
}


/*
Case 1 (Second Method) 
Given: Raw Dataset 
Sort the Data
To Calculate: Range, Variance, Standard Deviation
Show all steps
*/
document.getElementById("measuresVariation4").addEventListener("submit", measuresVariation4);

function measuresVariation4(event) 
{
    event.preventDefault();

    var datasetD = document.getElementById('datasetD').value,
        datasetSplitD = datasetD.split(','),
        dataD = datasetSplitD.map(Number),
        dataDD = datasetSplitD.map(Number),
        dataSortDD = dataDD.sort(function(a, b) {return a - b;}),
        minimumD,
        maximumD,
        rangeD,        
        squareDataD = [],
        sumSquareDataD = 0,
        sampleSizeD = dataD.length,
        productSampleSizeSumSquareDataD,
        sumDataD = 0,
        squareSumDataD,
        differenceD,
        sampleSizeLessD = sampleSizeD - 1,
        productSampleSizeSampleSizeLessD,
        varianceD,
        standardDeviationD,
        populationSizeD = sampleSizeD,
        populationVarianceD,
        populationStandardDeviationD;
        
        minimumD = dataSortDD[0];
        
        maximumD = dataSortDD[sampleSizeD - 1];
        
        rangeD = maximumD - minimumD;
                        
        for (var i = 0; i < sampleSizeD; i++)
        {
            squareDataD[i] = Math.pow(dataD[i], 2);
            sumSquareDataD += squareDataD[i];
        }    

        productSampleSizeSumSquareDataD = sampleSizeD * sumSquareDataD;
        
        for (var i = 0; i < sampleSizeD; i++)
        {
            sumDataD += dataD[i];
        }   

        squareSumDataD = Math.pow(sumDataD, 2);

        differenceD = productSampleSizeSumSquareDataD - squareSumDataD;

        productSampleSizeSampleSizeLessD = sampleSizeD * sampleSizeLessD;
                               
        varianceD = differenceD / productSampleSizeSampleSizeLessD;

        standardDeviationD = Math.sqrt(varianceD);       

        populationVarianceD = differenceD / Math.pow(populationSizeD, 2);

        populationStandardDeviationD = Math.sqrt(populationVarianceD);
        
        
    document.getElementById("sortedDataD").value = dataSortDD.join(", ");  
    document.getElementById("minimumD").value = minimumD;
    document.getElementById("maximumD").value = maximumD;
    document.getElementById("rangeD").value = rangeD;
    document.getElementById("squareDataD").value = squareDataD.join(", ");
    document.getElementById("sumSquareDataD").value = sumSquareDataD;
    document.getElementById("sampleSizeD").value = sampleSizeD;    
    document.getElementById("productSampleSizeSumSquareDataD").value = productSampleSizeSumSquareDataD;
    document.getElementById("sumDataD").value = sumDataD;
    document.getElementById("squareSumDataD").value = squareSumDataD;
    document.getElementById("differenceD").value = differenceD;
    document.getElementById("sampleSizeLessD").value = sampleSizeLessD;
    document.getElementById("productSampleSizeSampleSizeLessD").value = productSampleSizeSampleSizeLessD;
    document.getElementById("varianceD").value = varianceD;
    document.getElementById("standardDeviationD").value = standardDeviationD;
    document.getElementById("populationSizeD").value = populationSizeD;
    document.getElementById("populationVarianceD").value = populationVarianceD;
    document.getElementById("populationStandardDeviationD").value = populationStandardDeviationD;
}


/*
Case 2 (Second Method) 
Given: Ungrouped Dataset and Frequency
To Calculate: Variance, Standard Deviation
Show all steps
*/
document.getElementById("measuresVariation5").addEventListener("submit", measuresVariation5);

function measuresVariation5(event) 
{
    event.preventDefault();

    var datasetE = document.getElementById('datasetE').value,
        datasetSplitE = datasetE.split(','),
        dataE = datasetSplitE.map(Number),
        freqE = document.getElementById('freqE').value,
        freqSplitE = freqE.split(','),
        frequencyE = freqSplitE.map(Number),
        sampleSizeE = dataE.length,
        frequencySizeE = frequencyE.length,
        productDataFrequencyE = [],
        squareDataE = [],
        productSquareDataFrequencyE = [],
        sumProductSquareDataFrequencyE = 0,
        sumFrequencyE = 0,
        productSumsE,
        sumProductDataFrequencyE = 0,
        squareSumProductDataFrequencyE,
        differenceE,
        sumFrequencyLessE,
        productSumFrequencySumFrequencyLessE,
        varianceE,
        standardDeviationE,
        populationSizeE,
        populationVarianceE,
        populationStandardDeviationE;     

        if(sampleSizeE !== frequencySizeE)
        {
            alert("The size of the dataset must be equal to the size of the frequency.\nPlease review.");
            return;
        }

        for (var i = 0; i < sampleSizeE, i < frequencySizeE; i++)
        {
            productDataFrequencyE[i] = frequencyE[i] * dataE[i];

            sumProductDataFrequencyE += productDataFrequencyE[i];
        }
                        
        for (var i = 0; i < sampleSizeE, i < frequencySizeE; i++)
        {
            squareDataE[i] = Math.pow(dataE[i], 2);

            productSquareDataFrequencyE[i] = squareDataE[i] * frequencyE[i];

            sumProductSquareDataFrequencyE += productSquareDataFrequencyE[i];
        }

        for (var i = 0; i < sampleSizeE, i < frequencySizeE; i++)
        {
            sumFrequencyE += frequencyE[i];
        }

        populationSizeE = sumFrequencyE;

        sumFrequencyLessE = sumFrequencyE - 1;

        productSumsE = sumProductSquareDataFrequencyE * sumFrequencyE;

        squareSumProductDataFrequencyE = Math.pow(sumProductDataFrequencyE, 2);

        differenceE = productSumsE - squareSumProductDataFrequencyE;

        productSumFrequencySumFrequencyLessE = sumFrequencyE * sumFrequencyLessE;

        varianceE = differenceE / productSumFrequencySumFrequencyLessE;

        standardDeviationE = Math.sqrt(varianceE);    
        
        populationVarianceE = differenceE / Math.pow(populationSizeE, 2);

        populationStandardDeviationE = Math.sqrt(populationVarianceE);
                                             
        
    document.getElementById("productDataFrequencyE").value = productDataFrequencyE.join(", ");  
    document.getElementById("squareDataE").value = squareDataE.join(", ");
    document.getElementById("productSquareDataFrequencyE").value = productSquareDataFrequencyE.join(", ");
    document.getElementById("sumProductSquareDataFrequencyE").value = sumProductSquareDataFrequencyE;
    document.getElementById("sumFrequencyE").value = sumFrequencyE;
    document.getElementById("productSumsE").value = productSumsE;
    document.getElementById("sumProductDataFrequencyE").value = sumProductDataFrequencyE;
    document.getElementById("squareSumProductDataFrequencyE").value = squareSumProductDataFrequencyE;
    document.getElementById("differenceE").value = differenceE;
    document.getElementById("sumFrequencyLessE").value = sumFrequencyLessE;
    document.getElementById("productSumFrequencySumFrequencyLessE").value = productSumFrequencySumFrequencyLessE;
    document.getElementById("varianceE").value = varianceE;
    document.getElementById("standardDeviationE").value = standardDeviationE;
    document.getElementById("populationSizeE").value = populationSizeE;
    document.getElementById("populationVarianceE").value = populationVarianceE;
    document.getElementById("populationStandardDeviationE").value = populationStandardDeviationE;
}


/*
Case 3 (Second Method) 
Given: Grouped Dataset (Lower Class Limit and Upper Class Limit) and Frequency
To Calculate: Variance, Standard Deviation
Show all steps
*/
document.getElementById("measuresVariation6").addEventListener("submit", measuresVariation6);

function measuresVariation6(event) 
{
    event.preventDefault();

    var datasetLowerF = document.getElementById('datasetLowerF').value,
        datasetLowerSplitF = datasetLowerF.split(','),
        dataLowerF = datasetLowerSplitF.map(Number),
        datasetUpperF = document.getElementById('datasetUpperF').value,
        datasetUpperSplitF = datasetUpperF.split(','),
        dataUpperF = datasetUpperSplitF.map(Number),
        freqF = document.getElementById('freqF').value,
        freqSplitF = freqF.split(','),
        frequencyF = freqSplitF.map(Number),
        sampleSizeLowerF = dataLowerF.length,
        sampleSizeUpperF = dataUpperF.length,
        frequencySizeF = frequencyF.length,
        midpointF = [],
        productMidpointFrequencyF = [],
        squareMidpointF = [],
        productSquareMidpointFrequencyF = [],
        sumProductSquareMidpointFrequencyF = 0,
        sumFrequencyF = 0,
        productSumsF,
        sumProductMidpointFrequencyF = 0,
        squareSumProductMidpointFrequencyF,
        differenceF,
        sumFrequencyLessF,
        productSumFrequencySumFrequencyLessF,
        varianceF,
        standardDeviationF,
        populationSizeF,
        populationVarianceF,
        populationStandardDeviationF;         

        if((sampleSizeLowerF !== sampleSizeUpperF) || (sampleSizeLowerF !== frequencySizeF) || (sampleSizeUpperF !== frequencySizeF))
        {
            alert("All sizes (size of the lower limit, size of the upper limit, and size of the frequency) must be equal.\nPlease review.");
            return;
        }

        for (var i = 0; i < sampleSizeLowerF, i < sampleSizeUpperF, i < frequencySizeF; i++)
        {
            midpointF[i] = (dataLowerF[i] + dataUpperF[i]) / 2;

            productMidpointFrequencyF[i] = frequencyF[i] * midpointF[i];

            sumProductMidpointFrequencyF += productMidpointFrequencyF[i];
        }
                        
        for (var i = 0; i < sampleSizeLowerF, i < sampleSizeUpperF, i < frequencySizeF; i++)
        {
            squareMidpointF[i] = Math.pow(midpointF[i], 2);

            productSquareMidpointFrequencyF[i] = squareMidpointF[i] * frequencyF[i];

            sumProductSquareMidpointFrequencyF += productSquareMidpointFrequencyF[i];
        }

        for (var i = 0; i < sampleSizeLowerF, i < sampleSizeUpperF, i < frequencySizeF; i++)
        {
            sumFrequencyF += frequencyF[i];
        }

        populationSizeF = sumFrequencyF;

        sumFrequencyLessF = sumFrequencyF - 1;

        productSumsF = sumProductSquareMidpointFrequencyF * sumFrequencyF;

        squareSumProductMidpointFrequencyF = Math.pow(sumProductMidpointFrequencyF, 2);

        differenceF = productSumsF - squareSumProductMidpointFrequencyF;

        productSumFrequencySumFrequencyLessF = sumFrequencyF * sumFrequencyLessF;

        varianceF = differenceF / productSumFrequencySumFrequencyLessF;

        standardDeviationF = Math.sqrt(varianceF);      
        
        populationVarianceF = differenceF / Math.pow(populationSizeF, 2);

        populationStandardDeviationF = Math.sqrt(populationVarianceF);
                                             
        
    document.getElementById("midpointF").value = midpointF.join(", "); 
    document.getElementById("productMidpointFrequencyF").value = productMidpointFrequencyF.join(", ");  
    document.getElementById("squareMidpointF").value = squareMidpointF.join(", ");
    document.getElementById("productSquareMidpointFrequencyF").value = productSquareMidpointFrequencyF.join(", ");
    document.getElementById("sumProductSquareMidpointFrequencyF").value = sumProductSquareMidpointFrequencyF;
    document.getElementById("sumFrequencyF").value = sumFrequencyF;
    document.getElementById("productSumsF").value = productSumsF;
    document.getElementById("sumProductMidpointFrequencyF").value = sumProductMidpointFrequencyF;
    document.getElementById("squareSumProductMidpointFrequencyF").value = squareSumProductMidpointFrequencyF;
    document.getElementById("differenceF").value = differenceF;
    document.getElementById("sumFrequencyLessF").value = sumFrequencyLessF;
    document.getElementById("productSumFrequencySumFrequencyLessF").value = productSumFrequencySumFrequencyLessF;
    document.getElementById("varianceF").value = varianceF;
    document.getElementById("standardDeviationF").value = standardDeviationF;
    document.getElementById("populationSizeF").value = populationSizeF;
    document.getElementById("populationVarianceF").value = populationVarianceF;
    document.getElementById("populationStandardDeviationF").value = populationStandardDeviationF;
}


/*
    Case 4
    Given: Minimum, Maximum
    To Calculate: Range, Standard Deviation (estimated)
*/
document.getElementById("rangeRuleThumb").addEventListener("submit", rangeRuleThumb);

function rangeRuleThumb(event) 
{
    event.preventDefault();

     var minimumG = parseFloat(document.getElementById("minimumG").value, 10) || 0,
        maximumG = parseFloat(document.getElementById("maximumG").value, 10) || 0,
        rangeG,
        standardDeviationG;
                                
        rangeG = maximumG - minimumG;
        
        standardDeviationG = rangeG / 4;
        
        
    document.getElementById("rangeG").value = rangeG;
    document.getElementById("standardDeviationG").value = standardDeviationG;
}


/*
    Case 5
    Given: Range
    To Calculate: Standard Deviation (estimated)

*/
document.getElementById("rangeRuleOfThumb").addEventListener("submit", rangeRuleOfThumb);

function rangeRuleOfThumb(event) {
    event.preventDefault();

     var rangeH = parseFloat(document.getElementById("rangeH").value, 10) || 0,
         standardDeviationH;
                             
                
        standardDeviationH = rangeH / 4;
        
        
    document.getElementById("standardDeviationH").value = standardDeviationH;
}



/*
Case 6
Given: Assumed Mean, Deviations from the Assumed Mean
To Calculate: Variance, Standard Deviation, Coefficient of Variation
Find the Dataset 
Sort the Dataset
To Calculate: Range
Show all steps
*/
document.getElementById("measuresVariation7").addEventListener("submit", measuresVariation7);

function measuresVariation7(event) 
{
    event.preventDefault();

    var assumedMean2 = parseFloat(document.getElementById("assumedMean2").value, 20),
        deviationsAssumedMean2 = document.getElementById('deviationsAssumedMean2').value,
        deviationsAssumedMeanSplit2 = deviationsAssumedMean2.split(','),
        dataDeviationsAssumedMean2 = deviationsAssumedMeanSplit2.map(Number),
        sampleSize2 = dataDeviationsAssumedMean2.length,
        sumDeviations2 = 0,
        mean2,
        rawData2 = [],
        dataSortDeviationsAssumedMean2 = [],
        minimum2,
        maximum2,
        range2,
        sampleSizeLess2 = sampleSize2 - 1,
        squareDeviations2 = [],
        sumSquareDeviations2 = 0,
        variance2,
        standardDeviation2,
        coefficientVariation2,
        populationSize2 = sampleSize2,
        populationVariance2,
        populationStandardDeviation2,
        populationCoefficientVariation2; 
                        
        for (var i = 0; i < sampleSize2; i++)
        {
            sumDeviations2 += dataDeviationsAssumedMean2[i];
        }

        mean2 = assumedMean2 + (sumDeviations2 / sampleSize2);


        for (var i = 0; i < sampleSize2; i++)
        {
            rawData2[i] = dataDeviationsAssumedMean2[i] + assumedMean2;
        }

        dataSortDeviationsAssumedMean2 = rawData2.sort(function(a, b) {return a - b;});              
                     
        minimum2 = dataSortDeviationsAssumedMean2[0];
        
        maximum2 = dataSortDeviationsAssumedMean2[sampleSize2 - 1];
        
        range2 = maximum2 - minimum2;
     
                               
        for (var i = 0; i < sampleSize2; i++)
        {    
            squareDeviations2[i] = Math.pow(dataDeviationsAssumedMean2[i], 2);

            sumSquareDeviations2 += squareDeviations2[i];
        }

        variance2 = (sumSquareDeviations2 / sampleSizeLess2) - Math.pow((sumDeviations2 / sampleSizeLess2), 2);

        standardDeviation2 = Math.sqrt(variance2);

        populationVariance2 = (sumSquareDeviations2 / populationSize2) - Math.pow((sumDeviations2 / populationSize2), 2);

        populationStandardDeviation2 = Math.sqrt(populationVariance2);

        coefficientVariation2 = (standardDeviation2 / mean2) * 100;

        populationCoefficientVariation2 = (populationStandardDeviation2 / mean2) * 100;
                                   
    document.getElementById("sumDeviations2").value = sumDeviations2;
    document.getElementById("sampleSize2").value = sampleSize2;
    document.getElementById("mean2").value = mean2;
    document.getElementById("sampleSizeLess2").value = sampleSizeLess2;
    document.getElementById("variance2").value = variance2;
    document.getElementById("standardDeviation2").value = standardDeviation2;
    document.getElementById("coefficientVariation2").value = coefficientVariation2;
    document.getElementById("rawData2").value = rawData2.join(", ");
    document.getElementById("sortedData2").value = dataSortDeviationsAssumedMean2.join(", ");
    document.getElementById("minimum2").value = minimum2;
    document.getElementById("maximum2").value = maximum2;
    document.getElementById("range2").value = range2;
    document.getElementById("populationSize2").value = populationSize2;
    document.getElementById("populationVariance2").value = populationVariance2;
    document.getElementById("populationStandardDeviation2").value = populationStandardDeviation2;
    document.getElementById("populationCoefficientVariation2").value = populationCoefficientVariation2;
}