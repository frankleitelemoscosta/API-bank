const router = require('express').Router();
const apiResponse = require('../../../../apiCommonResponse/responseApi.js');
const Transaction = require('../../../../entities/transaction');
const Op = require('../../../../frameworksAndDrivers/operationsDatabase/transaction/operations');

router.route('/CreateTransaction').post(async (req, res) => {

    const bodyRequest = req.body;
    let newTransaction;
   
    try{
        newTransaction = new Transaction.Builder()
        .setId_Destinatario(bodyRequest.Id_Destinatario)
        .setId_Pagante(bodyRequest.Id_Pagante)
        .setValor(bodyRequest.valor)
        .setTipo(bodyRequest.modo)
        .build();

        console.log(newTransaction);

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
        .setId_Pagante(req.body.Id_user).build();
        
        result = await Op.getTransaction(newTransaction);

        res.status(200).send(apiResponse.successResponse({data: result, message: 'Transação encontrada com sucesso!'}));
    }catch(e){
        console.log(e);
        res.status(500).send(apiResponse.internalServerErrorResponse({ message: e.message}));
    }
});

module.exports = router;