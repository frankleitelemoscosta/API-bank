function fillingValues(user) {

  console.log(user);
  return [
    user.name,
    user.CPFu,
    user.saldo,
    user.email,
    user.senha,
    user.telefone,
    user.aniversario
  ];
}

module.exports = {
    fillingValues,
};