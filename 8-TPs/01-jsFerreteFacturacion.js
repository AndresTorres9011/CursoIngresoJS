/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;

	var precioDos;

	var precioTres;

	precioUno  = txtIdPrecioUno.value;
    precioDos  = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

	precioUno  = parseInt (precioUno);
    precioDos  = parseInt (precioDos);
    precioTres = parseInt (precioTres);

    suma = precioUno + precioDos + precioTres ;

	
	alert ( "La suma de los tres productos es: $ " + suma  );
}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;

	precioUno  = txtIdPrecioUno.value;
    precioDos  = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

	precioUno  = parseInt (precioUno);
    precioDos  = parseInt (precioDos);
    precioTres = parseInt (precioTres);
    
    promedio = (precioUno + precioDos + precioTres) / 3 ;

	
	alert ( "El promedio de los tres productos es: $" + promedio ) ;
}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;

	precioUno  = txtIdPrecioUno.value;
    precioDos  = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

	precioUno  = parseInt (precioUno);
    precioDos  = parseInt (precioDos);
    precioTres = parseInt (precioTres);
    
    precioFinal = (precioUno + precioDos + precioTres) * 1.21 ;

	
	alert ( "El precio final mas iva es: $" + precioFinal ) ;
}