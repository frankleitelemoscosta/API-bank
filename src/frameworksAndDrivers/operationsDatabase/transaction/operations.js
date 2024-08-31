const querys = require('./querys.js');
const querysUser = require('../user/querys.js');
const { fillingValues } = require('./fillingValues.js');
const connection = require('../../dbConfig/DB/config');
const apiResponse = require('../../../apiCommonResponse/responseApi.js')


async function getTransaction(data) {  
  
  let results = [];

  try {
      [results] = (await connection.query(querys.get_transaction,[data.Id_pagante]));
      return apiResponse.successResponse([results]);
    } catch (e) {
      console.log(e);
      return apiResponse.internalServerErrorResponse([{}]);
    }
   
}

async function addBalance(Id_Destinatario,value){

  try{
    let destinatario = (await connection.query(querysUser.get_user,[Id_Destinatario]))
    destinatario[0].saldo = destinatario[0].saldo + value;
    await updateUser(destinatario[0]);
  }catch(e){
    console.log(e);
    return apiResponse.internalServerErrorResponse([{}]);
  }

}

async function subtractBalance(Id_pagante,value){

  try{
    let pagante = (await connection.query(querysUser.get_user,[Id_pagante]))
    pagante[0].saldo = pagante[0].saldo - value;
    await updateUser(pagante[0]);
  }
  catch(e){
    console.log(e);
    return apiResponse.internalServerErrorResponse([{}]);
  }  
}

async function updateUser(data){

  try{
    await connection.query(querysUser.update_user,[data]);
    return apiResponse.successResponse([{}]);
  }catch(e){
    console.log(e);
    return apiResponse.internalServerErrorResponse([{}]);
  }

}
  
async function insertTransaction(data) {

  let result = [];

    try {
      await addBalance(data.Id_Destinatario, data.valor);
      await subtractBalance(data.Id_pagante, data.valor);
      [result] = (await connection.query(querys.insert_transaction,fillingValues(data)));
      return apiResponse.successResponse([results]);
    } catch (e) {
      console.log(e);
      return apiResponse.internalServerErrorResponse([{}]);
    }
    

}
  
  
  module.exports = {
    insertTransaction,
    getTransaction
  }