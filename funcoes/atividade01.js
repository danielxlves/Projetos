let num1 = prompt('Digite um numero')
let num2 = prompt('Digite um numero') 
num1 = Number(num1)
num2 = Number(num2)

let op = prompt('Digite a operação')

if (op === 'soma'){
    console.log(soma(num1,num2))
}else if(op === 'subtracao'){
    console.log(subtracao(num1,num2))
}


function soma(n1,n2){
    return n1+n2
}

function subtracao(n1,n2){
    return n1-n2
}