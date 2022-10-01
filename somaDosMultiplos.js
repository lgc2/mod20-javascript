function calculaSomaDosMultiplosDeDoisNumerosAbaixoDeUmLimite (num1, num2, limite) {
    let somaDosMultiplos = null

    let i = 1
    while (i < limite) {
        if (i % num1 === 0 || i % num2 === 0) {
            somaDosMultiplos = somaDosMultiplos + i
        }
        i++
    }

    return somaDosMultiplos
}

const num1 = 5
const num2 = 7
const limite = 1000

console.log('A soma dos múltiplos de ' + num1 + ' ou ' + num2 + ', é: ' + calculaSomaDosMultiplosDeDoisNumerosAbaixoDeUmLimite(num1, num2, limite))
