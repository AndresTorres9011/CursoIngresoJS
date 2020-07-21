/* Torres Caicedo Andres Felipe
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/
function mostrar()
{
	//tomo la edad  
	var edad;
	
	

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	document.getElementById("estadoCivil").value;
	
	
	
	if( edad <18 && estadoCivil != "Soltero" )
	{
	   alert("Es muy pequeño para NO ser soltero.")
	}
	


}//FIN DE LA FUNCIÓN