//Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade
//de números pares e a quantidade de números ímpares.

// Questão 02 - Miguel Rodrigues Carneiro

let qtd_perguntas = 0
let qtd_par = 0
let qtd_impar = 0

function perguntaNum() {

    let numero = prompt("Digite um numero: ");
    qtd_perguntas++;

    if (numero % 2 === 0) {

        qtd_par++;

    } else {

        qtd_impar++;

    }
}

do {
    perguntaNum();
} while(qtd_perguntas < 10)

console.log("A quantidade de Numeros Pares: ",qtd_par)
console.log("A quantidade de Numeros Impares: ",qtd_impar)