// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let ret = new Array
       for(let i = array.length-1; i >= 0; i--) {
        ret.push(array[i])
    }
    return ret
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a,b) {
        return a - b
    })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayPairs = array.filter(value => value % 2 === 0)
    return arrayPairs
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayPairsToThe2 = array  .filter(value => value % 2 === 0)
                                    .map(value => value ** 2)
    return arrayPairsToThe2
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const higherNumber = array.reduce(function(a, b) {
        return Math.max(a, b)
    })
    return higherNumber
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = Math.max(num1, num2)
    const menorNumero = Math.min(num1, num2)
    return {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
        diferenca: maiorNumero - menorNumero
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pairNumbers = []

    for (let i = 0; pairNumbers.length < n; i++) {
        if (i % 2 === 0) {
            pairNumbers.push(i)
        }
    }
    return pairNumbers
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayEmOrdem = array.sort((a, b) => a - b)
    const segundoMaior = arrayEmOrdem[arrayEmOrdem.length -2]
    const segundoMenor = arrayEmOrdem[1]
  
    return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
    
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const anonymous = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    
    return anonymous
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasPermitidas = pessoas.filter(pessoa => pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
    return pessoasPermitidas
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoPermitidas = pessoas.filter(pessoa => pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60)
    return pessoasNaoPermitidas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let conta of contas) {
        for (let compra of conta.compras) {
            conta.saldoTotal = conta.saldoTotal - compra
        }
        conta.compras = []
        return contas
    }
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function(a, b) {
        if(a.nome < b.nome) {
          return -1
        } else {
          return true
        }
      })
    
      return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort((a, b) => b.dataDaConsulta - a.dataDaConsulta)
    consultas.sort((a, b) => {
        if (a.dataDaConsulta === b.dataDaConsulta) {
          if (a.dataDaConsulta > b.dataDaConsulta) return 1;
          if (a.dataDaConsulta < b.dataDaConsulta) return -1;
        }
        return 0;
    })

}