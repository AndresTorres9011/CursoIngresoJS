/*Torres Caicedo Andres Felipe
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

function mostrar()
{
	//tomo la edad  
	//tomo la edad  
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	if( edad >17 )
	{
	   alert("La persona es mayor de edad")
	}
	 else if (edad > 12 && edad <18)
	 {
		alert("La persona es adolescente")
	 }
	 else if (edad <13) 
	 {
		alert("La edad corresponde a la de un niñ@")
	 }
     


}//FIN DE LA FUNCIÓN