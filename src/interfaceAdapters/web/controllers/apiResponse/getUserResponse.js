function getUserResponse(result) {

    console.log(result);

    if(result && result.length == 0){
        return {
            status: 404,
            message: "Not Found",
            result: result
        };
    }   
    else{
        return {
            status: 200,
            message: "Success",
            result: result
        };
    }

}

module.exports = {
    getResponse:getUserResponse
}