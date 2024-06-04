function fillingValues(user) {
  return {
    CPF: user.CPF,
    name: user.name,
  };
}

module.exports = {
    fillingValues,
};