const nums = [1, 2, 3, 4, 5]

// For com um propósito
let resultado = nums.map(e => e * 2)
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
// O map basicamente pega os valores de uma array e modifica os valores dele, mas a array que o map gera tem a mesma quantidade de indices que o array original.

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)