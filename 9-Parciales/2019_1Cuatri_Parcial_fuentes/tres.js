/*3)Nos ingresan una cantidad indeterminada de estadias de vacaciones, validando los datos
ingresados: nombre del titular, lugar(bariloche, cataratas, o salta), 
temporada (otoño, invierno, primavera, verano), cantidad de personas que viajan.
Informar:
a.El lugar mas elegido.
b.El nombre del titular que lleva mas pasajeros.
c.el promedio de personas por viaje, que viajan en invierno.
*/
function mostrar()
{
    var nombre;
    var lugar;
    var temporada;
    var clientesPorViaje;
    var respuesta;
    var lugarMasElegido;
    var contadorBariloche;
    var contadorCataratas;
    var contadorSalta;
    var flagMasPasajeros;
    var masClientesPorViaje;
    var nombreTitularMasPasajeros;
    var acumuladorInvierno;
    var contadorInvierno;
    var promedioInvierno;

    respuesta=true;
    contadorBariloche=0;
    contadorCataratas=0;
    contadorSalta=0;
    flagMasPasajeros=0;
    acumuladorInvierno=0;
    contadorInvierno=0;

    do
    {
        nombre=prompt("Ingrese nombre del titular");

        lugar=prompt("Ingrese destino (bariloche, cataratas o salta)");
        while(lugar!="bariloche" && lugar!="cataratas" && lugar!="salta")
        {
            lugar=prompt("Reingrese destino (bariloche, cataratas o salta)");
        }

        temporada=prompt("Ingrese temporada (otoño, invierno, primavera o verano)");
        while(temporada!="otoño" && temporada!="invierno" && temporada!="primavera" && temporada!="verano")
        {
            temporada=prompt("Reingrese temporada (otoño, invierno, primavera o verano)");
        }

        clientesPorViaje=prompt("Ingrese numero de personas mayor a 0 ");
        clientesPorViaje=parseInt(clientesPorViaje);
        while(clientesPorViaje<1 || isNaN(clientesPorViaje))
        {
            clientesPorViaje=prompt("Reingrese numero de personas mayor a 0 ");
            clientesPorViaje=parseInt(clientesPorViaje);
        }

        switch(lugar)
        {
            case"bariloche":
                contadorBariloche=contadorBariloche+1;
            break;
            case"cataratas":
                contadorCataratas=contadorCataratas+1;
            break;
            case"salta":
                contadorSalta=contadorSalta+1;
            break;
        }

        if(flagMasPasajeros==0 || clientesPorViaje>masClientesPorViaje)
        {
            masClientesPorViaje=clientesPorViaje;
            nombreTitularMasPasajeros=nombre;
            flagMasPasajeros=1;
        }

        if(temporada=="invierno")
        {
            acumuladorInvierno=acumuladorInvierno+clientesPorViaje;
            contadorInvierno=contadorInvierno+1;
        }

        respuesta=confirm("¿Desea ingresar mas estadias?");
    }while(respuesta==true);

    if(contadorBariloche>contadorCataratas && contadorBariloche>contadorSalta)
    {
        lugarMasElegido="Bariloche";
    }
    else
    {
        if(contadorSalta>contadorCataratas)
        {
            lugarMasElegido="Salta";
        }
        else
        {
            lugarMasElegido="Cataratas";
        }
    }

    console.log("El lugar mas elegido es: "+ lugarMasElegido);
    console.log("El nombre del titular que lleva mas pasajeros es: "+nombreTitularMasPasajeros);

    if(contadorInvierno>0)
    {
        promedioInvierno=acumuladorInvierno/contadorInvierno;
        console.log("El promedio de las personas que viajan en invierno es: "+promedioInvierno);
    }





}
/*
a.El lugar mas elegido.
b.El nombre del titular que lleva mas pasajeros.
c.el promedio de personas por viaje, que viajan en invierno.
*/