
const identificacao = [{
    nome: "Roberto",
    nota: 7,
},
{
    nome: "Paula",
    nota: 5,
},
{
    nome: "Isaque",
    nota: 6,
},
]

const identificacao2 = identificacao.map(function(itemAtual) {
    return{
        classifição: itemAtual,
    }
})

console.log(identificacao2)

const Roberto = identificacao.find(function(item) {
    return item.nome == 'Roberto'
})

console.log(Roberto)

const indeDORoberto = identificacao.findIndex(function(item) {
    return item.nome == 'Roberto'
})

console.log(indeDORoberto)

const indeDoIsaque = identificacao.findIndex(function(item) {
    return item.nome == 'Isaque'
})

console.log(indeDoIsaque)

const todosAlunostiverBoaNota = identificacao.every(function(item) {
    return item.nota === '6'
})
console.log(todosAlunostiverBoaNota);

const alunosQueAprovaram = identificacao.filter(function(item) {
    return item.nome === 'Aprovados'  && nota >= 6
})

console.log(alunosQueAprovaram)