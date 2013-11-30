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
		$("<p>test</p>").appendTo(".main");
	});
	
	$('#btnRemove').click(function(){
		
	});
	
	$('.main').sortable();
	$('.main').disableSelection();

});


