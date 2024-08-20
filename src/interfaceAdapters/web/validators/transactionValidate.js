const type_tipo = require('../../../type/transactionType');
const AbstractValidate = require('./abstractValidate');

class TransacaoValidate extends AbstractValidate {

    tipo(tipo){
        if(!type_tipo.includes(tipo)){
            return {error: true,status: 400, message: "Invalid mode"};
        }
        return tipo;
    }

}

module.exports = new TransacaoValidate();