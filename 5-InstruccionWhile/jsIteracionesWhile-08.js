/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresadoPositivo;
	var numeroIngresadoNegativo;
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
		numeroIngresadoPositivo = prompt("¡Ingrese un numero!");
		numeroIngresadoPositivo = parseInt(numeroIngresadoPositivo);

		sumaPositivos = sumaPositivos + numeroIngresadoPositivo;
		contador = contador + 1;

		respuesta = confirm("¿Quiere ingresar mas numeros?");
		
	}

	while(respuesta==true)
	{
		numeroIngresadoNegativo = prompt("¡Ingrese un numero!");
		numeroIngresadoNegativo = parseInt(numeroIngresadoNegativo);

			multiplicacionNegativos = (multiplicacionNegativos) * (numeroIngresadoNegativo);
			contador = contador + 1;

			respuesta = confirm("¿Quiere ingresar mas numeros?");
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN