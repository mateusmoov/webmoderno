const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // O último indice da array é excluida.
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um indice no final da array.
console.log(pilotos)

pilotos.shift() // Exclui o PRIMEIRO indice da array.
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um indice no começo da array.
console.log(pilotos)

// Splice ADICIONAR
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Splice REMOVER
pilotos.splice(3, 1) // Do terceiro indice eu quero que remova 1 indice.
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

