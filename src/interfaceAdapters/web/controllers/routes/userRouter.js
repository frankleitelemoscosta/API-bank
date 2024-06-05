const router = require('express').Router();
const Usuario = require('../../../../entities/user');
const Op = require('../../../../frameworksAndDrivers/operationsDatabase/user/operations');

router.route('/CreateUser').post(async (req, res) => {

    const bodyRequest = req.body;
    
    const newUser = new Usuario.Builder()
    .setCPF(bodyRequest.CPF)
    .setName(bodyRequest.name)
    .build();

    result = await Op.signinUser(newUser);

    res.send(result);
});

router.route('/GetUser').get(async (req, res) => {
    
    const user = new Usuario.Builder()
    .setCPF(req.query.CPF).build();
    
    result = await Op.getUser(user);

    res.send(result);
});

module.exports = router;