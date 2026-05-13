// Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.expressions-equations.appspot.com/absoluteValueEquations.html
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com
// message 6


var date = new Date();
var day = date.getDate(); 
var dailyMessage = new Array(
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12:30 - 31 ',
        ' "Let everything that has breath praise the LORD! Praise the LORD." - Psalm 150:6 ',
        ' "The glory of this present house will be greater than the glory of the former house, says the LORD Almighty. And in this place, I will grant peace, declares the LORD Almighty." - Haggai 2:9 ',
        ' "For whoever would love life and see good days must keep his tongue from evil and his lips from speaking deceit. He must turn away from evil and do good; he must seek peace and pursue it." - 1 Peter 3:10 - 11 ',
        ' "But, the wisdom from above is pure, filled with peace, is meek and friendly, is filled with love and good fruits, without division, and does not show partiality." - James 3:17 ',
        ' "But thanks be to GOD, who gives us the victory through our LORD, JESUS CHRIST." - 1 Corinthians 15:57 ',
        ' O LORD my GOD, please bless me always with 1 Samuel 2:26 and Luke 2:52. Amen. ',
        ' "For in you, O GOD; we live, and move, and have our being." - Acts 17:28',
        ' "GOD has spoken once; I have heard this twice: \"and I believe it\" that power belongs to GOD." - Psalm 62:11 ',
        ' "Then I said, \"Here I am, it is written about me in the Book of the Law: I have come to do Your will, O GOD.\" " - Psalm 40:7 and Hebrews 10:7 ',
        ' "To \"Samuel Dominic Chukwuemeka (Samdom For Peace)\", my true child in our common faith: Grace and Peace from GOD the FATHER and CHRIST JESUS our SAVIOR. Amen." - Titus 1:4 ',
        ' "But blessed is the man who trusts in the LORD, whose confidence is Him. He will be like a tree planted by the waters that sends out its roots toward the stream. It does not fear when the heat comes, and its leaves are always green. It will not worry in a year of drought or cease producing fruit." - Jeremiah 17:7 - 8 ',
        ' "Therefore if anyone is in CHRIST, he/she is a new creation. The old has passed away. Behold, the new has come." - 2 Corinthians 5:17 ',
        ' "You will have plenty to eat, until you are satisfied. You will praise the name of the LORD your GOD, who has worked wonders for you. My people will never again be put to shame." - Joel 2: 26 ',
        ' "But we see JESUS CHRIST, who was made a little lower than the angels, now crowned with glory and honor because He suffered death, so that by the grace of GOD, He might taste death for everyone. In bringing many sons to glory, it was fitting for GOD, for whom and through whom all things exist, to make the author of their salvation perfect through suffering." - Hebrews 2:9 - 10 ',
        ' "Our FATHER in heaven, hallowed be Thy Name." - Matthew 6:9 ',
        ' "Children are indeed a heritage from the LORD, and the fruit of the womb is His reward." - Psalm 127:3 ',
        ' "Each of you should look not only to your own interests, but also to the interests of others. Let this mind be in you which was also in CHRIST JESUS: who existing in the form of GOD, did not consider equality with GOD, something to be grasped, but emptied Himself, taking the form of a servant, being made in human likeness..." - Philippians 2:4 - 7 ',
        ' "And JESUS CHRIST being found in appearance as a man, He humbled Himself and became obedient to death - even death on a cross. Therefore, GOD exalted Him to the highest place and gave Him the name above all names ..." - Philippians 2:8 - 9 ',
        ' "that at the name of JESUS, every knee should bow, in heaven, and on earth, and under the earth, and every tongue confess that JESUS CHRIST is LORD, to the glory of GOD the FATHER." - Philippians 2:10 - 11 ',
        ' "Give thanks to the LORD; call upon His name; make known His deeds among the nations. Sing to Him, sing praises to Him; tell of all His wonders..." - 1 Chronicles 16:8 - 9 ',
        ' "Glory in His holy name; let the hearts of those who seek the LORD rejoice. Seek out the LORD and His strength; seek His face always." - 1 Chronicles 16:10 - 11 ',
        ' "In GOD we trust" - The United States of America ',
        ' "But, keep away from those godless, worthless stories. Rather, keep yourself in training for a godly life." - 1 Timothy 4:7 ',
        ' "Physical training is good, but training for godliness is much better, promising benefits in this life and in the life to come." - 1 Timothy 4:8 ',
        ' "This is a trustworthy saying, worthy of full acceptance. To this end we labor and strive, because we trust in the Living GOD, who is the savior of all people, especially of those who believe." - 1 Timothy 4:9 - 10 ',
        ' "Command and teach these things. Let no one despise your youth, but set an example for the believers in speech, in conduct, in love, in faith, in purity." - 1 Timothy 4:11 - 12 ',
        ' "Let the peace of JESUS CHRIST rule in your hearts, for to this you were called as members of one body. And be thankful." - Colossians 3:15 ',
        ' "Let the word of JESUS CHRIST richly dwell within you; as you teach and admonish one another with all wisdom; and as you sing psalms, hymns, and spiritual songs with gratitude in your hearts to GOD. "  - Colossians 3:16 ',
        ' "And whatever you do, in word or deed, do it all in the name of the LORD JESUS CHRIST, giving thanks to GOD the FATHER through HIM." - Colossians 3:17 ',
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12: 30 - 31 '
        ); 

var messages6 = dailyMessage[day - 1]; 

document.getElementById('messages6').innerHTML = messages6;



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
