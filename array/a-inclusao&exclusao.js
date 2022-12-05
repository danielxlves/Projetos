let lista_coisas = Array()
lista_coisas['frutas'] = Array('banana', 'maça', 'morango', 'limao')

lista_coisas['pessoas'] = Array('daniel','militao','paqueta')

console.log(lista_coisas['frutas'])


//adiociona elemento no fim do array
lista_coisas['frutas'].push('pêra')
console.log(lista_coisas['frutas'])

//adiciona elemento no começo do array
lista_coisas['frutas'].unshift('ameixa')
console.log(lista_coisas['frutas'])


//remove elemento no final do array
lista_coisas['frutas'].pop()
console.log(lista_coisas['frutas'])

//remove elemento no inicio do array
lista_coisas['frutas'].shift()
console.log(lista_coisas['frutas'])


