/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 
'Es soltero y no es menor.'*/
function mostrar()
{
	//tomo la edad  
	var edad;
	var soltero;
	var casado;
	var divorciado;
	

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	soltero = estadoCivil.value;
	casado = estadoCivil.value;
	divorciado = estadoCivil.value;
	
	
	if( edad >17 && estadoCivil == soltero )
	{
	   alert("Es soltero y no es menor.")
	}
	


}//FIN DE LA FUNCIÓN