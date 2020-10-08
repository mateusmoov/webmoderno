const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias.get('react').framework);

const chavesVariadas = new Map([
    [function () { }, 'função'],
    [{}, 'Objeto']
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl);
})