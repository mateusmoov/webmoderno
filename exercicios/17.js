/* Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function salario(plano, salario) {
  let aumento = 0;

  switch (plano) {
    case "A":
      aumento = salario * 0.1;
      return (salario += aumento);
    case "B":
      aumento = salario * 0.15;
      return (salario += aumento);
    case "C":
      aumento = salario * 0.20;
      return (salario += aumento);
  }
}

console.log(salario("C", 500))
