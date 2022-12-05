let lista_coisas = Array()
lista_coisas['frutas'] = Array('banana', 'maça', 'morango', 'limao')

lista_coisas['pessoas'] = Array('daniel','militao','paqueta')

let auxiliar = lista_coisas['pessoas'].indexOf('daniel')

if(auxiliar === -1){
    console.log('Elemento não existe')
}else{
    console.log('Elemento existe e está na posição ' + auxiliar)
}
