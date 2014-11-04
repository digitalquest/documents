/*
* Script to hide elements on grading and quick grading pages.
* Element to hide is the dropdown box to choose whether to send a email notofication to students.
* The label, next to the dropdown, also needs to be hidden 
*/
$(document).ready(function()
{
	var href = $(location).attr('href'); //used to check the page we are on
	var search = $(location).attr('search'); //should be the query string including the '?'
	var grade = false; // presume we are not on a grading page
	//alert ( 'search:' + search );
	if ( href.toLowerCase().indexOf('action=grading') >= 0 || href.toLowerCase().indexOf('action=grade') >= 0 ) {
		alert('grade or grading. search is: '+ search);
		grade = true;
	}
		
	if ( grade  ) { //check if we are on one of the grading pages
	
		alert ( 'inside grade or grading' ); 
			
		$("#id_sendstudentnotifications").val('0'); //set value of 'Notify student' to 'No'. Should be 'No' by default
		//alert( "initial workflowstate is" + $("#id_workflowstate").val() );
		
		if ( $("#id_workflowstate").val()!="released" ) { // the state of the assignment isn't 'Released'
			hide_notify(); 	//hide the 'notify student' dropdown
		}
					
		$("#id_workflowstate").change(function () {
			if ($(this).val() == "released") { // assignment has been marked as 'Released' for grading
				show_notify();				//show the 'notify student' dropdown
				alert("#id_workflowstate IS released");
			}
			else {
				hide_notify(); //hide the 'notify student' dropdown box
				alert("#id_workflowstate NOT released");
			}
		});
	}
	
	function hide_notify() {
		$("#id_sendstudentnotifications").val('0') //set value of 'Notify student' to 'No'
										 .fadeOut(); // hide 'Notify student' dropdown
		$("label[for='id_sendstudentnotifications']").fadeOut(); //hide the associated label
	}
	
	function show_notify() {
		$("#id_sendstudentnotifications").fadeIn(1000) //show 'Notify student' dropdown
		$("label[for='id_sendstudentnotifications']").fadeIn(1000); // Show the associated label
	
	}
	
});
