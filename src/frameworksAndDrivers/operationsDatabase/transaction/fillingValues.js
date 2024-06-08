function fillingValues(data) {

    return [
        data.CPFpagante,
        data.CPFDestinatario,
        data.valor
    ];
  }
  
  module.exports = {
      fillingValues,
  };