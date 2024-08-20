const querys = require('./querys.js');
const apiResponse = require('../../../apiCommonResponse/responseApi.js')

async function login(data){
//vou retornar o user pelo email e ver se a senha bate
try {
    [results] = (await connection.query(querys.login,[data.email, data.senha]));
    return apiResponse.successResponse([results]);
} catch (e) {
    return apiResponse.internalServerErrorResponse([{}]);
}

}

module.exports = {
    login
}