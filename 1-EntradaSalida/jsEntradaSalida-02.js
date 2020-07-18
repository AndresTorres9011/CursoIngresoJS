/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
/*	
    var nombre;/* Notacion camel case? todas las variables tiene que estar en minuscula cuando son de una 
    palabra, excepto que sea una palabra compuesta, es decir mas de una palabra
	var nombreCompleto;	
	nombre = "Andres"; /* EL SIGNO IGUAL FUNCIONA COMO OPERADOR DE ASIGNACION SIEMPRE TIENE QUE ESTAR A 
	LA IZQUIERDA LA VARIABLE , STRING SIEMPRE TIENE QUE ESTAR EN COMILLAS
	nombre = 1; //NUMBER
    nombre = true; // boolean  Puede ser falso o verdadero
	nombre = null // NULL 
    var dato ;
	dato = prompt("Ingrese un dato");
	alert(dato)
	ejercicio 02:
    se pide el ancho y largo de un terreno ,necesitamos informar el prerimetro y la supreficie.
    mostrar el siguiente mensaje.
    "el terreno tiene ??? x ??? su perimetro 
function mostrar()
{
total es de ??? y la superficie es de ???"
*/
function mostrar()
{
  var largo;
  var ancho;
  var perimetro;
  var area;

  largo = prompt("Ingrese el largo del terreno");
  ancho = prompt("Ingrese el ancho del terreno");

  largo = parseInt(largo);
  ancho = parseInt(ancho);

  perimetro = (2*largo) + (2*ancho);
  area = largo * ancho

  alert ("El terreno tiene " +largo+"x"+ancho+ " su perimetro total es de " +perimetro+ " , y la superficie es de" +area);

	
}

