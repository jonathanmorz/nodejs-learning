const inquirer = require("inquirer")
const chalk = require("chalk")
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Qual seu nome?',
  },
  {
    type: 'input',
    name: 'years',
    message: 'Quantos anos você tem?',
  },
  
])
.then(answers => {
  console.log(chalk.bgYellow.black("nome:",answers.name,",Idade:",answers.years));
});