// import { User } from "./classes/User"
// import { Customer } from './classes/Customer'
// import { Client } from './interfaces/Client'
// import { Place } from './classes/Place'
import { Commerce } from "./classes/Commerce"
import { Industry } from "./classes/Industry"
import { Residence } from "./classes/Residence"

// HERANÇA

// EXERCICIO 1

// const newUser = new User("1", "my@gebru.com", "Mileny", "123456")

// console.log("id:", newUser.getId())
// console.log("nome:", newUser.getName())
// console.log("email:", newUser.getEmail())

// a) Não seria possivel imprimir a senha pois nao tem getPassword na class
// b) Foi impressa 1x

// -----------------------------------------X-----------------------------------------------------------

// EXERCICIO 2

// const newCustomer = new Customer("1", "my@gebru.com", "Mileny", "123456", "111111111")

// console.log("id:", newCustomer.getId())
// console.log("nome:", newCustomer.getName())
// console.log("email:", newCustomer.getEmail())
// console.log("cartão:", newCustomer.getCreditCard())

// a) 1x
// b) 1x - Porque eu peguei as informacoes do User, o pai

// -----------------------------------------X-----------------------------------------------------------

// EXERCICIO 3

// console.log("id:", newCustomer.getId())
// console.log("nome:", newCustomer.getName())
// console.log("email:", newCustomer.getEmail())
// console.log('valor total da compra:', newCustomer.purchaseTotal)
// console.log("cartão:", newCustomer.getCreditCard())

// a) Não, pois nao tem o getPassword e ele está privado

// -----------------------------------------X-----------------------------------------------------------

// EXERCICIO 4

// console.log("apresente-se:", newCustomer.introduceYourself())

// -----------------------------------------X-----------------------------------------------------------

// EXERCICIO 5

// console.log("apresente-se:", newCustomer.introduceYourself())

// -----------------------------------------X-----------------------------------------------------------
// -----------------------------------------X-----------------------------------------------------------
// -----------------------------------------X-----------------------------------------------------------

// POLIMORFISMO

// EXERCICIO 1

// const client: Client = {
//     name: "Mileny",
//     registrationNumber: 1,
//     consumedEnergy: 120,

//     calculateBill: () => {
//         return 2
//     }
// }

// console.log(client.name)
// console.log(client.registrationNumber)
// console.log(client.consumedEnergy)
// console.log(client.calculateBill())

// a) consegui imprimir todas

// -----------------------------------------X-----------------------------------------------------------

// EXERCICIO 2

// const newPlace = new Place("14401075")

// a) nao é possivel criar instancia para classes abstratas
// b) criar uma nova classe que herda as informacoes da classe abstrata e instanciar essa nova classe

// -----------------------------------------X-----------------------------------------------------------

// EXERCICIO 3

const newResidence = new Residence(2, "14402-250")
const newCommerce = new Commerce(4, "14408-094")
const newIndustry = new Industry(15, "14403-080")

console.log(newResidence.getCep())
console.log(newCommerce.getCep())
console.log(newIndustry.getCep())

// -----------------------------------------X-----------------------------------------------------------

// EXERCICIO 4

// a) Métodos da propria classe e da Interface, propriedades da propria classe e da classe pai

// -----------------------------------------X-----------------------------------------------------------

// EXERCICIO 5

// a) as duas implementam a interface Client
// b) uma é filha da Commerce e a outra da Residence

// -----------------------------------------X-----------------------------------------------------------

// EXERCICIO 6

// a) Da Industry
// b) Client
// c) nao faço ideia