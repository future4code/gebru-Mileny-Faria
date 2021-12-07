/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// ---- MONTANDO O JOGO ----

    
    if (confirm(`Quer iniciar uma nova rodada?
Quer iniciar uma nova rodada?`)) {        
     let carta1 = comprarCarta()
     let carta2 = comprarCarta()
         if(carta1 && carta2 === "A") {
               carta2 = comprarCarta()
            }

     let carta3 = comprarCarta()
     let carta4 = comprarCarta()
         if(carta3 && carta4 === "A") {
            carta3 = comprarCarta()
   }

   confirm(`Suas cartas são ${carta1.texto} ${carta2.texto}. A carta revelada do computador é ${carta3.texto}.
Deseja comprar mais uma carta?`)



     
     const texto1 = carta1.texto
     const texto2 = carta2.texto
     const texto3 = carta3.texto
     const texto4 = carta4.texto

     const soma1 = carta1.valor + carta2.valor
     const soma2 = carta3.valor + carta4.valor

     console.log(`Usuário - cartas: ${texto1} ${texto2}  - pontuação ${soma1}`)
     console.log(`Computador - cartas: ${texto3} ${texto4}  - pontuação ${soma2}`)
     
     if (soma1 === soma2) {
        console.log(`Empate!`)
  
     } else if (soma1 > soma2) {
        console.log(`O usuário ganhou!`)
  
     } else { 
        console.log(`O computador ganhou!`)
  
     }
     
   } else {
      console.log("O jogo acabou!")

   }
     
   

