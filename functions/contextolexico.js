const valor = 'Global'

function minhaFuncao() { // Aqui a função não encontra o "valor" no local da execução da função e sim onde ela foi criada.
    console.log(valor)
}

function exec () {
    const valor = 'Local'
    minhaFuncao()
}

exec()