function divisivelPorTres(x) {
    let resultado = 0

    if (x % 3 == 0) {
        resultado++
    }

    return resultado == 1
}

console.log(divisivelPorTres(6))