const router = require('express').Router();
const Usuario = require('../../../../entities/user');
const Op = require('../../../../frameworksAndDrivers/operationsDatabase/user/operations');

router.route('/CreateUser').post(async (req, res) => {

    const bodyRequest = req.body;
    
    try{
        const newUser = new Usuario.Builder()
        .setCPF(bodyRequest.CPF)
        .setName(bodyRequest.name)
        .setSaldo(bodyRequest.saldo)
        .setEmail(bodyRequest.email)
        .setTelefone(bodyRequest.telefone)
        .setAniversario(bodyRequest.aniversario)
        .build();

        result = await Op.signinUser(newUser);

        res.send(result);
        
    }catch(e){
        console.log(e);
        res.send({status: 400, message: e.message});
    }

});

router.route('/UpdateUser').put(async (req, res) => {

    const bodyRequest = req.body;

    try{
        const user = new Usuario.Builder()
        .setCPF(bodyRequest.CPF)
        .setName(bodyRequest.name)
        .setSaldo(bodyRequest.saldo)
        .setEmail(bodyRequest.email)
        .setTelefone(bodyRequest.telefone)
        .setAniversario(bodyRequest.aniversario)
        .build();

        result = await Op.updateUser(user);

        res.send(result);

    }catch(e){
        console.log(e);
        res.send({status: 400, message: e.message});
    }

});

router.route('/GetUser').get(async (req, res) => {
    
    const user = new Usuario.Builder()
    .setCPF(req.query.CPF).build();
    
    result = await Op.getUser(user);

    res.send(result);
});

module.exports = router;