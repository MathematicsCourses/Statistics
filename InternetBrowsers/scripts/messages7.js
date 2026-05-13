// Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.expressions-equations.appspot.com/radicalEquations.html
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com
// message 7


var date = new Date();
var day = date.getDate(); 
var dailyMessage = new Array(
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12:30 - 31 ',
        ' "O GOD, it is right for us to praise you \'in Zion\' and keep our promises to You. All humanity shall come to You, the One who answers prayers." - Psalm 65:1 - 2 ',
        ' "For there are Three that bear record in heaven: the FATHER, the WORD, and the HOLY GHOST; and these Three are One. And there are Three that bear witness in earth: the Spirit, and the Water, and the Blood; and these Three agree in One." - 1 John 5:7 - 8 ',
        ' "Trust in the LORD forever, because GOD the LORD is the Rock eternal." - Isaiah 26:4 ',
        ' "And this is the confidence that we have in GOD, that if we ask anything according to His will, He hears us." - 1 John 5:14 ',
        ' "For I will proclaim the name of the LORD. Ascribe greatness to our GOD. He is the Rock, His work is perfect; all His ways are just. A GOD of faithfulness, without injustice; righteous and upright is He." - Deuteronomy 32:3 - 4 ',
        ' O LORD my GOD, please bless me always with 1 Samuel 2:26 and Luke 2:52. Amen. ',
        ' "Make sure that no one repays evil for evil. Always pursue what is good for one another and for all people." - 1 Thessalonians 5:16 ',
        ' "Rejoice at all times (in GOD)." - 1 Thessalonians 5:16 ',
        ' "Pray without ceasing." - 1 Thessalonians 5:17 ',
        ' "In all circumstances, give thanks, for this is GOD\'s will for you in CHRIST JESUS." - 1 Thessalonians 5:18 ',
        ' "Thou, O GOD will keep in perfect peace, him/her whose mind is focused on Thee; because he/she trusts in Thee." - Isaiah 26:3 ',
        ' "GOD alone is immortal and dwells in unapprochable light. No one has ever seen Him, nor can anyone see Him. To Him be honor and eternal dominion! Amen." - 1 Timothy 6:16 ',
        ' "Instruct those who are rich in the present age not to be conceited and not to put their hope in the uncertainty of wealth, but in GOD; who richly provides all things for us to enjoy." - 1 Timothy 6:17 ',
        ' "Instruct them to do good, to be rich in good works, and to be generous and ready to share; treasuring up for themselves a firm foundation for the future, so that they may take hold of that which is truly life." - 1 Timothy 6:18 - 19 ',
        ' "Our FATHER in heaven, hallowed be Thy Name." - Matthew 6:9 ',
        ' "In GOD we trust" - The United States of America ',
        ' "For those who heard me called me blessed, and those who saw me commended me, because I rescued the poor who cried out and the fatherless who had no helper." - Job 29:11 - 12 ',
        ' "Pure and undefiled religion before GOD our FATHER is this: to care for orphans and widows in their distress, and to keep oneself from being polluted by the world." - James 1:27 ',
        ' "The faithful love of the LORD, our GOD never ends! His mercies never cease. They are new every morning; great is Your faithfulness, O LORD our GOD." - Lamentations 3:22 - 23 ',
        ' "In a loud voice, they said: \"Worthy is the Lamb who was slain, to receive power and riches and wisdom and strength and honor and glory and blessing!\" " - Revelation 5:12',
        ' "The LORD is my portion, says my soul, therefore I will hope in Him." - Lamentations 3:24 ',
        ' "For all the promises of GOD are \"Yes\" in JESUS CHRIST. And so through Him, our \"Amen\" is spoken to the glory of GOD." - 2 Corinthians 1:20 ',
        ' "For I know the plans I have for you, declares the LORD; plans to prosper you and not to harm you, to give you a future and a hope." - Jeremiah 29:11 ',
        ' "You are the salt of the earth. But if the salt loses its savor, how can it be made salty again? It is no longer good for anything, except to be thrown out and trampled by men..." - Matthew 5:13 ',
        ' "You are the light of the world. A city on a hill cannot be hidden. Neither do people light a lamp and put it under a basket. Instead, they set it on a lampstand, and it gives light to everyone in the house..." - Matthew 5:14 - 15 ',
        ' "In the same way, let your light shine before men, that they may see your good deeds and glorify your FATHER in heaven." - Matthew 5:16 ',
        ' "For the word of the LORD is upright, and all His work is trustworthy. The LORD loves righteousness and justice; the earth is full of His loving devotion." - Psalm 33:4 - 5 ',
        ' "Let us not grow weary in well-doing, for in due time we will reap a harvest if we do not give up..."  - Galatians 6:9 ',
        ' "Therefore, as we have opportunity; let us do good to everyone, and especially to the family of faith." - Galatians 6:10 ',
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12: 30 - 31 '
        ); 

var messages7 = dailyMessage[day - 1]; 

document.getElementById('messages7').innerHTML = messages7;



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