// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1.

// a)   nome: "Amanda Rangel", apelido: "Mandi", 0, e todo o array original
//      nome: "Laís Petra", apelido: "Laura", 1, e todo o array original
//      nome: "Letícia Chijo", apelido: "Chijo", 2, e todo o array original

// 2.

// a)   nome: "Amanda Rangel"
//      nome: "Laís Petra"
//      nome: "Letícia Chijo"

// 3.

// a)   apelido: "Mandi"
//      apelido: "Laura"


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a)

 const nomeDogs = pets.map((valor) => {
    return valor.nome

 })

 console.log(nomeDogs)

 // b)

 const dogsSalsicha = pets.filter((valor) => {
    return valor.raca === "Salsicha"

 })

 console.log(dogsSalsicha)

 // c)

 pets
        .filter(valor => valor.raca === "Poodle")
        .map(valor => console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${valor.nome}!`))
 
 
 
// 2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a)

const nomeProdutos = produtos.map((valor) => {
    return valor.nome

 })

 console.log(nomeProdutos)

 // b)

 const nomeProdutosEPrecoComDesconto = produtos.map((valor) => { 
    return {
        nome: valor.nome,
        preco: valor.preco * 95 / 100
    }

 })

 console.log(nomeProdutosEPrecoComDesconto)

 // c)

 const bebidas = produtos.filter((valor) => {
    return valor.categoria === "Bebidas"

 })

 console.log(bebidas)

 // d)

const ype = produtos.filter((valor) => {
    return valor.nome.includes("Ypê")

 })

 console.log(ype)

 

 // e)

 produtos
        .filter(valor => valor.nome.includes("Ypê"))
        .map(valor => console.log(`Compre ${valor.nome} por R$ ${valor.preco}0`))
 


// DESAFIO

// 1.

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 // a)

const nomesOrdemAlfabetica =
pokemons
        .sort((valor1, valor2) => {
            if(valor1.nome < valor2.nome){
                return -1
            } if(valor1.nome > valor2.nome){
                return 1
            } else {
                return 0
            }

        })
        .map(valor => valor.nome)

 console.log(nomesOrdemAlfabetica)

 // b)

const tiposPokemons = [...new Set(pokemons.map(valor => valor.tipo))]

console.log(tiposPokemons)



