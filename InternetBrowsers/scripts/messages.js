// Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.expressions-equations.appspot.com
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com
// message 2


var date = new Date();
var day = date.getDate(); 
var dailyMessage = new Array(
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12:30 - 31 ',
        ' "Your word, O GOD is a lamp unto my feet and a light unto my path." - Psalm 119:105 ',
        ' "Do not worry about anything, but pray about everything. With thankful hearts, offer up your prayers and requests to GOD." - Philippians 4:6 ',
        ' "But, seek first the kingdom of GOD and His righteousness; and all these things will be added to you." - Matthew 6:33 ',
        ' "In GOD, we trust." - The United States currency ',
        ' "Submit yourselves, then to GOD. Resist the devil, and he will flee from you." - James 4:7 ',
        ' "O LORD my GOD, please bless me always with 1 Samuel 2:26 and Luke 2:52. Amen." ',
        ' "Remember me with favor, O my GOD." - Nehemiah 13:31 ',
        ' "I can do all (good) things through JESUS CHRIST who gives me strength." - Philippians 4:13 ',
        ' "GOD will supply all my (good) needs according to His glorious riches in CHRIST JESUS." - Philippians 4:19 ',
        ' "Come near to GOD, and He will come near to you. " - James 4:8 ',
        ' "Finally, my brethren; be strong in the LORD, and in His mighty power." - Ephesians 6:10 ',
        ' "Let us give thanks to the LORD for His unfailing love and His wonderful deeds for us. He has broken the gates of brass and cut through the bars of iron." - Psalm 107:15 - 16 ',
        ' "Blessed are the merciful, for they shall obtain mercy." - Matthew 5:7 ',
        ' "Remember this: Whoever sows sparingly will also reap sparingly; and whoever sows generously will also reap generously. Each one of you should give what he/she has decided in his/her heart to give, not out of regret or compulsion. For GOD loves a cheerful giver." - 2 Corinthians 9:6 - 7 ',
        ' "Our FATHER in heaven, hallowed be Thy Name." - Matthew 6:9 ',
        ' "Rejoice in the LORD always. I say it again: Rejoice!" - Philippians 4:4 ',
        ' "Blessed are the pure in heart, for they will see GOD." - Matthew 5:8 ',
        ' "For I know that my Redeemer (GOD) lives, and He shall stand at the latter day upon the earth." - Job 19:25',
        ' "Submit to GOD, and be at peace with Him; thereby good will come to you." - Job 22:21 ',
        ' "Blessed are the peacemakers, for they will be called children of GOD." - Matthew 5:9 ',
        ' "Love righteousness, you who judge the earth; think of the LORD in goodness; and seek Him in integrity of heart." - Wisdom 1:1 ',
        ' "My help comes from the LORD, the Maker of heaven and earth." - Psalm 121:2 ',
        ' "Blessed are the humble, for they will inherit the earth." - Matthew 5:5 ',
        ' "Be charitable to strangers, for by doing so; some have welcomed angels without knowing it." - Hebrews 13:2 ',
        ' "It is better to take refuge in the LORD, than to trust in humans." - Psalm 118:8 ',
        ' "Above all, love one another deeply; because love covers a multitude of sins." - 1 Peter 4:8 ',
        ' "Salvation comes from the LORD." - Jonah 2:9 ',
        ' "And now these three remain: faith, hope, and love. But the greatest of these is love."  - 1 Corinthians 13:13 ',
        ' "For we live by our faith in GOD, and not by sight." - 2 Corinthians 5:7 ',
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12: 30 - 31 '
        ); 

var messages = dailyMessage[day - 1]; 

document.getElementById('messages').innerHTML = messages;



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
    if (e.style.display === 'block' || e.style.display === '')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}


function toggle(id) {
    var e = document.getElementById(id);
    if (e.style.display === 'none')
        e.style.display = 'inline-block';
    else
        e.style.display = 'none';
}