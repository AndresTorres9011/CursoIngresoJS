/*Enunciado:
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado,
y mostrar la cantidad de numeros divisores encontrados.*/
function mostrar()
{
	var numero;
	var contadorDivisor;

    contadorDivisor=0;
	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);

	for( var divisor=0;divisor<=numero;divisor=divisor+1)
	{
		if(numero%divisor==0)
		{
			document.write("<h2> El numero es divisible por "+ divisor +" <br></h2>");
			contadorDivisor=contadorDivisor+1;
		}
	}
	
	document.write("<h2> La cantidad de numeros divisores son: "+ contadorDivisor +"<br></h2>");


}//FIN DE LA FUNCIÓN