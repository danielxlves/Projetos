const form = document.querySelector('#form') //selecionar

form.addEventListener('submit', function(event){ //escutar evento
    event.preventDefault()

    const intupPeso = event.target.querySelector('#peso') //selecionar
    const intupAltura = event.target.querySelector('#altura')

    const peso = Number(intupPeso.value) //capturar
    const altura = Number(intupAltura.value)

    if (!peso){
        setResultado('Peso inválido!', false) 
        return
    }

    if (!altura){
        setResultado('Altura inválida!', false)
        return
    }

    const imc = getIMC(peso, altura);

    const indiceImc = getIndiceImc(imc);
  
    const msg = `Seu IMC é: ${imc}, ${indiceImc}`

    setResultado(msg, true);

    })



function getIMC(peso, altura){
    const imc = peso / altura ** 2
    return imc.toFixed(2);
}


function getIndiceImc(imc){
    const indice = ['Abaixo do peso', 'Peso normal', 
    'Sobrepeso', 'Obesidade grau 1', 
    'Obesidade grau 2', 'Obesidade grau 3']

    if(imc>= 39.9){
        return indice[5]
    }
    if(imc>= 34.9){
        return indice[4]
    }

    if(imc>= 29.9){
        return indice[3]
    }

    if(imc>= 24.9){
        return indice[2]
    }

    if(imc>= 18.5){
        return indice[1]
    }
    
    if(imc < 18.5){
        return indice[0]
    }
}

function criaSpan(){
const span = document.createElement('span')
return span
}

function setResultado(msg, isValid){

    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''


    const span = criaSpan()

    if (isValid){
        span.classList.add('resultado-valido')
    }else{
        span.classList.add('resultado-invalido')
    }

    span.innerHTML= msg
    resultado.appendChild(span) // passar valores por herança
}


