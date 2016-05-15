// ----------------------------------- //
// Slider by ------------------------- //
// JoelSemczyszyn@gmail.com ---------- //
// ----------------------------------- //


// 
// Variables 
// ----------------------------------- //

var bg = document.getElementById("background"),
	bgCvs = bg.getContext("2d"),
	mobileBtn = document.getElementById("test");

//
// Functions 
// ------------------------------------ //

function tlMobilePlay() { tlMobile.play(); }
function slide1Play() { tlSlide1.restart(); tlSlide1.play(); }
function slide2Play() { tlSlide2.restart(); tlSlide2.play(); }
function slide3Play() { tlSlide3.restart(); tlSlide3.play(); }

// Buttons

mobileBtn.addEventListener("click", tlMobilePlay);
slide1Btn.addEventListener("click", slide1Play);
slide2Btn.addEventListener("click", slide2Play);
slide3Btn.addEventListener("click", slide3Play);

// 
// Canvas Work  
// ----------------------------------- //

// Gradients

var bgGrd = bgCvs.createLinearGradient(0, 0, 0, 400);
bgGrd.addColorStop(0, "rgb(255,255,255)" );
bgGrd.addColorStop(0.7, "rgb(234,234,234)" );
bgGrd.addColorStop(0.76, "rgb(255,255,255)" );
bgGrd.addColorStop(1, "rgb(242,242,242)" );

// Operations 

bgCvs.fillStyle = bgGrd;
bgCvs.fillRect(0, 0, 1400, 400);

// 
// Greensock Animation 
// ------------------------------------- //

// Timelines

var	tlMobile = new TimelineLite( {paused:true} ),
	tlSlide1 = new TimelineLite( {paused:true} ),
	tlSlide2 = new TimelineLite( {paused:true} ),
	tlSlide3 = new TimelineLite( {paused:true} ),
	tlSlideC = new TimelineLite(); // Move the first line of other tweens to independant line, call it on all button presses then follow up with appropriate slide timeline

tlMobile.add( TweenMax.staggerFromTo(".mobile", 0.5, {opacity: 0, y:10}, {opacity: 1, y:0}, 0.2));

tlSlide1.add( TweenMax.to([".slide1, .slide2, .slide3"], 0.5, {opacity: 0}))
	.fromTo(".slide1", 0.5, {y:5}, {opacity:1, y:0});

tlSlide2.add( TweenMax.to([".slide1, .slide2, .slide3"], 0.5, {opacity: 0}))
	.fromTo(".slide2", 0.5, {y:5}, {opacity:1, y:0});

tlSlide3.add( TweenMax.to([".slide1, .slide2, .slide3"], 0.5, {opacity: 0}))
	.fromTo(".slide3", 0.5, {y:5}, {opacity:1, y:0});
