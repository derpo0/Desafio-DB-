class Forca {
  constructor(palavra){
    this.palavra = Array.from(palavra)
    this.palavraAtual = this.palavra.map(function(item){
      return item = "_"
    })
    this.letrasChutadas = []
    this.vidas = 6
  }

  chutar(letra) { 
    if (letra.length > 1){
      return
    }
    else if (this.letrasChutadas.includes(letra)){  
      return
    }
    else if (this.palavra.includes(letra)){
      for (var i = 0; i < this.palavra.length; i++) {
        if (this.palavra[i] == letra){
          this.palavraAtual[i] = letra 
        }
        else if (this.palavraAtual != '_' && this.letrasChutadas.includes(this.palavraAtual[i])){
          this.palavraAtual[i] = this.palavra[i]
        }
        else {
          this.palavraAtual[i] = '_'
        }
      }
    }
    else{
      this.vidas = this.vidas - 1
    }
    this.letrasChutadas.push(letra)
  }

  buscarEstado() { 
    if (this.vidas == 0 && this.palavraAtual.includes('_')){
      return "perdeu"
    }
    else if (this.palavraAtual.includes('_') == false){
      return "ganhou"
    } 
    else{
      return "aguardando chute"
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavraAtual // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
