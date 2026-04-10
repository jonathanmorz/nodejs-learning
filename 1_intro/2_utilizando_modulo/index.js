//utilizando require para importar o módulo
const fs = require("fs");

//fs.readFile faz a leitura de um file txt, e o (err,data) é uma sintex resumida de uma function que retorna o resultado ou um erro log 
fs.readFile("readthisfile.txt","utf8",(err,data) =>{
   if(err){
    console.log(err)
   } 
   else{
    console.log(data)
   }
})