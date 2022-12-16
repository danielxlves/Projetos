let Carro = function(){
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 200

    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual() + 10
        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual
    }
}

let carro = new Carro()

console.log(carro.getVelocidadeAtual())
carro.acelerar()
carro.acelerar()
console.log(carro.getVelocidadeAtual())
carro.acelerar()
console.log(carro.getVelocidadeAtual())

/*funcao acelerar gera uma velocidade no carro atraves do 
metodo getVelocidadeAtual que coleta o valor do atributo 
no momento que a funcao é chamada e adiciona +10 de velocidade,
.e para repassar o valor adiocionado é chamado o metodo set
que transporta o valor atualizado para o atributo velocidadeAtual do objeto*/
