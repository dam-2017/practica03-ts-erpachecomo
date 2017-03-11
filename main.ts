import { Cadena } from './cadena';
import { Operaciones } from './operaciones';
let ops:Operaciones = new Operaciones();
let n1:number = 5;
let n2:number = 6;
let cadena:Cadena = new Cadena("asdfas");
console.log('--- Operaciones ---');
console.log('Suma: '+ops.suma(n1,n2));
console.log('Resta: '+ops.resta(n1,n2));
console.log('Factorial: '+ops.factorial(n1));
console.log('Factorial: '+ops.factorial(n2));
console.log('Primo: '+ops.primo(n2));
console.log('Primo: '+ops.primo(n1));
console.log('--- Cadena ---');
console.log('Cadena:'+cadena.cadena);
console.log('Palindromo:'+cadena.esPalindromo());
console.log('Vocales:');
console.log(cadena.contarVocales());
console.log('Letras:'+cadena.contarLetras());
console.log('Palabras:'+cadena.contarPalabras());

console.log('--- Cadena2 ---');

cadena = new Cadena("     anita    laal  a  t ina");
console.log('Cadena:'+cadena.cadena);
console.log('Palindromo:'+cadena.esPalindromo());
console.log('Vocales:');
console.log(cadena.contarVocales());
console.log('Letras:'+cadena.contarLetras());
console.log('Palabras:'+cadena.contarPalabras());

