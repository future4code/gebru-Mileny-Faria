// a)
// const minhaString: string = 20

// Da erro: tipo number nao pode ser atribuido a um tipo stringer

// b)
// const meuNumero: number | string = 20

// usando o operador lógico OU

// c)
// const pessoa1: {nome: string, idade: number, corFavorita: string} = {
//     nome: "",
//     idade: 39,
//     corFavorita: ""
// }

// const pessoa2: {nome: string, idade: number, corFavorita: string} = {
//     nome: "",
//     idade: 39,
//     corFavorita: ""
// }

// const pessoa3: {nome: string, idade: number, corFavorita: string} = {
//     nome: "",
//     idade: 39,
//     corFavorita: ""
// }

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
}

// d)
enum Cores {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}
