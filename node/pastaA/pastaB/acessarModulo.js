const moduloA = require('../../moduloa') 
console.log(moduloA.ola)    // O comando não executaria no linux por que o A de moduloa está minusculo e no arquivo original está maiusculo.

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')

http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)
