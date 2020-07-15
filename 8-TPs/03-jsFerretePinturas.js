/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaUno ;

    temperaturaUno = txtIdTemperatura.value

    temperaturaDos = (temperaturaUno - 32) * 5/9 ;
    temperaturaDos = temperaturaDos.toFixed(2);

    alert ( + temperaturaUno + "° Fahrenheit son " + temperaturaDos + "° Centígrados" )

}

function CentigradosFahrenheit () 
{
	var temperaturaUno ;

    temperaturaUno = txtIdTemperatura.value
    //temperaturaUno = parseInt (temperaturaUno);

    temperaturaDos = ( temperaturaUno * 9/5 ) + 32;
    temperaturaDos = temperaturaDos.toFixed(2);

    alert ( + temperaturaUno + "° Centígrados son " + temperaturaDos + "° Fahrenheit " )

}
