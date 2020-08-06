/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros
*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperarturaCorporal;
	var respuesta;
	var nombrePersonaMasTemperatura;
	var temperaturaPersonaMasTemperatura;
	var contadorMayoresDeEdadViudos;
	var contadorHombresSolteros;
	var contadorHombresViudos;
	var contadorPersonasMayores;
	var acumuladorEdadHombresSolteros;
	var promedioEdadSolteros;
	var flagPersonaMasTemperatura;

	contadorMayoresDeEdadViudos=0;
	contadorHombresSolteros=0;
	contadorHombresViudos=0;
	contadorPersonasMayores=0;
	acumuladorEdadHombresSolteros=0;
	flagPersonaMasTemperatura=0;
	respuesta=true;

	do
	{
		nombre=prompt("Ingrese nombre");

		edad=prompt("Ingrese edad");
		edad=parseInt(edad);

		sexo=prompt("Ingrese sexo (f-m)");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Reingrese sexo (f-m)");
		}

		estadoCivil=prompt("Ingrese estado civil (c-casado/s-soltero/v-viudo)");
		while(estadoCivil!="c" && estadoCivil!="s" && estadoCivil!="v")
		{
			estadoCivil=prompt("Reingrese estado civil (c-casado/s-soltero/v-viudo)");
		}

		temperarturaCorporal=prompt("Ingrese temperatura corporal");

		if(flagPersonaMasTemperatura==0)
		{
			 nombrePersonaMasTemperatura=nombre;
			 temperaturaPersonaMasTemperatura=temperarturaCorporal;
			 flagPersonaMasTemperatura=1;
		}
		else
		{
			if(temperarturaCorporal>temperaturaPersonaMasTemperatura)
			{
				nombrePersonaMasTemperatura=nombre;
				temperaturaPersonaMasTemperatura=temperarturaCorporal;
			}
		}

		switch(estadoCivil)
		{
			case"s":
				if(sexo=="m")
				{
					contadorHombresSolteros = contadorHombresSolteros + 1;
					acumuladorEdadHombresSolteros = acumuladorEdadHombresSolteros + edad;
				}
			break;
			case"v":
				if(edad>17)
				{
					contadorMayoresDeEdadViudos = contadorMayoresDeEdadViudos + 1;
				}
				if(sexo=="m")
				{
					contadorHombresViudos = contadorHombresViudos + 1;
				}
			break;		 
		}		

		if(edad>60)
			{
				contadorPersonasMayores = contadorPersonasMayores + 1;
			}
		
	 respuesta=confirm("¿Desea ingresar otra persona?");
	}while(respuesta==true);		
	

	promedioEdadSolteros = acumuladorEdadHombresSolteros/contadorHombresSolteros;

	document.write("<h2>El nombre de la persona con mas temperatura es: "+ nombrePersonaMasTemperatura +"<br></h2>");
	document.write("<h2>Los mayores de edad viudos son: "+ contadorMayoresDeEdadViudos +"<br></h2>");
	document.write("<h2>Los hombres solteros son: "+contadorHombresSolteros+ "y los viudos son: "+ contadorHombresViudos +"<br></h2>");
	document.write("<h2>Las personas de tercera edad con mas de 38° de temperatura son: "+ contadorPersonasMayores +"<br></h2>");
	document.write("<h2>El promedio de edad de los hombres solteros es: "+ promedioEdadSolteros +"<br></h2>");
}
/*
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros
*/