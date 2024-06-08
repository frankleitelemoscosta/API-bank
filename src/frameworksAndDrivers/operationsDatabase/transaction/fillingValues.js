function fillingValues(data) {

    return [
        data.CPFpagante,
        data.CPFDestinatario,
        data.valor,
        data.modo
    ];
  }
  
  module.exports = {
      fillingValues,
  };