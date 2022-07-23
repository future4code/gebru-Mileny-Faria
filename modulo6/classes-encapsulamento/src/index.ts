import { UserAccount } from './classes/UserAccount'
import { Transaction } from './classes/Transaction'

/* EXERCICIO 1

a) O construtor serve para inicializar as variaveis que colocamos como atributos
da nossa classe e o chamo com a sintaxe constructor(){}

*/

// b) Foi impressa 1x

// const newUser = new UserAccount("12345677889", "Mileny", 39)

// c) Propriedades privadas só podem ser acessadas de dentro da própria classe (usando a keyword this)

// EXERCICIO 2

const newUser = new UserAccount("12345677889", "Mileny", 39)
const transaction1 = new Transaction("Pix Mercado", 100, "16/07/2022")
const transaction2 = new Transaction("Conta Luz", 120, "16/07/2022")

newUser.setTransaction(transaction1)
newUser.setTransaction(transaction2)
console.log(newUser)