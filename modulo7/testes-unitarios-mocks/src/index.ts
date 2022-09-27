import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'

const app = express()
app.use(express.json())
app.use(cors())


const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in ${address.address}:${address.port}`)
    } else {
        console.error('Failure upon starting server')
    }
})


interface Character {
    name: string
    life: number
    defense: number
    power: number
}

export const validateCharacter = (character: Character): boolean => {

    if (!character.name || character.life === undefined || character.defense === undefined || character.power === undefined) {
        return false
    }

    if (character.life <= 0 || character.defense <= 0 || character.power <= 0) {
        return false
    }

    return true
}

export const performAttack = (attacker: Character, defender: Character) => {
    const validationAttacker = validateCharacter(attacker)
    const validationDefender = validateCharacter(defender)

    if (validationAttacker === false || validationDefender === false) {
        throw new Error('Invalid Character')
    }

    if (attacker.power > defender.defense) {
       defender.life -= attacker.power - defender.defense
    }
}

export const performAttack2 = (attacker: Character, defender: Character, validator: (input: Character)=> boolean) => {
    
    if (!validator(attacker) || !validator(defender)) {
        throw new Error('Invalid Character')
    }

    if (attacker.power > defender.defense) {
        defender.life -= attacker.power - defender.defense
    }
}

// EXERCICIO 3 - C/
// na primeira implementação a funcao performAttack depende da minha função validateCharacter
// na segunda eu injetei a validateCharacter na minha funcao performAttack, fazendo com que ela chegue por parametro

export const recoverCharacters = (characters: Character[], validator: (input: Character)=> boolean) => {
    if (!validator(characters[0])) {
        throw new Error('Invalid Character')
    }

    if (characters.length < 2) {
        throw new Error('Need at least 2 characters')
    }

    for (let character of characters) {
        if (character.life < 1500) {
            character.life = 1500
        }
    }

    const newCharacterLife = {... characters, {character.life = 1500}}
}



export const increaseCharacterStrength = (character: Character, newStrength: number): void => {

}


