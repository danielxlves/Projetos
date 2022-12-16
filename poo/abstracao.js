//Entidade: abstracao dos objetos do mundo real para programacao
//Indentidade: capacidade de indentificar de forma unica cada um dos objetos originados da entidade
//Caracteristicas: atributos dos objetos necessaria que faça sentido no contexto da necessidade
//Ações: metodos/comportamento que façam sentido no contexto do objeto

//modelo do objeto

class ContaBancaria{
    //agencia
    //numeroConta
    //saldo
    //limite
    constructor(){
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 450
        this.limite = 1000
    }

    depositar(valorDeposito){
        this.saldo += valorDeposito
    }

    sacar(valorSaque){
        this.saldo -= valorSaque
    }
}

let x = new ContaBancaria()
let y = new ContaBancaria()

x.depositar(550)
console.log(x.saldo)
x.sacar(1000)
console.log(x.saldo)