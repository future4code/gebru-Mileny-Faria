// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1.

// let valor = 0
// for(let i = 0; i < 10; i++) {
//   valor += i
// }
// console.log(valor)

// O código criou um loop e a cada verificação da condição ele acrescenta um numero 
// a variavel i e dentro do bloco ele guarda o valor do i dentro da variavel valor
// no console imprime o valor da variavel valor 


// 2.

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) será impresso somente os numeros maiores que 18 que sao: 19, 21, 23, 25, 27, 30

// b) indexOf() eu acho mas nao tenho certeza

// 3.

// nao entendi

// ------

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.

let petsUsuario = Number(prompt("Quantos pets você tem?"))

// a) e b)
let quantPets = 0
let nomesPets = []

if(petsUsuario === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    while(quantPets === petsUsuario){
        //ação
        nomesPets = prompt("Digite os nomes deles, um por um")
        
        //incremento
        nomesPets = nomesPets.push

        console.log(nomesPets)
        
    }    
}

// c)

// console.log(arrayNomes)

// ----------

// 2.

let arrayOriginal = [5, 30, 45, 60, 85, 98, 33]

// a)

const imprimeValores = (array) => {
    for(let valor of array){
        console.log(valor)
    }
    return array
}

imprimeValores(arrayOriginal)

// b)

const imprimeValoresDivididos = (array) => {
    for(let valor of array){
        array = valor / 10
        console.log(array)
    }
    return array
}

imprimeValoresDivididos(arrayOriginal)

// c)

const imprimeValoresPares = (array) => {
    
    for(let valor of array){
        valor = valor / 2 % 0
        // let arrayPares = valor
        console.log(valor)
    }
    return array
}
imprimeValoresPares(arrayOriginal)

// d)

