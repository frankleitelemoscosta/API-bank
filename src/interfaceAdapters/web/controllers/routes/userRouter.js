const router = require('express').Router();
const User = require('../../../../entities/user');
const Op = require('../../../../frameworksAndDrivers/operationsDatabase/user/operations');

router.route('/CreateUser').post(async (req, res) => {

    const bodyRequest = req.body;
    
    const newUser = new User.Builder()
    .setCPF(bodyRequest.CPF)
    .setName(bodyRequest.name)
    .build();

    result = await Op.signinUser(newUser);

    res.send(result);
});

router.route('/GetUser').get(async (req, res) => {
    
    const user = new User.Builder()
    .setCPF(req.query.CPF)
    .build();
    
    result = await Op.getUser(Number(req.query.CPF));

    res.send(result);
});

module.exports = router;