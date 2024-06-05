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
        this.data.CPFu = Number(CPF);
        return this;
      }

      setName(name) {
        this.data.name = name;
        return this;
      }

      setSaldo(saldo) {
        this.data.saldo = saldo;
        return this;
      }

      setEmail(email) {
        this.data.email = email;
        return this;
      }

      setTelefone(telefone) {
        this.data.telefone = telefone;
        return this;
      }

      setAniversario(aniversario) {
        this.data.aniversario = aniversario;
        return this;
      }

      build() {
        return new Usuario(this.data);
      }
    }

    return Builder;
  }
}

module.exports = Usuario;