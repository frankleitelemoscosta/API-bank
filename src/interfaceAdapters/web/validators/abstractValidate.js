const apiResponse = require('../../../apiCommonResponse/responseApi');

class AbstractValidate {
    
    run(dice) {
        try {
            let errors = [];
            Object.keys(dice).forEach((field) => {
                if(dice[field]) {
                    const {error, data} = dice[field]
                    if(error) {
                        errors.push(data.message)
                    }
                }
            })
    
            if(errors.length) {
                return {error: true, message: errors.join(', ')};
            }
            return {error: false}
        } catch (error) {
            throw new Error(error)
        }
    }

    CPF(CPF) {
        if (CPF.replace(/\D/g, '').length !== 11 || !(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).test(CPF)){
                return apiResponse.badRequestResponse({message: "Invalid CPF"});
            }
        return CPF.replace(/\D/g, '');
    }

    Id(id){
        if(Number.isNaN(id)){
            return apiResponse.badRequestResponse({message: "Invalid ID"});
        }
        return id;
    }

}

module.exports = AbstractValidate;