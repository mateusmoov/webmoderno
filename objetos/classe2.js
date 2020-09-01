class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // é tipo um __proto__ de um objeto mas em classe.
    constructor(sobrenome, profissao = "professor") {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor () {
        super('Silva')
    }
}

const filho = new Filho

console.log(filho)