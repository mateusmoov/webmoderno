const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem Callback

// Nesse exemplo a pessoa pegou o indice i para percorrer em cada array presente em notas para saber qual é a nota menor que 7, diante disso ele usa a função push, para adicionar na array vazia notasBaixas1.

let notasBaixas1 = []

for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback

// Nesse exemplo aqui a pessoa usou a função filter, que seria o seguinte, ele retorna valores booleanos, ou seja, true ou false, então se nota for maior que 7 ele retorna false, mas se ele retornar true, que seria nota menor que 7, ele colocaria na constante notasBaixas2.

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

// Aqui seria a mesma coisa do exemplo anterior só que usando a arrow function, o que é muito mais clear.

const notasBaixas3 =  notas.filter(nota => nota < 7)
console.log(notasBaixas3)