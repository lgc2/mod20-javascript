function calculoMdc(num1, num2) {
    const primeiraTentativaDeDivisor = 2
    let mdc = 1

    while (num1 != 1 || num2 != 1) {
        let divisor = primeiraTentativaDeDivisor

        if (num1 % divisor != 0 && num2 % divisor != 0) {
            do {
                divisor = divisor + 1
            } while (num1 % divisor != 0 && num2 % divisor != 0)
        }

        if (num1 % divisor == 0 && num2 % divisor == 0) {
            num1 = num1 / divisor
            num2 = num2 / divisor
            mdc = divisor * mdc
        } else {

            if (num1 % divisor == 0) {
                num1 = num1 / divisor
            } else {
                num2 = num2 / divisor
            }
        }
    }

    return mdc
}

const num1 = 320
const num2 = 400

console.log('O MDC de ' + num1 + ' e ' + num2 + ' é: ' + calculoMdc(num1, num2))
