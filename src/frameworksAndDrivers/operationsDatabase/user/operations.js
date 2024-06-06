const querys = require('./querys.js');
const { fillingValues } = require('./fillingValues.js');
const getUserResponse = require('../../../interfaceAdapters/web/controllers/apiResponse/getUserResponse'); 
const connection = require('../../dbConfig/DB/config');
const insertUserResponse = require('../../../interfaceAdapters/web/controllers/apiResponse/insertUserResponse');

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

    const client = await pool.connect();

    try {
        console.log(data);
        resp = await client.query(querys.update_client, fillingValues.fillingValues(data));
    } catch (e) {
        console.log(e);
    }
    finally {
        await client.release();
        return resp;
    }

}
  
  module.exports = {
    signinUser: insertUser,
    updateUser: updateUser,
    getUser: getUser
  }