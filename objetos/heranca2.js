Object.prototype.attr0 = 'Z' // Se dermos um console lá em baixo, o objeto avo vai apontar de forma default pro object.prototype.

const avo = {
    attr1: 'A'
}

const pai = {
    __proto__: avo, attr2: 'B' // Usando o __proto__ ele permite que você acesse o atributo que tá na primeira função, seria só você escrever __proto__: + o nome do objeto.
}

const filho = {
    __proto__: pai, attr3: 'C' // Então o filho pega os atributos do pai, e o pai pega os atributos do avo. Ele vai percorrendo todo mundo.
}

const carro = {
   velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, // Sobrepor a velocidade máxima do objeto carros.
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }

}

Object.setPrototypeOf(ferrari, carro) // Função que estabelece prototipo entre dois objetos.
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())