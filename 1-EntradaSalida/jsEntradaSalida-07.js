/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;

	var numeroDos;

	var suma;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt (numeroUno);
	numeroDos = parseInt (numeroDos);
    suma = numeroUno + numeroDos;

	
	alert ( "La suma de los numeros es: " + suma  );	
}

function restar()
{
	var numeroUno;

	var numeroDos;

	var resta;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	resta = numeroUno - numeroDos;

	alert ( "La resta de los numeros es: " + resta  );
}

function multiplicar()
{ 
	var numeroUno;

	var numeroDos;

	var multiplicacion;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	multiplicar = numeroUno * numeroDos;

	alert ( "La multiplicación de los numeros es: " + multiplicar  );
}

function dividir()
{
	var numeroUno;

	var numeroDos;

	var dividir;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	dividir = numeroUno / numeroDos;

	alert ( "La división de los numeros es: " + dividir  );	
}

