import { Conta } from "./Conta.js";

export class contaPoupanca extends Conta{

    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}