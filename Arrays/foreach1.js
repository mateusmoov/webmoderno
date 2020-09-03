const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, i, array) { // O primeiro parametro seria o seu parâmetro, o segundo seria o índice e a terceira seria o parametro de arrays.
    console.log(`${i++}) ${nome}`)
})



aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)