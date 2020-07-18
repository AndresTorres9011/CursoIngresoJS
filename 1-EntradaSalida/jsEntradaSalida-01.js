/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
todo lo que este entre asterisco y barra es un comentario*/
	/*alert("Esto funciona de maravilla!!!");//esto es un comentario utilizando doble barra.
	confirm ("DESEAS CONTINUAR")
	//prompt ("CUAL ES TU NOMBRE")
	/*
		ejercicio 01:
se ingresa nombre del producto , el importe y el porcentaje de aumento a aplicar (por prompt).
y semuestra el siguient mensaje(por alert):
"el producto XXXX cuesta $xxxx sin aumento, tiene aumento de $XXXX y el precio final es: $xxxx, gracias por su compra"

*/
function mostrar()
{

var nombreProducto;
var importe;
var porcentajeImporte;
var aumento;
var precioFinal;

nombreProducto = prompt("Ingrese nombre del producto");
importe = prompt("Ingrese el importe");
porcentajeImporte = prompt("Ingrese el porcentaje de aumento a aplicar");

importe = parseInt(importe);
porcentajeImporte = parseInt(porcentajeImporte);

aumento = importe * (porcentajeImporte/100);
precioFinal = importe + aumento;

alert("El producto " + nombreProducto + " cuesta $" +importe+ " sin aumento, tiene un aumento de $" +aumento+ " y el precio final es: $" +precioFinal+ ", gracias por su compra!! ");
}