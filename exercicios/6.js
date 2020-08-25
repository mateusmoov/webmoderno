/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

montante = (cap, taxa, tempo) => {
     return  cap * taxa * tempo
}

jurosCompostos = (cap, taxa, tempo) => {
    return cap * (1+ taxa) ** tempo
}

console.log(montante(2, 4, 7))
