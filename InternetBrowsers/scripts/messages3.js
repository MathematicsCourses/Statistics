// Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.expressions-equations.appspot.com/factoring.html
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com
// message 3


var date = new Date();
var day = date.getDate(); 

var dailyMessage = new Array(
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12: 30 - 31 ',
        ' "Worship the LORD your GOD, and His blessing will be on your food and water." - Exodus 23:25 ',
        ' "JESUS CHRIST answered, It is written: \"Man shall not live on bread alone, but on every word that comes from the mouth of GOD.\""  - Matthew 4:4',
        ' "Show us your steadfast love, O LORD; and grant us your salvation." - Psalm 85:7 ',
        ' "For I am confident of this: that He who began a good work in you will continue to perfect it until the day of JESUS CHRIST." - Philippians 1:6 ',
        ' "Yet, I will exult in the LORD; I will rejoice in GOD, my savior. " - Habakkuk 3:18 ',
        ' O LORD my GOD, please bless me always with 1 Samuel 2:26 and Luke 2:52. Amen. ',
        ' "Let us fix our eyes on JESUS CHRIST, the author and perfecter of our faith, who for the joy set before Him; endured the cross, scorning its shame, and sat down at the right hand of the throne of GOD." - Hebrews 12: 2 ',
        ' "One thing I have asked of the LORD, this is what I seek most: that I live in the house of the LORD all the days of my life, to gaze on the beauty of my GOD, and seek Him in His temple." - Psalm 27:4 ',
        ' "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. Against such things, there is no law." - Galatians 5:22 - 23 ',
        ' "Finally, my brothers and sisters; whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable - if anything is excellent or praiseworthy, think on these things." - Philippians 4:8 ',
        ' "Now to Him who is able to do exceedingly more than we ask or imagine, according to His power that is at work within us; to Him be the glory in the church, and in JESUS CHRIST throughout all generations forever and ever. Amen." - Ephesians 3:20 - 21 ',
        ' In GOD we trust. - The United States of America ',
        ' "Therefore, my dear brothers and sisters; stand firm. Let nothing move you. Always give yourselves fully to the work of the LORD, because you know that your labor in the LORD is not in vain." - 1 Corinthians 15:58 ',
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12: 30 - 31 ',
        ' "Let everything that has breath praise the LORD! Praise the LORD." - Psalm 150:6 ',
        ' "But, thanks be to GOD who always leads us to triumph in JESUS CHRIST and makes manifest through us in every place, the fragrance of the knowledge of Him." - 2 Corinthians 2:14 ',
        ' "Our FATHER in heaven, hallowed be Thy Name." - Matthew 6:9 ',
        ' "But by the grace of GOD, I am what I am; and His grace to me was not in vain." - 1 Corinthians 15:10 ',
        ' "Blessed be the name of GOD forever and ever, for \'all\' wisdom and \'all\' power belong to Him." - Daniel 2:20 ',
        ' "Speak to one another with psalms, hymns, and spiritual songs. Sing and make music in your hearts to the LORD, always giving thanks to GOD the FATHER for everything in the Name of our LORD JESUS CHRIST." - Ephesians 5:19 - 20 ',
        ' "For you know the grace of our LORD JESUS CHRIST; that though He was rich, yet for our sake, He became poor; so that through His poverty, we might become rich. " - 2 Corinthians 8:9 ',
        ' "Blessed are those who hunger and thirst for righteousness, for they will be filled." - Matthew 5:6 ',
        ' "Give, and it will be given to you. A good measure, pressed down, shaken together, and running over will be poured into your lap. For with the measure you use, it will be measured back to you." - Luke 6:38 ',
        ' "No one has ever seen GOD; but if we love one another, GOD remains in us, and His love is perfected in us." - 1st John 4:12 ',
        ' "Now faith is the assurance of what we hope for, and the certainty of what we do not see." - Hebrews 11:1 ',
        ' "Bless the LORD, o my soul; and all that is within me bless His Holy Name." - Psalm 103:1 ',
        ' "Trust in the LORD with all heart, and lean not on your own understanding, in all your ways, acknowledge Him; and He will make your paths straight." - Proverbs 3:5 - 6 ',
        ' "How beautiful on the mountains are the feet of those who bring good news, who proclaim peace, who bring good tidings, who proclaim salvation, who say to Zion, \"Your GOD reigns!\"" - Isaiah 52:7 ',
        ' "When all has been heard, the conclusion of the matter is this: Fear GOD and keep His commandments, because this is the whole duty of man. - Ecclesiastes 12:13 ',
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12: 30 - 31 '
        );  

var messages3 = dailyMessage[day - 1]; 

document.getElementById('messages3').innerHTML = messages3;


var presentDate,
    presentHour,
    greeting;

presentDate = new Date();
presentDate.getDate();

presentHour = presentDate.getHours();


if (presentHour < 12) {
    greeting = "Good morning.";
} else if (presentHour >= 12 && presentHour < 16) {
    greeting = "Good afternoon.";
} else if (presentHour >= 16 && presentHour <= 24) {
    greeting = "Good evening.";
}

document.getElementById("greetings").innerHTML = greeting;


// Solutions to the Questions
function solutions(solution) {
    var e = document.getElementById(solution);
    if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
    else e.style.display = 'block';
}

// Answers to the Questions
function answers(answer) {
    var e = document.getElementById(answer);
    if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
    else e.style.display = 'block';
}