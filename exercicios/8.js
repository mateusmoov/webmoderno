/* Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). */

let scores = [32, 42, 11, 24, 80];
let brokenRecords = 0;
let min;
let recordes = 0;

for (i in scores) {
  scores[i];
  if (scores[i] > brokenRecords) {
    brokenRecords = scores[i];
    recordes++;
  }
}

let min = Math.min(scores)
console.log(`O seu pior ponto foi de ${min}`)
console.log(`O número de recordes batidos foi de ${recordes}`);
