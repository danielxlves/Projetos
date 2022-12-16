class Animal{
    constructor(){
        this.cor = ''
        this.tamanho = null
        this.peso = null
    }
    Dormir(){
        console.log('Dormir')
    }
}

class Cachorro extends Animal{
    constructor(){
        super()
        this.orelhas = 'Grandes'
    }

    Correr(){
        console.log('Correr')
    }

    Rosnar(){
        console.log('Rosnar')
    }

}

class Passaro extends Animal{
    constructor(){
        super()
        this.bico = 'Pontudo'
    }

    Voar(){
        console.log('Voar')
    }

}

class Papagaio extends Passaro{
    constructor(){
        super()
        this.sabeFalar = true
    }

    Falar(){
        console.log('Falar')
    }

}
    

//instancia = objeto

let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()


console.log(cachorro, passaro, papagaio)

cachorro.Dormir()
cachorro.Rosnar()
papagaio.Falar()
papagaio.Voar()