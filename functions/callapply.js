function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1- this.desc) * (1+imposto)}`
} 

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco

}

global.preco = 20;
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco = 49999,
    desc = 0.20
}

console.log(getPreco.call(carro)) // O call permite você chamar a função e também reenomear os parâmetros.
console.log(getPreco.apply(carro)) // Aqui é a mesma coisa de cima também permite, mas em forma de array.

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))

// Essas duas funções servem para justamente você chamar um objeto intercalando com uma function.