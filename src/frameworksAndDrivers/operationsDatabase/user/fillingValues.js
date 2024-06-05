function fillingValues(user) {
  return [
    user.name,
    user.CPFu,
    user.saldo,
    user.email,
    user.telefone,
    user.aniversario
  ];
}

module.exports = {
    fillingValues,
};