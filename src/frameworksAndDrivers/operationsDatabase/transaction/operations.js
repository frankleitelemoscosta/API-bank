const querys = require('./querys.js');
const { fillingValues } = require('./fillingValues.js');
const getTransactionResponse = require('../../../interfaceAdapters/web/controllers/apiResponse/transaction/getTransactionResponse.js'); 
const connection = require('../../dbConfig/DB/config');
const insertTransactionResponse = require('../../../interfaceAdapters/web/controllers/apiResponse/transaction/insertTransaction.js');

async function getTransaction(data) {  
  
  let results = [];

  try {
      [results] = (await connection.query(querys.get_transaction,[data.CPFpagante]));
    } catch (e) {
      console.log(e);
    }
    finally {
      connection.releaseConnection();
      return getUserResponse.getResponse(results[0][0]);
    }
  
}
  
async function insertTransaction(data) {

  let result = [];

    try {
      [result] = (await connection.query(querys.insert_transaction,fillingValues(data)));
    } catch (e) {
        console.log(e);
    }
    finally {
      connection.releaseConnection();
      return insertUserResponse.insertResponse(result[0][0].result);
    }

}
  
  
  module.exports = {
    insertTransaction,
    getTransaction
  }