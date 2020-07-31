/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta=true;
	
	
		while(respuesta==true)
		{
			numeroIngresado = prompt("¡Ingrese un numero!");
			numeroIngresado = parseInt(numeroIngresado);
			respuesta = confirm("¿Quiere ingresar mas numeros?");
			if(numeroIngresado>0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				contador = contador + 1;
			}
			else
			{
				//numeroIngresado = prompt("¡Ingrese un numero!");
				//numeroIngresado = parseInt(numeroIngresado);		
					multiplicacionNegativos = (multiplicacionNegativos) * (numeroIngresado);
					contador = contador + 1;
		
					//respuesta = confirm("¿Quiere ingresar mas numeros?");				
			}
		}
		txtIdSuma.value = sumaPositivos;
		txtIdProducto.value = multiplicacionNegativos;
	

}//FIN DE LA FUNCIÓN