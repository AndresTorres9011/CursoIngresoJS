/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y
 estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/
function mostrar()
{
	var nombre; 
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var respuesta;
	var nacionalidadMasTemperatura;
	var temperaturaMasAlta;
	var flagTemperaturaMasAlta;
	var contadorSolteros;
	var contadorMujeresSolViu;
	var contadorTerceraEdadMasTemperatura;
	var contadorEdadMujeresCasadas;
	var acumuladorEdadMujeresCasadas;
	var promedioEdad;


	contadorSolteros=0;
	contadorMujeresSolViu=0;
	flagTemperaturaMasAlta=0;
	contadorTerceraEdadMasTemperatura=0;
	contadorEdadMujeresCasadas=0;
	acumuladorEdadMujeresCasadas=0;
	respuesta=true;


	do
	{
		nombre=prompt("Ingrese nombre");
  
		nacionalidad=prompt("Ingrese nacionalidad");
		
		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		while(isNaN(edad))
		{
			edad=prompt("Reingrese edad");
			edad=parseInt(edad);
		}

		sexo =prompt("Ingrese sexo (f o m)");
		while(sexo!="f" && sexo!="m")
		{
			sexo =prompt("Reingrese sexo (f o m)");
		}
		
		estadoCivil=prompt("Ingrese estado civil (s-soltero, c-casado o v-viudo)");
		while(estadoCivil!="s" && estadoCivil!="c" && estadoCivil!="v")
		{
			estadoCivil =prompt("Reingrese estado civil (s-soltero, c-casado o v-viudo)");
		}

		temperaturaCorporal=prompt("Ingrese temperatura corporal)");
		temperaturaCorporal=parseInt(temperaturaCorporal);
		while(isNaN(temperaturaCorporal))
		{
			temperaturaCorporal=prompt("Reingrese temperatura corporal");
			temperaturaCorporal=parseInt(temperaturaCorporal);
		}

		if(flagTemperaturaMasAlta==0 || temperaturaCorporal>temperaturaMasAlta)
		{
			temperaturaMasAlta=temperaturaCorporal;
			nacionalidadMasTemperatura=nacionalidad;
			flagTemperaturaMasAlta=1;
		}

		if(edad>17 && estadoCivil=="s")
		{
			contadorSolteros=contadorSolteros+1;
		}

		switch(estadoCivil)
		{
			case"s":
			case"v":
				if(sexo=="f")
				{
					contadorMujeresSolViu=contadorMujeresSolViu+1;
				}
			
			break;
			case"c":
			if(sexo=="f")
				{
					acumuladorEdadMujeresCasadas=acumuladorEdadMujeresCasadas+edad;
					contadorEdadMujeresCasadas=contadorEdadMujeresCasadas+1;
				}
			
			break;
		}

		if(edad>60 && temperaturaCorporal>38)
		{
			contadorTerceraEdadMasTemperatura=contadorTerceraEdadMasTemperatura+1;
		}
		

		respuesta=confirm("¿Desea ingresar otro pasajero?");
	}while(respuesta==true);

	console.log("La Nacionalidad de la persona con mas temperatura es: "+nacionalidadMasTemperatura);

	if(contadorSolteros>0)
	{
		console.log("L@s mayores de edad solteros son: "+contadorSolteros);
	}

	if(contadorMujeresSolViu>0)
	{
		console.log("La cantidad de mujeres solteras y viudas son: " +contadorMujeresSolViu);
	}

	if(contadorTerceraEdadMasTemperatura>0)
	{
		console.log("Las personas de la tercera edad con mas de 38° de temperatura son: "+ contadorTerceraEdadMasTemperatura);	
	}
	
	if(contadorEdadMujeresCasadas>0)
	{
		promedioEdad=acumuladorEdadMujeresCasadas/contadorEdadMujeresCasadas;
		console.log("El promedio de edad entre las mujeres casadas es: "+promedioEdad)
	}

}
/*
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
("f" o "m")
("soltero", "casado" o "viudo")
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
			edad=parseInt(edad);
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