//adicionar ou romover dias

let data = new Date()

console.log(data.toString())

data.setDate(data.getDate() + 1)

console.log(data.toString())

data.setMonth(data.getMonth()+1)

console.log(data.toString())

//15/01/2017
//10/01/2017

var d1 = new Date(2017,0,15)
var d2 = new Date(2017,0,10)

console.log(d1.toString())
console.log(d2.toString())

console.log(d1.getTime())
console.log(d2.getTime())

//encontrar a quantidade de milisecond de data 1 e data 2

let deltad = d1.getTime() - d2.getTime()

let dia = 1*24*60*60*1000

let resultado = deltad/dia

console.log(Math.ceil(resultado))