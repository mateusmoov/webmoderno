const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2);

const nomeAtributo = 'nota'
const valorAtributo = 8.97

const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3);

const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)

const obj5 = {
    funcao: function () {
        // Forma antiga de se fazer
    },
    funcao2() {
        // Função anonima.
    }
}

console.log(obj5)
