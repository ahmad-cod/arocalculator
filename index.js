export function add (num1, num2) {
    return num1 + num2
}

export function subtract (num1, num2) {
    return num1 - num2
}

export function multiply (num1, num2) {
    return num1 * num2
}

export function divide (num1, num2) {
    return num1 / num2
}

export function power (num1, num2) {
    return Math.power(num1, num2)
}

export function factorial (num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}

export function modulus (num1, num2) {
    return num1 % num2
}

// console.log(factorial(5))  // 120
// console.log(modulus(4, 3))