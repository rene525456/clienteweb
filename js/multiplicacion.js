

document.write("<table ><tr><td>Serie</td><td>Resultado</td></tr>");
var input = parseInt(prompt("Introduce el número sobre el cual crear la tabla"));
var resultado = "";

for (i=0;i<=10;i++) {
    resultado += '<tr><td>' + input + 'x' + i + '</td><td>' + (input * i) + '</td></tr>';
}
document.write(resultado);
document.write("</table>");