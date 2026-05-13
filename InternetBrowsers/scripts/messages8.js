// Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.expressions-equations.appspot.com/rationalEquations.html
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com
// message 8


var date = new Date();
var day = date.getDate(); 
var dailyMessage = new Array(
        ' "Love the LORD your GOD with all your heart, with all your soul, with all your mind, and with all your strength. Love your neighbor as yourself." - Mark 12:30 - 31 ',
        ' "In the beginning, GOD created the heavens and the earth. Now the earth was formless and void, and darkness was over the surface of the deep. And the SPIRIT of GOD was hovering over the surface of the waters. And GOD said, \"Let there be light\", and there was light. " - Genesis 1:1 - 3 ',
        ' "In the beginning was the Word, and the Word was with GOD, and the Word was GOD..." - John 1:1 ',
        ' "He was with GOD in the beginning. Through Him all things were made, and without Him nothing was made that has been made..." - John 1:2 - 3 ',
        ' "In Him was life, and that life was the light of men. The Light shines in the darkness, and the darkness has not \"(and will never)\" overcome it." - John 1:4 - 5 ',
        ' GOD our FATHER has rescued us from the dominion of darkness and brought us into the kingdom of His beloved SON, in whom we have redemption, the forgiveness of sins..." - Colossians 1:13 - 14 ',
        ' "The SON is the image of the invisible GOD, the firstborn over all creation. For in Him all things were created, things in heaven and on earth, visible and invisible, whether thrones or dominions or rulers or authorities. All things were created through Him and for Him..." - Colossians 1:15 - 16 ',
        ' "HE is before all things; and in Him, all things hold together. And He is the head of the body, the church; He is the beginning and firstborn from among the dead; so that in all things, He may have preeminence." - Colossians 1:17 - 18 ',
        ' "For GOD was pleased to have all His fullness dwell in Him, and through Him, to reconcile to Himself all things; whether things on earth or things in heaven, by making peace through the blood of His cross." - Colossians 1:19 - 20 ',
        ' O LORD my GOD, please bless me always with 1 Samuel 2:26 and Luke 2:52. Amen. ',
        ' "Instead, you have come to Mount Zion, to the city of the living GOD, the heavenly Jerusalem. You have come to the myriads of angels..." - Hebrews 12:22 ',
        ' "in joyful assembly, to the congregation of the firstborn enrolled in heaven. You have come to GOD, the judge of all men; to the spirits of the righteous made perfect..." - Hebrews 12:23 ',
        ' "to JESUS CHRIST the mediator of a new covenant, and to the sprinkled blood that speaks a better word than the blood of Abel. See to it that you do not refuse Him who speaks. For if the people that did not escape when they refused Him who warned them on earth, how much less will we escape if we reject Him who warns us from heaven?"  - Hebrews 12:24 - 25 ',
        ' "It is for freedom that JESUS CHRIST has set us free. Stand firm, then, and do not submit again to a yoke of slavery." - Galatians 5:1 ',
        ' "It is rare indeed for anyone to die for a righteous man, though for a good man; one might possibly dare to die. But GOD proves His love for us in this: While we were still sinners, CHRIST died for us..." - Romans 5:7 - 8 ',
        ' "Therefore, since we have been justified by His Blood, how much more shall we be saved from wrath through Him! For if, when we were enemies of GOD, we were reconciled to Him through the death of His SON; how much more, having been reconciled, shall we be saved through His life!..." - Romans 5:9 - 10 ',
        ' "Not only that, but we also rejoice in GOD through our LORD JESUS CHRIST through whom we have now received reconciliation." - Romans 5:11 ',
        ' "Do you not know? Have you not heard? The LORD is the everlasting GOD, the Creator of the ends of the earth. He will never grow faint or weary; His understanding is beyond searching out. He gives power to the faint and increases the strength of the weak..." - Isaiah 40:28 - 29 ',
        ' "Even youths may faint and grow weary, and young men stumble and fall. But those who wait upon the LORD will renew their strength; they will mount up with wings like eagles, they will run and not grow weary, they will walk and not faint." - Isaiah 40:30 - 31 ',
        ' "Therefore, do not be foolish, but understand GOD\'s will. Do not get drunk on wine, which leads to reckless indiscretion. Instead, be filled with the HOLY SPIRIT. Speak to one another with psalms, hymns, and spiritual songs. Sing and make music in your hearts to the LORD, always giving thanks to GOD the FATHER for everything in the name of our LORD JESUS CHRIST." - Ephesians 5:17 - 20 ',
        ' "But in your hearts, sanctify JESUS CHRIST as GOD. Always be prepared to give a defense to everyone who asks you the reason for the hope you possess. But respond with gentleness and respect, keeping a clear conscience, so that those who slander you may be put to shame by your good behavior in JESUS CHRIST..." - 1 Peter 3:15 - 16 ',
        ' "For it is better, if it is GOD\'s will, to suffer for doing good than for doing evil. For JESUS CHRIST also suffered for sins once for all, the righteous for the unrighteous, to bring you to GOD. He was put to death in the Body but made alive in the Spirit, in which He also went and preached to the spirits in prison who disobeyed long ago when GOD waited patiently in the days of Noah, while the ark was being built. In the ark, a few people, only eight souls were saved through water. And this water symbolizes the baptism that now saves you also - not the removal of dirt from the body, but the pledge of a clear conscience toward GOD - through the resurrection of JESUS CHRIST, who has gone into heaven and is at the right hand of GOD, with angels, authorities, and powers subject to Him. " - 1 Peter 3:17 - 22',
        ' "Our FATHER in heaven, hallowed be Thy Name." - Matthew 6:9 ',
        ' "Make a joyful noise to GOD, all the earth! Sing the glory of His name; make His name glorious. Say to GOD, \"How awesome are your deeds! So great is Your power that Your enemies cower before You. All the earth bows down to You; they sing praise to You; they sing praise to Your name.\" Come and see the works of GOD; how awesome are His deeds toward mankind." - Psalm 66:1 - 5',
        ' "What then shall we say in response to these things? If GOD is for us, who can be against us? He who did not spare His own SON, but gave Him up for us all; how will He not also, along with Him; freely give us all \'good\' things? Who will bring any charge against GOD\'s elect? It is GOD who justifies..." - Romans 8:31 - 33 ',
        ' "Who is there to condemn us? For CHRIST JESUS who died, and more than that was raised to life, is at the right hand of GOD - and He is interceding for us..." - Romans 8:34 ',
        ' "Who shall separate us from the love of CHRIST? Shall trouble or distress or persecution or famine or nakedness or danger or sword? As it is written: \"For Your sake, we face death all day long; we are considered as sheep to be slaughtered.\" No, in all these things; we are more than conquerors through Him who loved us..." - Romans 8:35 - 37 ',
        ' "For I am convinced that neither death nor life, neither angels nor principalities, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of GOD that is in CHRIST JESUS our LORD." - Romans 8:38 - 39 ',
        ' "Now may the GOD of peace Himself sanctify you completely; and may your entire spirit, soul, and body be kept blameless at the coming of our LORD JESUS CHRIST." - 1 Thessalonians 5:23 ',
        ' "Now may the GOD of peace, who through the eternal covenant brought back from the dead our LORD JESUS, the Great Shepherd of the sheep; equip you with every good thing to do His will. And may He accomplish in us what is pleasing in His sight through JESUS CHRIST, to whom be glory forever and ever. Amen." - Hebrews 13:20 - 21 ',
        ' "I have been crucified with CHRIST, and I no longer live, but CHRIST lives in me. The life I live in the body, I live by faith in the SON of GOD, who loved me and gave Himself up for me." - Galatians 2:20 '
        ); 

var messages8 = dailyMessage[day - 1]; 

document.getElementById('messages8').innerHTML = messages8;



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