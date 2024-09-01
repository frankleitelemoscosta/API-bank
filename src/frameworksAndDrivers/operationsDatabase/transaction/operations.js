const querys = require('./querys.js');
const querysUser = require('../user/querys.js');
const { fillingValues } = require('./fillingValues.js');
const connection = require('../../dbConfig/DB/config');

async function getTransaction(data) {  
  
  let results = [];

  try {
      [results] = (await connection.query(querys.get_transaction,[data.Id_pagante]));
      return results[0];
    } catch (e) {
      console.log(e);
      throw new Error("Request Erro: " + e);
    }
   
}

async function addBalance(Id_Destinatario,value){

  try{
    let destinatario = (await connection.query(querysUser.get_user,[Id_Destinatario]))
    destinatario[0].saldo = destinatario[0].saldo + value;
    await updateUser(destinatario[0]);
    return;
  }catch(e){
    console.log(e);
    throw new Error("Request Erro: " + e);
  }

}

async function subtractBalance(Id_pagante,value){

  try{
    let pagante = (await connection.query(querysUser.get_user,[Id_pagante]))
    pagante[0].saldo = pagante[0].saldo - value;
    await updateUser(pagante[0]);
    return;
  }
  catch(e){
    console.log(e);
    throw new Error("Request Erro: " + e);
  }  
}

async function updateUser(data){

  try{
    await connection.query(querysUser.update_user,[data]);
    return ;
  }catch(e){
    console.log(e);
    throw new Error("Request Erro: " + e);
  }

}
  
async function insertTransaction(data) {

  let result = [];

    try {
      await addBalance(data.Id_Destinatario, data.valor);
      await subtractBalance(data.Id_pagante, data.valor);
      [result] = (await connection.query(querys.insert_transaction,fillingValues(data)));
      return ;
    } catch (e) {
      console.log(e);
      throw new Error("Request Erro: " + e);
    }
    

}
  
  
  module.exports = {
    insertTransaction,
    getTransaction
  }