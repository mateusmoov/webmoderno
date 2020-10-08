for(let letra of "Cod3r"){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisse']
for (let assuntos of assuntosEcma){   // A diferença entre o in e o of  é que o in percorre pelos indices e o of percorre pelos valores.
    console.log(assuntos);
}

for (let assuntos in assuntosEcma){ 
    console.log(assuntos);
}