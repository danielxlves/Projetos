let serie = 'friends'

if(true){
    var serie2 = 'Breaking bad' // elevaçao para o escopo global, utilizando o var
    console.log(serie)
}

console.log(serie2)

function x(){
    var serie3 = 'twd' // nao sofre elevacao, utilizando var
    console.log(serie)
}

x();