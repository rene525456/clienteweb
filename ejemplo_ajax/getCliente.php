<?php
$con = @mysqli_connect("localhost","root","root","pruebaajax");
if (!$con) {
	echo "<p> Error al conectar con la BD ". mysql_connect_error() ."</p>";
	exit;
}

$sentencia = "select * from clientes where Id='$_GET[id]'";
if(!($resultado = mysqli_query($con, $sentencia))){
	echo "<p> Error al ejecutar consulta </p>";
}
while ($fila = mysqli_fetch_assoc($resultado)) {
	echo "{$fila['Descripcion']}";
}
mysqli_free_result($resultado);
mysqli_close($con);
?>
