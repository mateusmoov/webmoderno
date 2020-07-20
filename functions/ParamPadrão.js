function soma1 (a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

// De acordo com a forma booleana, 0 seria um número falso, então todo número que retornar falso, o parametro retorna com o valor 1.
function soma2 (a, b, c){
    a = a !== undefined ? a : 1 // Nesse exemplo ele dizzz que se a for diferente de undefined ele retorna a, se não, ele retorna 1.
    b = 1 in arguments ? b : 1 // Nesse aqui ele usa o "arguments" indicando o parâmetro b, pois os parametros na function no arguments ele interpreta como arrays, então: 0 seria a, 1 seria b, 2 seria c. Nesse caso, se b for igual a b, ele retorna b, se não ele retorna 1.
    c = isNaN(c) ? 1 : c // Aqui ele usa a function nativa do js que fala, se C for Not a Number, ele retorna 1, se não, ele retorna c.
    return a + b + c
}

console.log(soma2(0, 0, 0)) 


function soma3 (a=1, b=2, c=3){ // Aqui eu utilizei 2 linhas de código para fazer os exemplos que eu fiz lá em cima.
    return a + b + c
}

console.log(soma3(0, 0, 0))