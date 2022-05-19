// Exercício 2

const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])
const red = "\033[0;31m"
const green = "\033[0;32m"


switch (operacao){
    case "soma": console.log(`${green}A soma de ${num1} e ${num2} é ${num1 + num2}`)
        break
    case "sub": console.log(`${green}A subtração de ${num1} e ${num2} é ${num1 - num2}`)
        break
    case "mult": console.log(`${green}A multiplicação de ${num1} e ${num2} é ${num1 * num2}`)
        break
    case "div": console.log(`${green}A divisão de ${num1} e ${num2} é ${num1 / num2}`)
        break
    default: console.log(`${red}Você não digitou uma opção válida`)
}

