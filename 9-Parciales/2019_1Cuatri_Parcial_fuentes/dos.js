/*B)De una compra debes ingresar una cantidad indeterminada de productos,validando los
siguientes datos: marca, precio, peso en kg, tipo (solido o liquido)
a.Informar el peso total de la compra.
b.La marca del mas caro de los liquidos.
c.la marca del mas liviano de los solidos.
*/
function mostrar()
{
    var marca;
    var precio;
    var peso; 
    var tipo;
    var respuesta;
    var acumuladorPesoTotal;
    var flagMasCaroLiquidos;
    var precioMasCaroLiquidos;
    var marcaMasCaroLiquidos;
    var flagMasLivianoSolidos;
    var menosPesadoSolidos;
    var marcaMenosPesadoSolidos;

    respuesta=true;
    acumuladorPesoTotal=0;
    flagMasCaroLiquidos=0;
    flagMasLivianoSolidos=0;

    do
    {
        marca=prompt("Ingrese marca del producto");

        precio=prompt("Ingrese precio mayor a 0");
        precio=parseInt(precio);
        while(precio<1 || isNaN(precio))
        {
            precio=prompt("Reingrese precio mayor a 0");
            precio=parseInt(precio);
        }

        peso=prompt("Ingrese peso en kg");
        peso=parseFloat(peso);
        while(peso<1 || isNaN(peso))
        {
            peso=prompt("Reingrese peso en kg");
            peso=parseFloat(peso);
        }

        tipo=prompt("Ingrese tipo producto (l-liquido o s-solido)");
        while(tipo!="l" && tipo!="s")
        {
            tipo=prompt("Reingrese tipo producto (l-liquido o s-solido)");
        }

        acumuladorPesoTotal=acumuladorPesoTotal+peso;

        switch(tipo)
        {
            case"l":
                if(flagMasCaroLiquidos==0 || precio>precioMasCaroLiquidos)
                {
                    precioMasCaroLiquidos=precio;
                    marcaMasCaroLiquidos=marca;
                    flagMasCaroLiquidos=1;
                }
            break;
            case"s":
                if(flagMasLivianoSolidos==0 || peso<menosPesadoSolidos)
                {
                    menosPesadoSolidos=peso;
                    marcaMenosPesadoSolidos=marca;
                    flagMasLivianoSolidos=1;
                }
            break;
        }

        respuesta=confirm("¿Desea ingresar mas productos?")
    }while(respuesta==true);

    console.log("El peso total de la compra es: "+acumuladorPesoTotal);

    if(flagMasCaroLiquidos>0)
    {
        console.log("La marca del producto mas caro de los liquidos es: "+marcaMasCaroLiquidos);
    }

    if(flagMasLivianoSolidos>0)
    {
        console.log("La marca del producto mas liviano de los solidos es: "+marcaMenosPesadoSolidos);
    }
}
/*
a.Informar el peso total de la compra.
b.La marca del mas caro de los liquidos.
c.la marca del mas liviano de los solidos.*/