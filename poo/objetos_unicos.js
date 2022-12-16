let assinatura = {
    idCliente: 1000,
    descricao: 'Acesso a internet',
    status(){
        console.log('Ativo')
    }
}

console.log(assinatura.descricao)

let x = assinatura //recebe uma referencia de acesso ao objeto

console.log(x.descricao)

x.descricao = 'Internet + Tv'

console.log(assinatura.descricao)
console.log(x.descricao)