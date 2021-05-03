function diaUtil(dia) {
    switch (dia) {
        case 1: console.log("Não é dia util!")
        break 

        case 2: 
        case 3: 
        case 4:
        case 5:
        case 6: console.log("É dia util!")
        case 7: console.log("Não é dia util!")
        break 

        default: return console.log("Dia inválido")
    }
}

diaUtil(10)