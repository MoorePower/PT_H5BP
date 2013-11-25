$(document).ready(function(){
	$('.ui-btn').each(function(){
		
		var rel = $(this).attr('rel');
		
		$(this).button({
			icons: {
				primary: rel
			}
		});
	
	});
	
	$('#btnAdd').click(function(){
		
	});
	
	$('#btnRemove').click(function(){
		
	});

});


