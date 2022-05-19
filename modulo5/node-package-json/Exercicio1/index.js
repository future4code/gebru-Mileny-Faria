// Exercicio 1
// a) com o comando process.argv[]

// b)
const nome = process.argv[2]
const idade = Number(process.argv[3])
const red = "\033[0;31m"
const green = "\033[0;32m"

// c)

const novaIdade = idade + 7

if(nome && idade){
    console.log(`${green}Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)
} else{
    console.log(`${red}Esperava 2 parâmetros só recebi um.`)
}