// Crear objetos de libros deseados
const Libro1 = { Titulo: 'Beloved', Autor: 'Toni Morrison' };
const Libro2 = { Titulo: 'Azul', Autor: 'Rubén Darío' };
const Libro3 = { Titulo: 'Pedro Páramo', Autor: 'Juan Rulfo' };
const Libro4 = { Titulo: 'Aura', Autor: 'Carlos Fuentes' };

let Deseos = [Libro1, Libro2, Libro3, Libro4];

console.log('Total de libros que desea leer:');
Deseos.forEach(libro => {
    console.log('Título:', libro.Titulo, 'Autor:', libro.Autor);
});

// Crear objetos de libros leídos
const Beloved = { Titulo: 'Beloved', Autor: 'Toni Morrison' };
const PedroPáramo = { Titulo: 'Pedro Páramo', Autor: 'Juan Rulfo' };

let Libros = [Beloved, PedroPáramo];

// Agregar un libro a la lista de leídos
function agregarLibro(Titulo, Autor, book) {
    const libro = { Titulo, Autor };
    book.push(libro);
    console.log('Libro añadido:');
    console.log('Título:', libro.Titulo, 'Autor:', libro.Autor);
}

agregarLibro('Aura', 'Carlos Fuentes', Libros);

// Función de seguimiento de libros leídos
function Seguimiento(Deseo, Cumplidos, Segui) {
    Deseo.forEach(libroDeseado => {
        Cumplidos.forEach(libroLeido => {
            if (libroDeseado.Titulo === libroLeido.Titulo && libroDeseado.Autor === libroLeido.Autor) {
                Segui.push(libroDeseado);
            }
        });
    });
}

// Mostrar los libros leídos
function mostrarLibrosLeidos() {
    let Seguimientos = [];
    Seguimiento(Deseos, Libros, Seguimientos);
    
    console.log('Solamente ha leído:');
    Seguimientos.forEach(libro => {
        console.log('Título:', libro.Titulo, 'Autor:', libro.Autor);
    });
}

mostrarLibrosLeidos();