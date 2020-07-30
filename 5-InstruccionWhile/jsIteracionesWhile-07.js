/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var respuesta;
	var promedio;

	contador=0;
	acumulador=0;
	respuesta=true;

	while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;


		respuesta = confirm("¿Quiere ingresar mas numeros?")

	}
	promedio = acumulador/contador;
	
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;

	
}//FIN DE LA FUNCIÓN