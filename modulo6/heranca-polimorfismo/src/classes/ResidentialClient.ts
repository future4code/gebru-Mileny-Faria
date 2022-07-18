import { Residence } from "./Residence"
import { Client } from '../interfaces/Client'

export class ResidentialClient extends Residence implements Client {
    private cpf: string
    name: string
    registrationNumber: number
    consumedEnergy: number

    
    constructor(
        cpf: string, 
        residentsQuantity: number, 
        cep: string, 
        name: string, 
        registrationNumber: number, 
        consumedEnergy: number
        ) {
            super(residentsQuantity, cep)
            this.cpf = cpf
            this.name = name
            this.registrationNumber = registrationNumber
            this.consumedEnergy = consumedEnergy
        }

    getCpf(): string {
        return this.cpf
    }

    calculateBill(): number {
        const result = this.consumedEnergy * 0.75
        return result
    }
    
}