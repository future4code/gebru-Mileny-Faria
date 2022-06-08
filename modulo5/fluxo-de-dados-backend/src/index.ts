import express from 'express'
import cors from 'cors'
import { getTest } from './exercicios/exercicio1'
import { postProduct } from './exercicios/exercicio3'
import { getProducts } from './exercicios/exercicio4'
// import { putPrice } from './exercicios/exercicio5'
import { deleteProduct } from './exercicios/exercicio6'

export const app = express()

app.use(express.json())
app.use(cors())
app.get('/test', getTest)
app.post('/criar-produto', postProduct)
app.get('/produtos', getProducts)
// app.put('/produtos/:id', putPrice)
app.delete('/produtos/:id', deleteProduct)

app.listen(3003, () => console.log('Server run....'))