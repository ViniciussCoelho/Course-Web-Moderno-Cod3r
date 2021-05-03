function operacoesBase(valor1, valor2, operacao) {
    switch (operacao) {
        case '+': return valor1 + valor2
        case '-': return valor1 - valor2
        case '*': return valor1 * valor2
        case '/': return valor1 / valor2
        default: return 'Operação Inválida'
    }
}

console.log(operacoesBase(2, 2, '/'))