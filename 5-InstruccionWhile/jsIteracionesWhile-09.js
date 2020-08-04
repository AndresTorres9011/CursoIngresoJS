/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numero;
	var maximo;
	var minimo;
	var flag;
	var respuesta;
	
	flag = 0;
	respuesta = true;
	//respuesta='si';
	//while(respuesta==si)
	while(respuesta==true)
	{
		numero = prompt("¡Ingrese número!");
		numero = parseInt(numero);

		if(flag==0)
		{
		    maximo = numero;
			minimo = numero;
			flag = 1;
		}
		if(numero>maximo)
		{
			maximo = numero;
		}
		else
		{
			minimo = numero;
		}

		respuesta = confirm("¿Quiere ingresar otro número?")
		//respuesta=prompt("¿Quiere ingresar otro número? (si-no)");
	}
	txtIdMaximo.value=maximo;
	txtIdMinimo.value=minimo;
}//FIN DE LA FUNCIÓN