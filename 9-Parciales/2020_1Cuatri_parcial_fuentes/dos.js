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
  var respuesta;
  var acumuladorBolsaCemento;
  var acumuladorBolsaArena;
  var acumuladorBolsaCal;
  //var acumuladorPrecioBolsaCemento;
  //var acumuladorPrecioBolsaArena;
  //var acumuladorPrecioBolsaCal;
  //var importeBolsaCemento;
  //var importeBolsaArena;
  //var importeBolsaCal;
  //var acumuladorImporteBolsaCemento;
  //var acumuladorImporteBolsaArena;
  //var acumuladorImporteBolsaCal;
  var acumuladorImporteTotalBolsas;
  var totalBolsas;
  var importeTotalBolsas;
  var masCantidadBolsas;
  var importeConDescuento;
  var flagArena;
  var flagCal;
  var flagCemento;
  var precioBolsaMasCaroCemento;
  var precioBolsaMasCaroCal;
  var precioBolsaMasCaroArena;
  var precioMasCaroBolsas;

  //acumuladorPrecioBolsaCemento=0;
  //acumuladorPrecioBolsaArena=0;
  //acumuladorPrecioBolsaCal=0;
  acumuladorBolsaCemento=0;
  acumuladorBolsaArena=0;
  acumuladorBolsaCal=0;
  acumuladorImporteTotalBolsas=0;
  //acumuladorImporteBolsaCemento=0;
  //acumuladorImporteBolsaArena=0;
  //acumuladorImporteBolsaCal=0;
  respuesta=true;
  flagArena=0;
  flagCal=0;
  flagCemento=0;


  do
  {
      producto=prompt("Ingrese producto (cemento-cal-arena)");
      while(producto!="cemento" && producto!="cal" && producto!="arena")
      {
        producto=prompt("Reingrese producto (cemento-cal-arena)");
      }

      cantidadBolsas=prompt("Ingrese cantidad de bolsas");
      cantidadBolsas=parseInt(cantidadBolsas);

      precioBolsa=prompt("Ingrese precio de cada bolsa ($precio mayor que 0)");
      precioBolsa=parseInt(precioBolsa);
      while( precioBolsa<1)
      {
        precioBolsa=prompt("Reingrese precio de cada bolsa ($precio mayor que 0)");
        precioBolsa=parseInt(precioBolsa);
      }

      switch(producto)
      {
        case"arena":
        acumuladorBolsaArena = acumuladorBolsaArena + cantidadBolsas;
        //acumuladorPrecioBolsaArena = acumuladorPrecioBolsaArena + precioBolsa;
        //importeBolsaArena = cantidadBolsas * precioBolsa;
        //acumuladorImporteBolsaArena = acumuladorImporteBolsaArena + importeBolsaArena; 
        console.log(acumuladorBolsaArena);
        //console.log(acumuladorPrecioBolsaArena);
        //console.log(importeBolsaArena);
        //console.log(acumuladorImporteBolsaArena);

        if(flagArena==0)
          {
            precioBolsaMasCaroArena=precioBolsa;
            flagArena=1;
          }
          else
          {
            if(precioBolsa>precioBolsaMasCaroArena)
            {
              precioBolsaMasCaroArena=precioBolsa;
            }
          }
          console.log(precioBolsaMasCaroArena);
        break;
        case"cal":
        acumuladorBolsaCal = acumuladorBolsaCal + cantidadBolsas;
       // acumuladorPrecioBolsaCal = acumuladorPrecioBolsaCal + precioBolsa;
        //importeBolsaCal =  cantidadBolsas * precioBolsa;
        //acumuladorImporteBolsaCal = acumuladorImporteBolsaCal + importeBolsaCal;
        console.log(acumuladorBolsaCal);
        //console.log(acumuladorPrecioBolsaCal);
        //console.log(acumuladorImporteBolsaCal);

        if(flagCal==0)
          {
            precioBolsaMasCaroCal=precioBolsa;
            flagCal=1;
          }
          else
          {
            if(precioBolsa>precioBolsaMasCaroCal)
            {
              precioBolsaMasCaroCal=precioBolsa;
            }
          }
          console.log(precioBolsaMasCaroCal);
        break;
        default:
        acumuladorBolsaCemento = acumuladorBolsaCemento + cantidadBolsas;
        //acumuladorPrecioBolsaCemento = acumuladorPrecioBolsaCemento + precioBolsa;
        //importeBolsaCemento =  cantidadBolsas * precioBolsa;
        //acumuladorImporteBolsaCemento = acumuladorImporteBolsaCemento + importeBolsaCemento;
        console.log(acumuladorBolsaCemento);
        //console.log(acumuladorPrecioBolsaCemento);
        //console.log(acumuladorImporteBolsaCemento);

        if(flagCemento==0)
        {
          precioBolsaMasCaroCemento=precioBolsa;
          flagCemento=1;
        }
        else
        {
          if(precioBolsa>precioBolsaMasCaroCemento)
          {
            precioBolsaMasCaroCemento=precioBolsa;
          }
        }
        console.log(precioBolsaMasCaroCemento);
        break;
      } 
      acumuladorImporteTotalBolsas = acumuladorImporteTotalBolsas+(precioBolsa*cantidadBolsas);
     
      respuesta=confirm("¿Desea ingresar mas datos?");
  }while(respuesta==true);

 // importeTotalBolsas = acumuladorImporteBolsaArena + acumuladorImporteBolsaCal + acumuladorImporteBolsaCemento;
  importeTotalBolsas = acumuladorImporteTotalBolsas;
   console.log(importeTotalBolsas)
   //document.write("<h2>El importe total sin descuento es: "+ importeTotalBolsas +"<br></h2>");

  totalBolsas = acumuladorBolsaCemento + acumuladorBolsaCal + acumuladorBolsaArena;
  //document.write("<h2>La cantidad de bolsas es: "+ totalBolsas +"<br></h2>");

  if(totalBolsas>30)
  {
    importeConDescuento = importeTotalBolsas * 0.75;
  }
  else
  {
      if(totalBolsas>10 && totalBolsas<30)
    {
      importeConDescuento = importeTotalBolsas * 0.85;
    }
    else
    {
      importeConDescuento = "Usted no compro mas de 10 bolsas!!";
    }
  }
  //document.write("<h2>El importe con descuento es: "+ importeConDescuento +"<br></h2>");
  
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
  //document.write("<h2>El producto con mas cantidad de bolsas es: "+ masCantidadBolsas +"<br></h2>");

  if(precioBolsaMasCaroArena>precioBolsaMasCaroCal && precioBolsaMasCaroArena>precioBolsaMasCaroCemento)
  {
    precioMasCaroBolsas ="arena";
  }
  else
  {
    if(precioBolsaMasCaroCal>precioBolsaMasCaroArena && precioBolsaMasCaroCal>precioBolsaMasCaroCemento)
    {
    precioMasCaroBolsas = "cal";
    }
    else
    {
      if(precioBolsaMasCaroCemento>precioBolsaMasCaroArena && precioBolsaMasCaroCemento>precioBolsaMasCaroCal)
      {
        precioMasCaroBolsas = "cemento";
      }
    }
        

  }
  //document.write("<h2>El producto con el precio mas caro es: "+ precioMasCaroBolsas +"<br></h2>");

  document.write("<h2>El importe total sin descuento es: "+ importeTotalBolsas +"<br></h2>");
  document.write("<h2>La cantidad de bolsas es: "+ totalBolsas +"<br></h2>");
  document.write("<h2>El importe con descuento es: "+ importeConDescuento +"<br></h2>");
  document.write("<h2>El producto con mas cantidad de bolsas es: "+ masCantidadBolsas +"<br></h2>");
  document.write("<h2>El producto con el precio mas caro es: "+ precioMasCaroBolsas +"<br></h2>");

}
