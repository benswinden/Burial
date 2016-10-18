$(document).ready(function() {

	var topic = window.location.pathname.substring(1);
	var hash  = window.location.hash.substring(1);
	var scrollPosition = 0;
	// External links in new widow

	$("a[href^='http://'].external").attr("target","_blank");

	// Images Transitions

	$("img").hide().fadeIn(200);

	/*-------------------/
	  @ Module : Search
	/-------------------*/

	/*-------------------/
	  @ Responsive
	/-------------------*/

	resizeThirds();

	/*-------------------/
	  @ Add the Intro Paragraph class
	/-------------------*/

	/*-------------------/
	  @ Highlight latest post
	/-------------------*/

	/*-------------------/
	  @ Collapse When no page is present
	/-------------------*/

	/*-------------------/
	  @ Navi : Change display from item count
	/-------------------*/
	var subItems = $("content.navi ul li").length;
	if( subItems > 7 ){
		console.log("Navi Items:"+subItems);
	}


  $("content.header").mouseover(function(){
  	$("a#fullview").show();
  });
  $("content.header").mouseout(function(){
  	$("a#fullview").hide();
  });
  $("a#fullview").mousedown(function(){
  	$("content.header").animate({ height: $(window).height()+"px" }, 500, function() {});
  });

});

$(window).resize(function() {

	resizeThirds();

});

$(window).load(function() {

});


$(window).scroll(function () {

	resizeThirds();

});

// Mobile LOD
function resizeThirds(){

	scrollPosition = $("body").scrollTop();

	if($("body").width() < 400){
		$("body").addClass("mobile");
		$("body").addClass("phone");
	}
	else if($("body").width() < 940){
		$("body").addClass("mobile");
		$("body").removeClass("phone");
	}
	else{
		$("body").removeClass("mobile");
		$("body").removeClass("phone");
	}

	responsive();

}


function responsive(){

	$("content.header").css("height",$(window).height()/2.5);

}





