"use strict";

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
console.log(identificacao2);
var Roberto = identificacao.find(function (item) {
  return item.nome == 'Roberto';
});
console.log(Roberto);
var indeDORoberto = identificacao.findIndex(function (item) {
  return item.nome == 'Roberto';
});
console.log(indeDORoberto);
var indeDoIsaque = identificacao.findIndex(function (item) {
  return item.nome == 'Isaque';
});
console.log(indeDoIsaque);
var todosAlunostiverBoaNota = identificacao.every(function (item) {
  return item.nota === '6';
});
console.log(todosAlunostiverBoaNota);
var alunosQueAprovaram = identificacao.filter(function (item) {
  return item.nome === 'Aprovados' && nota >= 6;
});
console.log(alunosQueAprovaram);