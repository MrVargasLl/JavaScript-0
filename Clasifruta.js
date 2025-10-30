//Declara un arreglo llamado frutas con varios tipos de frutas.

let frutas = ['naranja', 'manzana', 'piña', 'fresa', 'limón', 'mango', 'uva', 'mandarina']

//Crea un objeto para almacenar la cantidad de cada tipo de fruta.

const Tipo = new Object();

Tipo.Citricas = 0;

Tipo.Tropicales = 0;

Tipo.Bosque= 0;

//console.log(Tipo);

//Usa un ciclo for/while para recorrer el arreglo y contar las frutas.

for (let i=0; i<=frutas.length-1; i++ ) {

    if (frutas[i]==='naranja' || frutas[i]==='limón' || frutas[i]==='mandarina') {
        Tipo.Citricas ++;
    } else if (frutas[i] === "piña" || frutas[i] === "mango" || frutas[i] === "papaya") {
        Tipo.Tropicales++;
    } else if (frutas[i] === "fresa" || frutas[i] === "uva" || frutas[i] === "mora") {
    Tipo.Bosque++;}
}

//Imprime en la consola la cantidad de cada tipo de fruta.
console.log(Tipo);

//Añadir Elementos

frutas.push('papaya');

frutas.unshift('mora');

//Inicializando los contadores
Tipo.Citricas = 0;

Tipo.Tropicales = 0;

Tipo.Bosque= 0;

let j = 0;

while (j <= frutas.length-1) {
    
    if (frutas[j]==='naranja' || frutas[j]==='limón' || frutas[j]==='mandarina') {
        Tipo.Citricas ++;
    } else if (frutas[j] === "piña" || frutas[j] === "mango" || frutas[j] === "papaya") {
        Tipo.Tropicales++;
    } else if (frutas[j] === "fresa" || frutas[j] === "uva" || frutas[j] === "mora") {
    Tipo.Bosque++;}
    j++;
}
//Imprime en la consola la cantidad de cada tipo de fruta.
console.log(Tipo);