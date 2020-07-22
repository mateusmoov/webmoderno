function carro (velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0;

     this.acelerar = function () { 
        if (velocidadeAtual * delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno  = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

// Uma coisa que eu reparei nesses exercício e que você torna uma função pública usando o this, então se por exemplo eu colocasse um const inves do this, quando eu invocar eles lá em baixo, eles não reconheceriam.
