const querys = require('./querys.js');
const apiResponse = require('../../../apiCommonResponse/responseApi.js')

async function login(data){
//vou retornar o user pelo email e ver se a senha bate
try {
    [results] = (await connection.query(querys.login,[data.email, data.senha]));
    return results[0];
} catch (e) {
    console.log(e);
    throw new Error("Request Erro: " + e);
}

}

module.exports = {
    login
}