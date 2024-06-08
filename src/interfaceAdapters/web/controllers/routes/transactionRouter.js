const router = require('express').Router();
const Transaction = require('../../../../entities/user');
const Op = require('../../../../frameworksAndDrivers/operationsDatabase/transaction/operations');

router.route('/CreateTransaction').post(async (req, res) => {

    const bodyRequest = req.body;
    
    const newTransaction = new Transaction.Builder()
        .setCPFDestinatario(bodyRequest.setCPFDestinatario)
        .setCPFPagante(bodyRequest.CPFPagante)
        .setValor(bodyRequest.valor)
        .build();

    result = await Op.insertTransaction(newTransaction);

    res.send(result);
});

router.route('/GetTransaction').get(async (req, res) => {
    
    const user = new Transaction.Builder()
    .setCPF(req.query.CPF).build();
    
    result = await Op.getTransaction(user);

    res.send(result);
});

module.exports = router;