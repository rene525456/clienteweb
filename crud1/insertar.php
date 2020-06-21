<?php
	include('database.php');
	if (isset($_POST['name'])) {
		$nombre = $_POST['name'];
		$descripcion = $_POST['description'];
		$query = "INSERT INTO task(name, description) VALUES ('$nombre', '$descripcion')";
		$resultado = mysqli_query($conexion, $query);

		if(!$resultado){
			die('sentencia ha fallado');
		}
		echo "Se registró correctamente";
	}
?>