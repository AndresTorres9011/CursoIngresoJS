/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoIngresado;
	var legajoIngresado;
	var nacionalidadIngresada;
	 
	edadIngresada = prompt("Ingrese su edad(18-90)");
	edadIngresada =parseInt(edadIngresada);

	while(edadIngresada<18 || edadIngresada>90)
	 {
		edadIngresada = prompt("¡Error reingrese su edad(18-90)!");
	 	edadIngresada =parseInt(edadIngresada);
	 }
	 txtIdEdad.value = edadIngresada;

	 sexoIngresado = prompt("Ingrese su sexo (F-M)");

	 while(sexoIngresado!="F" && sexoIngresado!="M")
	 {
		sexoIngresado = prompt("¡Error reingrese su sexo (F-M)!");
	 	
	 }
	 switch(sexoIngresado)
	 {
		 case "F":
			sexoIngresado = "Femenino";
		 break;	
		 default:
			sexoIngresado = "Masculino";
	 }
	 txtIdSexo.value = sexoIngresado;

	 estadoCivilIngresado = prompt("Ingrese su estado civil (1-para soltero/a, 2-para casado/a, 3-para divorciado/a y 4-para viudo/a)");

	 while(estadoCivilIngresado!="1" && estadoCivilIngresado!="2" && estadoCivilIngresado!="3" && estadoCivilIngresado!="4")
	 {
		estadoCivilIngresado = prompt("¡Error reingrese su estado civil (1-para soltero/a, 2-para casado/a, 3-para divorciado/a y 4-para viudo/a)!");
	 	
	 }	 
	 switch(estadoCivilIngresado)
	 {
		 case "1":
			estadoCivilIngresado = "Soltero/a"
		 break;	
		 case "2":
			estadoCivilIngresado = "Casado/a"
		 break;	
		 case "3":
			estadoCivilIngresado = "Divorciado/a"
		 break;	
		 default:
			estadoCivilIngresado = "Viudo/a" 
	 }
	 txtIdEstadoCivil.value = estadoCivilIngresado;

	 sueldoIngresado = prompt("Ingrese su sueldo(>8000)");
	 sueldoIngresado =parseInt(sueldoIngresado);

	 while(sueldoIngresado<8000)
	 {
		sueldoIngresado = prompt("Error reingrese su sueldo(>8000)");
	    sueldoIngresado =parseInt(sueldoIngresado);
	 }
	 txtIdSueldo.value = sueldoIngresado;

	 legajoIngresado = prompt("Ingrese su numero de legajo(# de 4 cifras)");
	 legajoIngresado =parseInt(legajoIngresado);

	 while(legajoIngresado<1000 || legajoIngresado>9999)
	 {
		legajoIngresado = prompt("Reingrese su numero de legajo (# de 4 cifras)");
	    legajoIngresado =parseInt(legajoIngresado);
	 }
	 txtIdLegajo.value = legajoIngresado;
	
	 nacionalidadIngresada = prompt("Ingrese su nacionalidad (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados.)");

	 while(nacionalidadIngresada!="A" && nacionalidadIngresada!="E" && nacionalidadIngresada!="N")
	 {
		nacionalidadIngresada = prompt("Reingrese su nacionalidad (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados.)");	
	 }

	 switch(nacionalidadIngresada)
	 {
		 case "A":
		  nacionalidadIngresada = "Argentina"
		 break;
		 case "E":
		  nacionalidadIngresada = "Extranjero"
		 break;
		 default:
		  nacionalidadIngresada = "Nacionalizado"
	 }
	 txtIdNacionalidad.value = nacionalidadIngresada;

	 
	 
	 



}
