const pessoa = {
    saudacao: 'Bom dia!',
    falar () {
        console.log(this.saudacao) // Eu acho que o this faz um papel de pegar uma informação que não está dentro do escopo dela. Por exemplo seguindo a minha linha de raciocínio, o saudação ele tá fora do escopo de falar, logo se a gente executar um console.log no saudação sem o this, ele não reconhece o objeto, mas se a gente colocar o this ele reconhece de cara.
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa) // A bind de uma forma simples ele transfere o this para o falarDePessoa, pois se a gente não colocar, ele simplesmente dá undefined.
falarDePessoa()