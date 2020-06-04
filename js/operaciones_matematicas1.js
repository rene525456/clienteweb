function realizar_operacion(){
	var entrada1 = parseInt(document.getElementById("n1").value);
	var entrada2 = parseInt(document.getElementById("n2").value);
	var opcion = parseInt(document.getElementById("op").value);
	var resultado = 0;
	switch(opcion){
		case 1:
			resultado = entrada1 + entrada2;
			break;
		case 2:
			resultado = entrada1 - entrada2;
			break;
		case 3:
			resultado = entrada1 * entrada2;
			break;
		case 4:
			resultado = entrada1 / entrada2;
			break;
	}

	document.getElementById("resultado").innerHTML = resultado;
}