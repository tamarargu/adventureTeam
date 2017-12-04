
$(document).ready(function(){
$('#enviar').click(function(){
		//window.location = "index.html?dato="+datosformJson;

	

	var datos=

	{"nombre":$('#nombre').val(),
	"telefono":$('#telefono').val(),
	"mail": $('#mail').val(),
	"fecha":$('#datetimepicker').val(),
	"artistas": $('#algo-que-seleccione').val()};
	



var datosformJson= JSON.stringify(datos);
console.log(datosformJson);

});									

	
});