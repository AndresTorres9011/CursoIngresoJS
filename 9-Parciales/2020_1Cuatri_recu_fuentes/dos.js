/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/
function mostrar()
{
  var productoIngresado;
  var cantidadBolsasIngresadas;
  var precioBolsaIngresado;
  var totalBolsas;
  var acumuladorPrecioBruto;
  var importeBruto;
  var importeDescuento;
  var respuesta;
  var acumuladorCantidadCal;
  var acumuladorCantidadCemento;
  var acumuladorCantidadArena;
  var productoMasCaro;
  var precioProductoMasCaro;
  var flagPrecioProductoMasCaro;
  var productoMasCantidadBolsas;

  acumuladorPrecioBruto=0;
  acumuladorCantidadCal=0;
  acumuladorCantidadCemento=0;
  acumuladorCantidadArena=0;
  flagPrecioProductoMasCaro=0;
  respuesta=true;

  do
  {
    
    productoIngresado=prompt("Ingrese producto (a-arena, c-cal, ce-cemento");
		while(productoIngresado!="a" && productoIngresado!="c" && productoIngresado!="ce" )
		{
			productoIngresado=prompt("Reingrese producto ((a-arena, c-cal, ce-cemento");
		}
    cantidadBolsasIngresadas=prompt("Ingrese cantidad mayor a 0");
    cantidadBolsasIngresadas=parseInt(cantidadBolsasIngresadas);
    while(cantidadBolsasIngresadas<1 || isNaN(cantidadBolsasIngresadas))
    {
      cantidadBolsasIngresadas=prompt("Ringrese cantidad mayor a 0");
      cantidadBolsasIngresadas=parseInt(cantidadBolsasIngresadas);
    }
		precioBolsaIngresado=prompt("Ingrese precio mayor a $0");
		precioBolsaIngresado=parseInt(precioBolsaIngresado);
		while(precioBolsaIngresado<1 || isNaN(precioBolsaIngresado))
		{
			precioBolsaIngresado=prompt("Reingrese precio mayor a $0");
			precioBolsaIngresado=parseInt(precioBolsaIngresado);
		}

    importeBruto=cantidadBolsasIngresadas*precioBolsaIngresado;
    acumuladorPrecioBruto=acumuladorPrecioBruto+importeBruto;

    if(flagPrecioProductoMasCaro==0 || precioBolsaIngresado>precioProductoMasCaro)
    {
      precioProductoMasCaro=precioBolsaIngresado;
      productoMasCaro=productoIngresado;
      flagPrecioProductoMasCaro=1;
    }
    
    switch(productoIngresado)
    {
      case"a":
      acumuladorCantidadArena=acumuladorCantidadArena+cantidadBolsasIngresadas;
      break;
      case"c":
      acumuladorCantidadCal=acumuladorCantidadCal+cantidadBolsasIngresadas;
      break;
      case"ce":
      acumuladorCantidadCemento=acumuladorCantidadCemento+cantidadBolsasIngresadas;
      break;

    }
    respuesta=confirm("¿Desea ingresar otro producto?");
  }while(respuesta==true);

  totalBolsas=acumuladorCantidadArena+acumuladorCantidadCal+acumuladorCantidadCemento;

  if(totalBolsas>=31)
  {
    importeDescuento= acumuladorPrecioBruto * 0.75;
  }
  else
  {
    if(totalBolsas>10 && totalBolsas<=30)
    {
      importeDescuento= acumuladorPrecioBruto * 0.85;
    }
  }

  if(acumuladorCantidadArena>acumuladorCantidadCal && acumuladorCantidadArena>acumuladorCantidadCemento)
  {
    productoMasCantidadBolsas="Arena"
  }
  else
  {
    if(acumuladorCantidadCal>acumuladorCantidadCemento)
    {
      productoMasCantidadBolsas="Cal"
    }
    else
      productoMasCantidadBolsas="Cemento"
  }
  
  console.log("El importe total a pagar, bruto sin descuento es:$"+acumuladorPrecioBruto);

  if(totalBolsas>10)
  {
    console.log("El importe total a pagar con descuento es:$"+importeDescuento);
  }
  
  console.log("El producto con mas cantidad de bolsas es: "+productoMasCantidadBolsas);
  console.log("El producto mas caro es: " +productoMasCaro+ " (c-cal,a-arena y ce-cemento)");
   
}
/*a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/

/*Enunciado b)”sin banderas”
Se debe ingresar 10:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un número)
CantidadDeHijos(0 y 10)
despues de validar todos los datos,
se debe informar:

1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven
NOTA:pedir datos por "prompt()" y mostrar por console.log(),
verificar que los datos  exitan antes de mostrarlos
function mostrar()
{
  sexo;
	var altura;
	var edad;
  var nombre;
  var dinero;
  var cantidadHijos;
  var contadorMujeres;
  var acumuladorAlturaMujeres;
  var nombrePersonaMasVieja;
  var edadPersonaMasVieja;
  var nombreMujerMasJoven;
  var edadMujerMasJoven;
  var promedioAlturaMujeres;
  

  contadorMujeres=0;
  acumuladorAlturaMujeres=0;
  

  for(var i=0;i<1;i=i+1)
  {
    nombre=prompt("Ingrese nombre");
  
		sexo=prompt("Ingrese sexo(f/m)");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Reingrese sexo(f/m)");
		}	

		altura=prompt("Ingrese altura entre 0.30 y 2.30 mtrs");
		altura=parseFloat(altura);
		while(altura<0.30 || altura>2.30 || isNaN(altura))
		{
			altura=prompt("Reingrese altura entre 0.30 y 2.30 mtrs");
		}		

		edad=prompt("Ingrese edad entre 1 y 115 años)");
		edad=parseInt(edad);
		while(edad<1 || edad >115 || isNaN(edad))
	  {
			edad=prompt("Reingrese edad entre 1 y 115 años");
    }
    
    dinero=prompt("Ingrese dinero");
    while(isNaN(dinero))
		{
			dinero=prompt("Reingrese dinero");
    }	
    
    cantidadHijos=prompt("Ingrese numero de hijos entre 1 y 10");
    cantidadHijos=parseInt(cantidadHijos);
    while(cantidadHijos<1 || cantidadHijos>10 || isNaN(cantidadHijos))
    {
      cantidadHijos=prompt("Reingrese numero de hijos entre 1 y 10");
    }

    if(i==0 || edad>edadPersonaMasVieja)
    {
      edadPersonaMasVieja=edad;
      nombrePersonaMasVieja=nombre;
    }

    switch(sexo)
    {
      case"f":
     // contadorMujeres = contadorMujeres + 1;
      //acumuladorAlturaMujeres = acumuladorAlturaMujeres + altura;

        if(contadorMujeres==0 || edad<edadMujerMasJoven)
        {
          edadMujerMasJoven=edad;
          nombreMujerMasJoven=nombre;
        }
        contadorMujeres = contadorMujeres + 1;
        acumuladorAlturaMujeres = acumuladorAlturaMujeres + altura;
      break;
    }
  }

  promedioAlturaMujeres=acumuladorAlturaMujeres/contadorMujeres;
  
  console.log("El nombre de la persona mas vieja es: " +nombrePersonaMasVieja)

  if(contadorMujeres>0)
  {
    console.log("El promedio de altura de las mujeres es: " +promedioAlturaMujeres)
    console.log("El nombre de la mujer mas joven es: " +nombreMujerMasJoven)
  } 
  else
  {
    console.log("No ingreso ninguna mujer")
  }
  
 
}
1- nombre de la persona con edad más vieja
2- promedioAlturaMujeres de altura de las mujeres
3- nombre de la mujer más joven*/