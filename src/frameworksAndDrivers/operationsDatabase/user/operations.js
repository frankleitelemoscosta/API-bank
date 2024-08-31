const querys = require('./querys.js');
const { fillingValues } = require('./fillingValues.js');
const connection = require('../../dbConfig/DB/config');
const apiResponse = require('../../../apiCommonResponse/responseApi.js')

async function getUser(data) {  
  
  let results = [];

  try {
      [results] = (await connection.query(querys.get_user,[data.CPFu]));
      return apiResponse.successResponse([results]);
    } catch (e) {
      console.log(e);
      return apiResponse.internalServerErrorResponse([{}]);
    }
  
}
  
async function insertUser(data) {

  let result = [];

    try {
      [result] = (await connection.query(querys.insert_user,fillingValues(data)));
      return apiResponse.successResponse([result]);
    } catch (e) {
        console.log(e);
        return apiResponse.internalServerErrorResponse([{}]);
    }
    

}
  
  
async function updateUser(data) {

    let result = [];

    try {
      result = await connection.query(querys.update_user, fillingValues(data));
      return apiResponse.successResponse([result]);
    } catch (e) {
      console.log(e);
      return apiResponse.internalServerErrorResponse([{}]);
    }

}
  
  module.exports = {
    signinUser: insertUser,
    updateUser,
    getUser
  }