// Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.expressions-equations.appspot.com/quadraticEquations.html
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com
// message 5


var date = new Date();
var day = date.getDate(); 
var dailyMessage = new Array(
        ' "Our FATHER in heaven, hallowed be Thy Name." - Matthew 6:9 ',
        ' "JESUS CHRIST is the faithful witness, the firstborn from the dead, and the ruler of the kings of the earth. To Him who loves us and has freed us from our sins by HIS blood, who has made us to be a kingdom, priests to HIS GOD and FATHER - to Him be the glory and power forever and ever!. Amen." - Revelation 1:5 - 6 ',
        ' "And because we are the children of GOD, GOD has sent the SPIRIT of His SON into our hearts, crying out, \"Abba, FATHER!\" " - Galatians 4:6 ',
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12:30 - 31 ',
        ' "Where there is love, there is no fear. Perfect love casts out fear because fear involves punishment. The person who lives in fear does not have perfect love." - 1 John 4:18 ',
        ' "\"I am the Alpha and the Omega\", says the LORD GOD; the One who is, who was, and who is to come, the Almighty." - Revelation 1:8 ',
        ' O LORD my GOD, please bless me always with 1 Samuel 2:26 and Luke 2:52. Amen. ',
        ' "For the eyes of the LORD are on the righteous, and HIS ears are inclined to their prayer. But, the face of the LORD is against those who do evil." - 1 Peter 3:12 ',
        ' "saying, Amen! Blessing and glory and wisdom and thanksgiving and honor and power and strength to our GOD forever and ever! Amen." - Revelation 7:12 ',
        ' "From yesterday: I am adding my own to it: saying, Amen! Blessing and glory and wisdom and thanksgiving and honor and power and strength and majesty and praise and worship and adoration and exaltation and eternity to our GOD forever and ever! Amen." - Revelation 7:12 and Samuel Chukwuemeka additions. ',
        ' "Let no unwholesome talk come out of your mouths, but only what is helpful for building up the one in need and bringing grace to those who listen." - Ephesians 4:29 ',
        ' "Bless the LORD, all you works of the LORD; Praise and exalt Him above all forever." - Canticle of the Three Youths ',
        ' "Angels of the LORD, bless the LORD; You heavens, bless the LORD; All you waters above the heavens, bless the LORD." - Canticle of the Three Youths ',
        ' "All you hosts of the LORD; bless the LORD." - Canticle of the Three Youths ',
        ' "Sun and moon, bless the LORD; Stars of heaven, bless the LORD." - Canticle of the Three Youths ',
        ' "Every shower and dew, bless the LORD; All you winds, bless the LORD." - Canticle of the Three Youths ',
        ' "Fire and heat, bless the LORD; Cold and chill, bless the LORD." - Canticle of the Three Youths ',
        ' "Dew and rain, bless the LORD; Frost and cold, bless the LORD." - Canticle of the Three Youths ',
        ' "Ice and snow, bless the LORD; Nights and days, bless the LORD." - Canticle of the Three Youths ',
        ' "Light and darkness, bless the LORD; Lightning and clouds, bless the LORD." - Canticle of the Three Youths ',
        ' "Let the earth bless the LORD; Praise and exalt Him above all forever." - Canticle of the Three Youths ',
        ' "Mountains and hills, bless the LORD; Everything growing from the earth, bless the LORD." - Canticle of the Three Youths ',
        ' "You springs, bless the LORD; Seas and rivers, bless the LORD." - Canticle of the Three Youths ',
        ' "You dolphins and all water creatures, bless the LORD; All you birds of the air, bless the LORD."  - Canticle of the Three Youths ',
        ' "All you beasts, wild and tame, bless the LORD; Praise and exalt Him above all forever." - Canticle of the Three Youths ',
        ' "You sons of men, bless the LORD; O Israel, bless the LORD." - Canticle of the Three Youths ',
        ' "Priests of the LORD, bless the LORD; Servants of the LORD, bless the LORD." - Canticle of the Three Youths ',
        ' "Spirits and souls of the just, bless the LORD; Holy men of humble heart, bless the LORD." - Canticle of the Three Youths ',
        ' "Ananias, Azarias, Misael, bless the LORD; Praise and exalt Him above all forever." - Canticle of the Three Youths ',
        ' "Let us bless the FATHER and the SON and the HOLY GHOST; Let us praise and exalt GOD above all forever." - Canticle of the Three Youths ',
        ' "Blessed are you, O LORD my GOD; in the firmament of heaven; Praiseworthy and glorious forever." - Canticle of the Three Youths ',
        ); 

var messages5 = dailyMessage[day - 1]; 

document.getElementById('messages5').innerHTML = messages5;



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