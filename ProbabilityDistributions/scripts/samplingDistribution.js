// Copyright 2016 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com
// www.probability-distribution.appspot.com

"use strict";


// Sampling Distribution Calculations


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



document.getElementById("samplingDistributionSampleProportion").addEventListener("submit", samplingDistributionSampleProportion);

function samplingDistributionSampleProportion(event) {
   event.preventDefault();
   event.stopPropagation();
  

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


