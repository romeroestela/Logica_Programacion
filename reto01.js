/* OPERADORES */

/** ARITMÉTICOS **/
var num1 = 10
var num2 = 4 

console.log("Suma: 5 + 5=", 5+5) 
console.log("Resta: 9 - 5", 9-5)
console.log("Multiplicación: 9 * 5", 9*5)
console.log("División: 10 / 2", 10/2)
console.log("Residuo: 25 % 6", 25%6 )
console.log("Incremento: ", ++num1)
console.log("Decremento: ", --num1)
// Opciones para calculas potencias
console.log("Exponente: 5 ** 3", 5**3) 
var x = 5;
var y = 3;
x = Math.pow(x, y);
console.log('Exponente 1:', x);

/** COMPARACIÓN **/
var num3 = 10
var num4 = 20

console.log("Igualdad 10 == 20 es ", num3 == num4)
console.log("Desigualdad 10 != 20 es ", num3 != num4 )
console.log("Mayo que: 10 > 20 es ", num3 > num4)
console.log("Menor que: 10 < 20 es", num3 < num4) 
console.log("Mayor o igual que: 10 >= 20", 10 >= 20)
console.log("Menor o igual que: 10 <= 20", 10 <= 20)

/** LÓGICOS **/
x = 10 + 3 == 13 && (5 - 1 == 4)
console.log("AND LÓGICO: ", x)

x = 10 + 3 == 10 || (5 - 1 == 3)
console.log("OR LÓGICO", x)

x= ! (5 - 1 == 4)
console.log("NOT LÓGICO", x)