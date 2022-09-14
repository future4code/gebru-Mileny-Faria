import { performAttack2, validateCharacter } from "../src"

describe.skip('teste validateCharacter', () => {
    test('name vazio', () => {
        const input = {
            name: "",
            life: 10,
            defense: 20,
            power: 30
        }

        const output = validateCharacter(input)
        expect(output).toBe(false)
    })

    test('life === 0', () => {
        const input = {
            name: "Iron Man",
            life: 0,
            defense: 20,
            power: 30
        }

        const output = validateCharacter(input)
        expect(output).toBe(false)
    })

    test('power === 0', () => {
        const input = {
            name: "Iron Man",
            life: 10,
            defense: 20,
            power: 0
        }

        const output = validateCharacter(input)
        expect(output).toBe(false)
    })

    test('defense === 0', () => {
        const input = {
            name: "Iron Man",
            life: 10,
            defense: 0,
            power: 10
        }

        const output = validateCharacter(input)
        expect(output).toBe(false)
    })

    test('defense === -10', () => {
        const input = {
            name: "Iron Man",
            life: 10,
            defense: -10,
            power: 10
        }

        const output = validateCharacter(input)
        expect(output).toBe(false)
    })

    test('tudo válido', () => {
        const input = {
            name: "Iron Man",
            life: 10,
            defense: 10,
            power: 10
        }

        const output = validateCharacter(input)
        expect(output).toBe(true)
    })
})

// EXERCICIO 4 - A/
// Devemos criar um mock da função validateCharacter, pois ela é necessária da performAttack

// B/ mock sucesso and mock error

describe('testando performAttack', () => {
    test('mock sucess', () => {
        const validatorMockSucess = jest.fn(() => {
            return true
        })

        const attacker = {
            name: "Iron Man",
            life: 500,
            defense: 700,
            power: 1000
        }

        const defender = {
            name: "Hawkey",
            life: 300,
            defense: 800,
            power: 800
        }
        
        performAttack2(attacker, defender, validatorMockSucess as any)

        expect(defender.life).toEqual(100)
        expect(validatorMockSucess).toHaveBeenCalled()
        expect(validatorMockSucess).toHaveBeenCalledTimes(2)
        expect(validatorMockSucess).toHaveReturnedTimes(2)
    })

    test('mock error', () => {
        expect.assertions(4)

        const validatorMockFail = jest.fn(() => {
            return false
        })

        const attacker = {
            name: "",
            life: 500,
            defense: 700,
            power: 1000
        }

        const defender = {
            name: "Hawkey",
            life: 300,
            defense: 800,
            power: 800
        }

        try {
            performAttack2(attacker, defender, validatorMockFail as any)

        } catch(err) {
            expect(err.message).toBe('Invalid Character')
            expect(validatorMockFail).toHaveBeenCalled()
            expect(validatorMockFail).toHaveBeenCalledTimes(1)
            expect(validatorMockFail).toHaveReturnedTimes(1)
        }
    })
})