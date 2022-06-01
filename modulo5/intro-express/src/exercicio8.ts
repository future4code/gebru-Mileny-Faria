import express, { Request, Response } from "express"
import cors from "cors"
import { posts } from "./exercicio6"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/posts", (req: Request, res: Response) => {
    
    try{
        
        const postId = req.query.id

       

        res.status(200).send("Posts")
    }
    catch(err){
        res.status(400).end("Post não encontrado")
    }
})



app.listen(3003, () => {
    console.log("Servidor de pé")
})