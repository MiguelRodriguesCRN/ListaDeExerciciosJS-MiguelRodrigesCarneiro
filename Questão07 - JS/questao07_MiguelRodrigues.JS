/* Considere a seguinte lista:
var alunos = [
{ nome: “Maria Joaquinha”, notas: [8,7.5,9], curso: “Sistemas para Internet”},

{ nome: “João Ricardo”, notas: [8,8.5,5], curso: “Direito”},
{ nome: “José Henrique”, notas: [4,10,7], curso: “Administração”},
{ nome: “Pedro da Silva”, notas: [6,7.6,7.5], curso: “Sistemas para Internet”},
{ nome: “Silvana Morais”, notas: [6,7.5,9.5], curso: “Sistemas de Informação”},
{ nome: “Patricia Castro”, notas: [1,9,10], curso: “Arquitetura”},
{ nome: “Joana Ribeiro”, notas: [8,9,9], curso: “Contabilidade”},
{ nome: “Rafael Rocha”, notas: [4,4,9], curso: “Sistemas para Internet”},
{ nome: “Gustavo Henrique”, notas: [8,7.5,5], curso: “Sistemas para Internet”}
];
Desenvolva uma função que receba como parâmetro a lista acima fornecida e imprima
os dados Nome, Média Aritmética e Curso APENAS dos alunos que tiveram média maior ou
igual a 7. */


// Questão 07 - Miguel Rodrigues Carneiro


var alunos = [
    { nome: "Maria Joaquinha", notas: [8,7.5,9], curso: "Sistemas para Internet"},
    { nome: "João Ricardo", notas: [8,8.5,5], curso: "Direito"},
    { nome: "José Henrique", notas: [4,10,7], curso: "Administração"},
    { nome: "Pedro da Silva", notas: [6,7.6,7.5], curso: "Sistemas para Internet"},
    { nome: "Silvana Morais", notas: [6,7.5,9.5], curso: "Sistemas de Informação"},
    { nome: "Patricia Castro", notas: [1,9,10], curso: "Arquitetura"},
    { nome: "Joana Ribeiro", notas: [8,9,9], curso: "Contabilidade"},
    { nome: "Rafael Rocha", notas: [4,4,9], curso: "Sistemas para Internet"},
    { nome: "Gustavo Henrique", notas: [8,7.5,5], curso: "Sistemas para Internet"}
];

function soma(array) {
    return array.reduce((total, num) => total + num, 0);
}

function alunosNaMedia() {
    for (let aluno of alunos) {
        let media = soma(aluno.notas) / aluno.notas.length;
        if (media >= 7) {
            console.log("Aluno aprovado: ", aluno.nome, "| Média = ", media.toFixed(2), "| Do curso: ", aluno.curso);
        }
    }
}

alunosNaMedia();
