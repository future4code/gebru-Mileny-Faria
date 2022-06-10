import express from 'express'
import cors from 'cors'
import { getUsers } from './exercicios/exercicio1'
import { getUsersType } from './exercicios/exercicio2'
import { getUserName } from './exercicios/exercicio3'
import { postUser } from './exercicios/exercicio4'
import { putUser } from './exercicios/exercicio5'
import { patchUser } from './exercicios/exercicio6'
import { deleteUser } from './exercicios/exercicio7'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/users', getUsers)
app.get('/users-type', getUsersType)
app.get('/users-name', getUserName)
app.post('/users', postUser)
app.put('/users/:id', putUser)
app.patch('/users/:id', patchUser)
app.delete('/users/:id', deleteUser)



app.listen(3003, () => console.log('Server run...'))