
/*Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	//tomo la edad  
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	if(edad < 13 || edad >17)
	{
	   alert("La persona no es adolescente")
	}
	

}//FIN DE LA FUNCIÓN