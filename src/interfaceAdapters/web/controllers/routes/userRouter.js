const router = require('express').Router();
const apiResponse = require('../../../../apiCommonResponse/responseApi.js');  
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

        res.send(apiResponse.createResponse({data: result, message: 'Usuário criado com sucesso!'}));
        
    }catch(e){
        console.log(e);
        res.send(apiResponse.internalServerErrorResponse({ message: e.message}));
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

        res.send(apiResponse.successResponse({data: result, message: 'Usuário atualizado com sucesso!'}));

    }catch(e){
        console.log(e);
        res.send(apiResponse.internalServerErrorResponse({ message: e.message}));
    }

});

router.route('/GetUser').get(async (req, res) => {
    
    try{
        const user = new Usuario.Builder()
        .setCPF(req.query.CPF).build();
        
        result = await Op.getUser(user);

        res.send(apiResponse.successResponse({data:result, message: 'Usuário encontrado com sucesso!'}));
    }catch(e){
        console.log(e);
        res.send(apiResponse.internalServerErrorResponse({ message: e.message}));   
    }
});

module.exports = router;