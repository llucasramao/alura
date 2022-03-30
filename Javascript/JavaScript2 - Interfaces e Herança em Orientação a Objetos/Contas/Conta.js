export class Conta{

    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error('Não é recomendando fazer esse tipo de criação, pois ela é uma classe abstrata');
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        
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



    sacar(valor){ // Método abstrato
        throw new Error('O método sacar não foi defenido');
        //let taxa = 1.0;
        //return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa){
        const valorSacado = valor * taxa;
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            console.log('Saque realizado com sucesso! ');
            return valorSacado;
        } else {
            console.log('Você não tem saldo suficiente!');
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