//arrays de objectos
const identificacao = [{
    nome: "Roberto",
    nota: 7,
},
{
    nome: "Paula",
    nota: 5
},
{
    nome: "Isaque",
    nota: 6
},
]

const identificacao2 = identificacao.map(function(itemAtual) {
    return{
        classifição: itemAtual,
    }
})

//Função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6


function nota () {
    let Andre = 9
    let Pedro = 5
    let resultado = Andre >=9 / Pedro >= 5
    if ( resultado >= 6)
        return "Aprovado"
    else
        return "Reprovado"
}

let resultado= nota()

console.log(resultado)



