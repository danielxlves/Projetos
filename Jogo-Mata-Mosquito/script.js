let altura = 0
let largura = 0
let vidas = 1
let tempo = 15;

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel ==='normal'){
    criaMosquitoTempo = 1500
}else if(nivel ==='dificil'){
    criaMosquitoTempo = 1000
}else if(nivel ==='expert'){
    criaMosquitoTempo = 500
}

let cronometro = setInterval(
    function(){
tempo-=1
if(tempo<0){
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    window.location.href = 'vitoria.html'
}else{
    document.getElementById('cronometro').innerHTML = tempo
}
}, 1000)


function tempoRealTamanhoTela(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura)
}

tempoRealTamanhoTela(); //atualiza a largura e altura

function PosicaoDinamica(){

    if(document.getElementById('mosquito')){ //verificar se o elemento existe atraves do seu id(identificacao unica no body), se sim ira retornar true e removerá 
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
        document.getElementById('v' +vidas).src="imagens/coracao_vazio.png"
        vidas++
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) - 100 // produzindo valores de 0 a 1 com o metodo math.random e multiplicando pela variavel da largura da pagina resgatada atraves do metodo window.innerWidth, assim deixando a imagem dinamica e dentro da visualização do usuario.
    let posicaoY = Math.floor(Math.random() * altura) - 200

    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY  

    console.log(posicaoX, posicaoY)

    //criar elemento html
    let mosquito = document.createElement('img')
    mosquito.src =  'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' +  ladoAleatorio() //className para criar uma classe no html e acessa-la no style
    mosquito.style.left = `${posicaoX}px`
    mosquito.style.top = `${posicaoY}px`
    mosquito.style.position = `absolute` //absoluta pois a referencia vai ser o body
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    //adicionar no body como um filho(appendChild)
    document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){ //tamanho do mosquito de 1 a 3
    let classe = Math.floor(Math.random() * 3)

    if(classe === 0){
        return 'mosquito1'
    }else if(classe === 1){
        return 'mosquito2'
    }else if(classe === 2){
        return 'mosquito3'
    }
}


function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)
    console.log(classe)
    
    if(classe === 0){
        return 'ladoA'
    }else if(classe === 1){
        return 'ladoB'
    }
}




