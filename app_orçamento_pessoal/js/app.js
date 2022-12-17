class Despesa{
    constructor(ano,dia,mes,tipo,descricao,valor){
        this.ano = ano
        this.dia = dia
        this.mes = mes
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }
        return true
    }
}

//indice dinamico
class Bd{
    constructor(){
        let id = localStorage.getItem('id')
        if(id === null){
            localStorage.setItem('id', 0)
        }
    }
    getProximoId(){
        let proxId = localStorage.getItem('id') 
        return parseInt(proxId) + 1 //adicionar 1 ao null inicialmente, apos realiaza a soma da quantidade de objetos recebidos
    }
    gravar(d){
    let n = this.getProximoId()
    localStorage.setItem(n, JSON.stringify(d))
    localStorage.setItem('id', n)
    }

    recuperarDados(){

        let despesas = Array()
        let id = localStorage.getItem('id')

        //recuperar cada despesa do localstorage
        for(let i = 0; i <= id; i++){

        //recuperar a despesa e transformando em objeto literal
            let despesa = JSON.parse(localStorage.getItem(i))

        //tratar dado null para que não contenha no array de visualização da lista de despesa
            if(despesa === null){
                continue
            }
        //coletar uma despesa e por no array
            despesa.id = i
            despesas.push(despesa)
                }
        return despesas


    }

    pesquisarDados(despesa){
        let despesaFiltradas = Array()
        despesaFiltradas = this.recuperarDados()
        console.log(despesaFiltradas)
        console.log(despesa)
      //ano
    if(despesa.ano != ''){
        console.log('ano')
        despesaFiltradas = despesaFiltradas.filter(d => d.ano == despesa.ano)
    }
     //mes
     if(despesa.mes != ''){
        console.log('mes')
        despesaFiltradas = despesaFiltradas.filter(d => d.mes == despesa.mes)
    }
     //dia
     if(despesa.dia != ''){
        console.log('dia')
        despesaFiltradas = despesaFiltradas.filter(d => d.dia == despesa.dia)
    }
    //tipo
    if(despesa.tipo != ''){
        console.log('tipo')
        despesaFiltradas = despesaFiltradas.filter(d => d.tipo == despesa.tipo)
    }
    //descricao
    if(despesa.descricao != ''){
        console.log('descricao')
        despesaFiltradas = despesaFiltradas.filter(d => d.descricao == despesa.descricao)
    }
    //valor
    if(despesa.valor != ''){
        console.log('valor')
        despesaFiltradas = despesaFiltradas.filter(d => d.valor == despesa.valor)
    }
            return despesaFiltradas

}

remover(id){
    localStorage.removeItem(id)
}

}

let bd = new Bd()
function cadastrarDespesa(){
  let ano =  document.getElementById('ano')
  let mes = document.getElementById('mes')
  let dia = document.getElementById('dia')
  let tipo =  document.getElementById('tipo')
  let descricao =  document.getElementById('descricao')
  let valor =  document.getElementById('valor')

  let despesa = new Despesa(ano.value, dia.value, mes.value, tipo.value, descricao.value, valor.value)
  
  if(despesa.validarDados()){
    bd.gravar(despesa)
    document.getElementById('tituloCor').classList.add('text-success')
    document.getElementById('tituloText').innerHTML = 'Gravação concluída.'
    document.getElementById('situacaoCor').classList.add('text-success')
    document.getElementById('situacaoText').innerHTML = 'Despesa gravada com sucesso!'
    document.getElementById('botaoCor').classList.add('btn-success')
    document.getElementById('botaoText').innerHTML = 'Voltar'
    $('#registroDespesa').modal('show')
    ano.value = ''
    mes.value = ''
    dia.value = ''
    tipo.value = ''
    descricao.value = ''
    valor.value = ''

  }else{
    document.getElementById('tituloCor').classList.add('text-danger')
    document.getElementById('tituloText').innerHTML = 'Erro na gravação.'
    document.getElementById('situacaoCor').classList.add('text-danger')
    document.getElementById('situacaoText').innerHTML = 'Existem campos obrigatórios não preenchidos.'
    document.getElementById('botaoCor').classList.add('btn-danger')
    document.getElementById('botaoText').innerHTML = 'Corrigir e voltar'
    $('#registroDespesa').modal('show')
  }
  
}

function carregarDados(despesas = Array(), filtro = false){

    if(despesas.length == 0 && filtro == false){
        despesas = bd.recuperarDados()
    }
    
    //selecionando o tbody
   let listaDespesas = document.getElementById('listaDespesas')
   listaDespesas.innerHTML = ''  
    //percorrer o array despesas, listando as despesas de forma dinanmica
    despesas.forEach(function(d){
        //criar linhas tr
        let linha = listaDespesas.insertRow()
        
        //criar colunas td
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`

        switch(d.tipo){
            case '1': d.tipo = 'Alimentação'
            break
            case '2': d.tipo = 'Educação'
            break
            case '3': d.tipo = 'Lazer'
            break
            case '4': d.tipo = 'Saúde'
            break
            case '5': d.tipo = 'Transporte'
            break
        }
        linha.insertCell(1).innerHTML = `${d.tipo}`


        linha.insertCell(2).innerHTML = `${d.descricao}`
        linha.insertCell(3).innerHTML = `${d.valor}`

        let btn = document.createElement('button')
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-times"> </>'
        btn.id = `id_despesa_${d.id}`
        btn.onclick = function(){
            let id = this.id.replace('id_despesa_', '')
            bd.remover(id)
            window.location.reload()
        }
        linha.insertCell(4).append(btn)
    })

}

function pesquisarDespesa(){
  let ano =  document.getElementById('ano')
  let mes = document.getElementById('mes')
  let dia = document.getElementById('dia')
  let tipo =  document.getElementById('tipo')
  let descricao =  document.getElementById('descricao')
  let valor =  document.getElementById('valor')

  let despesa = new Despesa(ano.value, dia.value, mes.value, tipo.value, descricao.value, valor.value)
  let despesas =  bd.pesquisarDados(despesa)
  
    carregarDados(despesas, true)

}