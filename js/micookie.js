function setCookie(nombre, valor, expiracion){
    var d = new Date();
    d.setTime(d.getTime()+expiracion*24*60*60*1000);
    var expiracion = "expires="+d.toUTCString();
    document.cookie = nombre+"="+valor+";"+expiracion+";path=/";
}

function getCookie(nombre){
    var nom = nombre+"=";
    var array = document.cookie.split(";");
    for (var i=0; i<array.length; i++){
        var c = array[i];
        while (c.charAt(0)==" "){ 
            c = c.substring(1);
        }
        if (c.indexOf(nombre)==0){
            return c.substring(nom.length, c.length);
        }
    }
    return "";
}


var verCookies = function(){
	alert("La cookies actuales:\n" + document.cookie);
}

var crear = function(){
	var nombre = prompt("Ingrese el nombre de la cookie:");
	var valor =  prompt("Ingrese el valor de la cookie:");
	var expiracion =  parseInt(prompt("Ingrese el # de día de la cookie:"));
	setCookie(nombre,valor,expiracion);
}

var eliminar = function(){
	var nombre = prompt("Ingrese el nombre de la cookie para eliminar:");
	setCookie(nombre, "", 0);
}

var buscar = function(){
	var nombre = prompt("Ingrese el nombre de la cookie para buscarla:");
	var resultado = getCookie(nombre);
	alert(resultado);
}

window.onload = function(){
	var botonVC = document.getElementById("verTodas");
	botonVC.onclick = function(){
		verCookies();
	}

	var botonCC = document.getElementById("crear");
	botonCC.onclick = function(){
		crear();
	}

	var botonMC = document.getElementById("modificar");
	botonMC.onclick = function(){
		crear();
	}

	var botonEC = document.getElementById("eliminar");
	botonEC.onclick = function(){
		eliminar();
	}

	var botonBC = document.getElementById("buscar");
	botonBC.onclick = function(){
		buscar();
	}	
}