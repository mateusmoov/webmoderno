function evenOdd(numbers) {
  let even = 0;
  let odd = 0;

  for (let i of numbers) {
    i % 2 != 0 ? even++ : odd++;
  }

  console.log(`Existem ${even} impares e ${odd} pares.`);
}

evenOdd([11, 23, 12, 8])