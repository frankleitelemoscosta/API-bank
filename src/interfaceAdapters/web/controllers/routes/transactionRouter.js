const router = require('express').Router();
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

        res.send(result);

    }catch(e){
        res.send({status: 400, message: e.message});
    }

});

router.route('/GetTransaction').get(async (req, res) => {
    
    const newTransaction = new Transaction.Builder()
    .setCPFPagante(req.query.CPF).build();
    
    result = await Op.getTransaction(newTransaction);

    res.send(result);
});

module.exports = router;