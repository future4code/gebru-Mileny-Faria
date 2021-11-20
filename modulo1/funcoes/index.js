// EXERCICIOS DE INTERPRETACAO DE CODIGO

// 1.
    // a) o primeiro console log retorna 10 e o segundo 50
    // b) nao apareceria nada no console pois eu nao solicitei que aparecesse

// 2.
    // a) é uma funcao anonima, que pega um texto e coloca todas as letras minusculas
    //       e procura no texto a palavra cenoura.

    // b)   i. eu gosto de cenoura. true
    //      ii. cenoura é bom pra vista. true
    //      iii. cenouras crescem na terra. false



// EXERCICIOS DE ESCRITA DE CODIGO

// 1.

// a)
function imprimirInformacoes() {
console.log('Eu sou Mileny, tenho 38 anos, moro em Franca e sou estudante.')

}

imprimirInformacoes()

// b)
function informarUsuario(nome, idade, cidade, profissao) {
const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
return frase
    
}

console.log(informarUsuario("Mileny", 38, "Franca", "Assistente Administrativo"))

// 2.

// a)
function queroSomar(numero1, numero2) {
    const soma = numero1 + numero2
    return soma

}

console.log(queroSomar(50, 35))

// b)
function saberSeEhMaiorOuIgual(numero1, numero2) {
    const maior = numero1 >= numero2
    return maior

}

console.log(saberSeEhMaiorOuIgual(35, 42))

// c)
function saberSeEhPar(numero1, numero2) {
    const par = numero1 % numero2 === 0
    return par

}

console.log(saberSeEhPar(35, 42))

// d)
const saberTamanho = mensagem => console.log(mensagem.toUpperCase(), mensagem.length)

saberTamanho("Hello, World")

// 3.

function somar(numero1, numero2) {
    const adicao = numero1 + numero2
    return adicao

}

function subtrair(numero1, numero2) {
    const subtracao = numero1 - numero2
    return subtracao

}

function multiplicar(numero1, numero2) {
    const multiplicacao = numero1 * numero2
    return multiplicacao

}

function dividir(numero1, numero2) {
    const divisao = numero1 / numero2
    return divisao

}

const inserção1 = Number(prompt("Digite um número"))
const inserção2 = Number(prompt("Digite outro número"))

const resultadoDaSoma = somar(inserção1, inserção2)
const resultadoDaSubstracao = subtrair(inserção1, inserção2)
const resultadoDaMultiplicacao = multiplicar(inserção1, inserção2)
const resultadoDaDivisao = dividir(inserção1, inserção2)

console.log(`Números inseridos ${inserção1} e ${inserção2}`)
console.log(`Soma: ${resultadoDaSoma}`)
console.log(`Diferença: ${resultadoDaSubstracao}`)
console.log(`Multiplicação: ${resultadoDaMultiplicacao}`)
console.log(`Divisão: ${resultadoDaDivisao}`)


// DESAFIOS

// 1.

// a)
const arrow = valor1 => console.log(valor1)

// b)
const arrow2 = (valor2, valor3) => {
    const somar2 = valor2 + valor3
    arrow(somar2)

}

arrow2(50, 30)

// 2.

const calcularPitagoras = (cateto1, cateto2) => {
    const valorCateto1 = cateto1**2
    const valorCateto2 = cateto2**2
    const valorHipotenusa = (valorCateto1 + valorCateto2) ** (1/2)
    return valorHipotenusa

}

console.log(calcularPitagoras(20, 20))