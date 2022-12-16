let nome = 'daniel'
let idade = 21
let sexo = 'masculino'
let profissao = 'programador'

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function(){
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo}, ${this.profissao}`)
    }
}

let objeto2 = {
    nome, //nome = nome variavel / valor = valor variavel
    idade,
    sexo,
    profissao,
    exibirResumo: function(){
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo}, ${this.profissao}`)
    }
}

console.log(objeto2)
console.log(objeto)
objeto.exibirResumo()