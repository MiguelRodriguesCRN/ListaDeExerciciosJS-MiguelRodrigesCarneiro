/// Supondo que a população de um país A seja da ordem de 80000 habitantes com
//uma taxa anual de crescimento de 3% e que a população de B seja 200000
//habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que
//calcule e escreva o número de anos necessários para que a população do país A
//ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.


// Questão 01 - Miguel Rodrigues Carneiro


let populaçãoA = 80000;
let populaçãoB = 200000;
let qtd_anos = 0;

function AumentoPopA() {
    populaçãoA = populaçãoA + (populaçãoA * 3) / 100;
}

function AumentoPopB() {
    populaçãoB = populaçãoB + (populaçãoB * 1.5) / 100;
}

do {

    qtd_anos++;
    AumentoPopA();
    AumentoPopB();

} while (populaçãoA < populaçãoB);

console.log("Quantidade De Anos Necessários para PopulaçãoA Igualar ou Ultrapassar a PopulaçãoB: ", qtd_anos);
