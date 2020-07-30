/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("Ingrese la clave.");

	while(claveIngresada!="utn750")
	{
		claveIngresada = prompt("Ingrese la clave correcta.");
	}
	alert("Bienvenido al sistema");
}//FIN DE LA FUNCIÓN
