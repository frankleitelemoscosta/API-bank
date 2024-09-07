function fillingValues(data) {

    console.log(data);
    return [
        data.Id_pagante,
        data.Id_Destinatario,
        data.valor,
        data.tipo,
        data.Chave_pix
    ];
  }
  
  module.exports = {
      fillingValues,
  };