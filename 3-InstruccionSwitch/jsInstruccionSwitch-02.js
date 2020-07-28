/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/
function mostrar()
{
	//tomo el mes
	var mesDelAño;
	
	mesDelAño=txtIdMes.value;

	switch (mesDelAño)
	{
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":	
		case "Febrero":
			alert("Ya pasamos el frio, ahora calor!!!");	
			break;	
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno!!!");	
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio!!!");	
			break;
			

	}



}//FIN DE LA FUNCIÓN