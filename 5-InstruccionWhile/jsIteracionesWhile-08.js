/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var contadorNegativos;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;

	contador=0;
	contadorNegativos = 0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta=true;
	
	
		while(respuesta==true)
		{
			numeroIngresado = prompt("¡Ingrese un numero!");
			numeroIngresado = parseInt(numeroIngresado);
			
			if(numeroIngresado>0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				contador = contador + 1;
			}
			else
			{
				if(numeroIngresado<0)
				{
					//numeroIngresado = prompt("¡Ingrese un numero!");
				//numeroIngresado = parseInt(numeroIngresado);		
				multiplicacionNegativos = (multiplicacionNegativos) * (numeroIngresado);
				contadorNegativos = contadorNegativos + 1;
					//respuesta = confirm("¿Quiere ingresar mas numeros?");
				}
								
			}
			respuesta = confirm("¿Quiere ingresar mas numeros?");
		}
		
		txtIdSuma.value = sumaPositivos;

		if(contadorNegativos==0)
		{
			txtIdProducto.value = 0;
		}
		else
		{
			txtIdProducto.value = multiplicacionNegativos;
		}
		

}//FIN DE LA FUNCIÓN