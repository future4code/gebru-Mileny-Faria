import { Request, Response } from 'express'

export const getTest = (req: Request, res: Response) => {
   res.send('API funcionando')
}