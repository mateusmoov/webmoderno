const porta = 3003

const express = require('express')
const app = express()
const bodyPaser = require('body-parser')
const bancodedados = require('./bancoDeDados')


app.use(bodyPaser.urlencoded({ extended: true}))


app.get('/produtos', (req, res, next) => {
    res.send(bancodedados.getProdutos())
    // res.send({ nome: 'Notebook', preco: 2199.99}) // O metodo send no express ele converte o objeto para JSON automaticamente.
})

app.get('./produtos/:id', (req, res, next) => {{
    res.send(bancodedados.getProduto(req.params.id))
}})

app.post('/produtos', (req, res, next) =>{
    const produto = bancodedados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`);
})