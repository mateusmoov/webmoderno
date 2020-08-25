// usando a notação literal 

const obj1 = {}


// Object em JS

const obj2 = new Object

// Funções construtoras

function produto (nome, preco, desc) {
    this.nome = nome // Quando coloca o this  significa que eu quero que esse atributo seja público, seja global. 
    this.getPrecoComDesconto = () => {
        return preco * (1- desc)
    }
}

const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)