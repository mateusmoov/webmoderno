function Grades (grade1, grade2, grade3) {

   let nota = []
   

    nota.push(grade1, grade2, grade3)
    nota.sort()
    
    let resultado = (4 * nota[2]) + (3 * nota[1]) + (3 * nota[0])/ 10;
    console.log(`Notas: ${grade1}, ${grade2}, ${grade3}. ${resultado < 5 ? 'Reprovado' :'Aprovado'} `)

    return resultado
    
}

Grades(2.8, 6, 3.5)

