/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

function crianca(altura1, altura2, taxa1, taxa2) {
  if (altura1 == altura2) {
    return "As alturas são iguais.";
  }

  let altCriancaMaior = altura1;
  let txCriancaMaior = taxa1;
  let altCriancaMenor = altura2;
  let txCriancaMenor = taxa2;

  if (altura2 > altura1) {
    altCriancaMaior = altura2;
    txCriancaMaior = taxa2;
    altCriancaMenor = altura1;
    txCriancaMenor = taxa1;
  }
  
  console.log(`Qual o menor criança ${altCriancaMenor}\n`);

  if (txCriancaMenor <= txCriancaMaior) {
    console.log("Nunca vai passar");
  } else {
    let anos = 1;

    console.log(`A partir daqui mostra o crescimento: \n`);
    while (altCriancaMenor < altCriancaMaior) {
      console.log(`ano: ${anos} criança menor: ${altCriancaMenor} maior: ${altCriancaMaior}\n`);
      altCriancaMenor = altCriancaMenor + (altCriancaMenor * txCriancaMenor);
      altCriancaMaior = altCriancaMaior + (altCriancaMaior * txCriancaMaior);
      anos++;
    }
    
    console.log(`ano: ${anos} criança menor: ${altCriancaMenor} maior: ${altCriancaMaior}\n`);
    console.log(`Vão demorar ${anos} anos para ultrapassar\n`); // \n pula a linha
    return anos; //o retorno tem que permancer
  }
}

crianca(120, 160, 0.4, 0.2);
