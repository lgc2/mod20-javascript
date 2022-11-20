const calculoMdc = require('../calculoMDC.js/')

describe('Cálculo de MDC', () => {

    it('Calcula MDC de dois números', () => {
        expect(calculoMdc(320, 400)).toBe(80)
    })
})