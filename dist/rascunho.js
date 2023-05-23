"use strict";

var notasDosAlunos = ['18', '20', '19'];
for (var i = 0; i < notasDosAlunos.length; i++) {
  console.log("Eu tive boas notas: ".concat(notasDosAlunos[i]));
}
notasDosAlunos.forEach(function (notasDosAlunos, indice) {
  console.log("#".concat(indice, "Eu tive boas notas: ").concat(notasDosAlunos));
});
var alunos = ['Roberto', 'Paula', 'Isaque'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Contabilidade'
  };
});
console.log(alunos2);

//const numeros = [1, 2, 3, 4, 5]
//const dobroDosNumeros = numeros.map(function(numeroAtual) {
//    return numeroAtual * 2;
//})

//console.log(dobroDosNumeros)

var Paula = alunos2.find(function (item) {
  return item.nome == 'Paula';
});
console.log(Paula);
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula';
});
console.log(indiceDaPaula);

//every
alunos2.push({
  nome: 'Filipe',
  curso: 'Financas'
});
var todosAlunosSaoDeContabilidade = alunos2.every(function (item) {
  return item.curso === 'Contabilidade';
});
console.log(todosAlunosSaoDeContabilidade);
var todosAlunosSaoDeFinancas = alunos2.every(function (item) {
  return item.curso === 'Financas' && item.curso === 'economias';
});
console.log(todosAlunosSaoDeFinancas);
var alunosDeFinancas = alunos2.filter(function (item) {
  return item.curso === 'Financas';
});
console.log(alunosDeFinancas);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome);
  return acumulador;
}, '');
console.log(nomesDosAlunos);
function parimpar(n) {
  if (n % 2 == 0) {
    return 'par!';
  } else {
    return 'impar!';
  }
}
console.log(parimpar(223));