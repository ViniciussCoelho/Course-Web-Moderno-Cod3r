function vetorIntervalo() {
    let intervalo = 0
    let foraIntervalo = 0
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            intervalo++
        } else {
            foraIntervalo++
        }
    }

    console.log(`Fora do intervalo: ${foraIntervalo} Dentro do intervalo: ${intervalo}`)
}

let vetor = [8, 9, 10, 11, 12, 20, 21, 22, 23, 24]

vetorIntervalo()