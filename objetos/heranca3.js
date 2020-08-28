const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Ana' // Eu não preciso colocar filha1 = { nome:'Ana'}, por que o object.create já me possibilita de sobrepor o nome já criado pelo pai.
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, { // Aqui você pode referenciar pai e setar as propiedades ali mesmo.
    nome: {
        value: 'Bia', 
        whitable: false,
        enumerable: true
    }

})

console.log(filha2.nome)
filha2.nome = 'Mateus'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)


for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`)
} // A função hasOwnProperty checa se o parametro que vc passar nela pertence a esse objeto.