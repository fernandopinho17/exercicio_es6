const notasDosAlunos = ['18', '20', '19'];

for (let i = 0; i < notasDosAlunos.length; i++) {
    console.log(`Eu tive boas notas: ${notasDosAlunos[i]}`)
}

notasDosAlunos.forEach(function(notasDosAlunos, indice) {
    console.log(`#${indice}Eu tive boas notas: ${notasDosAlunos}`)
})

const alunos = ['Roberto', 'Paula', 'Isaque'];

const alunos2 = alunos.map(function(itemAtual) {
    return{
        nome: itemAtual,
        curso: 'Contabilidade'
    }
})

console.log(alunos2)


//const numeros = [1, 2, 3, 4, 5]
//const dobroDosNumeros = numeros.map(function(numeroAtual) {
//    return numeroAtual * 2;
//})

//console.log(dobroDosNumeros)

const Paula = alunos2.find(function(item) {
    return item.nome == 'Paula'
}) 

console.log(Paula)

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula'
}) 
console.log(indiceDaPaula)

//every
alunos2.push({
    nome: 'Filipe',
    curso: 'Financas'
})

const todosAlunosSaoDeContabilidade = alunos2.every(function(item) {
    return item.curso === 'Contabilidade'
})
console.log(todosAlunosSaoDeContabilidade);

const todosAlunosSaoDeFinancas = alunos2.every(function(item) {
    return item.curso === 'Financas' && item.curso === 'economias'
})
console.log(todosAlunosSaoDeFinancas);

const alunosDeFinancas = alunos2.filter(function(item) {
    return item.curso === 'Financas';
})

console.log(alunosDeFinancas)

const nums = [10, 20, 30, 10]
const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums [i];
}

console.log(somaComFor);

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome}`;
    return acumulador;
}, '')
console.log(nomesDosAlunos)