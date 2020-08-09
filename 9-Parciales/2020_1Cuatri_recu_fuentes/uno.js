/*Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/

function mostrar()
{
	var tipoIngresado;
	var precioIngresado;
	var cantidadUnidadesIngresadas;
	var marcaIngresada;
	var fabricanteIngresado;

	var precioJabonMasCaro;
	var cantidadJabonMasCaro;
	var fabricanteJabonMasCaro;
	var flagJabonMasCaro;

	var tipoMasUnidades;
	var cantidadTipoMasUnidades;
	var acumuladorJabon;
	var contadorJabon;
	var acumuladorBarbijo;
	var contadorBarbijo;
	var acumuladorAlcohol;
	var contadorAlcohol;
	var promedio;
	var respuesta;

	flagJabonMasCaro=0;
	acumuladorJabon=0;
	contadorJabon=0;
	acumuladorBarbijo=0;
	contadorBarbijo=0;
	acumuladorAlcohol=0;
	contadorAlcohol=0;
	respuesta=true;

	for(var i=0;i<1;i=i+1)
	{
		tipoIngresado=prompt("Ingrese tipo (b-barbijo, j-jabón o a-alcohol");
		while(tipoIngresado!="b" && tipoIngresado!="j" && tipoIngresado!="a" )
		{
			tipoIngresado=prompt("Reingrese tipo (b-barbijo, j-jabón o a-alcohol");
		}

		precioIngresado=prompt("Ingrese precio entre $100 y $300");
		precioIngresado=parseInt(precioIngresado);
		while(precioIngresado<100 || precioIngresado>300 || isNaN(precioIngresado))
		{
			precioIngresado=prompt("Reingrese precio entre $100 y $300");
			precioIngresado=parseInt(precioIngresado);
		}

		cantidadUnidadesIngresadas=prompt("Ingrese cantidad entre 1 y 1000 unidades");
		cantidadUnidadesIngresadas=parseInt(cantidadUnidadesIngresadas);
		while(cantidadUnidadesIngresadas<1 || cantidadUnidadesIngresadas>1000 || isNaN(cantidadUnidadesIngresadas))
		{
			cantidadUnidadesIngresadas=prompt("Ringrese cantidad entre 1 y 1000 unidades");
			cantidadUnidadesIngresadas=parseInt(cantidadUnidadesIngresadas);
		}

		marcaIngresada=prompt("Ingrese marca");
		fabricanteIngresado=prompt("Ingrese fabricante");

		switch(tipoIngresado)
		{
			case"a":
				acumuladorAlcohol=acumuladorAlcohol+cantidadUnidadesIngresadas;
				contadorAlcohol=contadorAlcohol+1;
			break;
			case"b":
				acumuladorBarbijo=acumuladorBarbijo+cantidadUnidadesIngresadas;
				contadorBarbijo=contadorBarbijo+1;
			break;
			case"j":
				acumuladorJabon=acumuladorJabon+cantidadUnidadesIngresadas;
				contadorJabon=contadorJabon+1;

				if(flagJabonMasCaro==0 || precioIngresado>precioJabonMasCaro)
				{
					precioJabonMasCaro=precioIngresado;
					cantidadJabonMasCaro=cantidadUnidadesIngresadas;
					fabricanteJabonMasCaro=fabricanteIngresado;
					flagJabonMasCaro=1;
				}
			break;
		}

		if(acumuladorJabon>acumuladorBarbijo && acumuladorJabon>acumuladorAlcohol)
		{
			tipoMasUnidades="Jabon";
			cantidadTipoMasUnidades=acumuladorJabon;
			promedio=acumuladorJabon/contadorJabon;
			
		}
		else
		{
			if(acumuladorBarbijo>acumuladorJabon && acumuladorBarbijo>acumuladorAlcohol)
			{
				tipoMasUnidades="Barbijo";
				cantidadTipoMasUnidades=acumuladorBarbijo;
				promedio=acumuladorBarbijo/contadorBarbijo;
			}
			else
			{
				tipoMasUnidades= "Alcohol"
				cantidadTipoMasUnidades=acumuladorAlcohol;
				promedio=acumuladorAlcohol/contadorAlcohol
			}
		}
	}

	if(contadorJabon>0)
	{
		console.log("El jabon mas caro es: "+ precioJabonMasCaro+ " la cantidad es: "+ cantidadJabonMasCaro+ " y su fabricante es: "+ fabricanteJabonMasCaro);
	}
	else
	{
		console.log("No ingreso ningun jabon");
	}
	
	console.log("El tipo con mas unidades es: "+ tipoMasUnidades+" y su promedio de compra es: "+promedio);
	
	if(contadorBarbijo>0)
	{
		console.log("La cantidad total de barbijos es: "+acumuladorBarbijo);
	}
	else
	{
		console.log("No ingreso ningun barbijo");
	}

	/*a) Del más caro de los jabones, la cantidad de unidades y el fabricante
	b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	c) Cuántas unidades de Barbijos se compraron en total*/
}



/*Torres Caicedo Andres Felipe
Enunciado:
A)”bandera a full”
de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
sexo
altura
edad
nombre
se debe informar:
1-el nombre de la más alta de las mujeres
2-el nombre del  más viejo de los hombres 
3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)
NOTA:pedir datos por "prompt()" y mostrar por console.log()

function mostrar()
{
	var sexo;
	var altura;
	var edad;
	var nombre;
	var nombreMasAltaMujeres;
	var alturaMujerAlta;
	var nombreMasViejoHombres;
	var edadHombreViejo;
	var nombrePrimerAdolescente;
	var flagMasAlta;
	var flagHomabreMasViejo;
	var flagPrimerAdolescente;
	var respuesta;

	flagMasAlta=0;
	flagHomabreMasViejo=0;
	flagPrimerAdolescente=0;

	respuesta=true;

	do
	{
		nombre=prompt("Ingrese nombre");

		sexo=prompt("Ingrese sexo(f/m)");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Reingrese sexo(f/m)");
		}	

		altura=prompt("Ingrese altura");
		altura=parseFloat(altura)
		while(isNaN(altura))
		{
			altura=prompt("Reingrese altura");
		}		

		edad=prompt("Ingrese edad");
		edad=parseInt(edad)
		while(isNaN(edad))
		{
			edad=prompt("Reingrese edad");
		}

		if (edad>13 && edad<18 && flagPrimerAdolescente==0)
				{
					nombrePrimerAdolescente=nombre;
					flagPrimerAdolescente=1;
				}	

		switch(sexo)
		{
			case"f":

				if(flagMasAlta==0 || altura>alturaMujerAlta )
				{
					alturaMujerAlta=altura;
					nombreMasAltaMujeres=nombre;
					flagMasAlta=1;
				}
		
			break;
			case"m":

				if(flagHomabreMasViejo==0 || edad>edadHombreViejo )
					{
						edadHombreViejo=edad;
						nombreMasViejoHombres=nombre;
						flagHomabreMasViejo=1;
					}
			break;
		}
	
	 respuesta=confirm("Desea ingresar otro espectador");
	}while(respuesta==true);

	if(flagMasAlta>0)
	{
		console.log("El nombre de la mujer mas alta es: " +nombreMasAltaMujeres);
	}
	else
	{
		console.log("No ingreso ninguna mujer")
	}
	
	if(flagHomabreMasViejo>0)
	{
		console.log("El nombre de la persona mas vieja es: " +nombreMasViejoHombres);
	}
	else
	{
		console.log("No ingreso ningun hombre")
	}
	
	if(flagPrimerAdolescente>0)
	{
		console.log("El nombre del primer adolescente ingresado es: " +nombrePrimerAdolescente);	
	}
	else
	{
		console.log("No ingreso ningun adolescente")
	}
	
}*/
