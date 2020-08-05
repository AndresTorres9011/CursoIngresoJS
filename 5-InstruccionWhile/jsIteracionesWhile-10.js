/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numero;
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorNumerosPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	respuesta = true;
	sumaNegativos = 0;
	sumaPositivos = 0; 
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorNumerosPares = 0;

	//respuesta="si";

	//while(respuesta=="si")
	while(respuesta==true)
	{
		numero = prompt("Ingrese un número")
		numero = parseInt(numero)

		if(numero>0)
		{
			sumaPositivos = sumaPositivos + numero;
			contadorPositivos = contadorPositivos + 1;
		}
		if(numero==0)
		{
			contadorCeros = contadorCeros + 1;
			
		}

		if(numero<0)
		{
			sumaNegativos = (sumaNegativos)+ (numero);
			contadorNegativos = contadorNegativos + 1;
		}
		if(numero %2 == 0 && numero!=0)
		{
			contadorNumerosPares = contadorNumerosPares + 1;
		}
		
		respuesta = confirm("¿Quiere ingresar mas numeros?");
		//respuesta=prompt("desea continuar?");
	}//fin del while variable % 2 = 0;

	promedioPositivos = sumaPositivos/contadorPositivos;
	promedioNegativos = sumaNegativos/contadorNegativos;
	diferencia = sumaPositivos - (sumaNegativos);

	document.write("<h2>La suma de positivos es: "+sumaPositivos+"<br></h2>");
	document.write("<h2>La suma de negativos es: "+sumaNegativos+"<br></h2>");
	document.write("<h2>La cantidad de numeros positivos es: "+contadorPositivos+"<br></h2>");
	document.write("<h2>La cantidad de numeros negativos es: "+contadorNegativos+"<br></h2>");
	document.write("<h2>La cantidad de 0 es: "+contadorCeros+"<br></h2>");
	document.write("<h2>La cantidad de numeros pares es: "+contadorNumerosPares+"<br></h2>");
	document.write("<h2>El promedio de numeros positivos es: "+promedioPositivos+"<br></h2>");
	document.write("<h2>El promedio de numeros negativos es: "+promedioNegativos+"<br></h2>");
	document.write("<h2>La diferencia entre positivos y negativos es: "+diferencia+"<br></h2>");

}//FIN DE LA FUNCIÓN