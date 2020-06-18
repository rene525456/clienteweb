<?php
	// isset determina si una variable está bien definida y no es nula
	if(isset($_POST)){
		echo $_POST['username'];
		echo '<br>';
		echo $_POST['password'];
	}
?>