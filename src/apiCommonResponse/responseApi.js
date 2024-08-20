// all is good

const successResponse = (data) => {
    return{
        data: data,
        status: 200,
        message: 'Success'
    }
}

const createResponse = (data) => {
    return{
        data: data,
        status: 201,
        message: 'Created'
    }
}

//redirection

const notModifiedResponse = (data) => {
    return{
        data: data,
        status: 304,
        message: 'Not Modified'
    }
}

// client error

const badRequestResponse = (data) => {
    return{
        data: data,
        status: 400,
        message: 'Bad Request'
    }
}

const notFoundResponse = (data) => {
    return{
        data: data,
        status: 404,
        message: 'Not Found'
    }
}

const conflictResponse = (data) => {
    return{
        data: data,
        status: 409,
        message: 'Conflict'
    }
}

const invalidData = (data) => {
    return{
        data: data,
        status: 422,
        message: 'Invalid Data'
    }
}

//server error

const internalServerErrorResponse = (data) => {
    return{
        data: data,
        status: 500,
        message: 'Internal Server Error'
    }
}

module.exports = {
    createResponse,
    notFoundResponse,
    internalServerErrorResponse,
    successResponse,
    badRequestResponse,
    conflictResponse,
    notModifiedResponse,
    invalidData
};