type Pacientes = {
    nome: string
    idade: number,
    dataDaConsulta: string
}
  

const pacientes: Pacientes[] = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
  ]
  

const ordenarPacientes = (pacientes: Pacientes[]): Pacientes[] => {
    const nomesOrdenados = pacientes.sort((a,b) => {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
    })

    return nomesOrdenados
}

console.log(ordenarPacientes(pacientes))