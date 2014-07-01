//Beginning of doc ready function! Do not delete.
$(document).ready(function(){

//nav bar and start box show and hide!
$('.startbox').waypoint(function(direction) {
	 if (direction=="down") {
	 	hideGraf();
	 }
	 else{
	 	showGraf();	
	 }
}, { offset: -200 });

function hideGraf(){
	$('.startbox').fadeTo('slow',0);
}

function showGraf(){
	$('.startbox').fadeTo('slow',0.9);
}

$('.navbar').hide();

$('.navbar').waypoint(function() {
	animateBar();
}, { offset: -1400 });

function animateBar(){
	$('.navbar').slideDown();
}


//lighting up each word when you roll over

/*$('').waypoint(function() {
	lightup();
}, { offset: 50 });

function lightup(){
	$('#firstbutton').css("color", "#9E0508");
}*/


$('#whyheader').waypoint(function(direction) {
	 if (direction=="down") {
	 	lightup();
		console.log("fired");
	 }
	 else{
	 	console.log("whyheader triggered up direction");
	 	notlightup();	
	 }
	 
}, { offset: 0 });

function lightup(){
	$('#whylink').css('color', '#9E0508');
}

function notlightup(){
	$('#whylink').css('color','white');
}



$('#endwhy').waypoint(function(direction) {
	 if (direction=="down") {
	 	notlightup();
		//$('#firstbutton').css("color", "#9E0508");
		console.log("fired");
	 }
	 else{
	 	console.log("whyheader triggered up direction");
	 	lightup();	
	 }
	 
}, { offset: 0 });


$('#timelineheader').waypoint(function(direction) {
	 if (direction=="down") {
	 	lightup2();
		//$('#firstbutton').css("color", "#9E0508");
		console.log("fired");
	 }
	 else{
	 	console.log("whyheader triggered up direction");
	 	notlightup2();	
	 }
	 
}, { offset: 0 });

function lightup2(){
	$('#timelinelink').css('color', '#9E0508');
}

function notlightup2(){
	$('#timelinelink').css('color','white');
}


$('#endtimeline').waypoint(function(direction) {
	 if (direction=="down") {
	 	notlightup2();
		//$('#firstbutton').css("color", "#9E0508");
		console.log("fired");
	 }
	 else{
	 	console.log("whyheader triggered up direction");
	 	lightup2();	
	 }
	 
}, { offset: 0 });


$('#impactheader').waypoint(function(direction) {
	 if (direction=="down") {
	 	lightup3();
		//$('#firstbutton').css("color", "#9E0508");
		console.log("fired");
	 }
	 else{
	 	console.log("whyheader triggered up direction");
	 	notlightup3();	
	 }
	 
}, { offset: 0 });

function lightup3(){
	$('#impactlink').css('color', '#9E0508');
}

function notlightup3(){
	$('#impactlink').css('color','white');
}


$('#endimpact').waypoint(function(direction) {
	 if (direction=="down") {
	 	notlightup3();
		//$('#firstbutton').css("color", "#9E0508");
		console.log("fired");
	 }
	 else{
	 	console.log("whyheader triggered up direction");
	 	lightup3();	
	 }
	 
}, { offset: 0 });


$('#endtimeline').waypoint(function(direction) {
	 if (direction=="down") {
	 	notlightup2();
		//$('#firstbutton').css("color", "#9E0508");
		console.log("fired");
	 }
	 else{
	 	console.log("whyheader triggered up direction");
	 	lightup2();	
	 }
	 
}, { offset: 0 });


$('#intropic').waypoint(function(direction) {
	 if (direction=="down") {
	 	lightup4();
		//$('#firstbutton').css("color", "#9E0508");
		console.log("fired");
	 }
	 else{
	 	console.log("whyheader triggered up direction");
	 	notlightup4();	
	 }
	 
}, { offset: 0 });

function lightup4(){
	$('#introlink').css('color', '#9E0508');
}

function notlightup4(){
	$('#introlink').css('color','white');
}


$('#endintro').waypoint(function(direction) {
	 if (direction=="down") {
	 	notlightup4();
		//$('#firstbutton').css("color", "#9E0508");
		console.log("fired");
	 }
	 else{
	 	console.log("whyheader triggered up direction");
	 	lightup4();	
	 }
	 
}, { offset: 0 });

//timeline

$("#filterstud").click(function(){
	$(".uni").toggle();
	$(".nation").toggle();
});

$("#filteruni").click(function(){
	$(".student").toggle();
	$(".nation").toggle();
});

$("#filternation").click(function(){
	$(".student").toggle();
	$(".uni").toggle();
});

//show and hiding the documents!

$("#aaabclick").click(function(){
    $("#proposalscreenshot").animate({width:'toggle'},450);       
});

$("#profclick").click(function(){
    $("#professorpetition").animate({width:'toggle'},450);       
});

$("#studentclick").click(function(){
    $("#studentpetition").animate({width:'toggle'},450);       
});

$("#gracelouclick").click(function(){
    $("#gracelouarticle").animate({width:'toggle'},450);       
});

$("#firstgradclick").click(function(){
    $("#firstgrad").animate({width:'toggle'},450);       
});

$("#cartoonclick").click(function(){
    $("#cartoonstrike").animate({width:'toggle'},450);       
});

$("#daysevententclick").click(function(){
    $("#dayseventent").animate({width:'toggle'},450);       
});
$("#daysevenrockclick").click(function(){
    $("#daysevenrock").animate({width:'toggle'},450);       
});
$("#stanfordemailclick").click(function(){
    $("#stanfordemail").animate({width:'toggle'},450);       
});
$("#charleschunclick").click(function(){
    $("#charleschun").animate({width:'toggle'},450);       
});


$(".buttontimeline").click(function() {
  $(this).toggleClass( "highlight");
});
//End of doc ready function! Do not delete.
});