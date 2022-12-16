// let preserva o escopo de bloco

/*if(true){
    let nome = daniel;
}

console.log(nome)
*/

let serie = 'friends'

{
    let serie = 'breaking bad'
    console.log(serie)
}

console.log(serie)