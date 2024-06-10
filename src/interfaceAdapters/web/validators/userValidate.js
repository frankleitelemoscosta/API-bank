class UserValidate extends AbstractValidate{

    name(name){
        if(name.length > 40){
            return {error: true, message: "Name too long"};
        }
        return name;
    }

    email(email) {
        if (!(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/).test(email)) {
            return {error: true, message:`Emial inválido: ${email}. Formato esperado: X@X.X`};
        }
        return email;
    }

    phone(phone) {
        if (!(/^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/).test(phone)) {
            return {error: true, message:`Telefone inválido: ${phone}. Formats esperados: ((XX) XXXXX-XXXX, (XX) XXXX-XXXX, XXXXX-XXXX, XXXX-XXXX)`};
        }
        return phone;
    }

}