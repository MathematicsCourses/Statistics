// Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.expressions-equations.appspot.com/literalEquations.html
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com
// message 4


var date = new Date();
var day = date.getDate(); 
var dailyMessage = new Array(
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12:30 - 31 ',
        ' "For the grace of GOD has appeared, bringing salvation to all people. It instructs us to renounce ungodliness and worldly passions; and to live in this world in purity, in righteousness, and in the worship of GOD; as we await the blessed hope and glorious appearance of our great GOD and SAVIOR, JESUS CHRIST." - Titus 2:11 - 13 ',
        ' "Surely, GOD is my helper; the LORD upholds my soul." - Psalm 54:4 ',
        ' "And the LORD will deliver me from every evil, and bring me safely into HIS heavenly kingdom. To HIM be all glory forever and ever. Amen." - 2 Timothy 4:18 ',
        ' "In GOD, we trust." - The United States of America ',
        ' "The angel of the LORD encamps around those who fear GOD, and he delivers them." - Psalm 34:7 ',
        ' O LORD my GOD, please bless me always with 1 Samuel 2:26 and Luke 2:52. Amen. ',
        ' "Surely, GOD is my salvation; I will trust in HIM and not be afraid. For the LORD GOD is my strength and my song, and HE also has become my salvation." - Isaiah 12:2 ',
        ' "My soul magnifies the LORD, and my spirit rejoices in GOD, my SAVIOR." - Luke 1:46 - 47 ',
        ' "The revelation of the WORD OF GOD gives light, and brings wisdom to the ignorant." - Psalm 119:130 ',
        ' "For to me; to live is JESUS CHRIST, and to die is gain." - Philippians 1:21 ',
        ' "But for you who fear GOD; the sun of righteousness will rise with healing in his wings, and you will go forth and leap like calves from the stall." - Malachi 4:2 ',
        ' "The world is passing away along with its desires, but anyone who does what pleases GOD will live forever." - 1 John 2:17 ',
        ' "O LORD, our GOD; how majestic is your Name in all the earth! You have set your glory above the heavens." - Psalm 8:1 ',
        ' "Therefore, as the elect of GOD; holy and beloved, clothe yourselves with compassion, kindness, humility, gentleness, and patience." - Colossians 3:12 ',
        ' "Our FATHER in heaven, hallowed be Thy Name." - Matthew 6:9 ',
        ' "Do nothing out of selfish ambition or empty pride; but in humility, consider others more important that yourselves." - Philippians 2:3 ',
        ' "Surely, the LORD\'s goodness and mercy will follow me all the days of my life, and I will dwell in the house of the LORD forever and ever. Amen." - Psalm 23:6 ',
        ' "For the gospel of JESUS CHRIST reveals the righteousness of GOD that comes by faith from start to finish, just as it is written: \"The righteous will live by faith.\" - Habakkuk 2:4" - Romans 1:17 ',
        ' "Happy is the one that findeth wisdom, and the one that gaineth understanding." - Proverbs 3:13 ',
        ' "For GOD so loved the world, that HE gave HIS Only Begotten SON, JESUS CHRIST; that whoever believes in HIM shall not perish, but have eternal life." - John 3:16 ',
        ' "And it shall come to pass that everyone who calls on the name of the LORD will be saved." - Joel 2:32, Acts 2:21, Romans 10:13 ',
        ' "Yet, I will exult in YAHWEH; I will find my joy in GOD, my savior." - Habakkuk 3:18 ',
        ' "Have mercy on me, O GOD in your goodness. In your great tenderness, wipe away my faults. Wash me thoroughly from my iniquities and cleanse me from my sins." - Psalm 51:1 - 2 ',
        ' "Be charitable to strangers, for by doing so; some have welcomed angels without knowing it." - Hebrews 13:2 ',
        ' "For the word of GOD is alive and active; sharper than any double-edged sword, penetrating through the soul and the spirit and to the joints and marrows; and discerns the thoughts and intentions of the heart." - Hebrews 4:12 ',
        ' "Nothing in all creation is hidden from the sight of GOD. Everything is naked and exposed before the eyes of GOD, to whom we must give account." - Hebrews 4:13 ',
        ' "Therefore, since we have a great high priest who has passed through the heavens; JESUS CHRIST, the SON OF GOD, let us hold firmly to profess our faith in HIM." - Hebrews 4:14 ',
        ' "For we do not have a high priest who is unable to sympathize with our weaknesses, but we have One, JESUS CHRIST who was tempted in every way that we are, yet was without sin."  - Hebrews 4:15 ',
        ' "Let us then approach the throne of grace of Our LORD, JESUS CHRIST with confidence, so that we may receive mercy and grace to help us in time of need." - Hebrews 4:16 ',
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12: 30 - 31 '
        ); 

var messages4 = dailyMessage[day - 1]; 

document.getElementById('messages4').innerHTML = messages4;



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