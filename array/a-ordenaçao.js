/*let lista_f = Array()

lista_f[0] = 'banana'
lista_f[1] = 'maça'
lista_f[2] = 'laranja'
lista_f[3] = 'limao'

console.log(lista_f.sort()) */

let lista_f = Array()

lista_f[0] = 1
lista_f[1] = 2
lista_f[2] = 3
lista_f[3] = 13

console.log(lista_f.sort(ordenaNumeros))

function ordenaNumeros(a,b){
    return a - b
    // se a - b < 0 propõe o a antes
    // se a - b > 0 propõe o b antes
}