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

  const altura = prompt("Informe a altura da embalagem em cm")
  const largura  = prompt("Informe a largura da embalagem em cm")
  const area = altura * largura
  console.log(area)


}

calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = prompt("Informe o ano vigente")
  const anoNascimento = prompt("Informe o ano de seu nascimento")
  const idade = anoAtual - anoNascimento
  console.log(idade)
  

}

imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const peso1 = 46
  const alt1 = 1.55
  const imc = peso1 / (alt1 * alt1)
  return imc
  

}

console.log(calculaIMC())

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."


  const nome = prompt("Informe seu nome")
  const idade2 = prompt("Informe sua idade")
  const email = prompt("Informe seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade2} anos, e o meu email é ${email}.`)
}

imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui


  const cores = prompt("Quais são suas três cores favoritas?")
  const array = cores.split(" ")
  console.log(array)


}

imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  string = "oi meu nome é Mileny"
  const maiscula = string.toUpperCase()
  return maiscula

}

console.log(retornaStringEmMaiuscula())

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui


  const custo1 = 200
  const valorIngresso1 = 20
  const precisaVender = custo1 / valorIngresso1
  return precisaVender

}

console.log(calculaIngressosEspetaculo())


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui


  string1 = "Hoje é sexta-feira".length
  string2 = "Eu amo o final de semana".length
  const mesmoTamanho = string1 === string2
  return mesmoTamanho

}

console.log(checaStringsMesmoTamanho())

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui


  array = ["vermelho", "preto", "azul", "lilás"]
  return array[0]

}

console.log(retornaPrimeiroElemento())


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui


  const array2 = [10, 20, 30, 40, 50]
  return array2[4]

}

console.log(retornaUltimoElemento())


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui


  const array3 = ["sandalia", "chinelo", "tenis", "scarpin", "tamanco"]
  const trocaArray = array3.reverse()
  return trocaArray


}

console.log(trocaPrimeiroEUltimo())



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