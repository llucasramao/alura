import { Cliente } from "./Cliente.js";

export class contaCorrente {
    agencia;
    _cliente;
    _saldo = 0;
    static numeroDeContas = 0;

    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        contaCorrente.numeroDeContas +=1;
    }



    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
        
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    

    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            console.log('Saque realizado com sucesso! ');
            return valor;
        } else {
            console.log('Você não tem saldo suficiente, seu merda!');
            return 0;
        }
    }
    
    deposito(valor){
        if (this.valor <= 0){
            console.log('Você não pode ralizar essa operação');
            return 0;
        } else {
            this._saldo += valor;
            console.log('Depósito realizado');
            return valor;
        }
    }

    transferir(valor, conta){
        console.log(`Transferindo o valor de ${valor} para conta com ${conta._saldo}`)    
        const valorSacado = this.sacar(valor)
        conta.deposito(valorSacado)
    }
}

