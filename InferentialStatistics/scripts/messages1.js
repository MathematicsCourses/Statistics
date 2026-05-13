/* 
    Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.chukwuemeka-samuel.appspot.com
    www.samdomforpeace.com
    www.samdomforpeace.appspot.com
    www.inferential-statistics.appspot.com/Proportion.html
    message 1
*/

/*
var date = new Date();
var day = date.getDate(); 

var dailyMessage = new Array(
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12: 30 - 31 ',
        ' "JESUS CHRIST is the same yesterday, and today, and forever." - Hebrews 13:8 ',
        ' "Now to Him who is able to keep us from stumbling, and to present us unblemished in His glorious presence with great joy; to the only GOD our Father be glory, majesty, authority, and dominion through JESUS CHRIST our Lord; before all ages, and now, and for all eternity. Amen." - Jude 1:24 - 25',
        ' "Hatred stirs up conflicts, Love forgives all wrongs." - Proverbs 10:12 ',
        ' "Do not admire the achievements of sinners, but trust in the LORD and continue your work; because it is easy in GOD\'s sight to make the poor person quickly and suddenly rich." - Ecclesiasticus 11:21 ',
        ' "O GOD, you have given me life and favour; and your care has preserved my spirit." - Job 10:12 ',
        ' O LORD my GOD, please bless me always with 1 Samuel 2:26 and Luke 2:52. Amen. ',
        ' "GOD is our refuge and our strength; our very present help in times of trouble." - Psalm 46:1 ',
        ' "I will give thanks to you, O GOD my Father for I am awesomely and wonderfully made. Your works are wonderful. My soul knows that very well." - Psalm 139: 14 ',
        ' "Glory to GOD in the highest; and on earth, peace to people on whom His favor rests!" - Luke 2:14 ',
        ' "The grace of our LORD JESUS CHRIST be with my spirit. Amen. " - Philemon 1:25 ',
        ' "The LORD is my shepherd; I have everything I need." - Psalm 23:1 ',
        ' "For the love of money is a root of all kinds of evil. Some people, eager for money, have wandered from putting their faith in GOD, and pierced themselves with many griefs." - 1 Timothy 6:10 ',
        ' "Do not be deceived. Bad friends corrupt good morals." - 1 Corinthians 15:33 ',
        ' "Heal me O LORD, and I will be healed; save me, and I will be saved; for YOU are my praise." - Jeremiah 17:14 ',
        ' "Let everything that has breath praise the LORD! Praise the LORD." - Psalm 150:6 ',
        ' "In GOD, we trust." - The United States currency ',
        ' "JESUS CHRIST suffered and endured great pain for us; but we thought his suffering was punishment from GOD. Yet, He was wounded for our iniquities, and crushed for our sins. Upon Him was the chastisement that makes us whole, and by His stripes; we are healed." - Isaiah 53:4 - 5 ',
        ' "Blessed be the GOD and FATHER of our LORD, JESUS CHRIST; who has blessed us with every spiritual gift in the heavenly places in CHRIST." - Ephesians 1:3',
        ' "So then, it is not of him that willeth, nor of him that runneth, but of GOD that showeth mercy." - Romans 9:16 ',
        ' "Our FATHER in heaven, hallowed be Thy Name." - Matthew 6:9 ',
        ' "Give me life that I may praise you, O GOD; and let thy ordinances help me." - Psalm 119:175 ',
        ' "Keep yourselves in the love of GOD, as you await the mercy of our LORD JESUS CHRIST to bring you eternal life." - Jude 1:21',
        ' "Beloved, I pray that you may prosper in all \'good\' things and be in good health, even as thy soul prospers." - 3rd John 1:2 ',
        ' "In all circumstances, give thanks to GOD; for this is GOD\'s will for you in CHRIST JESUS." - 1 Thessalonians 5:18 ',
        ' "But, seek first the kingdom of GOD and His righteousness, and all these things will be added to you." - Matthew 6:33 ',
        ' "GOD does great things past finding out, yes; and wondrous works that cannot be counted." - Job 9:10',
        ' "The name of the LORD is a strong tower. The righteous runneth into it and are safe." - Proverbs 18:10 ',
        ' "The LORD, who made the earth, who formed it and set it in place, spoke to me. He whose name is the LORD, said: Call on me in prayer and I will answer you. I will show you great and mysterious things which you still do not know about."  - Jeremiah 33: 2 - 3 ',
        ' "The earth is the LORD\'s and everything in it, the world, and all who live in it." - Psalm 24:1 ',
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12: 30 - 31 '
        ); 

var messages1 = dailyMessage[day - 1]; 

document.getElementById('messages1').innerHTML = messages1;
*/

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