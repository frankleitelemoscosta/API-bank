const querys = require('./querys.js');
const { fillingValues } = require('./fillingValues.js');
const connection = require('../../dbConfig/DB/config');
const apiResponse = require('../../../apiCommonResponse/responseApi.js')


async function getTransaction(data) {  
  
  let results = [];

  try {
      [results] = (await connection.query(querys.get_transaction,[data.CPFpagante]));
      return apiResponse.successResponse([results]);
    } catch (e) {
      console.log(e);
      return apiResponse.internalServerErrorResponse([{}]);
    }
   
}
  
async function insertTransaction(data) {

  let result = [];

    try {
      [result] = (await connection.query(querys.insert_transaction,fillingValues(data)));
      return apiResponse.successResponse([results]);
    } catch (e) {
      return apiResponse.internalServerErrorResponse([{}]);
    }
    

}
  
  
  module.exports = {
    insertTransaction,
    getTransaction
  }