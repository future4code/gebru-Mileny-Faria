import express, { Request, Response } from "express"
import cors from "cors"
import { posts } from "./exercicio6"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/posts", (req: Request, res: Response) => {
    
    try{
        res.status(200).send(posts)
    }
    catch(err){
        res.status(400).end("Usuários não encontrados")
    }
})



app.listen(3003, () => {
    console.log("Servidor de pé")
})