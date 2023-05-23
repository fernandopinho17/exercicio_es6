"use strict";

//arrays de objectos
var identificacao = [{
  nome: "Roberto",
  nota: 7
}, {
  nome: "Paula",
  nota: 5
}, {
  nome: "Isaque",
  nota: 6
}];
var identificacao2 = identificacao.map(function (itemAtual) {
  return {
    classifição: itemAtual
  };
});

//Função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6

function nota() {
  var Andre = 9;
  var Pedro = 5;
  var resultado = Andre >= 9 / Pedro >= 5;
  if (resultado >= 6) return "Aprovado";else return "Reprovado";
}
var resultado = nota();
console.log(resultado);