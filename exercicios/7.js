/* ​ Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x2 - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */


delta = (ax2, bx, c) => {
    resultado = []
    let delta = ax2 ** 2 - (4 * bx * c)
        if (delta > 0){
            let x1 = console.log(-bx + Math.sqrt(delta)/ 2 * ax2)
            let x2 = console.log(-bx - Math.sqrt(delta)/ 2 * ax2)
            resultado.push(x1, x2)
            return resultado
        } else {
            console.log('Delta é negativo.')
        }
}

delta(3, -5, 12)