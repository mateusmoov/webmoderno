// não aceita repetição e não é indexada.

const { set, conforms } = require("lodash");

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians').add('Flamengo')
times.add('Vasco') // Ele é ignorado.

console.log(times);
console.log(times.size); // Tamanho
console.log(times.has('Vasco')); // Ele checa se tem esse time
times.delete('Vasco')
console.log(times.has('Vasco'));

const nomes = ['Mateus', 'Lucas', 'Mateus']
const nomesSet = new Set(nomes)
console.log(nomesSet)
