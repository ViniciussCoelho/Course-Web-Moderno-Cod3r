function anuidade(mes, valor) {
    if(mes >= 1 && mes <= 12) {
        let atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

