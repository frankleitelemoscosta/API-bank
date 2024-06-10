const UserValidate = require('../interfaceAdapters/web/validators/userValidate');

class Usuario {
  constructor({
    CPFu, 
    name,
    saldo,
    email,
    telefone,
    aniversario
  }) {
    this.CPFu = CPFu;
    this.name = name;
    this.saldo = saldo;
    this.email = email;
    this.telefone = telefone;
    this.aniversario = aniversario;
  }

  static get Builder(){
    class Builder {
      constructor() {
        this.data = {};
      }

      setCPF(CPF) {
        this.data.CPFu = CPF ? CPF.UserValidate.CPF(CPF) : null;
        return this;
      }

      setName(name) {
        this.data.name = name ? UserValidate.name(name) : null;
        return this;
      }

      setSaldo(saldo) {
        this.data.saldo = saldo;
        return this;
      }

      setEmail(email) {
        this.data.email = email ? UserValidate.email(email) : null;
        return this;
      }

      setTelefone(telefone) {
        this.data.telefone = telefone ? UserValidate.phone(telefone) : null;
        return this;
      }

      setAniversario(aniversario) {
        this.data.aniversario = aniversario;
        return this;
      }

      build() {
        let validation = UserValidate.run(this.data);
        if(validation.error) {
          throw new Error("Validation: " + validation.message);
        }
        return new Usuario(this.data);
      }
    }

    return Builder;
  }
}

module.exports = Usuario;