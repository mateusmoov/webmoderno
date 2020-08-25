/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */


function caixa (nota) {
    let cem = 0;
    let cinquenta = 0;
    let dez = 0;
    let cinco = 0;
    let um = 0;
    let resultados = []
    
    while(nota >= 100) {
        nota -= 100
        cem++
    }
    
    if (cem > 0) {
        resultados.push(`${cem} notas de 100`)
    }
    
    while(nota >= 50) {
        nota -= 50
        cinquenta++
    }

    if (cinquenta > 0) {
        resultados.push(`${cinquenta} notas de 50`)
    }
    
    while(nota >= 10) {
        nota -= 10
        dez++
    }

    if (dez > 0) {
        resultados.push(`${dez} notas de 10`)
    }
    
    while(nota >= 5) {
        nota -= 5
        cinco++
    }
    
    if (cinco > 0) {
        resultados.push(`${cinco} notas de 5`)
    }
    
    while(nota >= 1) {
        nota -= 1
        um++
    }
    
    if (um > 0) {
        resultados.push(`${um} notas de 1`)
    }
    
    let b = ''
    
    for (i=0; i<resultados.length; i++){
        if (i == 0){
            b += resultados[i]
        } else if (i == resultados.length -1){
            b += ' e ' + resultados[i]
        }
        
        else {
            b += ', ' + resultados[i] 
        }
    }
    console.log(b)
}



caixa(18)



