function fillingValues(data) {

    return [
        data.Id_pagante,
        data.Id_Destinatario,
        data.valor,
        data.Tipo
    ];
  }
  
  module.exports = {
      fillingValues,
  };