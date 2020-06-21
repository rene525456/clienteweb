<?php
	include('database.php');
	if (isset($_POST['id'])) {
		$nombre = $_POST['name'];
		$description = $_POST['description'];
		$id = $_POST['id'];
		$query = "UPDATE task SET name = '$nombre',description = '$description' WHERE id = '$id'";
		$resultado = mysqli_query($conexion, $query);

		if(!$resultado){
			die('sentencia ha fallado');
		}
		echo "Se Actualizó correctamente";
	}
?>