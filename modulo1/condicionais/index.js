// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1. 

// a) Ele pergunta ao usuario um numero, transforma a string em numero, 
//      informa se o numero é par, se for imprime "Passou no teste", se for impar imprime "Não passou no teste"

// b) Numeros pares

// c) Numeros impares

// 2.

// a) Para colocar preços em frutas especificas

// b) O preço da fruta maçã é R$ 2.25

// c) Imprimiria o valor de R$ 5

// 3.

// a) Ela pergunta ao usuario um numero, e transforma a string em numero

// b) Se tivesse digitado 10 a mensagem seria:
//      Esse número passou no teste"
//  Se tivesse digitado -10 daria erro

// c) Erro nao, só nao irá aparecer msg impressa na linha do console.log(mensagem),
//       pois a variavel mensagem está dentro do escopo local, e nao pode ser acessado no escopo global



// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.

// a)

const idade = Number(prompt("Qual a sua idade?")) >=18

// c)

if(idade){
    console.log("Você pode dirigir")

} else {
    console.log("Você não pode dirigir")

}

//---------------

// 2.

const turno = prompt("Qual turno do dia você estuda? Digite 'M' para matutino, 'V' para verspertino e 'N' para noturno").toUpperCase()
const condicao1 = turno === "M"
const condicao2 = turno === "V"
const condicao3 = turno === "N"

if (condicao1){
    console.log("Bom dia!")
} else if (condicao2){
    console.log("Boa tarde!")
} else if(condicao3){
    console.log("Boa noite!")
} else {
    console.log("Você não digitou uma opção válida")
}

//---------------

// 3.

const turnoSwitch = prompt("Qual turno do dia você estuda? Digite 'M' para matutino, 'V' para verspertino e 'N' para noturno").toUpperCase()

switch (turnoSwitch){
    case 'M': console.log("Bom dia!")
        break
    case 'V': console.log("Boa tarde!")
        break
    case 'N': console.log("Boa noite!")
        break
    default: console.log("Você não digitou uma opção válida")
        break
    
    }

// ---------------

4.

const generoFilme = prompt("Qual gênero de filme você irá assistir?") === "fantasia"
const valorIngresso = Number(prompt("Qual o valor do ingresso?")) < 15

if (generoFilme && valorIngresso){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}


// DESAFIOS

// 1.

const generoFilme2 = prompt("Qual gênero de filme você irá assistir?") === "fantasia"
const valorIngresso2 = Number(prompt("Qual o valor do ingresso?")) < 15


if (generoFilme2 && valorIngresso2){
    const lanchinho = prompt("Qual lanchinho você vai comprar?")           
    console.log(`Bom filme!
Aproveite o(a) seu(sua) ${lanchinho}!`)
} else {
    console.log("Escolha outro filme :(")
}


// 2.

const nomeCompleto = prompt("Informe seu nome completo")
const tipoJogo = prompt("Indique o tipo de Jogo: IN se for internacional ou DO se for doméstico")
const etapaJogo = prompt("Indique a etapa do jogo: SF se for semi-final, DT se for decisão de terceiro lugar e FI se for final")
const categoria = Number(prompt("Escolha entre as opções 1, 2, 3 ou 4"))
const quantIngressos = Number(prompt("Indique a quantidade de ingressos que vai comprar "))


if (tipoJogo === "DO") {
    if (etapaJogo === "SF") {
        if (categoria === 1 ) {
            const valor1 = quantIngressos * 1320
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Nacional
            Etapa do jogo: Semi-Final
            Categoria: 1
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: R$ 1320 
            Valor total: ${valor1}`)

        } else if (categoria === 2) {
            const valor2 = quantIngressos * 880
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Nacional
            Etapa do jogo: Semi-Final
            Categoria: 2
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: R$ 880 
            Valor total: ${valor2}`)

        } else if (categoria === 3) {
            const valor3 = quantIngressos * 550
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Nacional
            Etapa do jogo: Semi-Final
            Categoria: 3
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: R$ 550
            Valor total: ${valor3}`)

        } else {
            const valor4 = quantIngressos * 220
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Nacional
            Etapa do jogo: Semi-Final
            Categoria: 4
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: R$ 220 
            Valor total: ${valor4}`)
        }
    } else if (etapaJogo === "DT") {
        if (categoria === 1) {
            const valor5 = quantIngressos * 660
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Nacional
            Etapa do jogo: Disputa de Terceiro Lugar
            Categoria: 1
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: R$ 660 
            Valor total: ${valor5}`)

        } else if (categoria === 2) {
            const valor6 = quantIngressos * 440
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Nacional
            Etapa do jogo: Disputa de Terceiro Lugar
            Categoria: 2
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: R$ 440 
            Valor total: ${valor6}`)

        } else if (categoria === 3) {
            const valor7 = quantIngressos * 330
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Nacional
            Etapa do jogo: Disputa de Terceiro Lugar
            Categoria: 3
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: R$ 330 
            Valor total: ${valor7}`)

        } else {
            const valor8 = quantIngressos * 170
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Nacional
            Etapa do jogo: Disputa de Terceiro Lugar
            Categoria: 4
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: R$ 170 
            Valor total: ${valor8}`)
        }
    } else {
        if (categoria === 1) {
            const valor9 = quantIngressos * 1980
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Nacional
            Etapa do jogo: Final
            Categoria: 1
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: R$ 1980 
            Valor total: ${valor9}`)

        } else if (categoria === 2) {
            const valor10 = quantIngressos * 1320
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Nacional
            Etapa do jogo: Final
            Categoria: 2
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: R$ 1320 
            Valor total: ${valor10}`)

        } else if (categoria === 3) {
            const valor11 = quantIngressos * 880
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Nacional
            Etapa do jogo: Final
            Categoria: 3
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: R$ 880 
            Valor total: ${valor11}`)

        } else {
            const valor12 = quantIngressos * 330
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Nacional
            Etapa do jogo: Final
            Categoria: 4
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: R$ 330 
            Valor total: ${valor12}`)
        }
    }
} else {
    if (etapaJogo === "SF") {
        if (categoria === 1 ) {
            const dolar1 = 1320 * 4.10
            const valor13 = quantIngressos * dolar1
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Internacional
            Etapa do jogo: Semi-Final
            Categoria: 1
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: $ ${dolar1} 
            Valor total: ${valor13}`)

        } else if (categoria === 2) {
            const dolar2 = 880 * 4.10
            const valor14 = quantIngressos * dolar2
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Internacional
            Etapa do jogo: Semi-Final
            Categoria: 2
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: $ ${dolar2} 
            Valor total: ${valor14}`)

        } else if (categoria === 3) {
            const dolar3 = 550 * 4.10
            const valor15 = quantIngressos * dolar3
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Internacional
            Etapa do jogo: Semi-Final
            Categoria: 3
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: $ ${dolar3} 
            Valor total: ${valor15}`)

        } else {
            const dolar4 = 220 * 4.10
            const valor16 = quantIngressos * dolar4
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Internacional
            Etapa do jogo: Semi-Final
            Categoria: 4
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: $ ${dolar4} 
            Valor total: ${valor16}`)

        }
    } else if (etapaJogo === "DT") {
        if (categoria === 1) {
            const dolar5 = 660 * 4.10
            const valor17 = quantIngressos * dolar5
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Internacional
            Etapa do jogo: Disputa de Terceiro Lugar
            Categoria: 1
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: $ ${dolar5} 
            Valor total: ${valor17}`)
            
        } else if (categoria === 2) {
            const dolar6 = 440 * 4.10
            const valor18 = quantIngressos * dolar6
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Internacional
            Etapa do jogo: Disputa de Terceiro Lugar
            Categoria: 2
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: $ ${dolar6} 
            Valor total: ${valor18}`)


        } else if (categoria === 3) {
            const dolar7 = 330 * 4.10
            const valor19 = quantIngressos * dolar7
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Internacional
            Etapa do jogo: Disputa de Terceiro Lugar
            Categoria: 3
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: $ ${dolar7} 
            Valor total: ${valor19}`)


        } else {
            const dolar8 = 170 * 4.10
            const valor20 = quantIngressos * dolar8
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Internacional
            Etapa do jogo: Disputa de Terceiro Lugar
            Categoria: 4
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: $ ${dolar8} 
            Valor total: ${valor20}`)

        }
    } else {
        if (categoria === 1) {
            const dolar9 = 1980 * 4.10
            const valor21 = quantIngressos * dolar9
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Internacional
            Etapa do jogo: Final
            Categoria: 1
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: $ ${dolar9} 
            Valor total: ${valor21}`)

        } else if (categoria === 2) {
            const dolar10 = 1320 * 4.10
            const valor22 = quantIngressos * dolar10
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Internacional
            Etapa do jogo: Final
            Categoria: 2
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: $ ${dolar10} 
            Valor total: ${valor22}`)


        } else if (categoria === 3) {
            const dolar11 = 880 * 4.10
            const valor23 = quantIngressos * dolar11
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Internacional
            Etapa do jogo: Final
            Categoria: 3
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: $ ${dolar11} 
            Valor total: ${valor23}`)


        } else {
            const dolar12 = 330 * 4.10
            const valor24 = quantIngressos * dolar12
            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo do jogo: Internacional
            Etapa do jogo: Final
            Categoria: 4
            Quantidade de Ingressos: ${quantIngressos} ingressos
            ---Valores---
            Valor do ingresso: $ ${dolar12} 
            Valor total: ${valor24}`)

        }
    }
} 





