// pessoa => 123 (alocação de memoria) => {...} // A constante tem o seu significado de constante na alocação de memoria, e não no objeto em si, por isso que ele deixa alterar o objeto que está dentro de uma constante.
const pessoa = { nome: 'João' }
pessoa.nome = 'Mateus'
console.log(pessoa)

// pessoa => 456 => {...} 
// pessoa = {nome: 'Carlos'} // Mas nesse caso o objeto quer que a constante aloque em outra alocação de memoria, diferente da "123", e por isso vai retornar um erro.


Object.freeze(pessoa) // O freeze significa que vai congelar o objeto pessoa.

pessoa.nome = 'Maria'
console.log(pessoa.nome)