'use strict'

var args = process.argv.slice(2);


var operation = args[1];
var operation2 = args[3]
var num1 = parseFloat(args[0]);
var num2 = parseFloat(args[2]);
var num3 = parseFloat(args[4])

var result = '\n Introduce bien los parámetros. \n';

if (args.length == 3){
	switch (operation){
		case "mas":
			result = 'Suma: '+parseFloat(num1 + num2);
			break;
		case "menos":
			result = 'Resta: '+parseFloat(num1 - num2);
			break;
		case "por":
			result = 'Multiplicacion: '+parseFloat(num1 * num2);
			break;	
		case "dividido":
			result = 'Division: '+parseFloat(num1 / num2);
			break;
	}
}

if (args.length == 5){
	switch (operation2){
		case "mas":
			result = 'Suma: '+parseFloat(num1 + num2 + num3);
			break;
		case "menos":
			result = 'Resta: '+parseFloat(num1 - num2 - num3);
			break;
		case "por":
			result = 'Multiplicacion: '+parseFloat(num1 * num2 * num3);
			break;	
		case "dividido":
			result = 'Division: '+parseFloat(num1 / num2 / num3);
			break;
	}
}


console.log(result);

/* Complete B) */ 