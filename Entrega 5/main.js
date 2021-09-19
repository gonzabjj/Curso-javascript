class pelicula{
    constructor (titulo, genero, director) {
        this.title = titulo;
        this.genre = genero;
        this.director = director;
    }
    alquilar() {
        return 'Pelicula Alquilada'
    }
    devolver() {
        return 'Pelicula Devuelta'
    }
}

const titulo = prompt ('Ingresar nombre de pelicula');
const genero = prompt ('Ingrese genero de la pelicula');
const director = prompt ('Ingrese director de la pelicula');

const pelicula1 = new pelicula(titulo, genero, director)

alert(pelicula1.alquilar());
