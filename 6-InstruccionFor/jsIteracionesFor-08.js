/*Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/
function mostrar()
{
	var numero;
	var contadorDivisores;

	contadorDivisores = 0;
	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);

	for(var divisor=0;divisor<=numero;divisor=divisor+1)
	{
		
		if(numero%divisor==0)
		{
			contadorDivisores = contadorDivisores+1;
		}
		
	}
	if(contadorDivisores==2)
			{
				alert("El numero es primo");
			}
		else
			{
				alert("El numero no es primo")
			}

}//FIN DE LA FUNCIÓN