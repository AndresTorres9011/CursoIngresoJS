/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  var producto;
  var cantidadBolsas;
  var precioBolsa;
  var descuento;
  var respuesta;
  var acumuladorBolsaCemento;
  var acumuladorBolsaArena;
  var acumuladorBolsaCal;
  var precioBolsaCemento;
  var precioBolsaArena;
  var precioBolsaCal;
  var totalBolsas;
  var precioTotalBolsas;
  var masCantidadBolsas;
  var importeSinDescuento;
  var importeConDescuento;

  acumuladorBolsaCemento=0;
  acumuladorBolsaArena=0;
  acumuladorBolsaCal=0;
  respuesta=true;

  do
  {
    producto=prompt("Ingrese producto (cemento-cal-arena)");
    while(producto!="cemento" && producto!="cal" && producto!="arena")
    {
      producto=prompt("Reingrese producto (cemento-cal-arena)");
    }

    cantidadBolsas=prompt("Ingrese cantidad de bolsas");
    cantidadBolsas=parseInt(cantidadBolsas);

    precioBolsa=prompt("Ingrese precio de cada bolsa (precio>0)");
    precioBolsa=parseInt(precioBolsa);
    while( precioBolsa<1)
    {
      precioBolsa=prompt("Reingrese precio de cada bolsa (precio>0)");
      precioBolsa=parseInt(precioBolsa);
    }

    switch(producto)
    {
      case"arena":
      acumuladorBolsaArena = acumuladorBolsaArena + cantidadBolsas;
      precioBolsaArena = cantidadBolsas * precioBolsa; 
      console.log(precioBolsaArena);
      break;
      case"cal":
      acumuladorBolsaCal = acumuladorBolsaCal + cantidadBolsas;
      precioBolsaCal = cantidadBolsas * precioBolsa;
      console.log(precioBolsaCal);
      break;
      default:
      acumuladorBolsaCemento = acumuladorBolsaCemento + cantidadBolsas;
      precioBolsaCemento = cantidadBolsas * precioBolsa;
      console.log(precioBolsaCemento);
      break;
    }
    
    

    respuesta=confirm("¿Desea ingresar mas datos?");
  }while(respuesta==true);

  totalBolsas = acumuladorBolsaCemento + acumuladorBolsaCal + acumuladorBolsaArena;
  document.write("<h2>la cantidad de bolsas es: "+ totalBolsas +"<br></h2>");
 /* if(totalBolsas>30)
  {
    descuento = 0.75;
  }
  if(totalBolsas>10 && totalBolsas<30)
  {
    descuento = 0.85;
  }
  else
  {
    descuento = 1;
  }*/

  precioTotalBolsas = precioBolsaArena + precioBolsaCal + precioBolsaCemento;
    console.log(precioTotalBolsas)
  
  //document.write("<h2>El precio total sin descuento es: "+ precioTotalBolsas +"<br></h2>");
  //importeSinDescuento = totalBolsas +
  
  if(acumuladorBolsaCemento>acumuladorBolsaCal && acumuladorBolsaCemento>acumuladorBolsaArena)
  {
    masCantidadBolsas = "cemento";
  }
  else
  {
    if(acumuladorBolsaCal>acumuladorBolsaCemento && acumuladorBolsaCal>acumuladorBolsaArena)
    {
      masCantidadBolsas = "cal";
    }
    else 
    {
      if(acumuladorBolsaArena>acumuladorBolsaCal && acumuladorBolsaArena>acumuladorBolsaCemento)
      {
        masCantidadBolsas = "arena";
      }
        
    }
  }
  

  document.write("<h2>El producto con mas cantidad de bolsas es: "+ masCantidadBolsas +"<br></h2>");

}
