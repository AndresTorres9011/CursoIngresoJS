/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
ejercicio 03:
se pide dos importes, y un porcentaje de descuento (todo con prompt)
y se muestra el siguiente mensaje:
"los productos cuestan $??? y $??? , sumados son $??? ,tienen un descuento de $??? pesos, el precio total con descuento es $??? ,el iva es de $??? y el precio final con IVA es $???"
ej: si ingresa 100 , 300 con el descuento de 30, elmensaje deberiaser el siguiente:
"los prodcutos cuestan $100 y $300 , sumados son $400, tienen un descuento de $120 pesos, el precio total con descuento es $380 ,el iva es de $79,8 y el precio final con IVA es $459,8"
*/
function mostrar()
{
 /*   var dato;
	dato = txtIdNombre.value;
	alert(dato);
 */
	var importeUno;
	var importeDos;
	var porcentajeDescuento;
	var suma;
	var descuento;
	var precioDescuento;
	var iva;
	var precioFinal;

	importeUno = prompt("Ingrese el importe uno");
	importeDos = prompt("Ingrese el importe dos");
	porcentajeDescuento = prompt("Ingrese el porcentaje de descuento a aplicar");

	importeUno = parseInt(importeUno);
	importeDos = parseInt(importeDos);
	porcentajeDescuento = parseInt(porcentajeDescuento);

	suma = importeUno+importeDos;
	descuento = suma * (porcentajeDescuento/100);
	precioDescuento = suma - descuento;
	iva = precioDescuento * 0.21;
	precioFinal = precioDescuento + iva;

	alert("Los prodcutos cuestan $" +importeUno+" y $" +importeDos+" , sumados son $" +suma+ " tienen un descuento de $" +descuento+", el precio total con descuento es $" +precioDescuento+ ", el iva es de $" +iva+ " y el precio final con IVA es $" +precioFinal);







}


