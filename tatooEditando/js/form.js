
$(document).ready(function(){
	var ul = $('#error');
	$('#msj').append(ul);

	/*$('#enviar').click(function(){*/
			//window.location = "index.html?dato="+datosformJson;

	$('#enviar').on('click',function(event){
		event.preventDefault();	

		var nombre=$('#nombre').val();
		var mail=$('#mail').val();
		var telefono=$('#telefono').val();
		var artistas=$('#algo-que-seleccione').val();
		var comentario=$('#comentario').val();
		var fecha=$('#datetimepicker').val();

		if(validar(nombre,mail,telefono) == true){
			var datos={
				"nombre":nombre,
				"telefono":telefono,
				"mail":mail,
				"fecha":fecha,
				"comentario":comentario,
				"artistas": artistas};
			
	
	
	
		var datosformJson= JSON.stringify(datos);
		console.log(datosformJson);
			
			
			
		}	
		

});									

	
});


function validarRequeridos(campo){
	
	campo.trim();

	if(campo.length == 0){

		return false;
	}
	
	return true;
}

function validar(nombre,mail,telefono){
	valido=true;
	if(validarRequeridos(nombre)==false){
		msg = "<li>El nombre es un campo requerido</li>";
		ul.append(msg);
		valido = false;

	}
	if(validarRequeridos(mail)==false){
		msg = "<li>El nombre es un campo requerido</li>";
		ul.append(msg);
		valido = false;

	}
	if(validarRequeridos(telefono)){
		msg = "<li>El nombre es un campo requerido</li>";
		ul.append(msg);
		valido = false;

	}
	return valido;

}

$ajax({
	url:"./",
	type:post,
	data:datosformJson,
	success: function (response) {
		if(response != false) { console.log(response); }

	}
});








