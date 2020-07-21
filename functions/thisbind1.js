const pessoa = {
    saudacao: 'Bom dia!',
    falar () {
        
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar.bind(pessoa) // Aqui criamos uma variável com o nome falar, se a gente chamar o falar, ele não vai dar mais certo por que o this agora não está mais se referindo a pessoa, e sim falar.
falar()

// Nesse caso, a função this ele se refere a quem está por fora do escopo, no caso seria "Bom dia!", mas se a gente nao aplicar o this em saudação no console ele vai se referir a "Boa noite!".