const soma = function (x, y) { // a definição literal de uma função anonima, seria simplesmente você declarar uma function sem nenhum nome para ela.
    return x + y

}

const imprimirResultado = function (a, b, operacao = soma){ // Aqui ele chamou a função soma em operação.
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // Aqui então seria operação sendo chamado que é igual a soma e somou os números 3 e 4.
imprimirResultado(3, 4, soma) // Aqui seria a mesma de cima, por que a soma é x + y e seria a mesma coisa de operacao.
imprimirResultado(3, 4, function(x, y){ // Aqui temos meio que uma manipulação, onde eu quero que ele retorne a subtração de x e y.
    return x - y
})

imprimirResultado(2, 4, (x, y) => x * y) // Aqui temos uma manipulação como acima, mas agora com uma arrow function, seria a mesma coisa mas nesse caso seria a multiplicação.

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

console.log(pessoa.falar)