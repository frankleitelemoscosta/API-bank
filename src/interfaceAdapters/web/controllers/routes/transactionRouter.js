const router = require('express').Router();
const apiResponse = require('../../../../apiCommonResponse/responseApi.js');
const Transaction = require('../../../../entities/transaction');
const Op = require('../../../../frameworksAndDrivers/operationsDatabase/transaction/operations');

router.route('/CreateTransaction').post(async (req, res) => {

    const bodyRequest = req.body;
    let newTransaction;
   
    try{
        newTransaction = new Transaction.Builder()
        .setCPFDestinatario(bodyRequest.CPFDestinatario)
        .setCPFPagante(bodyRequest.CPFPagante)
        .setValor(bodyRequest.valor)
        .setModo(bodyRequest.modo)
        .build();

        result = await Op.insertTransaction(newTransaction);

        res.send(apiResponse.successResponse({data: result, message: 'Transação realizada com sucesso!'}));

    }catch(e){
        console.log(e);
        res.send(apiResponse.internalServerErrorResponse({message: e.message}));
    }

});

router.route('/GetTransaction').get(async (req, res) => {
    
    try{
        const newTransaction = new Transaction.Builder()
        .setCPFPagante(req.query.CPF).build();
        
        result = await Op.getTransaction(newTransaction);

        res.send(apiResponse.successResponse({data: result, message: 'Transação encontrada com sucesso!'}));
    }catch(e){
        console.log(e);
        res.send(apiResponse.internalServerErrorResponse({ message: e.message}));
    }
});

module.exports = router;