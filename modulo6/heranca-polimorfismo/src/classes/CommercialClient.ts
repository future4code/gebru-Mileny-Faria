import { Commerce } from './Commerce'
import { Client } from '../interfaces/Client'

export class CommercialClient extends Commerce implements Client {
    private cnpj: string
    name: string
    registrationNumber: number
    consumedEnergy: number

    constructor(
        cnpj: string, 
        floorsQuantity: number, 
        cep: string,
        name: string,
        registrationNumber: number,
        consumedEnergy: number
        ) {
            super(floorsQuantity, cep)
            this.cnpj = cnpj
            this.name = name
            this.registrationNumber = registrationNumber
            this.consumedEnergy = consumedEnergy
        }

    getCnpj(): string {
        return this.cnpj
    }

    calculateBill(): number {
        const result = this.consumedEnergy * 0.53
        return result
    }
}