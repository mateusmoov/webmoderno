const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: '200'
}

console.log(ferrari.__proto__)  // Para eu conseguir a main do objeto, eu preciso usar o __proto__. Por exemplo se a gente tiver um const com herança e em um dos objetos você não tem a cor do cabelo, o proto vai percorrendo o que tem la em cima, ou seja, o pai, ou pai do pai, e etc.
console.log(ferrari.__proto__ === Object.prototype); // Mas o prototype a gente só usa quando tem functions, quando existir objetos, usamos __proto__.
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === true)

function MeuObjeto () {}
    console.log(typeof Object, typeof MeuObjeto)
    console.log(Object.prototype, MeuObjeto.prototype)
