//quando for executar o arquivo ponha "nome=<variável>" após a indicação de execução
console.log(process.argv)

const args = process.argv.slice(2)
console.log(args)

const nome = args[0].split("=")[1]
console.log(nome)