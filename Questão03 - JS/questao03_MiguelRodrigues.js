//Faça um programa que, dado um conjunto de N números, determine o menor
//valor, o maior valor e a soma dos valores.

// Questão 03 - Miguel Rodrigues Carneiro

let numeros = [10, 25, 17, 19, 88]

let maiorNumero = Math.max(...numeros)
let menorNumero = Math.min(...numeros)

let somaNum = 0

function somaNumeros() {

    for (let i = 0; i < numeros.length; i++) (
        somaNum = somaNum + numeros[i]
    )

}


somaNumeros();
console.log("O maior numero é: ",maiorNumero);
console.log("A soma dos numeros é de: ", somaNum)