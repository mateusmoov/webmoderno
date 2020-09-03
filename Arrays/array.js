let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados)


aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' //Subtituir ou criar um indice.
aprovados.push('Mateus') // Mais apropriado para adicionar um elemento.
console.log(aprovados.length)

aprovados[9] = 'Rafael' // Eu penso arrays como caixas, e nesse exemplo, quando eu defini Rafael no indice 9, ele pulou todos os indices atrás, os indíces atrás são caixas, mas vazias, mas ainda existem.
console.log(aprovados.length)


delete aprovados[1]
console.log(aprovados[1])


aprovados = ['Bia', 'Carlos', 'Ana' ]
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')