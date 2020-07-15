/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;

    largo =  txtIdLargo.value;
    ancho =  txtIdAncho.value;
    largo  = parseInt (largo);
    ancho  = parseInt (ancho);

    perimetro = ( 2 * largo) + ( 2 * ancho)  ;

    alert ( "La cantidad de alambre a comprar es: " + (perimetro * 3) ) ;
    
   
}
function Circulo () 
{
    var radio;
    
    radio =  txtIdRadio.value;
    radio  = parseInt (radio);
    
    perimetro = 2 * 3.1416 * radio ;

    alert ( "La cantidad de alambre a comprar es: " + (perimetro * 3) ) ;
}
function Materiales () 
{
	var largo;
    var ancho;

    largo =  txtIdLargo.value;
    ancho =  txtIdAncho.value;
    largo  = parseInt (largo);
    ancho  = parseInt (ancho);

    area = largo * ancho  ;

    cemento = area * 2
    cal = area * 3

    alert ( " Se necesitan " + (cemento) + " bolsas de cemento y " + (cal) + " bolsas de cal. " ) ;
}