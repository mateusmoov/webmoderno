// Object.preventExtensions ele não permite que o seu objeto se extenda. De se extender eu digo no sentido de adicionar novos atributos.

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // Modificando o nome do objeto.
produto.descricao = 'Borracha escolar branca' // Adicionando uma nova instância.
delete produto.tag // Deletando uma instância.

// O resultado disso tudo seria que o primeiro passaria, pois ele só mudaria o nome da instância já criada, mas a segunda, na linha 12 não deixaria, pois você está adicionando uma nova instância, o que não é permitido no Object.preventExtensions.
// E o terceiro ele deixa você deletar a instância tranquilamente.

console.log(produto)

//Object.seal - Você não consegue adicionar e nem EXCLUIR atributos do objeto.

const pessoa = {
    nome: 'Julia',
    idade: 35
}

Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.batata = 'Batata' // Não funciona
delete pessoa.nome // Não funciona
pessoa.idade = 40 // Funciona

console.log(pessoa)


// Object.freeze - Você não vai conseguir fazer absolutamente nada no objeto.

const pessoa2 = {
    nome: 'Mateus',
    idade: 19
}

Object.freeze(pessoa2)

pessoa2.nome = 'Matheus' // Não funciona
delete pessoa2.idade // Não funciona
pessoa2.gostaSushi = true // Não funciona

console.log(pessoa2)

