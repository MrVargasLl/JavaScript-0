//Crear objeto de libros para leer

//Deseo leer 1

const Libro1 = new Object();

Libro1.Titulo = 'Beloved';

Libro1.Autor = 'Toni Morrison';

//Deseo leer 2

const Libro2 = new Object();

Libro2.Titulo = 'Azul';

Libro2.Autor = 'Rubén Darío';

//Deseo leer 3

const Libro3 = new Object();

Libro3.Titulo = 'Pedro Páramo';

Libro3.Autor = 'Juan Rulfo';

//Deseo leer 4

const Libro4 = new Object();

Libro4.Titulo = 'Aura';

Libro4.Autor = 'Carlos Fuentes';

let Deseos = [Libro1, Libro2, Libro3, Libro4]


console.log('Total de libros que desea leer: ');

Deseos.forEach(function(E1,i,Seguimientos) {
console.log('Titulo:', E1.Titulo,'   Autor:', E1.Autor);})

//console.log('Total de libros que desea leer: ');

//console.log(Deseos);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Crea objeto de libros leidos.

// Leido 1

const Beloved = new Object();

Beloved.Titulo = 'Beloved';

Beloved.Autor = 'Toni Morrison';

//leido 2

const PedroPáramo = new Object();

PedroPáramo.Titulo = 'Pedro Páramo';

PedroPáramo.Autor = 'Juan Rulfo';

//Leido 3


//Declarar un arreglo de objetos llamado Libros con varios datos de diferentes Libros leidos.

let Libros = [Beloved, PedroPáramo]

//console.log('Leidos: ');

//console.log(Libros);

//Agregar un libro al array

function agregarLibro(Titulo,Autor,book) {
    const libro = new Object();
    libro.Titulo=Titulo;
    libro.Autor=Autor
    book.push(libro);
    console.log('Libro añadido: ');
    console.log('Titulo:', libro.Titulo, 'Autor:',libro.Autor );
}

agregarLibro('Aura', 'Carlos Fuentes',Libros)

//Declarar un arreglo de objetos "Libros".

let Seguimientos = [ ]

// Función de Seguimiento de libros

function Seguimiento(Deseo,Cumplidos,Segui) {
    Deseo.forEach(function(E1,i,Deseo) {
        Cumplidos.forEach(function(E2,j,Cumplidos){
            if (E1.Titulo === E2.Titulo && E1.Autor === E2.Autor) {
                Segui.push(E1)
            }
        })
    })
}

function mostrarLibrosLeidos () {

    Seguimiento(Deseos,Libros,Seguimientos);

console.log('Solamente ha leido: ');
Seguimientos.forEach(function(E1,i,Seguimientos) {
console.log('Titulo:', E1.Titulo,'   Autor:', E1.Autor);})
}

mostrarLibrosLeidos ()