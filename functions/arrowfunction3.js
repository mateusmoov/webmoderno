

compareComThis = param => console.log(this === param)

compareComThis(global) // Quando eu fiz esse teste com essa técnica de função, ele deu false, talvez seja por que o this já é pre-definido em uma arrow function.

let compareComThis = function (param) {
    console.log(this === param)
}

compareComThis(global)

const obj {}
compareComThis = compareComThis.bind(obj)
compareComThis(global)
compareComThis(mod)