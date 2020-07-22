// IIFE Imediately Invoked Function Expression 

(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abraagente!')
})() 
// Como você já coloca a função dentro de parênteses, você já pode invocar a função com apenas (), com isso, você foge do escopo global, por que tudo o que você define dentro fica lá dentro, com as suas excessões, claro.