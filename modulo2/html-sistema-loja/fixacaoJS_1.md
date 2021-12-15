```javascript 
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 let salarioFixo = 2000
 let comissao = valorTotalVendas * 0.05
 let vendidos = qtdeCarrosVendidos * 100
 
 let salarioFinal = salarioFixo + comissao + vendidos
 
 return salarioFinal
 
}```