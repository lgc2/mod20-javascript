const encontraIndiceDoMaiorEMenorValor = require('../maiorEMenorValores.js/')

describe('Identificar maior e menor valor no array e suas posições', () => {

    it('Identifica maior e menor valor no array e suas posições', () => {
        const arrayDeNumeros = [6, 0, 104.568, 1, 67, 2, 3, 4, -37.68, 5, -5]
        const arrayComInformacoesDoMaiorEMenor = [104.568, 2, -37.68, 8]
        
        expect(encontraIndiceDoMaiorEMenorValor(arrayDeNumeros)).toStrictEqual(arrayComInformacoesDoMaiorEMenor)
    })
})
