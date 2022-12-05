function exibirArtigo(id, callbackSucesso, callbackErro){
    if(false){
        callbackSucesso('Funções de callback em JS', 'Funcções de callback')
    }else{
        callbackErro('Erro')
    }
}

let callbackSucesso = function(titulo, descricao){
    console.log(titulo, descricao)
}

let callbackErro = function(erro){
    console.log('erro ao recuperar os dados')
}

exibirArtigo(0, callbackSucesso, callbackErro)