//é necessário indixar o caminho para o file, do contrário ele ira interpretar como core module
const meumodulo = require("./meu_modulo")
const soma = meumodulo.soma
soma(2,3)
soma(8,7)
meumodulo.soma(10,10)