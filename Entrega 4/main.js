let tarea = parseInt (prompt ('Ingrese Tarea:\n1 - Valore total del Producto\n2 - Valor de cada Cuota\n3 - Interes generado'));
let importe = parseInt (prompt ('Ingrese Monto'));
let cuotas = parseInt (prompt ('Ingrese Cantida de cuotas\n - Max 24 Cuotas'));

switch (tarea) {
    case 1:
        totalProducto();
        break;

    case 2:
        valorCuota();
        break;

    case 3:
        totalInteres();
        break;

    default:
        alert('Tarea no valida')
        break;
}

function totalProducto (){
    if ((cuotas >= 1) && (cuotas <=6)) {
        let totalValor = importe * 1.10;
        alert('El importe total del producto es $' + totalValor)
    } else if ((cuotas >= 7) && (cuotas <=12)) {
        let totalValor = importe * 1.20;
        alert('El importe total del producto es $' + totalValor)
    } else if ((cuotas >= 13) && (cuotas <=18)) {
        let totalValor = importe * 1.30;
        alert('El importe total del producto es $' + totalValor)
    } else if ((cuotas >= 19) && (cuotas <=24)) {
        let totalValor = importe * 1.40;
        alert('El importe total del producto es $' + totalValor)
    } else {
        alert ('No Aceptable')
    }
}

function valorCuota() {
    if ((cuotas >= 1) && (cuotas <=6)) {
        let totalCuota = importe * 1.10;
        let valorCuota = totalCuota / cuotas
        alert('El importe de la cuota es $' + valorCuota)
    } else if ((cuotas >= 7) && (cuotas <=12)) {
        let totalCuota = importe * 1.20;
        let valorCuota = totalCuota / cuotas
        alert('El importe de la cuota es $' + valorCuota)
    } else if ((cuotas >= 13) && (cuotas <=18)) {
        let totalCuota = importe * 1.30;
        let valorCuota = totalCuota / cuotas
        alert('El importe de la cuota es $' + valorCuota)
    } else if ((cuotas >= 19) && (cuotas <=24)) {
        let totalCuota = importe * 1.40;
        let valorCuota = totalCuota / cuotas
        alert('El importe de la cuota es $' + valorCuota)
    } else {
        alert ('No Aceptable')
    }
}

function totalInteres (){
    if ((cuotas >= 1) && (cuotas <=6)) {
        let totalValor = importe * 1.10;
        let interes = totalValor - importe
        alert('El interes generado es $' + interes)
    } else if ((cuotas >= 7) && (cuotas <=12)) {
        let totalValor = importe * 1.20;
        let interes = totalValor - importe
        alert('El interes generado es $' + interes)
    } else if ((cuotas >= 13) && (cuotas <=18)) {
        let totalValor = importe * 1.30;
        let interes = totalValor - importe
        alert('El interes generado es $' + interes)
    } else if ((cuotas >= 19) && (cuotas <=24)) {
        let totalValor = importe * 1.40;
        let interes = totalValor - importe
        alert('El interes generado es $' + interes)
    } else {
        alert ('No Aceptable')
    }
}



