const fs = require("fs")

console.log("inicio")

fs.writeFile("Arquivo1.txt","oi",function(err){
    setTimeout(function(){
        console.log("foi criado");
    },5400);
});

console.log("Fim")