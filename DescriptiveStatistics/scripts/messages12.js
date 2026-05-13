/*
    Copyright 2023 - Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    www.chukwuemeka-samuel.appspot.com
    www.samdomforpeace.appspot.com
    www.finance-calculators.appspot.com/financialMathematicsLiteracy.html
    message 12
*/


var date = new Date();
var day = date.getDate(); 
var dailyMessage = new Array(
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12: 30 - 31 ',
        ' "\"May the LORD bless you and keep you; may the LORD cause His face to shine upon you and be gracious to you; may the LORD lift up His countenance toward you and give you peace.\"" - Numbers 6:24 - 26 ',
        ' "Beloved, I pray that in every way you may prosper and enjoy good health, as your soul also prospers" - 3 John 1:2 ',
        ' "Thy Word, O LORD is a lamp for my feet and a light for my path." - Psalm 119: 105 ',
        ' "I praise you, O LORD, for I am awesomely and wonderfully made; Your works are marvelous, and my soul knows it very well." - Psalm 139: 14 ',
        ' "Because of the loving devotion of the LORD our GOD, we are not consumed, for His mercies never fail. They are new every morning; great is Your faithfulness O LORD our GOD." - Lamentations 3:22 - 23 ',
        ' "Now to Him who is able to keep you from stumbling and to present you unblemished in His glorious presence with great joy, - to the only GOD our Savior be glory, majesty, dominion and authority through JESUS CHRIST our LORD before all time, and now, and for all eternity. Amen." - Jude 1:25 ',
        ' "Blessed be the GOD and FATHER of our LORD JESUS CHRIST who has blessed us with every spiritual blessing in all the heavenly places in CHRIST JESUS." - Ephesians 1:3 ',
        ' "Therefore, since you have been with CHRIST, strive for the things above, where CHRIST is seated at the right hand of GOD. Set your minds on things above, not on earthly things." - Colossians 3:1 - 2 ',
        ' "Blessed be the GOD and FATHER of our LORD JESUS CHRIST! By His great mercy He has given us new birth into a living hope through the resurrection of JESUS CHRIST from the dead, and into an inheritance that is imperishable, undefiled, and unfading, reserved in heaven for you, who through faith are shielded by GOD\'s power for the salvation that is ready to be revealed in the last time." - 1 Peter 1:3 - 5 ',
        ' "The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding." - Proverbs 9:10 ',
        ' "Surely goodness and mercy will follow me all the days of my life, and I will dwell in the house of the LORD forever." - Psalm 23:6 ',
        ' "Still I am certain to see the goodness of the LORD in the land of the living." - Psalm 27:13 ',
        ' "You are the salt of the earth. But if the salt loses its savor, how can it be made salty again? It is no longer good for anything, except to be thrown out and trampled by men. You are the light of the world. A city on a hill cannot be hidden. Neither do people light a lamp and put it under a basket. Instead, they set it on a stand, and it gives light to everyone in the house. In the same way, let your light shine before men, that they may see your good deeds and glorify your FATHER in heaven." - Matthew 5:13 - 16 ',
        ' "Now to Him who is able to do so much more than all we ask or imagine, according to His power that is at work within us, to Him be the glory in the church and in CHRIST JESUS throughout all generations, forever and ever. Amen." - Ephesians 3:20 - 21 ',
        ' O LORD my GOD, please bless me always with 1 Samuel 2:26 and Luke 2:52. Amen. ',
        ' "Our FATHER in heaven, hallowed be Thy Name." - Matthew 6:9 ',
        ' "Let everything that has breath praise the LORD. Praise the LORD." - Psalm 150:6 ',
        ' "The grace of the LORD JESUS CHRIST, and the love of GOD, and the fellowship of the HOLY SPIRIT be with all of us. Amen." - 2 Corinthians 13:14 ',
        ' "Blessed are the peacemakers, for they will be called sons of GOD." - Matthew 5:9 ',
        ' "But You, O LORD, are a shield around me, my glory, and the One who lifts up my head." - Psalm 3:3 ',
        ' "Then Mary said: \"My soul glorifies the LORD, and my spirit rejoices in GOD my Savior!\"" - Luke 1:46 - 47 ',
        ' "In the fullness of time, GOD sent His SON, born of a Woman, born under the law, to redeem those under the law, that we might receive our adoption as sons." - Galatians 4:4 - 5 ',
        ' "O LORD our GOD, how majestic is Thy Name in all the earth. You have set Your glory above the heavens." - Psalm 8:1 ',
        ' "GOD our FATHER has rescued us from the dominion of darkness and brought us into the kingdom of His beloved SON, in whom we have redemption, the forgiveness of sins." - Colossians 1: 13 - 14 ',
        ' "JESUS CHRIST is the same yesterday and today and forever." - Hebrews 13:8 ',
        ' "And He has a name written on His robe and on His thigh: KING of kings and LORD of lords." - Revelation 19:16 ',
        ' "The SON is the image of the invisible GOD, the firstborn over all creation. For in Him all things were created, things in heaven and on earth, visible and invisible, whether thrones or dominions, or rulers or authorities." - Colossians 1: 15-16 ',
        ' "But because JESUS CHRIST lives forever, He has a permanent priesthood. Therefore, He is able to save completely those who draw near to GOD through Him, since He always lives to intercede for them."  - Hebrews 7:24 - 25 ',
        ' "For you did not receive a spirit of slavery that returns you to fear, but you received the SPIRIT of sonship, by whom we cry, \"Abba FATHER!\"" - Romans 8:15 ',
        ' "Grace and peace to you from GOD our FATHER and the LORD JESUS CHRIST. Blessed be the GOD and FATHER of our LORD JESUS CHRIST, the FATHER of compassion and the GOD of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves have received from GOD." - 2 Corinthians 1:2 - 4 '
        ); 

var messages12 = dailyMessage[day - 1]; 

document.getElementById('messages12').innerHTML = messages12;



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
