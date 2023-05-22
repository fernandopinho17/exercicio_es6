"use strict";

//arrays de objectos
var alunos = ['Roberto', 'Paula', 'Isaque'];
var asNotas = [9, 5, 8];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    notas: asNotas
  };
});
console.log(alunos2);

//Função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6

function nota() {
  var Andre = 9;
  var Pedro = 5;
  var resultado = Andre >= 9 / Pedro >= 5;
  if (resultado >= 6) return "Aprovado";else return "Reprovado";
}
var resultado = nota();
console.log(resultado);