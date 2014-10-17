$(document).ready(function()
{
	var href = $(location).attr('href');
	//var pathname = $(location).attr('pathname');
	//var hash = $(location).attr('hash');
	//var search = $(location).attr('search');
	//alert ( 'herf:' + href + ' pathname:' + pathname );
	
	var pageQuickGrade = 'http://';
	var pageGrade = 'http://';
	
	if ( href == pageQuickGrade  ) { alert ( 'herf:' + href );}
		
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
	
	function hide_notify() {
		$("#id_sendstudentnotifications").val('0') //set value of 'Notify student' to 'No'
										 .hide(); // hide 'Notify student'
		$("label[for='id_sendstudentnotifications']").hide(); //hide the associated label
	}
	
	function show_notify() {
		$("#id_sendstudentnotifications").show() //show 'Notify student'
		$("label[for='id_sendstudentnotifications']").show(); // Show the label
	
	}
	
});
