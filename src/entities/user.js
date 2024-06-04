class User {
  constructor({
    CPF, 
    name
  }) {
    this.CPF = CPF;
    this.name = name;
  }

  static get Builder(){
    class Builder {
      constructor() {
        this.data = {};
      }

      setCPF(CPF) {
        this.CPF = CPF;
        return this;
      }

      setName(name) {
        this.name = name;
        return this;
      }

      build() {
        return new User(this.data);
      }
    }

    return Builder;
  }
}

module.exports = User;