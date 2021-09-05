let nombre = prompt('Ingresa tu nombre');
let apellido = prompt('Ingresa tu apellido');
let edad = prompt('Cual es tu edad?');
let añoActual = '2021';

let añoNacimiento = +añoActual - +edad;

alert('Hola ' + nombre + ' ' + apellido);
alert('Naciste en el año ' + añoNacimiento);