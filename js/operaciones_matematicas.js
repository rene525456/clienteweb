function iniciar() {
	entrada1 = Number(prompt("Ingrese un valor"));
	entrada2 = Number(prompt("Ingrese otro valor"));

	document.getElementById("numero1").innerHTML = "Primer Número: " + entrada1;
	document.getElementById("numero2").innerHTML = "Primer Número: " + entrada2;
}

function realizar_operacion(){
	var opcion = Number(prompt("Seleccione un item de operación"))
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