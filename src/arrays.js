//arrays de objectos
const alunos = ['Roberto', 'Paula', 'Isaque'];

const asNotas = [9, 5, 8]

const alunos2 = alunos.map(function(itemAtual) {
    return{
        nome: itemAtual,
        notas: asNotas,
    }
})

console.log(alunos2)


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

