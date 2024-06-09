const type_mode = require('../../../type/transactionType');
const AbstractValidate = require('./abstractValidate');

class TransacaoValidate extends AbstractValidate {

    mode(mode){
        if(!type_mode.includes(mode)){
            return {error: true,status: 400, message: "Invalid mode"};
        }
        return mode;
    }

}

module.exports = new TransacaoValidate();