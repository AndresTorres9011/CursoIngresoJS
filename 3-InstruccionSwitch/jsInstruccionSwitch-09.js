/*TORRES CAICEDO ANDRES FELIPE
  Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
  se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
  en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene
  un descuento del 20%
  en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene 
  un aumento del 20%
  en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene
   un aumento del 10% y Cordoba tiene el precio sin descuento*/
function mostrar()
{
	var estacionIngresada; 
	var destino;
	var estadia;
	var porcentaje;
	
	
	estadia = 15000
	estacionIngresada =txtIdEstacion.value;
    destino = txtIdDestino.value;
	
	switch(destino)
	{
		case "Bariloche":
			switch(estacionIngresada)
			{
				case "Invierno":
					 porcentaje = 1.20;
				break;	 
				case "Verano":
					porcentaje = 0.80;
				break;
				default:
					porcentaje = 1.10;	
			}
		break;	
		case "Cataratas":
			switch(estacionIngresada)
			{
				case "Invierno":
					 porcentaje = 0.90;
				break;	 
				default:
					porcentaje = 1.10;	
			}
		break;	
		case "Cordoba":
			switch(estacionIngresada)
			{
				case "Invierno":
					 porcentaje = 0.90;
				break;	 
				case "Verano":
					porcentaje = 1.10;
				break;
				default:
					porcentaje = 1;	
			}
		break;	
		case "Mar del plata":
			switch(estacionIngresada)
			{
				case "Invierno":
					 porcentaje = 0.80;
				break;	 
				case "Verano":
					porcentaje = 1.20;
				break;
				default:
					porcentaje = 1.10;	
			}
		break;			
	}
	estadia = estadia * porcentaje;
	alert("El precio de la estadia es $"+estadia)

	/*switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			 {
				case "Bariloche":
					porcentaje = 1.20;
				break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 0.90;
				break;
				default:
					porcentaje = 0.80;
			 }
		break; 
		case "Verano":
			switch(destino)
			 {
				case "Bariloche":
					porcentaje = 0.80;
				break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 1.10;
				break;
				default:
					porcentaje = 1.20;
			 }
		break;  
		case "Otoño":
		case "Primavera":	
			switch(destino)
			 {
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					porcentaje = 1.10;
				break;
				default:
					porcentaje = 1;
			 }
		break;   
	}
	estadia = estadia * porcentaje;
	alert("El precio de la estadia es $"+estadia)*/

}//FIN DE LA FUNCIÓN