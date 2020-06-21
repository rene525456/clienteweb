$(document).ready(function(){
	obtenerTareas();
	let modificar = false;
	function obtenerTareas(){
		$.ajax({
			url: 'listar.php',
			type:"GET",
			success: function(response){
				let tasks = JSON.parse(response);
				let template = '';
				tasks.forEach(task =>{
					template += `
					<tr taskId="${task.id}">
						<td>${task.id}</td>
						<td>
							<a href="#" class="task-item">${task.name} </a>
						</td>
						<td>${task.description}</td>
						<td>
							<button class="task-delete btn btn-danger">ELIMINAR</button>
						</td>
					</tr>
					`
				}); // termina el for
				$('#tasks').html(template);
			}
		});
	}

	$('#task-form').submit(e=>{
		const datos = {
			name: $('#name').val(),
			description: $('#description').val(),
			id: $('#taskId').val()
		};
		
		const url = modificar === false ? 'insertar.php':'modificar.php';

		$.post(url, datos, (response)=>{
			obtenerTareas();			
		});
	});

	$(document).on('click', '.task-item', (e)=>{
		const elemento = $(this)[0].activeElement.parentElement.parentElement;
		const id = $(elemento).attr('taskId');
		console.log(id);
		$.post('getTarea.php',{id},(response)=>{
			console.log(response);
			const task = JSON.parse(response);

			$('#name').val(task.name);
			$('#description').val(task.description);
			$('#taskId').val(task.id);
			modificar = true;
		});
	});

	$(document).on('click', '.task-delete', (e)=>{
		if(confirm('Desea eliminar el registros')){
			const elemento = $(this)[0].activeElement.parentElement.parentElement;
			const id = $(elemento).attr('taskId');
			$.post('eliminar.php',{id},(response)=>{
				obtenerTareas();
			});
		}
	});

	$('#search').keyup(function(){
		if($('#search').val()){
			let search = $('#search').val();
			$.ajax({
				url:'buscar.php',
				data:{search},
				type: 'POST',
				success: function(response){
					let tasks = JSON.parse(response);
		            let template = '';
		            tasks.forEach(task => {
		            	template+=`<li>${task.name}</li>`
		            });
		            $('#container').html(template);
				}
			});
		}
	})

});

