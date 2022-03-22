import { Conta } from "./Conta.js";

export class contaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(agencia, cliente){
        super(0, cliente, agencia);
        contaCorrente.numeroDeContas +=1;
    }
}

