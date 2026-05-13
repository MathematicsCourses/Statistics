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
Case 1
Given: Raw Dataset
Sort the dataset
To Calculate: Five- Number Summary of Dataset, Interquartile Range, Semi-interquartile Range, Midquartile, Lower Fence, Upper Fence
*/

document.getElementById("measuresLocation1").addEventListener("submit", measuresLocation1);

function measuresLocation1(event) 
{
    event.preventDefault();

    var datasetJ = document.getElementById('datasetJ').value,
        datasetSplitJ = datasetJ.split(','),
        dataJ = datasetSplitJ.map(Number),
        sampleSizeJ = dataJ.length,
        dataSortJ = dataJ.sort(function(a, b) {return a-b;}),
        sampleSizeJhalf = sampleSizeJ / 2,                                          // divide sample size in two
        minimumJ,
        lowerQuartileJ,
        middleQuartileJ,
        upperQuartileJ,
        firstPart,                               // first part of the formula used in the calculation of the lower and upper quartiles
        secondPart,                          // second part of the formula used in the calculation of the lower and upper quartiles
        maximumJ,
        interquartileRangeJ,
        semiInterquartileRangeJ,
        midquartileJ,
        lowerFenceJ,
        upperFenceJ,
        outliersJ = [];
        
        minimumJ = parseFloat(dataSortJ[0]);
        
        maximumJ = parseFloat(dataSortJ[sampleSizeJ - 1]);
        
        document.getElementById("sortedDataJ").value = dataSortJ.join(", ");
        document.getElementById("sampleSizeJ").value = sampleSizeJ;
        document.getElementById("minimumJ").value = minimumJ;
        document.getElementById("maximumJ").value = maximumJ;

        // Calculate the middle quartile (median) for all sample sizes (odd and even)
        middleQuartileJ = (dataSortJ[Math.floor((sampleSizeJ - 1)/2)] * 1 + dataSortJ[Math.ceil((sampleSizeJ - 1)/2)] * 1)/2;

        // Used in the calculations of the lower and upper quartiles
        firstPart = Math.floor((sampleSizeJhalf - 1)/2);
        secondPart = Math.ceil((sampleSizeJhalf - 1)/2);

        // Calculate the lower quartile for an even sample size
        if(sampleSizeJ % 2 === 0)           // definition of an even number
        {
            for (var value = 0; value < sampleSizeJhalf; value++)
            {
                lowerQuartileJ = (dataSortJ[firstPart] * 1 + dataSortJ[secondPart] * 1)/2;
            }
        }

        // Calculate the lower quartile for an odd sample size
        if(sampleSizeJ % 2 !== 0)           // definition of an odd number
        {
            lowerQuartileJ = dataSortJ[Math.floor(0.25 * sampleSizeJ)];
        }

        // Calculate the upper quartile for an even sample size
        if(sampleSizeJ % 2 === 0)           // definition of an even number
        {
            var dataSortJreverse = dataJ.sort(function(c, d) {return d-c;});    // sort the data array in descending order
                
            for (var value = 0; value < sampleSizeJhalf; value++)
            {         
                upperQuartileJ = (dataSortJreverse[firstPart] * 1 + dataSortJreverse[secondPart] * 1)/2;
            }
        }

        // Calculate the upper quartile for an odd sample size
        if(sampleSizeJ % 2 !== 0)           // definition of an odd number
        {
            upperQuartileJ = dataSortJ[Math.floor(0.75 * sampleSizeJ)];
        }

    document.getElementById("lowerQuartileJ").value = lowerQuartileJ;
    document.getElementById("middleQuartileJ").value = middleQuartileJ;
    document.getElementById("upperQuartileJ").value = upperQuartileJ;
         
    
        interquartileRangeJ = upperQuartileJ - lowerQuartileJ;
                
        semiInterquartileRangeJ = interquartileRangeJ / 2;
        
        midquartileJ = (lowerQuartileJ + upperQuartileJ) / 2;
        
        lowerFenceJ = lowerQuartileJ - (1.5 * interquartileRangeJ);
        
        upperFenceJ = upperQuartileJ + (1.5 * interquartileRangeJ);
    
    document.getElementById("interquartileRangeJ").value = interquartileRangeJ;
    document.getElementById("semiInterquartileRangeJ").value = semiInterquartileRangeJ;
    document.getElementById("midquartileJ").value = midquartileJ;
    document.getElementById("lowerFenceJ").value = lowerFenceJ;
    document.getElementById("upperFenceJ").value = upperFenceJ; 

    var dataSortedJ = dataJ.sort(function(a, b) {return a-b;});

    for(var i = 0; i < sampleSizeJ; i++)
    {
        if((dataSortedJ[i] < lowerFenceJ) || (dataSortedJ[i] > upperFenceJ))
        {
            outliersJ += dataSortedJ[i] + ", ";
        }
    }

    document.getElementById("outliersJ").value = outliersJ;
}


/*
Case 2
Percentiles (Convert a Data Value to a Percentile)
Given: Raw Dataset
Sort the dataset
To Calculate: Percentile of a Data Value
*/

document.getElementById("percentileDataValue").addEventListener("submit", percentileDataValue);

function percentileDataValue(event) 
{
    event.preventDefault();

    var datasetK = document.getElementById('datasetK').value,
        datasetSplitK = datasetK.split(','),
        dataK = datasetSplitK.map(Number),
        sampleSizeK = dataK.length,
        dataSortK = dataK.sort(function(a, b) {return a-b;}),
        calculatePercentileValueK = parseFloat(document.getElementById("calculatePercentileValueK").value, 10) || 0,
        dataValuesLessK = [],
        sizeDataValuesLessK,
        dataValueK,
        percentileValueK;

        if(dataSortK.includes(calculatePercentileValueK) === false)
        {
            alert("Please make sure the value is included in the dataset.");
            return;
        }

        dataValueK = calculatePercentileValueK;
        
        for(var i = 0; i < sampleSizeK; i++)
        {
            if(dataSortK[i] < calculatePercentileValueK)
            {
                dataValuesLessK[i] = dataSortK[i];
            }
        }
        
        sizeDataValuesLessK = dataValuesLessK.length;
        
        percentileValueK = (sizeDataValuesLessK / sampleSizeK) * 100;

        
    document.getElementById("sortedDataK").value = dataSortK.join(", ");
    document.getElementById("dataValueK").value = dataValueK;
    document.getElementById("dataValuesLessK").value = dataValuesLessK.join(", ");
    document.getElementById("sizeDataValuesLessK").value = sizeDataValuesLessK;
    document.getElementById("sampleSizeK").value = sampleSizeK;
    document.getElementById("percentileValueK").value = percentileValueK;
}


/*
Case 3
Percentiles (Convert a Percentile to a Data Value)
Given: Raw Dataset
Sort the dataset
To Calculate: nth Percentile
*/

document.getElementById("dataValuePercentile").addEventListener("submit", dataValuePercentile);

function dataValuePercentile(event) 
{
    event.preventDefault();

    var datasetL = document.getElementById('datasetL').value,
        datasetSplitL = datasetL.split(','),
        dataL = datasetSplitL.map(Number),
        sampleSizeL = dataL.length,
        dataSortL = dataL.sort(function(a, b) {return a-b;}),
        calculatePercentileL = parseFloat(document.getElementById("calculatePercentileL").value, 10) || 0,
        positionL,
        newPositionL,
        nextPositionL,
        valueNextPositionL;               

        if((calculatePercentileL <= 0) || (calculatePercentileL >= 100))
        {
            alert("The percentile must be a positive number less than 100.\nPlease review.");
            return;
        }

        document.getElementById("sortedDataL").value = dataSortL.join(", ");
        document.getElementById("sampleSizeL").value = sampleSizeL;

        positionL = (calculatePercentileL * sampleSizeL) / 100; 

        
        document.getElementById("positionL").value = positionL;

        // If the position is not an integer
        if(Number.isInteger(positionL) == false)
        {
            nextPositionL = "N/A";
            valueNextPositionL = "N/A";
            document.getElementById("nextPositionL").value = nextPositionL;
            document.getElementById("valueNextPositionL").value = valueNextPositionL;

            newPositionL = Math.ceil(positionL);
            document.getElementById("valuePositionL").value = dataSortL[newPositionL - 1];
            document.getElementById("valuePercentileL").value = dataSortL[newPositionL - 1];
        }

        // If the position is an integer
        if(Number.isInteger(positionL) == true)
        {
            nextPositionL = positionL + 1;
            valueNextPositionL = dataSortL[positionL];
            document.getElementById("nextPositionL").value = nextPositionL;
            document.getElementById("valueNextPositionL").value = valueNextPositionL;

            document.getElementById("valuePositionL").value = dataSortL[positionL - 1];
            document.getElementById("valuePercentileL").value = (dataSortL[positionL - 1] + dataSortL[positionL]) / 2;
        }     
}


/*
Case 4 
Given: Variable, Mean, Standard Deviation
To Calculate: Standard Score; tell whether a data value is usual or unusual
*/
document.getElementById("standardScore").addEventListener("submit", standardScore);

function standardScore(event) 
{
    event.preventDefault();
    event.stopPropagation();

    var dataValueM = parseFloat(document.getElementById("dataValueM").value, 10) || 0,
        meanM = parseFloat(document.getElementById("meanM").value, 10) || 0,
        standardDeviationM = parseFloat(document.getElementById("standardDeviationM").value, 10) || 0,
        zScoreM,
        differenceVariableMeanM,
        differenceSDM,
        messageM;
        
    
        zScoreM = (dataValueM - meanM) / standardDeviationM;
        
        differenceVariableMeanM = dataValueM - meanM;
        
        differenceSDM = differenceVariableMeanM / standardDeviationM;
        
        if((zScoreM < -2) || (zScoreM > 2))
        {
            messageM = "The data value is unusual";
        }
        else 
        {
            messageM = "The data value is usual";
        }
        
    
    document.getElementById("differenceVariableMeanM").value = differenceVariableMeanM;
    document.getElementById("differenceSDM").value = differenceSDM;
    document.getElementById("zScoreM").value = zScoreM;
    document.getElementById("messageM").value = messageM;
}



/*
Case 5
Given: Mean, Standard Deviation
To Calculate: the boundaries of usual and unusual data values
*/
document.getElementById("boundaryValues").addEventListener("submit", boundaryValues);

function boundaryValues(event) {
    event.preventDefault();

    var meanN = parseFloat(document.getElementById("meanN").value, 10) || 0,
        standardDeviationN = parseFloat(document.getElementById("standardDeviationN").value, 10) || 0,
        lowerBoundaryN,
        upperBoundaryN,
        messageN;
        
    
        lowerBoundaryN = (-2 * standardDeviationN) + meanN;
        
        upperBoundaryN = (2 * standardDeviationN) + meanN;
        
    messageN = "Values lower than " + lowerBoundaryN + " are unusual <br>";
    messageN += "Values greater than " + upperBoundaryN + " are unusual <br>";
    messageN += "The usual data values are between " + lowerBoundaryN + " and " + upperBoundaryN;
        
       
    document.getElementById("lowerBoundaryN").value = lowerBoundaryN;
    document.getElementById("upperBoundaryN").value = upperBoundaryN;
    document.getElementById("messageN").innerHTML = messageN;
}