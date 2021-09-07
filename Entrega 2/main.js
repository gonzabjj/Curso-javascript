let añoNacimiento = prompt('En que año naciste?');
let añoActual = '2021';

let añoAlcohol = +añoActual - +añoNacimiento;

if (añoAlcohol < 18) {
    alert('No puede comprar alcohol');
} else if (añoAlcohol >= 18) {
    alert ('Puede comprar alcohol')
}