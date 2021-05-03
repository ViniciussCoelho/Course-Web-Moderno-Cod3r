function triangulo(x, y, z) {
    if (x == y && y == z) {
        return "Equilátero"
    } 
    else if (x == y || x == z || y == z) {
        return "Isósceles"
    } 
    else {
        return "Escaleno"
    }
}

console.log(triangulo(1, 2, 3))