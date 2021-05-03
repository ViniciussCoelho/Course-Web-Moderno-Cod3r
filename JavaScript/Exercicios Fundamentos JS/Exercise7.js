let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function recordePontuacao(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let maiorPontuacao = pontuacoes[0]
    let piorJogo = pontuacoes[0]
    let bateuRecorde = 0
    let indicePiorJogo = 1

    for(let i = 1; i < pontuacoes.length; i++ ) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            bateuRecorde++
        }

        if (pontuacoes[i] < piorJogo) {
            piorJogo = pontuacoes[i]
            indicePiorJogo = i + 1

        }
    }
    return [bateuRecorde, indicePiorJogo]

}

console.log(recordePontuacao(stringPontuacoes))