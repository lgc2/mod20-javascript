function encontraIndiceDoMaiorEMenorValor(arrayDeNumeros) {
    let maiorNumero = arrayDeNumeros[0]
    let indiceDoMaiorNumero = 0
    let menorNumero = arrayDeNumeros[0]
    let indiceDoMenorNumero = 0

    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] > maiorNumero) {
            maiorNumero = arrayDeNumeros[i]
            indiceDoMaiorNumero = i
        } else if (arrayDeNumeros[i] < menorNumero) {
            menorNumero = arrayDeNumeros[i]
            indiceDoMenorNumero = i
        }
    }

    const arrayComInformacoesDoMaiorEMenor = [maiorNumero, indiceDoMaiorNumero, menorNumero, indiceDoMenorNumero]

    return arrayComInformacoesDoMaiorEMenor
}

const arrayDeNumeros = [6, 0, 104.568, 1, 67, 2, 3, 4, -37.68, 5, -5]

const arrayComInformacoesDoMaiorEMenor = encontraIndiceDoMaiorEMenorValor(arrayDeNumeros)

console.log('O maior valor é ' + arrayComInformacoesDoMaiorEMenor[0] + ' e o índice do maior é ' + arrayComInformacoesDoMaiorEMenor[1])
console.log('O menor valor é ' + arrayComInformacoesDoMaiorEMenor[2] + ' e o índice do menor é ' + arrayComInformacoesDoMaiorEMenor[3])