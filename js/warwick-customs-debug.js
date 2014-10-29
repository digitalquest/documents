$(document).ready(function()
{
	var href = $(location).attr('href'); //used to check the page we are on
	//var pathname = $(location).attr('pathname');
	//var hash = $(location).attr('hash');
	//var search = $(location).attr('search');
	//alert ( 'herf:' + href + ' pathname:' + pathname );
	
	var pageQuickGrade = 'http://'; //pages we are interested in
	var pageGrade = 'http://';      //we want the grading and quick grading pages only
	
	if ( href == pageQuickGrade  ) { //check if we are on one of the grading pages
	
		alert ( 'herf:' + href ); 
			
		$("#id_sendstudentnotifications").val('0'); //set value of 'Notify student' to 'No'. Should be 'No' by default
		//alert( "initial workflowstate is" + $("#id_workflowstate").val() );
		
		if ( $("#id_workflowstate").val()!="released" ) { // workflow isnt't Released
			hide_notify();
		}
					
		$("#id_workflowstate").change(function () {
			if ($(this).val() == "released") {
				show_notify();
				alert("#id_workflowstate IS released");
			}
			else {
				hide_notify();
				alert("#id_workflowstate NOT released");
			}
		});
	}
	
	function hide_notify() {
		$("#id_sendstudentnotifications").val('0') //set value of 'Notify student' to 'No'
										 .hide(); // hide 'Notify student' dropdown
		$("label[for='id_sendstudentnotifications']").hide(); //hide the associated label
	}
	
	function show_notify() {
		$("#id_sendstudentnotifications").show() //show 'Notify student' dropdown
		$("label[for='id_sendstudentnotifications']").show(); // Show the associated label
	
	}
	
});
