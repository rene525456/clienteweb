$(function(){
	$('#btn').click(function(){
		$.ajax({
			url: 'https://materiales.canela.me/json_jquery/',
			type: 'POST',
			dataType:'JSON',
			success: function(data){
				var canciones = '<ul>';
				for (i = 0; i < data.length; i++) {
					canciones += '<li>' + data[i].autor + "-" 
					             + data[i].album 
					             + '<img src="'+ data[i].portada+ '">' +"</li>"
				}

				canciones += "</ul>"
				$("#salida").html(canciones);
			}
		})
	});
});