var validar = function(){
	var nombres = document.formulario.nombres1; // getElementById("")
	if (nombres.value == ""){
		document.getElementById("mensaje_nombres").innerHTML = "El campo nombres es requerido";
	}else if(nombres.value.length < 3){
		document.getElementById("mensaje_nombres").innerHTML = "El campo debe contener mínimo 3 caracteres";
	}else if(!nombres.value.match(/^[a-z]+$/i)){
		document.getElementById("mensaje_nombres").innerHTML = "El campo sólo acepta letras";
	}else{
		document.getElementById("mensaje_nombres").innerHTML = "";
	}
}

window.onload = function(){
	var boton = document.getElementById("btn_validar");
	boton.onclick = function(){
		validar();
	}
}
