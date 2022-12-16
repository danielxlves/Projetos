//software de marcenaria
//cadeira e sofa

//paradigma procedural
/*let cadeiras = Array()

cadeiras[0] = Array()
cadeiras[0]['qtd_pernas'] = 4
cadeiras[0]['giratoria'] = true
cadeiras[0]['cor'] = 'vermelha'

cadeiras[1] = Array()
cadeiras[1]['qtd_pernas'] = 2
cadeiras[1]['giratoria'] = false
cadeiras[1]['cor'] = 'rosa'

function girar_cadeira(indice){
    if(cadeiras[indice]['giratoria'] === true){
    console.log('cadeira e giratoria')
}else{
    console.log('cadeira nao e giratoria')
}
}

function adicionar_cadeira(qtde_pernas, giratoria, cor){
    let cadeira = Array()
    cadeira['qtd_pernas'] = qtde_pernas
    cadeira['giratoria'] = giratoria
    cadeira['cor'] = cor

    cadeiras.push(cadeira)
}

adicionar_cadeira(1, true, 'azul')

console.log(cadeiras)

girar_cadeira(2)*/

//paragidma de OO

/*class Cadeira{
    constructor(qtde_pernas, giratoria, cor){
       atributo this.qtde_pernas = qtde_pernas  parametro inserido     //dados do objeto
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira(){
    if(this.giratoria === true){                                             //acoes do objeto
        console.log('girou')
    }else{
        console.log('nao girou')
    }
}

}

let cadeiras = Array()

cadeiras.push(new Cadeira(1,true,'verde'))
cadeiras.push(new Cadeira(3,false,'verde'))

console.log(cadeiras)
*/

class Sofa{
    constructor(qtd_lugares, reclinavel, cor){
        this.qtd_lugares = qtd_lugares    //dados do objeto
        this.reclinavel = reclinavel
        this.cor = cor
    }

    Reclinar(){
    if(this.reclinavel === true){                                             //acoes do objeto
        console.log('reclinar')
}else{
    console.log('nao reclinavel')
}

}
}

let sofas = Array()

sofas.push(new Sofa(2,true,'verde'))
sofas.push(new Sofa(3,false,'verde'))

sofas[1].Reclinar()


