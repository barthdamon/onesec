$(document).ready(function(){
    $(".nav").load("nav.html");
    $(".footer").load("footer.html");
    console.log("1337");


	// $('.grower').mouseover(function(){
	//   //moving the div left a bit is completely optional
	//   //but should have the effect of growing the image from the middle.
	//   $(this).stop().animate({"width": "110%"}, 200,'easeInQuint');
	// }).mouseout(function(){ 
	//   $(this).stop().animate({"width": "250px","left":"0px"}, 200,'easeInQuint');
	// });;
 //   $('#swiperightdiv').hover(
	// 	function(){$('#swiperighttitle').animate({"font-size": "24px"}, 1000);},        
	// 	function(){$('#swiperighttitle').animate({"font-size:": "16px"}, 1000);}
	// );

});


function loadPage(page) {
    window.location = page + ".html";
}