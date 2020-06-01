function saludar() {
	alert("Saludo");	
}

function sumar(){
	numero1 = parseInt(document.getElementById("n1").value);  // ==> valor, dato primitivo "5"
	numero2 = parseInt(document.getElementById("n2").value); 
	resultado = numero1 + numero2;
	alert("La suma es: " + resultado);
}

function invertir(){
	var cadenaObtenida = document.getElementById("cadena").innerText;
	var vector = cadenaObtenida.split('');  // arreglo de caracteres
	var reversa = vector.reverse();         // invertir el arreglo
	var cadenaInvertida = reversa.join('');   // unir el arreglo en una sola cadena
	document.write(cadenaInvertida);
}

function validarFormulario(){
	var nombres = document.getElementById("nombres").value;
	if (nombres == ""){
		alert("Por favor, dígite el usuario");
	}

}
