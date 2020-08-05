/*
Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado,
 y mostrar la cantidad de numeros pares encontrados.function mostrar()*/
 function mostrar()
 {
	var numero;
	var contador;

	contador=0;
	numero=prompt("Ingrese un numero")
	numero=parseInt(numero);

	document.write("<h2>El numero igresado es: "+ numero  +"<br></h2>");

	for(var contadorPares=2;contadorPares<=numero;contadorPares=contadorPares+2)
	{
		document.write("<h2>Los numeros pares son: "+ contadorPares +"<br></h2>");
			contador=contador+1;
	}
	 document.write("<h2> La cantidad de numeros pares es: "+ contador +"<br></h2>");

	/*for(var contadorPares= 0;contadorPares<=numero;contadorPares=contadorPares+1)
	{
		if(contadorPares%2==0 && contadorPares!=0)
		{
			document.write("<h2>Los numeros pares son: "+ contadorPares +"<br></h2>");
			contador=contador+1;
		}
		
			
		
	}
	document.write("<h2> La cantidad de numeros pares es: "+ contador +"<br></h2>");/*
	 
	/* var n1;
	 var i;
	 var j;

	 i= 2;
	 j=0;

	 n1=prompt("Ingrese un numero");
	 n1=parseInt(n1);

	 document.write("<h2>El numero igresado es: "+ n1  +"<br></h2>");

	 while(i<=n1)
	 {
		 
		document.write("<h2>Los numeros pares son: "+ i  +"<br></h2>");
		 i = i + 2;
		 j = j + 1;
	 }	
	 //document.write("<h2>Los numeros pares son: "+ i  +"<br></h2>");

	 document.write("<h2> La cantidad de numeros pares es: "+ j +"<br></h2>");
	 */
	 
 }