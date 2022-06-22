import express from 'express'
import cors from 'cors'
import { registerUser, showUsers } from './Controllers/users-controllers'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/users', registerUser)
app.get('/users', showUsers)

app.listen(3003, () => console.log('Server run....'))