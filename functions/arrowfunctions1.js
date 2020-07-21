let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro => a = 2 * a // Nesse caso só pode ser válido quando a function passa apenas um parâmetro, depois disso o return fica como padrão.

let ola = function () {
    return 'Olá'
}

ola = () => 'ola'
ola = _ => 'Olá' // O underline possui um parâmetro mas ela pode ser ignorada quando a função for chamada.
console.log(ola())

// A função arrow é simplismente você ter um código mais limpo e ter o "this" implicito como padrão.