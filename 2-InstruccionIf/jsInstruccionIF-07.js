/* Torres Caicedo Andres Felipe
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/
function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivilPersona;	
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	estadoCivilPersona = estadoCivil.value
	
	
	
	if( edad <18 && estadoCivilPersona != "Soltero" )
	{
	   alert("Es muy pequeño para NO ser soltero.")
	}
	


}//FIN DE LA FUNCIÓN