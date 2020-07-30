function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		numeroIngresado = prompt("¡Ingrese numero!");
		numeroIngresado = parseInt(numeroIngresado);
		
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;	
	}
	
	promedio = acumulador/contador;
	txtIdSuma.value = acumulador; 
	txtIdPromedio.value = promedio;
}//FIN DE LA FUNCIÓN