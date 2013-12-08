$(document).ready(function(){
	//button model
	$('.ui-btn').each(function(){
		
		var rel = $(this).attr('rel');
		//set the button icon based on the rel tag
		$(this).button({
			icons: {
				primary: rel
			}
		});
	
	});
	
	$('#btnAdd').click(function(){
		//name the container
		var projectName = prompt("Please enter a project name:");
		
		//make sure a value was entered
		if (!projectName){
			alert("Please enter a project name!")
		}
		else{
			//create project container
			$("<p>" + projectName +"</p>").appendTo(".container").attr('id', projectName);
		}	
	});
	
	$('#btnRemove').click(function(){
		$(".ui-selected").remove();
	});
	
	//$('.container').sortable();
	//$('.container').disableSelection();
	$('.container').selectable();

});


