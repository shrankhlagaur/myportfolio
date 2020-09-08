$().ready(function () {
    "use strict";
		// set up hover panels
		// although this can be done without JavaScript, we've attached these events
		// because it causes the hover to be triggered when the element is tapped on a touch device
    $('.hover').hover(function () {
        $(this).addClass('flip');
    }, function () {
			$(this).removeClass('flip');
		});
	});




function changeToWhite(elem){
    elem.children[0].style.color = "white"
    //
}

//onmouseout
function changeToBlack(elem){
    elem.children[0].style.color = "black"
    //
}






const content = document.querySelector('.post__article');

scrollnav.init(content, { 
  debug: false
});
