<?php
	include('database.php');
	if (isset($_POST['name'])) {
		$nombre = $_POST['name'];
		$descripcion = $_POST['descripcion'];
		$query = "INSERT INTO task(name, descripcion) VALUES ('$nombre', '$descripcion')";
		$resultado = mysqli_query($conexion, $query);

		if(!$resultado){
			echo "No se registró";
			die('sentencia ha fallado');
		}
		echo "Se registró correctamente";
	}
?>