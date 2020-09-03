const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const eCaro = p => p.preco > 2400
const eFragil = p => p.fragil

const resultado = produtos.filter(eCaro).filter(eFragil)

console.log(resultado)