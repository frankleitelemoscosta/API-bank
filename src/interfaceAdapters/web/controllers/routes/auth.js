const router = require('express').Router();
const Op = require('../../../../frameworksAndDrivers/operationsDatabase/auth/operations');
const apiResponse = require('../../../../apiCommonResponse/responseApi.js');

router.route('/login').get(async (req, res) => {

    bodyRequest = req.body;

    try{
        result = await Op.login(bodyRequest.email, bodyRequest.senha);

        res.status(200).send(apiResponse.successResponse({data: result, message: 'Login realizado com sucesso!'}));
    }catch(e){
        console.log(e);
        res.status(500).send(apiResponse.internalServerErrorResponse({ message: e.message}));
    }
});

module.exports = router;   