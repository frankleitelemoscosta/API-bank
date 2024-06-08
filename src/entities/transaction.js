class Transaction {
    constructor({
      CPFpagante, 
      CPFDestinatario,
      valor
    }) {
      this.CPFpagante = CPFpagante;
      this.CPFDestinatario = CPFDestinatario;
      this.valor = valor;
    }
  
    static get Builder(){
      class Builder {
        constructor() {
          this.data = {};
        }
  
        setCPFPagante(CPFpagante) {
          this.data.CPFpagante = CPFpagante;
          return this;
        }
  
        setValor(valor) {
          this.data.valor = valor;
          return this;
        }
  
        setCPFDestinatario(CPFDestinatario) {
          this.data.CPFDestinatario = CPFDestinatario;
          return this;
        }

        build() {
          return new Transaction(this.data);
        }
      }
  
      return Builder;
    }
  }
  
  module.exports = Transaction;