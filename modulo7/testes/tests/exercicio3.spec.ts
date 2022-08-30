import { Casino, LOCATION, NACIONALITY, User, verifyAge } from "../src/exercicio3"


describe('teste function verifyAge', () => {
    test('recebe user brasilian e entra casino brasil', () => {
        const user: User = {
            name: 'Mileny',
            age: 39,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: 'Casino at Bellagio',
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [user])
        expect(result.brazilians.allowed).toEqual(['Mileny'])
    })

    test('recebe user american e entra casino eua', () => {
        const user: User = {
            name: 'Mileny',
            age: 39,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: 'Casino at Bellagio',
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [user])
        expect(result.americans.allowed).toEqual(['Mileny'])
    })

    test('recebe 2 users brasilian e 2 american age 19 e casino EUA', () => {
        const userBrasilian: User = {
            name: 'Mileny',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const userAmerican: User = {
            name: 'João Vitor',
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: 'Casino at Bellagio',
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [userBrasilian, userBrasilian, userAmerican, userAmerican])
        expect(result.brazilians.unallowed).toEqual(['Mileny', 'Mileny'])
        expect(result.americans.unallowed).toEqual(['João Vitor', 'João Vitor'])
    })
    
    test('recebe 2 users brasilian age 19 e 2 american age 21 e casino EUA', () => {
        const userBrasilian: User = {
            name: 'Mileny',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const userAmerican: User = {
            name: 'João Vitor',
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: 'Casino at Bellagio',
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [userBrasilian, userBrasilian, userAmerican, userAmerican])
        expect(result.brazilians.unallowed).toEqual(['Mileny', 'Mileny'])
        expect(result.americans.allowed).toEqual(['João Vitor', 'João Vitor'])
    })

    test('recebe user brasilian age 19 e casino Brasil, array allowed.brasilians < 2 > 0', () => {
        const userBrasilian: User = {
            name: 'Mileny',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: 'Casino at Bellagio',
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [userBrasilian])
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })

    test('recebe user american age 19 e casino Brasil, array unallowed.americans = 0', () => {
        const userAmerican: User = {
            name: 'João Vitor',
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: 'Casino at Bellagio',
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [userAmerican])
        expect(result.americans.unallowed.length).toBe(0)
    })

    test('recebe 2 users brasilian age 19 e 2 american age 21, array unallowed.brasilian > 1, unallowed.americans < 1, allowed.american = 2', () => {
        const userBrasilian: User = {
            name: 'Mileny',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const userAmerican: User = {
            name: 'João Vitor',
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: 'Casino at Bellagio',
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [userBrasilian, userBrasilian, userAmerican, userAmerican])
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toBe(2)
    })
})