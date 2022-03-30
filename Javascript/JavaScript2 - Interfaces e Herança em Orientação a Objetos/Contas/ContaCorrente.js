import { Conta } from "./Conta.js";

export class contaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(agencia, cliente){
        super(0, cliente, agencia);
        contaCorrente.numeroDeContas +=1;
    }

    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}

