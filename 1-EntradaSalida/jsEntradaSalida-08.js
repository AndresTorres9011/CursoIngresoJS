/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
 {
	var numeroDividendo;

	var numeroDivisor;

	var resto;

	numeroDividendo = txtIdNumeroDividendo.value;
	numeroDivisor = txtIdNumeroDivisor.value;
	numeroDividendo = parseFloat (numeroDividendo);
	numeroDivisor = parseFloat (numeroDivisor);
	
	resto = numeroDividendo % numeroDivisor

		alert("El resto de la division es: " + resto);
}
