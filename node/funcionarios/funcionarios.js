// Mulher chinesa com o menor salário


const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const funcionariasChinesas = p => p.pais == 'China' && p.genero == 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}



axios.get(url).then(response => {
    const funcionarios = response.data
    
    const func = funcionarios.filter(funcionariasChinesas).reduce(menorSalario)

    console.log(func);

})