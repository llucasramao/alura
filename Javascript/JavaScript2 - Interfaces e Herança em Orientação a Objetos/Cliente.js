export class Cliente {
    nome;
    _cpf;
    static numeroDeClientes = 0;

    get cpf(){
        this.cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
        Cliente.numeroDeClientes += 1;
    }
}