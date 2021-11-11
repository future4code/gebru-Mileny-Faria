// Exercícios de interpretação de código

// 1.  let a = 10
//     let b = 10
//     console.log(b)

//     b = 5
//     console.log(a, b)

// R:  No console será impresso:
//     10
//     10, 5

// 2.  let a = 10
//     let b = 20
//     c = a
//     b = c
//     a = b
//     console.log(a, b, c)

//  R: No console será impresso:
//     10, 10, 10

// 3.  let p = prompt("Quantas horas você trabalha por dia?")
//     let t = prompt("Quanto você recebe por dia?")
//     alert("Você recebe ${t/p} por hora")

//  R: variável p - melhor nome seria horasTrabalhadasDia
//     variável t - melhor nome seria valorRecebidoDia

// Exercícios de escrita de código

// 1. 
let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

// R: Foi impresso a palavra undefined pois não foram atribuidos valores às variáveis

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

// R: Notei que todas as respostas do prompt serão tipo string
//  independente se forem textos ou números

console.log("Olá", nome, "você tem", idade, "anos.")

// 2.
let animaisDeEstimacao = prompt("Você tem animais de estimação?")
let ehEstudade = prompt("Você é estudante")
let moraEmSaoPaulo = prompt("Você mora em São Paulo?")

let respostaAnimais = animaisDeEstimacao
let respostaEstudante = ehEstudade
let respostaCidade = moraEmSaoPaulo

console.log("Você tem animais de estimação?", respostaAnimais)
console.log("Você é estudante?", respostaEstudante)
console.log("Você mora em São Paulo?", respostaCidade)

// 3.
let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// Desafio

let escolhaNumeros = prompt("Escolha um número de 1 a 9")
let escolhaNumeros2 = prompt("Escolha um número de 11 a 19")

console.log(escolhaNumeros + escolhaNumeros2)
console.log(escolhaNumeros * escolhaNumeros2)

// R: como ainda não aprendemos operações, eu deduzi que seria assim... a soma nao deu certo, a multiplicação sim








