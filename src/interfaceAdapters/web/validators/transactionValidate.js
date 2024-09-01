const type_tipo = require('../../../type/transactionType');
const AbstractValidate = require('./abstractValidate');
const apiResponse = require('../../../apiCommonResponse/responseApi.js')

class TransacaoValidate extends AbstractValidate {

    tipo(tipo){
        if(!type_tipo.includes(tipo)){
            return apiResponse.badRequestResponse({message: "Invalid mode"});
        }
        return tipo;
    }

}

module.exports = new TransacaoValidate();