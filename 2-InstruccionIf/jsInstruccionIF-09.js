/*Torres Andres
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/
function mostrar()

{
	var numeroAleatorio;
	var minimo;
	var maximo;

	minimo=1;
	maximo=10;

	numeroAleatorio = Math.round(Math.random() * (maximo - minimo) + minimo);

	//numeroAleatorio = Math.floor(Math.random() * 10)+ 1;

	alert (numeroAleatorio);

}//FIN DE LA FUNCIÓN