function notaAluno(codigoAluno, nota1, nota2, nota3) {
    let media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10

    if (media >= 5) {
        return [`código do aluno: ${codigoAluno}, notas: ${nota1}, ${nota2}, ${nota3}, média: ${media}`,"Aprovado!"]
    } else {
        return ("Reprovado!")
    }
}

console.log(notaAluno(123, 8, 8, 8))