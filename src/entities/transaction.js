const TransacaoValidate = require('../interfaceAdapters/web/validators/transactionValidate');

class Transaction {
    constructor({
      Id_pagante, 
      Id_Destinatario,
      valor,
      tipo
    }) {
      this.Id_pagante = Id_pagante;
      this.Id_Destinatario = Id_Destinatario;
      this.valor = valor;
      this.tipo = tipo;
    }
  
    static get Builder(){
      class Builder {
        constructor() {
          this.data = {};
        }
  
        setId_Pagante(Id_pagante) {
          this.data.Id_pagante = Id_pagante ? TransacaoValidate.Id(Id_pagante) : null;
          return this;
        }
  
        setValor(valor) {
          this.data.valor = valor;
          return this;
        }
  
        setId_Destinatario(Id_Destinatario) {
          this.data.Id_Destinatario = Id_Destinatario ? TransacaoValidate.Id(Id_Destinatario) : null;
          return this;
        }

        setTipo(tipo) {
          this.data.tipo = tipo ? TransacaoValidate.tipo(tipo) : null;
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