let nombre = prompt('Ingresa tu Nombre de Usuario');

while (nombre != 'Admin') {
    switch (nombre) {
        case 'Gonzalo':
            prompt ('Ingrese Contraseña');
            alert ('Hola ' + nombre);
            break;
        case 'Lautaro':
            prompt ('Ingrese Contraseña');
            alert ('Hola ' + nombre);
            break;
        case 'Alejandra':
            prompt ('Ingrese Contraseña');
            alert ('Hola ' + nombre);
            break;
        case 'Luis':
            prompt ('Ingrese Contraseña');
            alert ('Hola ' + nombre);
            break;
        default:
            alert ('No es Familiar')
            break
    }
    nombre = prompt('Ingresa tu Nombre de Usuario');
}