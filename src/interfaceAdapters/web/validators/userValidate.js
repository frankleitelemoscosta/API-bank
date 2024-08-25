const apiResponse = require('../../../apiCommonResponse/responseApi.js');
const AbstractValidate = require('./abstractValidate');

class UserValidate extends AbstractValidate{

    name(name){
        if(name.length > 40){
            return apiResponse.badRequestResponse({error_message: "Nome muito longo"});
        }
        return name;
    }

    email(email) {
        if (!(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/).test(email)) {
            return  apiResponse.badRequestResponse({error_message: `Email inválido: ${email}. Formato esperado: X@X.X`});
        }
        return email;
    }
    
    password(senha){
        if(senha.length < 6){
            return apiResponse.badRequestResponse({error_message: "Senha muito curta"});
        }else if(senha.length > 20){
            return apiResponse.badRequestResponse({error_message: "Senha muito longa"});
        }
        return senha;
    }

    phone(phone) {
        if (!(/^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/).test(phone)) {
            return apiResponse.badRequestResponse({ error_message:`Telefone inválido: ${phone}. Formats esperados: ((XX) XXXXX-XXXX, (XX) XXXX-XXXX, XXXXX-XXXX, XXXX-XXXX)`});
        }
        return phone;
    }

}

module.exports = new UserValidate();