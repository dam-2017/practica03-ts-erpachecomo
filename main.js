"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cadena_1 = require("./cadena");
var operaciones_1 = require("./operaciones");
var ops = new operaciones_1.Operaciones();
var n1 = 5;
var n2 = 6;
var cadena = new cadena_1.Cadena("asdfas");
console.log('--- Operaciones ---');
console.log('Suma: ' + ops.suma(n1, n2));
console.log('Resta: ' + ops.resta(n1, n2));
console.log('Factorial: ' + ops.factorial(n1));
console.log('Factorial: ' + ops.factorial(n2));
console.log('Primo: ' + ops.primo(n2));
console.log('Primo: ' + ops.primo(n1));
console.log('--- Cadena ---');
console.log('Cadena:' + cadena.cadena);
console.log('Palindromo:' + cadena.esPalindromo());
console.log('Vocales:');
console.log(cadena.contarVocales());
console.log('Letras:' + cadena.contarLetras());
console.log('Palabras:' + cadena.contarPalabras());
console.log('--- Cadena2 ---');
cadena = new cadena_1.Cadena("     anita    laal  a  t ina");
console.log('Cadena:' + cadena.cadena);
console.log('Palindromo:' + cadena.esPalindromo());
console.log('Vocales:');
console.log(cadena.contarVocales());
console.log('Letras:' + cadena.contarLetras());
console.log('Palabras:' + cadena.contarPalabras());
