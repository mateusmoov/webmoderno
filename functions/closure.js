// Closure é o escopo criado quanodo uma função é declarada 
// Permite que a função acesse e manipule variáveis externos à função.

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
} 

const minhafuncao = fora()
console.log(minhafuncao())