// EXERCICIOS DE INTERPRETACAO DE CODIGO

// 1.
// let array
// console.log('a. ', array) // UNDEFINED

// array = null
// console.log('b. ', array) // ERROR

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // c. 11

// let i = 0
// console.log('d. ', array[i]) // d. 3

// array[i+1] = 19
// console.log('e. ', array) // e. na posição 4 sera o 19

// const valor = array[i+6]
// console.log('f. ', valor) // f. 9

// 2. 

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase(), frase.replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

// SUBI NUM ÔNIBUS EM MIRROCOS 23 - DEU SINTAXE ERROR



// EXERCICIOS DE ESCRITA DE CODIGO

// 1.

const nome = prompt("Qual seu nome?")
const email = prompt("Digite aqui seu email")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

// 2.

const comidas = ["sushi", "tacos", "hamburguer", "pizza", "yakissoba"]

// a.
console.log(comidas)

// b.
console.log("Essas são as minhas comidas preferidas: ")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

// c.
const comidaUsuario = prompt("Qual sua comida favorita?")
console.log(`A sua comida favorita é ${comidaUsuario}`)
comidas.splice(1,1, comidaUsuario)
console.log(comidas)

// 3.

// a.
let listaDeTarefas

// b.
const tarefas1 = prompt("Informe uma tarefa que você realiza no seu dia")
const tarefas2 = prompt("Informe outra tarefa que você realiza no seu dia")
const tarefas3 = prompt("Informe mais uma tarefa que você realiza no seu dia")
listaDeTarefas = [tarefas1, tarefas2, tarefas3]

// c.
console.log(listaDeTarefas)

// d.
const indice = prompt("Digite um número de 0 a 2")

// e.
const remove = listaDeTarefas.splice(indice, 1)

// f.
console.log(listaDeTarefas)

// DESAFIO

// 1.

const frase = "O mundo é um moinho e vai reduzir seus sonhos a pó"
console.log(frase)

const arrayFrase = frase.split(" ")

console.log(arrayFrase)


// 2.

const array2 = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(array2.indexOf("Abacaxi", 0))
console.log(array2.length)