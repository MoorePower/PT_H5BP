$(document).ready(function(){
	$('#btn').each(function(){
		
		var rel = $(this).attr('rel');
		
		$(this).button({
			icons: {
				primary: rel
			}
		});
	
	});

});


