class Forca {

  constructor(palavra) {
    this.palavra = palavra.toLowerCase();
    this.letrasChutadas = [];
    this.vidas = 6;
    this.arrayResposta = this.iniciarArrayResposta(palavra);
  }

  iniciarArrayResposta(palavra) {
    const tamanho = palavra.length
    const arrayResposta = [];
    for (let i = 1; i <= tamanho; i++) {
      arrayResposta.push('_');
    }
    return arrayResposta;
  }

  chutar(letra) {
    letra = letra.toLowerCase();
    const jaUsada = this.letrasChutadas.indexOf(letra) == -1 ? false : true;
    if (!jaUsada && letra.length == 1) {
      this.letrasChutadas.push(letra);
      const arrayPalavra = [...this.palavra];
      this.arrayResposta = this.arrayResposta.map((campo, index) => {
        if (arrayPalavra[index] == letra) {
          return letra;
        }
        else {
          return campo;
        }
      })
      if (!this.palavra.includes(letra)) {
        this.vidas--;
      }
    }
  }

  buscarEstado() {
    if (this.vidas == 0) {
      return "perdeu";
    }
    else if (!this.arrayResposta.includes('_')) {
      return "ganhou";
    }
    else {
      return "aguardando chute";
    }
  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas,
      vidas: this.vidas,
      palavra: this.arrayResposta
    }
  }
}

module.exports = Forca;
