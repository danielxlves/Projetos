const nome = prompt('Digite seu nome: ')
let altura = prompt('Digite sua altura em centimetros: ')
let peso = prompt('Digite seu peso: ')

parseFloat(peso)
parseFloat(altura)

altura /= 100

let imc = peso / (altura**2)


if(imc < 16){
    document.write(`<h1> ${nome} possui imc igual a ${imc}, sendo classificado como: Abaixo do peso muito grave`)

}else if(imc >= 16 && imc <= 16.99){   
    document.write(`<h1> ${nome} possui imc igual a ${imc}, sendo classificado como: Abaixo do peso grave`)

}else if(imc >= 17 && imc <= 18.49){
    document.write(`<h1> ${nome} possui imc igual a ${imc}, sendo classificado como: Abaixo do peso`)

}else if(imc >= 18,50 && imc <= 24.99){
    document.write(`<h1> ${nome} possui imc igual a ${imc}, sendo classificado como: Peso normal`)

}else if(imc >= 25 && imc < 26.99){
    document.write(`<h1> ${nome} possui imc igual a ${imc}, sendo classificado como: Sobrepeso `)

}else if(imc >= 27 && imc < 34.99){
    document.write( `<h1> ${nome} possui imc igual a ${imc}, sendo classificado como: Obesidade grau I `)

}else if(imc >= 35 && imc < 39.99){
    document.write(`<h1> ${nome} possui imc igual a ${imc}, sendo classificado como: Obesidade grau II `)
    
}else if(40 < imc){
    document.write(`<h1> ${nome} possui imc igual a ${imc}, sendo classificado como: Obesidade grau III`)

}else{
    document.write('dados invalidos')
}

