const querys = require('./query.js');
const apiResponse = require('../../../apiCommonResponse/responseApi.js');
const connection = require('../../dbConfig/DB/config');

async function login(email,senha){
try {
    [results] = (await connection.query(querys.login,[email, senha]));
    console.log(results);
    return results[0];
} catch (e) {
    console.log(e);
    throw new Error("Request Erro: " + e);
}

}

module.exports = {
    login
}