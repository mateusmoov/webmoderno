/* Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */


function lanchonete (codigo, qnt) {
    switch(codigo) {
        case 100:
            return qnt * 3.00
        case 200:
            return qnt * 4.00
        case 300: 
            return qnt * 5.50
        case 400:
            return qnt * 7.50
        case 500: 
            return qnt * 3.50
        case 600:
            return qnt * 2,80
        default:
            return "Produto não existente"
    }
}

console.log(lanchonete(200, 2))