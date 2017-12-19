
$(document).ready(function(){
	var ul = "<ul id='error'></ul>"
	$('#msj').append(ul);
	
			
	$('#enviar').on('click',function(event){
		event.preventDefault();	

		var nombre=$('#nombre').val();
		var mail=$('#mail').val();
		var telefono=$('#telefono').val();
		var artistas=$('#algo-que-seleccione').val();
		var comentario=$('#comentario').val();
		var fecha=$('#datetimepicker').val();

		if(validar(nombre,mail,telefono,artistas) == true){
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

		/* si no --> serialize <--
		var datos = $('#formContacto').serialize();
		
		The .serialize() method creates a text string in
		standard URL-encoded notation. 
		It can act on a jQuery object that has selected individual form controls, 
		such as <input>, <textarea>, and <select>: 
		$( "input, textarea, select" ).serialize();*/
			
		
		$.ajax({
		url:"../php/addTurno.php",
		type:"post",
		data:datosformJson,
		success: function (response) {
			if(response != false) { 
				alert ('Turno confirmado')
			}else{
				alert('Turno no disponible')


		}
			

	}
});
		

});									

	
});


function validarRequeridos(campo){
	
	campo.trim();

	if(campo.length == 0){

		return false;
	}
	return true;
}

function validarMail(mail){

  mail.trim();

  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if(emailRegex.test(mail)){

  	return true;
  }

  return false;
}

function  validarSelects(valor){
	if (valor=="0"){
		return false;
	}else{
		return true;
	}
}


function validar(nombre,mail,telefono,artistas){
	valido=true;
	if(validarRequeridos(nombre)==false){
		msg = "<li>El nombre es un campo requerido</li>";
		$('#error').append(msg);
		valido = false;

	}
	if(validarRequeridos(mail)==false){
		msg = "<li>El mail es un campo requerido</li>";
		$('#error').append(msg);
		valido = false;

	}else{
		if(validarMail(mail) == false){

				msg = "<li>Debe ingresar mail valido.</li>";
				$('#error').append(msg);
				valido = false;	
			}
	}

	if(validarRequeridos(telefono)==false){
		msg = "<li>El telefono es un campo requerido</li>";
		$('#error').append(msg);
		valido = false;

	}
	if (validarSelects(artistas)==false) {
		msg="<li>No elegiste artista</li>";
		$('#error').append(msg);
		valido = false;
	}

	/*if (validarRequeridos(comentario)==false) {
		msg= "<li>comentario es un campo requerido</li>";
		$('#error').append(msg);
		valido = false;
	}*/

	/*if (validarRequeridos(fecha)==false) {
		msg= "<li>La fecha es un campo requerido</li>";
		$('#error').append(msg);
		valido = false;

	}*/
	return valido;

}










