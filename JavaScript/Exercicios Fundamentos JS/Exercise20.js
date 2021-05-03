let custo = 100

function planoDeSaude(idade) {
    if (idade < 10) {
        return custo + 80
    } 
    else if (idade >= 10 && idade <= 30) {
        return custo + 50
    } 
    else if (idade > 30 && idade <= 60) {
        return custo + 95
    }
    else {
        return custo + 130
    }
}

console.log(planoDeSaude(8))
console.log(planoDeSaude(10))
console.log(planoDeSaude(31))
console.log(planoDeSaude(61))