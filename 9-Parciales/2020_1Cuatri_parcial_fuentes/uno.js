
/*Torres Caicedo Andres Felipe
Enunciado:
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	var producto;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var alcoholMenorPrecio;
	var alcoholBaratoFabricante;
	var cantidadAlcoholBarato;
	var contadorAlcohol;
	var sumaAlcohol;
	var contadorBarbijo;
	var sumaBarbijo;
	var contadorJabon;
	var sumaJabon;
	var masProductos;
	var promedio;
	var flagAlcohol;
	
	

	cantidadAlcoholBarato=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;
	sumaAlcohol=0;
	sumaBarbijo=0;
	sumaJabon=0;
	flagAlcohol=0;

	for(var i=0;i<5;i=i+1)
	{
		producto=prompt("Ingrese producto (barbijo, jabon o alcohol)");
		while(producto!="barbijo" && producto!="jabon" &&producto!="alcohol")
		{
			producto=prompt("Reingrese producto (barbijo, jabon o alcohol)");
		}

		precio=prompt("Ingrese el precio del producto ($100 y $300)");
		precio=parseInt(precio);
		while(precio<100 || precio>300 || isNaN(precio))
		{
			precio=prompt("Reingrese el precio del producto ($100 y $300)");
		    precio=parseInt(precio);
		}

		cantidad=prompt("Ingrese cantidad de producto(0-1000 unidades)");
		cantidad=parseInt(cantidad);
		while(cantidad<1 || cantidad>1000 || isNaN(cantidad))
		{
			cantidad=prompt("Reingrese cantidad de producto(0-1000 unidades)");
			cantidad=parseInt(cantidad);
		}

		marca=prompt("Ingrese marca");
		fabricante=prompt("Ingrese fabricante");

		switch(producto)
		{
			case"alcohol":
			contadorAlcohol = contadorAlcohol+1;
			sumaAlcohol = sumaAlcohol + cantidad;

				if(flagAlcohol==0 || precio<alcoholMenorPrecio)
				{
					alcoholMenorPrecio=precio;
					alcoholBaratoFabricante=fabricante;
					cantidadAlcoholBarato=cantidad;
					flagAlcohol=1;
				}
				//else
				//{
				//	if(precio<alcoholMenorPrecio)
				//	{
				//	alcoholMenorPrecio=precio;
					//alcoholBaratoFabricante=fabricante;
					//cantidadAlcoholBarato=cantidad;	
					//}
				//}
			break;

			case"jabon":
			contadorJabon = contadorJabon+1;
			sumaJabon = sumaJabon + cantidad;
			break;

			default:
			contadorBarbijo=contadorBarbijo+1;
			sumaBarbijo=sumaBarbijo+cantidad;
			break;

		}
	}
	if(sumaAlcohol>sumaJabon && sumaAlcohol>sumaBarbijo)
	{
		masProductos="alcohol";
		promedio=sumaAlcohol/contadorAlcohol;
	}
	else
	{
		if(sumaJabon>sumaAlcohol && sumaJabon>sumaBarbijo)
		{
		masProductos="jabon";
		promedio=sumaJabon/contadorJabon;
		}
		else
		{
			if(sumaBarbijo>sumaJabon && sumaBarbijo>sumaAlcohol)
			{
			masProductos="barbijo";
			promedio=sumaBarbijo/contadorBarbijo;
			}	
		}
	
	}
	
	document.write("<h2>La cantidad del alcohol mas barato es: "+ cantidadAlcoholBarato +" su fabricante es:" + alcoholBaratoFabricante +" y su precio es: "+ alcoholMenorPrecio + "<br></h2>");
	document.write("<h2>El producto con mas articulos es: "+ masProductos +" y su promedio por compra es:" +promedio+"<br></h2>");
	document.write("<h2>La cantidad de jabones en total es: "+ sumaJabon + " unidades <br></h2>");

}