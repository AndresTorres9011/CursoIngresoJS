/*
Enunciado:
de 5 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
 nombre, sexo, temperatura y edad.
a.Informar la cantidad de personas de cada sexo.
b.la edad promedio en total.
c.la mujer con mas temperatura (si la hay)
Pedir datos por prompt y mostrar por document.write o console.log.
*/
function mostrar()
{
    var edad;
    var nombre;
    var sexo;
    var temperatura;
    var contadorHombres;
    var contadorMujeres;
    var acumuladorEdadTotal;
    var totalPersonas;//hombres + mujeres
    var promedio;
    var mujerMasTemperatura;
    var nombreMujerMasTemperatura

    contadorHombres=0;
    contadorMujeres=0;
    acumuladorEdadTotal=0;
    
    for(var i=0;i<5;i=i+1)
    {
        nombre=prompt("Ingrese nombre");

        sexo=prompt("Ingrese sexo f o m");
        while(sexo!="f" && sexo!="m")
        {
            sexo=prompt("Reingrese sexo f o m");
        }

        edad=prompt("Ingrese edad");
        edad=parseInt(edad);
        while(isNaN(edad))
        {
            edad=prompt("Reingrese edad");
            edad=parseInt(edad);
        }

        temperatura=prompt("Ingrese temperatura");
        temperatura=parseInt(temperatura);
        while(isNaN(temperatura))
        {
            temperatura=prompt("Reingrese temperatura");
            temperatura=parseInt(temperatura);
        }
        
        acumuladorEdadTotal = acumuladorEdadTotal + edad;

        switch(sexo)
        {
            case"f":

                if(contadorMujeres==0 || temperatura>mujerMasTemperatura)
                {
                    mujerMasTemperatura=temperatura;
                    nombreMujerMasTemperatura=nombre;
                }

                contadorMujeres=contadorMujeres+1;
            break;
            case"m":
            contadorHombres=contadorHombres+1;
            break;
        }
    }

    totalPersonas=contadorHombres+contadorMujeres;

    promedio=acumuladorEdadTotal/totalPersonas;
    
    if(contadorHombres>0)
    {
        console.log("Los hombres ingresados son: "+ contadorHombres)
    }

    if(contadorMujeres>0)
    {
        console.log("Las mujeres ingresadas son: "+ contadorMujeres)
        console.log("Las mujer con mas temperatura es: "+ nombreMujerMasTemperatura)
    }

    console.log("La edad promedio en total es: "+promedio)
}
/*a.Informar la cantidad de personas de cada sexo.
b.la edad promedio en total.
c.la mujer con mas temperatura (si la hay)
*/