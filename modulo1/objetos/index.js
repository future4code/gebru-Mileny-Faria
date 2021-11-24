// EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

// 1.

// a)   "Matheus Nachtergaele"
//      "Virginia Cavendish"
//      "Globo", "14h"


// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[filme.elenco.length - 1])

// // 2.

// a) nome: "Juca", idade: 3, raca: "SRD"
//    nome: "Juba", idade: 3, raca: "SRD"
//    nome: "Jubo", idade: 3, raca: "SRD"

// b) FAZ UM SPREAD, COPIA AS INFORMAÇÕES DO OBJETO E COLA EM UM NOVO OBJETO


// 3.
// a)   false
//      undefined

// b) o false porque ele ta pedindo pra retornar o valor da chave "backender" do objeto pessoa
// e o undefined porque nao existe chave altura




// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1-

// a)

const apelidos = {
    nome: "Mileny",
    apelidos: ["My", "Mi", "Eu"]
    
}

const escreverApelido = (objeto) => {
    const frase = `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]},
    ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`
    
    console.log(frase)

}

escreverApelido(apelidos)

// b)

const novoApelido = {
    ...apelidos,
    apelidos: ["Baixinha", "Dentuça", "Gorducha"]

}

escreverApelido(novoApelido)

// 2-

// a)

const dadosUsuario = {
    nome: "Mileny",
    idade: 38,
    profissao: "Assistente Administrativo"
    
}

const dadosUsuario2 = {
    nome: "João Vitor",
    idade: 13,
    profissao: "Estudante"

}


// b)

const detalharUsuarios = (usuario) => {
    
    return [usuario.nome, usuario.nome.length, usuario.idade, usuario.profissao,
        usuario.profissao.length]

}

console.log(detalharUsuarios(dadosUsuario))
console.log(detalharUsuarios(dadosUsuario2))

// 3-

// a)

const carrinho = []

// b)

const fruta1 = {
    nome: "Kiwi",
    disponibilidade: true,

}

const fruta2 = {
    nome: "Morango",
    disponibilidade: false,

}

const fruta3 = {
    nome: "Maracujá",
    disponibilidade: true,

}

// c)

const receberFruta = (sacola) => {
    return carrinho.push(sacola)

}

receberFruta(fruta1)
receberFruta(fruta2)
receberFruta(fruta3)

// d)

console.log(carrinho)



// DESAFIOS

// 1.

const perguntarUsuario = (nome, idade, profissao) => {
    const nome2 = prompt("Qual seu nome?")
    const idade2 = prompt("Qual sua idade?")
    const profissao2 = prompt("Qual sua profissão?")

    const dadosUsuario = {
        nome: nome2,
        idade: idade2,
        profissao: profissao2

    }

    console.log(dadosUsuario)
    console.log(typeof dadosUsuario)


}

perguntarUsuario()

// 2.

const indicarFilmes = (objeto1, objeto2) => {

    const filme1 = {
        anoDeLançamento: 2021,
        nome: "Eternos"       

    }

    const filme2 = {
        anoDeLançamento: 2019,
        nome: "Vingadores Ultimato"

    }

    const antes = filme1.anoDeLançamento < filme2.anoDeLançamento
    const mesmo = filme1.anoDeLançamento === filme2.anoDeLançamento
    
    const resposta1 = `O primeiro filme foi lançado antes do segundo? ${antes}`
    const resposta2 = `O primeiro filme foi lançado no mesmo ano do segundo? ${mesmo}`

    return `${resposta1}
${resposta2}`

}

console.log(indicarFilmes())

// 3.

const controlarEstoque = (estoque) => {
    estoque = {
        ...fruta1,
        disponibilidade: false

    }
    return estoque
}

console.log(controlarEstoque(fruta1))













