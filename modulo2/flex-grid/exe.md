```javascript
    
    function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    // Escreva seu código aqui
    let qtdNumeros = 0

    if(arrayDeNumeros.includes(numeroEscolhido)) {
        for (let numero of arrayDeNumeros) {
            if (numero === numeroEscolhido) {
                qtdNumeros++
            }
        }
        return `O número ${numeroEscolhido} aparece ${qtdNumeros}x`
    } else {
        return "Número não encontrado"
    }
          
}
```
