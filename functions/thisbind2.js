function Pessoa(){
    
    this.idade = 0;
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa

// Se a gente não referenciar o this no bind, ele vai dar Not a Number, então a ideia é referenciar ele a ao objeto this que está na function.