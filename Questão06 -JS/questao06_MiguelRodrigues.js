/* Escreva uma função que informe o retorno de um investimento (montante) com
base nos valores do capital inicial, tempo em meses e taxa de juros mensal,
fornecidos pelo usuário.
Use a fórmula: M = C * (1+i) t
Onde:
 C = Capital inicial investido
 i = Taxa de juros, em percentual
 t = Tempo do investimento, em meses
Exiba o resultado com duas casas decimais. 
*/


// Questão 06 - Miguel Rodrigues Carneiro



let montante = 0
let capitalInicial = parseFloat(prompt("Digite o Capital Inical: "))
let taxaJuros = parseFloat(prompt("Digite o a taxa de juros (EXEMPLO: 20% = 20 DIGITADO): "))
var tempo = parseFloat(prompt("Digite o Tempo em meses que o Investimento correrá: : "))

function inventimentoAnual() {

    montante = capitalInicial * (1+taxaJuros /100)**tempo

}

inventimentoAnual();
console.log("O montante final após os meses e taxa informadas será de :",montante.toFixed(2))