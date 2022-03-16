import {Cliente} from "./Cliente.js";
import {contaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente('Pável', 46187632191);
const cliente2 = new Cliente('Tânia', 39257517187);

const cliente1ContaCorrente = new contaCorrente(1001, cliente1);
const cliente2ContaCorrente = new contaCorrente(1001, cliente2);
const cliente2ContaCorrente2 =  new contaCorrente(1002, cliente2);


console.log(contaCorrente.numeroDeContas);
console.log(Cliente.numeroDeClientes)

