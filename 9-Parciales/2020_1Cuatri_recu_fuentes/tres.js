function mostrar()
{

}

/*Enunciado c)”mixing bandera”
de una cantidad de animales indeterminada del zoológico debemos tomar lo siguiente
raza
peso
temperatura media del lugar donde habita
edad
si está en peligro de extinción( si o no)
se debe informar:

1-el promedio de edad total
2-la raza del más pesado
3-la temperatura máxima ingresada de los animales en extinción
NOTA:pedir datos por "prompt()" y mostrar por console.log()

function mostrar()
{
	var raza;
	var peso;
	var temperaturaMediaHabitat;
	var edad;
	var peligroExtincion;
	var acumuladorEdad;
	var contadorAnimales;
	var promedio;
	var razaMasPesado;
	var pesoMasPesado;
	var temperaturaMaxExtincion;
	var flagTemperatura;
	var respuesta;

	acumuladorEdad = 0;
	contadorAnimales= 0;
	flagTemperatura= 0;
	respuesta=true;

	do
	{
		raza=prompt("Ingrese raza");
  
		peso=prompt("Ingrese peso mayor a 0");
		peso=parseFloat(peso);
		while(peso<1 || isNaN(peso))
		{
			peso=prompt("Reingrese peso mayor a 0");
		}		

		temperaturaMediaHabitat=prompt("Ingrese temperatura media del habitat");
		temperaturaMediaHabitat=parseFloat(temperaturaMediaHabitat);
		while(isNaN(temperaturaMediaHabitat))
		{
			temperaturaMediaHabitat=prompt("Reingrese temperatura media del habitat");
		}	
		edad=prompt("Ingrese edad mayor a 0)");
		edad=parseInt(edad);

		while(edad<1 || isNaN(edad))
	 	{
			edad=prompt("Reingrese edad mayor a 0");
		}
		
		peligroExtincion=prompt("¿El animal se encuentra en peligro de extincion? (s-n)")
		while(peligroExtincion!="s" && peligroExtincion!="n")
		{
			peligroExtincion=prompt("Reingrese respuesta, ¿El animal se encuentra en peligro de extincion? (s-n) (s-n)");
		}	
	
		if(contadorAnimales==0 || peso>pesoMasPesado)
		{
			pesoMasPesado=peso;
			razaMasPesado=raza;
		}

		switch(peligroExtincion)
		{
			case"s":
				 if(flagTemperatura==0 || temperaturaMediaHabitat>temperaturaMaxExtincion)
				 {
					 temperaturaMaxExtincion=temperaturaMediaHabitat;
					 flagTemperatura=1;
				 }
			break;
		}

		acumuladorEdad = acumuladorEdad + edad;
		contadorAnimales = contadorAnimales + 1;

		respuesta=confirm("¿Desea ingresar otro animal?")
	}while(respuesta==true);

	promedio= acumuladorEdad/contadorAnimales;

	console.log("El promedio de las edades es: " +promedio);
	console.log("La raza del animal mas pesado es : " +razaMasPesado);

	if(flagTemperatura>0)
	{
		console.log("La temperatura maxima ingresada de los animales en extinción es:" +temperaturaMaxExtincion);
	}
	else
	{
		console.log("No ingreso ningun animal en peligro de extincion");
	}

}

1-el promedio de edad total
2-la raza del más pesado
3-la temperatura máxima ingresada de los animales en extinción*/