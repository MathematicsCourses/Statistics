/*
    Copyright 2021 - Samuel Dominic Chukwuemeka (SamDom For Peace)
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
To Calculate: Mean, Median, Mode, Midrange
Show all steps
*/
document.getElementById("measuresCentralTendency").addEventListener("submit", measuresCentralTendency);

function measuresCentralTendency(event) 
{
    event.preventDefault();

    var datasetX = document.getElementById('datasetX').value,
        datasetSplitX = datasetX.split('\n'),
        dataX = datasetSplitX.map(Number),
        sampleSizeX = dataX.length,
        sumX = 0,
        meanX,
        dataSortX = dataX.sort(function(a, b) {return a - b;}),
        medianX,
        modeX,
        minimumX,
        maximumX,
        midrangeX;
                        
        for (var i = 0; i < sampleSizeX; i++)
        {
            sumX += dataX[i];
            meanX = sumX / sampleSizeX;
        }
        
        medianX = (dataSortX[Math.floor((sampleSizeX - 1)/2)] * 1 + dataSortX[Math.ceil((sampleSizeX - 1)/2)] * 1)/2;

        
        // Declare the variables that is used in calculating the mode of the dataset
        var count,
        frequency = 0,  // Initialize it 
        first, 
        second,
        value = " ";    // Initialize it
        
        for (first = 0; first < sampleSizeX; first++) 
        {
            count = 0;
            for(second = 0; second < sampleSizeX; second++)
            {
                if(dataX[first] === dataX[second])
                {
                    count += 1;
                }
            }
            if(count > frequency)
            {
                frequency = count;
                value = dataX[first].toString();
            }
            if((count === frequency) && !value.includes(dataX[first].toString()))
            {
                frequency = count;
                value += ", " + dataX[first];
            }
        }

        modeX = value;
                     
        minimumX = dataSortX[0];
        
        maximumX = dataSortX[sampleSizeX - 1];
        
        midrangeX = (minimumX + maximumX) / 2;
                                   
    document.getElementById("sumDataX").value = sumX;
    document.getElementById("sampleSizeX").value = sampleSizeX;
    document.getElementById("meanX").value = meanX;
    document.getElementById("sortedDataX").value = dataSortX.join("\n");
    document.getElementById("medianX").value = medianX;
    document.getElementById("modeX").value = modeX;
    document.getElementById("minimumX").value = minimumX;
    document.getElementById("maximumX").value = maximumX;
    document.getElementById("midrangeX").value = midrangeX;
}


/*
Case 2
Given: Ungrouped Dataset and Frequency 
To Calculate: Mean, Median, Mode, Midrange
Show all steps
*/
document.getElementById("averageUngroupedDataset").addEventListener("submit", averageUngroupedDataset);

function averageUngroupedDataset(event) 
{
    event.preventDefault();

    var datasetXU = document.getElementById('datasetXU').value,
        datasetSplitXU = datasetXU.split('\n'),
        dataXU = datasetSplitXU.map(Number),
        frequency1XU = document.getElementById('frequency1XU').value,
        frequencySplitXU = frequency1XU.split('\n'),
        frequencyXU = frequencySplitXU.map(Number),
        sampleSizeXU = dataXU.length,
        frequencySizeXU = frequencyXU.length,
        productVariableFrequencyXU = [],
        summationProductVariableFrequencyXU = 0,
        summationFrequencyXU = 0,
        meanXU;
        

        if(sampleSizeXU !== frequencySizeXU)
        {
            alert("The size of the dataset must be equal to the size of the frequency.\nPlease review.");
            return;
        }
                               
        for (var i = 0; i < sampleSizeXU, i < frequencySizeXU; i++)
        {
            productVariableFrequencyXU[i] = dataXU[i] * frequencyXU[i];
            summationProductVariableFrequencyXU += productVariableFrequencyXU[i];
            summationFrequencyXU += frequencyXU[i];
            meanXU = summationProductVariableFrequencyXU / summationFrequencyXU;
        }

        /*
        var expandData1XU = [],
        expandDataXU = [];

        for (var i = 0; i < sampleSizeXU, i < frequencySizeXU; i++)
        {
            expandData1XU[i] = Array(frequencyXU[i]).fill(dataXU[i]);
        }
           
        expandDataXU = expandData1XU;
        
        var sampleSizeExpandedDataXU = expandDataXU.length,
        dataSortXU = expandDataXU.sort(function(a, b) {return a - b;}),
        minimumXU = dataSortXU[0],
        maximumXU = dataSortXU[sampleSizeExpandedDataXU - 1],
        midrangeXU = (minimumXU + maximumXU) / 2,
        medianXU,
        modeXU;

        medianXU = (dataSortXU[Math.floor((sampleSizeExpandedDataXU - 1)/2)] * 1 + dataSortXU[Math.ceil((sampleSizeExpandedDataXU - 1)/2)] * 1)/2;

        // Declare the variables that is used in calculating the mode of the expanded dataset
        var countExpanded,
        frequencyExpanded = 0,  // Initialize it 
        firstExpanded, 
        secondExpanded,
        valueExpanded = " ";    // Initialize it
        
        for (firstExpanded = 0; firstExpanded < sampleSizeExpandedDataXU; firstExpanded++) 
        {
            countExpanded = 0;
            for(secondExpanded = 0; secondExpanded < sampleSizeExpandedDataXU; secondExpanded++)
            {
                if(expandDataXU[firstExpanded] === expandDataXU[secondExpanded])
                {
                    countExpanded += 1;
                }
            }
            if(countExpanded > frequencyExpanded)
            {
                frequencyExpanded = countExpanded;
                valueExpanded = expandDataXU[firstExpanded].toString();
            }
            if((countExpanded === frequencyExpanded) && !valueExpanded.includes(expandDataXU[firstExpanded].toString()))
            {
                frequencyExpanded = countExpanded;
                valueExpanded += ", " + expandDataXU[firstExpanded];
            }
        }

        modeXU = valueExpanded;
        
        */
                                   
    document.getElementById("productVariableFrequencyXU").value = productVariableFrequencyXU.join("\n");
    document.getElementById("summationProductVariableFrequencyXU").value = summationProductVariableFrequencyXU;
    document.getElementById("summationFrequencyXU").value = summationFrequencyXU;
    document.getElementById("meanXU").value = meanXU;
    //document.getElementById("expandDataXU").value = dataSortXU;
    //document.getElementById("medianXU").value = sampleSizeExpandedDataXU;
    //document.getElementById("modeXU").value = modeXU;
    //document.getElementById("midrangeXU").value = midrangeXU;
}



/*
Case 3
Given: Grouped Dataset (Lower Class Limit and Upper Class Limit) and Frequency
To Calculate: Mean
Show all steps
*/
document.getElementById("averageGroupedDataset").addEventListener("submit", averageGroupedDataset);

function averageGroupedDataset(event) 
{
    event.preventDefault();

    var datasetXGlower = document.getElementById('datasetXGlower').value,
        datasetXGupper = document.getElementById('datasetXGupper').value,
        frequency1XG = document.getElementById('frequency1XG').value,
        datasetSplitXGlower = datasetXGlower.split('\n'),
        dataXGlower = datasetSplitXGlower.map(Number), 
        datasetSplitXGupper = datasetXGupper.split('\n'),
        dataXGupper = datasetSplitXGupper.map(Number),
        frequencySplitXG = frequency1XG.split('\n'),
        frequencyXG = frequencySplitXG.map(Number),
        sampleSizeXGlower = dataXGlower.length,
        sampleSizeXGupper = dataXGupper.length,
        frequencySizeXG = frequencyXG.length,
        midpointXG = [],
        productMidpointFrequencyXG = [],
        summationProductMidpointFrequencyXG = 0,
        summationFrequencyXG = 0,
        meanXG;
        
        if((sampleSizeXGlower !== sampleSizeXGupper) || (sampleSizeXGlower !== frequencySizeXG) || (sampleSizeXGupper !== frequencySizeXG))
        {
            alert("All sizes (size of the lower limit, size of the upper limit, and size of the frequency) must be equal.\nPlease review.");
            return;
        }
                       
        for (var i=0; i < sampleSizeXGlower, i < sampleSizeXGupper, i < frequencySizeXG; i++)
        {
           midpointXG[i] = (dataXGlower[i] + dataXGupper[i]) / 2;
           productMidpointFrequencyXG[i] = midpointXG[i] * frequencyXG[i];
           summationProductMidpointFrequencyXG += productMidpointFrequencyXG[i];
           summationFrequencyXG += frequencyXG[i];
           meanXG = summationProductMidpointFrequencyXG / summationFrequencyXG;    
        }
                           
    document.getElementById("midpointXG").value = midpointXG.join("\n");
    document.getElementById("productMidpointFrequencyXG").value = productMidpointFrequencyXG.join("\n");
    document.getElementById("summationProductMidpointFrequencyXG").value = summationProductMidpointFrequencyXG;
    document.getElementById("summationFrequencyXG").value = summationFrequencyXG;
    document.getElementById("meanXG").value = meanXG;
}


/*
Case 4
Given: Grouped Dataset (Lower Class Limit and Upper Class Limit), Frequency, and Assumed Mean
To Calculate: Mean
Show all steps
*/
document.getElementById("meanGroupedDataset").addEventListener("submit", meanGroupedDataset);

function meanGroupedDataset(event) 
{
    event.preventDefault();

    var assumedMeanXGAM = parseFloat(document.getElementById("assumedMeanXGAM").value, 10) || 0,
        datasetXGAMlower = document.getElementById('datasetXGAMlower').value,
        datasetXGAMupper = document.getElementById('datasetXGAMupper').value,
        frequency1XGAM = document.getElementById('frequency1XGAM').value,
        datasetSplitXGAMlower = datasetXGAMlower.split('\n'),
        dataXGAMlower = datasetSplitXGAMlower.map(Number), 
        datasetSplitXGAMupper = datasetXGAMupper.split('\n'),
        dataXGAMupper = datasetSplitXGAMupper.map(Number),
        frequencySplitXGAM = frequency1XGAM.split('\n'),
        frequencyXGAM = frequencySplitXGAM.map(Number),
        sampleSizeXGAMlower = dataXGAMlower.length,
        sampleSizeXGAMupper = dataXGAMupper.length,
        frequencySizeXGAM = frequencyXGAM.length,
        midpointXGAM = [],
        deviationXGAM = [],
        productFrequencyDeviationXGAM = [],
        summationProductFrequencyDeviationXGAM = 0,
        summationFrequencyXGAM = 0,
        meanXGAM;
        
        if((sampleSizeXGAMlower !== sampleSizeXGAMupper) || (sampleSizeXGAMlower !== frequencySizeXGAM) || (sampleSizeXGAMupper !== frequencySizeXGAM))
        {
            alert("All sizes (size of the lower limit, size of the upper limit, and size of the frequency) must be equal.\nPlease review.");
            return;
        }
                       
        for (var i=0; i < sampleSizeXGAMlower, i < sampleSizeXGAMupper, i < frequencySizeXGAM; i++)
        {
           midpointXGAM[i] = (dataXGAMlower[i] + dataXGAMupper[i]) / 2;
           deviationXGAM[i] = midpointXGAM[i] - assumedMeanXGAM;
           productFrequencyDeviationXGAM[i] = frequencyXGAM[i] * deviationXGAM[i];
           summationProductFrequencyDeviationXGAM += productFrequencyDeviationXGAM[i];
           summationFrequencyXGAM += frequencyXGAM[i];
           meanXGAM = assumedMeanXGAM + (summationProductFrequencyDeviationXGAM / summationFrequencyXGAM);    
        }
                           
    document.getElementById("midpointXGAM").value = midpointXGAM.join("\n");
    document.getElementById("deviationXGAM").value = deviationXGAM.join("\n");
    document.getElementById("productFrequencyDeviationXGAM").value = productFrequencyDeviationXGAM.join("\n");
    document.getElementById("summationProductFrequencyDeviationXGAM").value = summationProductFrequencyDeviationXGAM;
    document.getElementById("summationFrequencyXGAM").value = summationFrequencyXGAM;
    document.getElementById("meanXGAM").value = meanXGAM;
}


/*
Case 5
Given: Raw Dataset and Trim Percent
Sort the dataset
To Calculate: Trimmed Mean
Show all steps
*/
document.getElementById("trimmedMeanUngroupedDataset").addEventListener("submit", trimmedMeanUngroupedDataset);

function trimmedMeanUngroupedDataset(event) 
{
    event.preventDefault();

    var percentTrim = parseFloat(document.getElementById("percentTrim").value, 10),
        datasetT = document.getElementById('datasetT').value,
        datasetSplitT = datasetT.split('\n'),
        dataT = datasetSplitT.map(Number),
        dataSortT = dataT.sort(function(a, b) {return a - b;}),
        sampleSizeT = dataT.length,
        numberTrim,
        trimmedData = [],
        sumTrimmedData = 0,
        sampleSizeTrimmedData,
        trimmedMean;

        if(percentTrim == 0)
        {
            alert("Trimming 0% is the same as not trimming anything.\nPlease use Case 1");
            return;
        }

        if(percentTrim >= 100)
        {
            alert("The percent to trim cannot be greater than or equal to 100%");
            return;
        }

        if(percentTrim < 0)
        {
            alert("The percent to trim cannot be less than 0%");
            return;
        }

        numberTrim = Math.floor((percentTrim / 100) * sampleSizeT);

        trimmedData = dataSortT.slice(numberTrim, sampleSizeT - numberTrim);

        sampleSizeTrimmedData = trimmedData.length;
                        
        for (var i = 0; i < sampleSizeTrimmedData; i++)
        {
            sumTrimmedData += trimmedData[i];
            trimmedMean = sumTrimmedData / sampleSizeTrimmedData;
        }
                                           

    document.getElementById("sortedDataT").value = dataSortT.join("\n");
    document.getElementById("numberTrim").value = numberTrim;
    document.getElementById("trimmedData").value = trimmedData.join("\n");
    document.getElementById("sumTrimmedData").value = sumTrimmedData;
    document.getElementById("sampleSizeTrimmedData").value = sampleSizeTrimmedData;
    document.getElementById("trimmedMean").value = trimmedMean;
}


/*
Case 6
Given: Assumed Mean, Deviations from the Assumed Mean
To Calculate: Mean
Find the Dataset 
Sort the Dataset
To Calculate: Median, Mode, Midrange
Show all steps
*/
document.getElementById("assumedMeanDeviations").addEventListener("submit", assumedMeanDeviations);

function assumedMeanDeviations(event) 
{
    event.preventDefault();

    var assumedMean1 = parseFloat(document.getElementById("assumedMean1").value, 10),
        deviationsAssumedMean1 = document.getElementById('deviationsAssumedMean1').value,
        deviationsAssumedMeanSplit1 = deviationsAssumedMean1.split('\n'),
        dataDeviationsAssumedMean1 = deviationsAssumedMeanSplit1.map(Number),
        sampleSize1 = dataDeviationsAssumedMean1.length,
        sumDeviations1 = 0,
        mean1,
        rawData1 = [],
        dataSortDeviationsAssumedMean1 = [],
        median1,
        mode1,
        minimum1,
        maximum1,
        midrange1;
                        
        for (var i = 0; i < sampleSize1; i++)
        {
            sumDeviations1 += dataDeviationsAssumedMean1[i];
        }

        mean1 = assumedMean1 + (sumDeviations1 / sampleSize1);

        for(var i = 0; i < sampleSize1; i++)
        {
            rawData1[i] = dataDeviationsAssumedMean1[i] + assumedMean1;
        }

        dataSortDeviationsAssumedMean1 = rawData1.sort(function(a, b) {return a - b;});
        
        median1 = ( dataSortDeviationsAssumedMean1[Math.floor((sampleSize1 - 1)/2)] * 1 +  dataSortDeviationsAssumedMean1[Math.ceil((sampleSize1 - 1)/2)] * 1)/2;

        
        // Declare the variables that is used in calculating the mode of the dataset
        var count1,
        frequency1 = 0,  // Initialize it 
        first1, 
        second1,
        value1 = " ";    // Initialize it
        
        for (first1 = 0; first1 < sampleSize1; first1++) 
        {
            count1 = 0;
            for(second1 = 0; second1 < sampleSize1; second1++)
            {
                if(rawData1[first1] === rawData1[second1])
                {
                    count1 += 1;
                }
            }
            if(count1 > frequency1)
            {
                frequency1 = count1;
                value1 = rawData1[first1].toString();
            }
            if((count1 === frequency1) && !value1.includes(rawData1[first1].toString()))
            {
                frequency1 = count1;
                value1 += ", " + rawData1[first1];
            }
        }

        mode1 = value1;
                     
        minimum1 = dataSortDeviationsAssumedMean1[0];
        
        maximum1 = dataSortDeviationsAssumedMean1[sampleSize1 - 1];
        
        midrange1 = (minimum1 + maximum1) / 2;
                                   
    document.getElementById("sumDeviations1").value = sumDeviations1;
    document.getElementById("sampleSize1").value = sampleSize1;
    document.getElementById("mean1").value = mean1;
    document.getElementById("rawData1").value = rawData1.join("\n");
    document.getElementById("sortedData1").value = dataSortDeviationsAssumedMean1.join("\n");
    document.getElementById("median1").value = median1;
    document.getElementById("mode1").value = mode1;
    document.getElementById("minimum1").value = minimum1;
    document.getElementById("maximum1").value = maximum1;
    document.getElementById("midrange1").value = midrange1;
}


/*
Case 7
Given: Raw Dataset
To Calculate: Geometric Mean
Show all steps
*/
document.getElementById("geometricMeanUngroupedDataset").addEventListener("submit", geometricMeanUngroupedDataset);

function geometricMeanUngroupedDataset(event) 
{
    event.preventDefault();

    var datasetG = document.getElementById('datasetG').value,
        datasetSplitG = datasetG.split('\n'),
        dataG = datasetSplitG.map(Number),
        sampleSizeDataG = dataG.length,
        productDataG = 1,
        geometricMean;
                                
        for (var i = 0; i < sampleSizeDataG; i++)
        {
            productDataG *= dataG[i];
            geometricMean = Math.pow(productDataG, (1/sampleSizeDataG));

            if(Number.isNaN(geometricMean))
            {
                alert("To calculate the geometric mean:\nPlease enter only positive numbers.");
                return;
            }
        }       
                
        document.getElementById("productDataG").value = productDataG;
        document.getElementById("sampleSizeDataG").value = sampleSizeDataG;
        document.getElementById("geometricMean").value = geometricMean;    
}