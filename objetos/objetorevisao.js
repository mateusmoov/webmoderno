const produto = new Object;
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 200

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Mateus',
        idade: 19,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 56
    }, {
        nome: 'Ana',
        idade: 42
    }],

    calcularValorSeguro: function () { // Conseguimos também colocar function em um objeto.
        // ... 
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' // Pelo amor de Deus não usa isso.

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores) // Aqui ele não retorna um erro por causa que você pode acessar objetos que não existem, ele só vai retornar undefined.
console.log(carro.condutores.length) 