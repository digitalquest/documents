/*
* Script to hide elements on grading and quick grading pages.
* Element to hide is the dropdown box to choose whether to send a email notofication to students.
* The label, next to the dropdown, also needs to be hidden 
*/
$(document).ready(function()
{
	var href = $(location).attr('href'); //used to check the page we are on
	var search = $(location).attr('search'); //should be the query string including the '?'
	var gradepage = false; // presume we are not on a grading page
	
	if ( href.toLowerCase().indexOf('action=grading') >= 0 || href.toLowerCase().indexOf('action=grade') >= 0 ) {
		alert('grade or grading. search is: '+ search);
		gradepage = true;
	}
		
	if ( gradepage ) { //check if we are on one of the grading pages
	
		alert ( 'inside grade or grading' ); 
						
	}
	
	/*
	* hide the 'Notify student' dropdown box and associated text label
	*/
	function hide_notify() {
		$("#id_sendstudentnotifications").val('0') //set value of 'Notify student' to 'No'
										 .fadeOut(); // hide 'Notify student' dropdown
		$("label[for='id_sendstudentnotifications']").fadeOut(); //hide the associated label
	}
	
	/*
	* show the 'Notify student' dropdown box and associated text label
	*/
	function show_notify() {
		$("#id_sendstudentnotifications").fadeIn(1000) //show 'Notify student' dropdown
		$("label[for='id_sendstudentnotifications']").fadeIn(1000); // Show the associated label
	
	}
	
});
