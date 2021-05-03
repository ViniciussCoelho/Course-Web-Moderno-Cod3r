function cardapioLanchonete(codigo, quantidade) {
    switch (codigo) {
        case 100: console.log(`${quantidade} Cachorro(s) Quente(s) R$ ${quantidade * 3}`)
        break

        case 200: console.log(`${quantidade} Hambúrguer Simples R$ ${quantidade * 4}`) 
        break

        case 300: console.log(`${quantidade} Cheeseburguer(s) R$ ${quantidade * 5.5}`)
        break

        case 400: console.log(`${quantidade} Bauru(s) R$ ${quantidade * 7.5}`)
        break

        case 500: console.log(`${quantidade} Refrigerante(s) R$ ${quantidade * 3.5}`)
        break
        case 600: console.log(`${quantidade} Suco(s) R$ ${quantidade * 2.8}`) 
        break

        default: console.log('O produto não existe')
        break
    }
}


cardapioLanchonete(400, 1)