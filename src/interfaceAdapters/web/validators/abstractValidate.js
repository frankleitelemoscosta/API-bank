class AbstractValidate {
    
    run(data) {
        try {
            let errors = [];
            Object.keys(data).forEach((field) => {
                if(data[field]) {
                    const {message, error} = data[field]
                    if(error) {
                        errors.push(message)
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
        if (CPF.replace(/\D/g, '').length !== 11 && !(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).test(CPF)){
                return {error: true, message: "Invalid CPF"};
            }
    }

    Id(id){
        if(Number.isNaN(id)){
            return {error: true, message: "Invalid ID"};
        }
    }

}

module.exports = AbstractValidate;