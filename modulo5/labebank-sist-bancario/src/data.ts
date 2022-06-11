type Extract = {
    value: number,
    date: string,
    description: string
}

type Account = {
    name: string,
    cpf: string,
    birth_date: string,
    balance: number,
    extract: Extract[]
}

export const Users: Account[] = [
    {
        name: "Mileny",
        cpf: "111.222.333-44",
        birth_date: "20/01/1983",
        balance: 0,
        extract: [
            {
                value: 0,
                date: "",
                description: ""
            }
        ]
    }, {
        name: "João",
        cpf: "555.666.777-88",
        birth_date: "10/10/2008",
        balance: 0,
        extract: [
            {
                value: 0,
                date: "",
                description: ""
            }
        ]
    }, {
        name: "Loren",
        cpf: "999.123.456-78",
        birth_date: "16/01/1981",
        balance: 0,
        extract: [
            {
                value: 0,
                date: "",
                description: ""
            }
        ]
    }, {
        name: "Fran",
        cpf: "901.234.567-89",
        birth_date: "24/04/1978",
        balance: 0,
        extract: [
            {
                value: 0,
                date: "",
                description: ""
            }
        ]
    }
]