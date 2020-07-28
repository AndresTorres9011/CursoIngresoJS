/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/
function mostrar()
{
	//tomo el mes
	var mesDelAño;

	mesDelAño = txtIdMes.value;

	switch (mesDelAño)
	{
	 case "Septiembre": 
	 case "Noviembre":
	 case "Junio":	 
	 case "Abril":
		 alert("Tiene 30 días");
		 break;
	 case "Febrero":
		 alert("Tiene 28 días");
		 break;
	 default:
		alert("Tiene 31 días");		 	 
	}


}//FIN DE LA FUNCIÓN