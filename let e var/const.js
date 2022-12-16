//atribuir sempre um valor
//const preserva o escopo de bloco pertecente

const SERIE = 'friends'

function x(){
    const SERIE = 'friends'
}

console.log(SERIE)