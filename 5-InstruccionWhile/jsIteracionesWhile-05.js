/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	
	sexoIngresado = prompt("Ingrese su sexo F ó M.");
	sexoIngresado = sexoIngresado.toUpperCase();
	while(sexoIngresado!="F" && sexoIngresado!="M")
	{
		sexoIngresado = prompt("Reingrese su sexo F ó M .");
		sexoIngresado = sexoIngresado.toUpperCase();
	}
	
	switch(sexoIngresado)
	{
		case "F":
			sexoIngresado = "Femenino";
		break;
		default:
			sexoIngresado = "Masculino";
	}
	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN