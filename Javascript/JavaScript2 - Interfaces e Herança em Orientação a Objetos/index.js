import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticação } from "./SistemaAutenticação.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Julio", 5000, 98765432100);
gerente.cadastrarSenha("123")

const gerenteEstaLogado = SistemaAutenticação.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticação.login(diretor, "123456");
console.log(estaLogado)