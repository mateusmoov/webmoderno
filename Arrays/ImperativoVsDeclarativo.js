const alunos = [
    { nome: 'João', nota: 7.3},
    { nome: 'Maria', nota: 9.2}
]

//Imperativvo
let total1 = 0;

for (let i = 0; i < alunos.length; i++){
    total += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo

const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// A questão da diferença do imperativo e do declarativo seria que eu eventualmente posso reutilizar as funções que eu criei, como o getNota e a soma, diferente do modo imperativo.
// O primeiro exemplo você detalha como você quer fazer, e o segundo exemplo você só da uma palavra e ele já entende o que é pra fazer.