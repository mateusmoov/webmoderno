const  anonimo = process.argv.indexOf('-a') !== -1  // Se o argumento que eu passar no terminal for diferente de -1, retorne falso.
// console.log(anonimo);

if (anonimo) {
    process.stdout.write('Fala anonimo. \n') // Printar  no console.
    process.exit()
}  else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data',  data =>{
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!! \n`)
        process.exit()
    })
}

// Claramente isso seria mais facil baixando alguma biblioteca  de prompt.