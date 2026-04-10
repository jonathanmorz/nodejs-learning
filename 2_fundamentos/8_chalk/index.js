const chalk = require("chalk")
var nota = 7

if (nota >= 6) {
    console.log(chalk.green("Parabens com sua nota você foi aprovado"))
}else{
    console.log(chalk.bgRed.black("Infelizmente você foi para a recuperação"))
}