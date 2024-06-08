const querys = require('./querys.js');
const { fillingValues } = require('./fillingValues.js');
const getUserResponse = require('../../../interfaceAdapters/web/controllers/apiResponse/user/getUserResponse.js'); 
const connection = require('../../dbConfig/DB/config');
const insertUserResponse = require('../../../interfaceAdapters/web/controllers/apiResponse/user/insertUserResponse.js');
const updateUserResponse = require('../../../interfaceAdapters/web/controllers/apiResponse/user/updateUserResponse.js');

async function getUser(data) {  
  
  let results = [];

  try {
      [results] = (await connection.query(querys.get_user,[data.CPFu]));
    } catch (e) {
      console.log(e);
    }
    finally {
      connection.releaseConnection();
      return getUserResponse.getResponse(results[0][0]);
    }
  
}
  
async function insertUser(data) {

  let result = [];

    try {
      [result] = (await connection.query(querys.insert_user,fillingValues(data)));
    } catch (e) {
        console.log(e);
    }
    finally {
      connection.releaseConnection();
      return insertUserResponse.insertResponse(result[0][0].result);
    }

}
  
  
async function updateUser(data) {

    let result = [];

    try {
        result = await connection.query(querys.update_client, fillingValues(data));
    } catch (e) {
        console.log(e);
    }
    finally {
        connection.releaseConnection();
        return updateUserResponse.updateResponse(result[0][0].result);
    }

}
  
  module.exports = {
    signinUser: insertUser,
    updateUser,
    getUser
  }