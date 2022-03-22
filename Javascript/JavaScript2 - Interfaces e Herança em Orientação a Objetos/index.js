import {Cliente} from "./Cliente.js";
import {contaCorrente} from "./ContaCorrente.js";
import { contaPoupanca } from "./ContaPoupanca.js";


const cliente1 = new Cliente('Pável', 46187632191);
const cliente1ContaCorrente = new contaCorrente(0, cliente1, 1001);
const cliente1ContaPoupanca = new contaPoupanca(1000, cliente1, 1001)


cliente1ContaCorrente.deposito(1000);
cliente1ContaPoupanca.sacar(100);
cliente1ContaCorrente.sacar(100);

console.log(cliente1ContaPoupanca.saldo);
console.log(cliente1ContaCorrente.saldo);

