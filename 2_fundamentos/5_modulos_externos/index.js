//na linha de comando deve-se por "node .\index.js --nome=<variável> --trabalho=<variável>" para funcionar
const minimist = require("minimist")
const args = minimist(process.argv.slice(2))
const nome = args['nome']
const trabalho = args['trabalho']
console.log(nome, trabalho)
console.log(`o nome dele é ${nome} e a profissão dele é ${trabalho}`)