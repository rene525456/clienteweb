<html>  
    <head>  
        <title>PHP Ajax Crud using JQuery UI Dialog Box</title>  
	<link rel="stylesheet" href="css/jquery-ui.css"/>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
	<script src="js/jquery-3.2.1.min.js"></script>  
	<script src="js/jquery-ui.js"></script>
	<script src="js/crud.js"></script>
    </head>
    <body>  
        <div class="container">
		<h3 align="center">PHP, AJAX y JQuery </a></h3><br />
		<div align="right" style="margin-bottom:5px;">
		<button type="button" name="add" id="add" class="btn btn-success btn-xs">Agregar</button>
	</div>
	<div class="table-responsive" id="user_data"> </div>		

	<div id="user_dialog" title="Agregar">
		<form method="post" id="user_form">
			<div class="form-group">
				<label>Ingrese Nombre</label>
				<input type="text" name="first_name" id="first_name" class="form-control" />
				<span id="error_first_name" class="text-danger"></span>
			</div>
			<div class="form-group">
				<label>Enter Apellidos</label>
				<input type="text" name="last_name" id="last_name" class="form-control" />
				<span id="error_last_name" class="text-danger"></span>
			</div>
			<div class="form-group">
				<input type="hidden" name="action" id="action" value="Ingresar" />
				<input type="hidden" name="hidden_id" id="hidden_id" />
				<input type="submit" name="form_action" id="form_action" class="btn btn-info" value="Guardar" />
			</div>
		</form>
	</div>
	<div id="action_alert" title="Action"> </div>
	<div id="delete_confirmation" title="Confirmacion">
		<p>¿Quieres eliminar este registro?</p>
	</div>	
    </body>  
</html>  
