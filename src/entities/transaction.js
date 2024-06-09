const TransacaoValidate = require('../interfaceAdapters/web/validators/transactionValidate');

class Transaction {
    constructor({
      CPFpagante, 
      CPFDestinatario,
      valor,
      modo
    }) {
      this.CPFpagante = CPFpagante;
      this.CPFDestinatario = CPFDestinatario;
      this.valor = valor;
      this.modo = modo;
    }
  
    static get Builder(){
      class Builder {
        constructor() {
          this.data = {};
        }
  
        setCPFPagante(CPFpagante) {
          this.data.CPFpagante = CPFpagante ? TransacaoValidate.CPF(CPFpagante) : null;
          return this;
        }
  
        setValor(valor) {
          this.data.valor = valor;
          return this;
        }
  
        setCPFDestinatario(CPFDestinatario) {
          this.data.CPFDestinatario = CPFDestinatario ? TransacaoValidate.CPF(CPFDestinatario) : null;
          return this;
        }

        setModo(modo) {
          this.data.modo = modo ? TransacaoValidate.mode(modo) : null;
          return this;
        }

        build() {
          let validation = TransacaoValidate.run(this.data);
          if(validation.error) {
            throw new Error("Validation: " + validation.message);
          }
          return new Transaction(this.data);
        }
      }
  
      return Builder;
    }
  }
  
  module.exports = Transaction;