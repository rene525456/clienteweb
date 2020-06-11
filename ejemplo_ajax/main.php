<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Ajax y Php</title>
	<script>
		function crearXMLHttpRequest(){
			var xmlHttp = null
			if(window.XMLHttpRequest){
				xmlHttp = new XMLHttpRequest();
			}
			return xmlHttp;
		}
		function mostrarCliente(str){
			var xmlHttp;
			if (str == ""){
				document.getElementById("txtAjax").innerHTML = "";
				return;
			}
			xmlHttp = crearXMLHttpRequest();
			xmlHttp.onreadystatechange = function(){
				if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
					document.getElementById("txtAjax").innerHTML = xmlHttp.responseText;
				}
			}
			xmlHttp.open("GET","getCliente.php?id=" + str, true);
			xmlHttp.send();

		}
	</script>
</head>
<body>
	<h2>Mis clientes</h2>
	<form action="">
		<select name="clientes" onchange="mostrarCliente(this.value)">
			<?php
				$con = @mysqli_connect("localhost","root","","pruebaajax");
				if (!$con) {
					echo "<p> Error al conectar con la BD ". mysql_connect_error() ."</p>";
					exit;
				}
				$sentencia = "select * from clientes";
				if(!($resultado = mysqli_query($con, $sentencia))){
					echo "<p> Error al ejecutar consulta </p>";
				}
				while ($fila = mysqli_fetch_assoc($resultado)) {
					echo "<option value = '{$fila['Id']}'>{$fila['Nombre']}</option>";
				}
				mysqli_free_result($resultado);
				mysqli_close($con);

			?>
		</select>
	</form>
	</br>
	<div id="txtAjax">
		La información del cliente se mostrará aquí
	</div>

</body>
</html>
