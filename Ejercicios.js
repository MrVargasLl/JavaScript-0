
// Contar del 1 al 50 e imprimir solo los pares

let contador = 1;

while (contador <= 50) {
    let aux1 = (contador % 2 === 0) ? contador : ''; 

    console.log(aux1);
    
    contador++;
}

//Calcular el factorial de un numero

let n = 2;

let factorial = 1;

for (let i = 1; i <= n; i++) {

    factorial *= i;
}

console.log("El factorial de " + n + " es: " + factorial);

//Imprime la tabla del 8

let num = 8;

let tabla = 1;

for (let i = 1; i <= 10; i++) {

    tabla = i*num;

    console.log(num + " x " + i + " = " + tabla);
}



// Contar del 1 al 50 y sumar solo los impares

let suma =0;

for (let i=0; i<=5; i++) {
    
    if (i % 2 !==0) 
    {      
            suma+=i;
            //console.log(i);
            
    } 
    
}

console.log(suma);
