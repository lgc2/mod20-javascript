const calculaSomaDosMultiplosDeDoisNumerosAbaixoDeUmLimite = require('../somaDosMultiplos.js')

describe('Cálculo da soma dos múltiplos de um ou outro número até o limite informado', () => {

    it('Calcula soma dos múltiplos de dois números', () => {
        expect(calculaSomaDosMultiplosDeDoisNumerosAbaixoDeUmLimite(5, 7, 1000)).toBe(156361)
    })
})