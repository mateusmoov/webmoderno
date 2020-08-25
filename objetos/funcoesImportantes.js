const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Mostra o nome das variáveis
console.log(Object.values(pessoa)) // Mostra o que tem dentro das variáveis
console.log(Object.entries(pessoa)) // Mostra tudo


Object.defineProperty(pessoa, 'dataNascimento', { // Definir as propriedades do objeto.
    enumerable: true, // Eu defino que aqui ela vai ser visível.
    whitable: false, // E aqui eu defino que ela não pode ser editavel.
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // Mesmo que você tente mudar o valor, você não consegue por causa das propriedades aqui em cima.
console.log(pessoa.dataNascimento)


const dest = {a : 1}
const o1 = { b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // A função desse assign é primeiro colocar onde os objetos seguintes vão se destinar, e colocar os objetos. Detalhe que la em cima tem dois a, então ele vai ter uma função de SOBRESCREVER o a do dest.
console.log(obj)