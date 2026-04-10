const redline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

redline.question("qual sua linguagem preferida? ", (lenguague) =>{
    console.log("A minha linguagem preferida é %s",lenguague)
    if (lenguague === "Python"){
        console.log("Isso nem é linguagem!")
    }
})