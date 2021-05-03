const fruta = ""

function Quitanda(fruta) {
    switch (fruta) {
        case "maçã": return "Não vendemos esta fruta aqui"
        case "kiwi": return "Estamos com escassez de kiwis"
        case "melancia": return "Aqui está, são 3 reais o quilo"
        default: return "ERRO! FRUTA NÃO CADASTRADA!"
    }
}

console.log(Quitanda("maçã"))
console.log(Quitanda("kiwi"))
console.log(Quitanda("melancia"))
console.log(Quitanda("alface"))