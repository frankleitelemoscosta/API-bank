function fillingValues(data) {

    return [
        data.Id_pagante,
        data.Id_Destinatario,
        data.valor,
        data.Tipo,
        data.chave_Pix
    ];
  }
  
  module.exports = {
      fillingValues,
  };