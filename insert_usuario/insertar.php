<?php

$conexion = mysqli_connect("localhost","root", "", "insertar");
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$usuario = $_POST['usuario'];
$password = $_POST['password'];

$sql = "INSERT INTO usuarios(nombre,apellido, usuario, password) VALUES ('$nombre','$apellido','$usuario','$password')";
echo mysql_query($conexion, $sql);

?>