// EXERCICIOS DE INTERPRETACAO DE CODIGO

//1. 

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // RESPOSTA: FALSE

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) // RESPOSTA: FALSE

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) // RESPOSTA: TRUE

// console.log("d. ", typeof resultado) // RESPOSTA: BOOLEAN

//2.

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//RESPOSTA: TODA RESPOSTA DE PROMPT É UM STRING PORTANTO NAO SOMA
// NO CONSOLE SERÁ IMPRESSO OS DOIS NUMEROS APENAS

//3.

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// //RESPOSTA: A SOLUCAO SERIA COLOCAR A PALAVRA NUMBER ANTES DO PROMPT


// EXERCICIOS DE ESCRITA DE CODIGO

//1. 

// let idade = Number(prompt("Qual a sua idade?"))
// let idadeAmigo = Number(prompt("Qual a idade de seu melhor amigo?"))
// const respostaIdade = "Sua idade é maior do que a do seu melhor amigo? "

// console.log(respostaIdade + (idade > idadeAmigo))

// const resultado = idade - idadeAmigo

// console.log(resultado)

//2.

// let numPar = Number(prompt("Digite um número par"))

// console.log(numPar % 2) // NOTEI QUE SEMPRE O RESULTADO É 0, POIS O NÚMERO É PAR

// // SE O USUARIO INSERIR UM NUMERO IMPAR, SOBRA RESTO

//3.

// let idade = Number(prompt("Qual a sua idade?"))

// console.log(idade * 12)
// console.log(idade * 365)

// const horasAno = 24 * 365

// console.log(idade * horasAno)

//4.

// let perg1 = "Fale um número de 1 a 9: "
// let perg2 = "Fale outro número de 1 a 9: "

// let number1 = Number(prompt(perg1))
// let number2 = Number(prompt(perg2))

// console.log(perg1 + number1)
// console.log(perg2 + number2)

// console.log("O primeiro número é maior que o segundo? " + (number1 > number2))
// console.log("O primeiro número é igual ao segundo? " + (number1 === number2))
// console.log("O primeiro numero é divisível pelo segundo? " + (number1 % number2 === 0))
// console.log("O segundo numero é divisível pelo primeiro? " + (number2 % number1 === 0))


// DESAFIOS

//1. (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

// let fahrenheit = (77 - 32) * (5 / 9) + 273.15
// console.log("O valor de 77ºF é de " + fahrenheit + "K")

// // (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

// let celsius = (80)*(9/5) + 32
// console.log("O valor de 80ºC é de " + celsius + "ºF")

// celsius = (30)*(9/5) + 32
// let kelvin = 30 + 273.15
// console.log("O valor de 30ºC é de " + celsius + "ºF e " + kelvin + "K")

// let celsius2 = Number(prompt("Insira os graus Celsius que você deseja converter"))
// celsius = (celsius2)*(9/5) + 32
// kelvin = celsius2 + 273.15
// console.log("O valor de " + celsius2 + "ºC é de " + celsius + "ºF e " + kelvin + "K")


//2. kHW = R$ 0.05

let kWHora = Number(prompt("Quantos kw você gastou esse mês?"))

kWHora = 280
let valorPago = kWHora * 0.05
console.log("R$ " + valorPago + ".00")

let desconto = valorPago / 100 * 85

console.log("R$ " + desconto + "0" )






