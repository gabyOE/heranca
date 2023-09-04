class Pessoa {
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

    falar () {
        console.log(`${this.nome} está falando`);
    }

    andar () {
        console.log(`${this.nome} está andando`);
    }
}

class PessoaFisica extends Pessoa {
    constructor(nome, telefone, email, cpf) {
        super(nome, telefone, email);

        this.cpf = cpf;
    }
}
class PessoaJuridica extends Pessoa {
    constructor(nome, telefone, email, cnpj) {
        super(nome, telefone, email);

        this.cnpj = cnpj;
    }
}

pagarSalario () {
    console.log(`${this.nome} pagou os salários,`);
}