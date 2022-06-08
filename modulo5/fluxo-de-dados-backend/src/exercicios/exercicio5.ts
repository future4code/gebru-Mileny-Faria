// import { Request, Response } from 'express'
// import { products } from './exercicio2/data'

// export const putPrice = (req: Request, res: Response) => {
//     try {
//         const prodId = Number(req.params.id)
//         if (!prodId) throw new Error('Não existe nenhum produto com a ID informada')

//         const product = products.find((prod) => prod.id === prodId)

//         const newPrice = req.body.price


        
//     } catch(error: any) {
//         res.end(error.message)

//     }
// }