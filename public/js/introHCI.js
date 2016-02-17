'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
		//add click listener
	$(".likeBtn").click(likeClick);
}

function likeClick(e) {
	console.log("like button clicked");

	ga("send", "event", "like", "click");
}
