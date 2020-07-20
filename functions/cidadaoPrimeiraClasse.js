// função de forma literal 
function fun1 () { }

// armazzenar em uma variável
const fun2 = function () { }

// armazzenar em uma array 
const array = [function (a, b) { return a + b}, fun1, fun2]

// armazzenar em um atributo de objeto

const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// função como parametro 
function run (fun) {
    fun()
}

run(function (){console.log ('Executando...')})

// função contendo uma outra função

function soma (a, b) {
    return function (c) {
        console.log(a+b+c)
    }
}

soma(2,3)

const cincomais = soma(2,3)
cincomais(9)

