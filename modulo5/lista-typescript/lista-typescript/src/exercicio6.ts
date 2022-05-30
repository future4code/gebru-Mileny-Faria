
type ListaClientes = {
    cliente: string, 
    saldoTotal: number, 
    debitos: number[]
}


const listaClientes: ListaClientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]


const verificaNecessidadeEmprestimo = (clientes: ListaClientes[]): ListaClientes[] => {
    clientes.forEach((cliente) => {
        const debitos = cliente.debitos.reduce((a, b) => a + b, 0)
        cliente.saldoTotal -= debitos
        cliente.debitos = []
    })

    const precisaEmprestimo = clientes.filter((cliente) => cliente.saldoTotal < 0)

    return precisaEmprestimo
}

console.log(verificaNecessidadeEmprestimo(listaClientes))