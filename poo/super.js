class Animal{
    constructor(cor, tamanho, peso){
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }
    Dormir(){
        console.log('Dormir')
    }
}

class Passaro extends Animal{
    constructor(bico, cor, tamanho, peso){
        super(cor, tamanho, peso)
        this.bico = bico
    }

    Voar(){
        console.log('Voar')
    }

}

class Papagaio extends Passaro{
    constructor(sabeFalar, bico, cor, tamanho, peso){
        super(bico, cor, tamanho, peso)
        this.sabeFalar = sabeFalar
    }

    Falar(){
        console.log('Falar')
    }

}
//instancia = objeto

let papagaio = new Papagaio(true, 'pontudo', 'verde', '10cm', '500g')
let papagaio2 = new Papagaio(true, 'redondo', 'preto', '15cm', '750g')


console.log(papagaio)

console.log(papagaio2)

