<?php
	$resultado = "";
	$nombre = $_POST["nombre"];	
	$arreglo = array("jose","oscar","valeria","mario","rene","hernan");
	for($i=0; $i < count($arreglo); $i++)
		if($nombre == $arreglo[$i])
			$resultado = "<p>Es nombres $nombre ha sido encontrado</p>";

	if ($resultado=="")
		echo "<p>El nombre no se ha encontrado</p>";
	else
		echo $resultado;
?>
