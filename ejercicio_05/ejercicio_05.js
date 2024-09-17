for (i = 2; i <= 10; i++) { // Recorre cada número desde 2 hasta 10
    let esPrimo = true; // Suponemos que el número i es primo
    
    for (j = 2; j < i; j++) { // Recorre números menores que i
        if (i % j === 0) { // Verifica si i es divisible por j
            esPrimo = false; // Si i es divisible por j, no es primo
            break; // Salimos del bucle interno
        }
    }
    
    if (esPrimo) { // Si esPrimo sigue siendo true, entonces i es primo
        console.log(i + " es primo"); // Imprime el número primo
    }
}