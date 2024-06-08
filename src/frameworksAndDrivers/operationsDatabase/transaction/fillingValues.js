function fillingValues(data) {

    console.log(user);
    return [
        data.CPFpagante,
        data.CPFDestinatario,
        data.valor
    ];
  }
  
  module.exports = {
      fillingValues,
  };