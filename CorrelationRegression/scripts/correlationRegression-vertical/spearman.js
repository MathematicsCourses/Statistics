/*
    Copyright 2022 - Samuel Dominic Chukwuemeka (Samdom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    www.chukwuemeka-samuel.appspot.com
    www.samdomforpeace.appspot.com
    www.correlationandregression.appspot.com/correlationRegressionCalculators-vertical
*/



/*
    Case 1 
    Given: Datasets X and Y 
    To Calculate: Spearman correlation coefficient, Interpret Spearman's correlation coefficient 
    Show all steps
*/

document.getElementById("spearman1").addEventListener("submit", spearman1);

function spearman1(event) 
{
    event.preventDefault();

    var datasetXG = document.getElementById('datasetXG').value,
        datasetYG = document.getElementById('datasetYG').value,
        datasetSplitXG = datasetXG.split('\n'),
        datasetSplitYG = datasetYG.split('\n'),
        dataset1XG = datasetSplitXG.map(Number),
        dataset1YG = datasetSplitYG.map(Number),
        dataXG = datasetSplitXG.map(Number),
        dataYG = datasetSplitYG.map(Number),
        sampleSizeXG = dataXG.length,
        sampleSizeYG = dataYG.length,
        datasetSortedXG = dataXG.slice().sort(function (a, b) { return a - b; }),
        datasetSortedYG = dataYG.slice().sort(function (c, d) { return c - d; }),
        rankSortedXG = [],
        rankSortedYG = [],
        rankXG = [],
        rankYG = [],
        rank1XG = [],
        rank1YG = [],
        rank2XG = [],
        rank2YG = [],
        differenceG = [],
        squareDifferenceG = [],
        sumSquareDifferenceG = 0,
        numeratorG,
        denominatorG,
        correlationCoefficientG;

    if (sampleSizeXG !== sampleSizeYG) 
    {
        alert("The two sample sizes must be the same.\nIn other words, the sample size of dataset X must be equal to the sample size of dataset Y\nPlease review.");
        return;
    }

    document.getElementById("dataset1XG").value = dataset1XG.join("\n");
    document.getElementById("dataset1YG").value = dataset1YG.join("\n");

    document.getElementById("datasetSortedXG").value = datasetSortedXG.join("\n");
    document.getElementById("datasetSortedYG").value = datasetSortedYG.join("\n");

    for (var i = 0; i < sampleSizeXG, i < sampleSizeYG; i++) 
    {
        rankSortedXG[i] = i + 1;
        rankSortedYG[i] = i + 1;
    }

    document.getElementById("rankSortedXG").value = rankSortedXG.join("\n");
    document.getElementById("rankSortedYG").value = rankSortedYG.join("\n");

    rankXG = dataXG.map(function(j){return datasetSortedXG.indexOf(j) + 1});

    rank1XG = rankXG;

    rank2XG = rankXG;

    rankYG = dataYG.map(function(k){return datasetSortedYG.indexOf(k) + 1});

    rank1YG = rankYG;

    rank2YG = rankYG;

    document.getElementById("rank1XG").value = rank1XG.join("\n");
    document.getElementById("rank1YG").value = rank1YG.join("\n");
    
    document.getElementById("rank2XG").value = rank2XG.join("\n");
    document.getElementById("rank2YG").value = rank2YG.join("\n");

    for(var i = 0; i < sampleSizeXG, i < sampleSizeYG; i++)
    {
        differenceG[i] = rankXG[i] - rankYG[i];

        squareDifferenceG[i] = Math.pow(differenceG[i], 2);

        sumSquareDifferenceG += squareDifferenceG[i];
    }
    
    document.getElementById("differenceG").value = differenceG.join("\n");
    document.getElementById("squareDifferenceG").value = squareDifferenceG.join("\n");

    document.getElementById("sumSquareDifferenceG").value = sumSquareDifferenceG;

    numeratorG = 6 * sumSquareDifferenceG;

    denominatorG = sampleSizeXG * (Math.pow(sampleSizeXG, 2) - 1);

    correlationCoefficientG = 1 - (numeratorG / denominatorG);    

    document.getElementById("correlationCoefficientG").value = correlationCoefficientG;
}