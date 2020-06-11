$(document).ready(function(){
	$('#btn1').click(function(){
		$('#identificador1').hide();
	});

	$('#btn2').click(function(){
		$('#identificador1').show();
	});

	$('#btn3').click(function(){
		$('#identificador2').hide(1000); // 1 segunda
	});

	$('#btn4').click(function(){
		$('#identificador2').show(1000); // 1 segunda
	});

	$('#identificador3').click(function(){
		alert("Un click");
	});

	$('#identificador4').dblclick(function(){
		alert("dos click");
	});
	$('#identificador5').mouseenter(function(){
		//alert("mouse enter");
	});

	$('#identificador6').mouseleave(function(){
		//alert("mouse leave");
	});

	$('#entrada1').keypress(function(){
		$('#identificador7').css("background-color","steelblue");
	});

	$('#entrada2').keydown(function(){
		$('#identificador8').css("color","green");
	});
});


