const x = "10"

try{
    x = 2
}catch(err){
    console.log("Não é permitido atribuir novo valor a uma const",err)
}