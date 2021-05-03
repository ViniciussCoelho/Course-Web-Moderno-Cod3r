function aumentoSalario(plano, salarioAtual) {
    let novoSalario

    switch(plano) {
        case 'A': 
        novoSalario= ((salarioAtual * 10) / 100) + salarioAtual 
        console.log(`Novo salário: ${novoSalario}`)
        break

        case 'B': 
        novoSalario = ((salarioAtual * 15) / 100) + salarioAtual 
        console.log(`Novo salário: ${novoSalario}`)
        break

        case 'C': 
        novoSalario = ((salarioAtual * 20) / 100) + salarioAtual 
        console.log(`Novo salário: ${novoSalario}`)
        break

        default: console.log('Plano Inválido.')
    }
}

aumentoSalario('A', 1000)
aumentoSalario('B', 1000)
aumentoSalario('C', 1000)
aumentoSalario('D', 1000)