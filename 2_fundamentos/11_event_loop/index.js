//ordem de execução
function a(){
    console.log("executando function a")
}
function b(){
    console.log("executando function b")
    a()
}
function c(){
    console.log("executando function c")
    b()
}

c()