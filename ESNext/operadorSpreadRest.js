//  operador  ... rest [juntar]/  spread[espalhar]
// usar rest com parâmetro de função

// Exemplo de spread
const funcionario = { nome: 'Mateus', salario: 12348.99}
const clone = { ative: true, ...funcionario} // O ...funcionario aponta para a constante de cima, onde na constante de clone, ele vai colar todos os objetos que estão na constante functionario.

console.log(clone); // { ative: true, nome: 'Mateus', salario: 12348.99 }

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoB = ['Maria', 'Rafaela', ...grupoA]

console.log(grupoB) // [ 'Maria', 'Rafaela', 'João', 'Pedro', 'Gloria' ]