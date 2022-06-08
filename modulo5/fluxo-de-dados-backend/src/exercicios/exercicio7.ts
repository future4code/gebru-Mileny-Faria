// import { Request, Response } from 'express'
// import { v4 as generateId } from 'uuid'
// import { products } from './exercicio2/data'

// const Errors: { [key: string]: { status: number, message: string } } = {
//     MISSING_PARAMETERS: { status: 422, message: "Informação faltando. Consulte a documentação" },
//     NAME_ERROR: { status: 400, message: "Name não é uma string"},
//     PRICE_ERROR: { status: 400, message: "Price não é um number"},
//     PRICE_ERROR2: { status: 400, message: "Price é menor ou igual a 0"},
//     SOME_ERROR: { status: 500, message: "Algo deu errado" }
// }

// export const postProduct = (req: Request, res: Response) => {
//     try {
//         const { name, price } = req.body

//         if(!name || !price){
//             throw new Error(Errors.MISSING_PARAMETERS.message)
//         }

//         if(typeof name !==){

//         }

//         const newProduct = {
//             id: generateId(),
//             name,
//             price
//         }

//         products.push(newProduct)
//         res.status(201).send(products)

//     } catch(error: any) {
//         res.end(error.message)

//     }
// }