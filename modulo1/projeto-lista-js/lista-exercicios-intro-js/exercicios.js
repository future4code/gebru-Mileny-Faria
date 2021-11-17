// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alt = prompt("Qual a altura do retângulo?")
  const largura = prompt("Qual a largura do retângulo?")

  const area = alt * largura

  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Qual é o ano atual?")
  const anoNascimento = prompt("Em que ano você nasceu?")

  const idade = anoAtual - anoNascimento

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const peso = 46
  const altura = 1.55

  const imc = peso / (altura * altura)

  console.log(imc)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual é o seu nome?")
  idade = prompt("Qual a sua idade?")
  let email = prompt("Escreva aqui seu email?")

  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")



}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const corFavorita1 = prompt("Me fale uma cor favorita: ")
  const corFavorita2 = prompt("Me fale outras cor favorita: ")
  const corFavorita3 = prompt("Me fale mais uma cor favorita: ")
  
  const respostaCores = [corFavorita1, corFavorita2, corFavorita3]
  console.log(respostaCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const string = prompt("Diga: Hello, world")
  const stringMaiscula = string.toUpperCase()
  console.log(stringMaiscula)


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  let custo = 8000
  let valorIngresso = 200
  let precisaVender = custo / valorIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  string1 = prompt("Qual o nome da sua escola")
  string2 = prompt("Você está gostando de estuda lá?")

  let booleano = string1 === string2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}