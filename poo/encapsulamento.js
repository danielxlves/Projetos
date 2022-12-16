class Tv{
    constructor(){
        this._relacaoCanais = Array(2,4,5,7,10)
        this._canalAtivo = 5
        this._volume = 5
    }
    //getters setters
    get canalAtivo(){ //recuperar atributo
        return this._canalAtivo //usar _ para expor que é necessario recuperar o atributo atraves de set ou get
    }
    set canalAtivo(canal){ //atualizar o atributo
        if(this._relacaoCanais.indexOf(canal) != -1){
                this._canalAtivo = canal
        }
    }
}

let tvLg = new Tv()

tvLg.canalAtivo = 7 //pseudovariaveis

console.log(tvLg.canalAtivo)
