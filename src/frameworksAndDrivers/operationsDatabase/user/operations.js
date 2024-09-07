const querys = require('./querys.js');
const { fillingValues } = require('./fillingValues.js');
const connection = require('../../dbConfig/DB/config');

async function getUser(data) {  
  
  let results = [];

    try {
      [results] = (await connection.query(querys.get_user_CPF,[data.CPFu]));
      return results[0];
    } catch (e) {
      console.log(e);
      throw new Error("Request Erro: " + e);
    }
  
}
  
async function insertUser(data) {

  let result = [];

    try {
      [result] = (await connection.query(querys.insert_user,fillingValues(data)));
      return;
    } catch (e) {
      console.log(e);
      throw new Error("Request Erro: " + e);
    }
    

}
  
  
async function updateUser(data) {

    let result = [];

    try {
      result = await connection.query(querys.update_user, fillingValues(data));
      return result;
    } catch (e) {
      console.log(e);
      throw new Error("Request Erro: " + e);
    }

}
  
  module.exports = {
    signinUser: insertUser,
    updateUser,
    getUser
  }