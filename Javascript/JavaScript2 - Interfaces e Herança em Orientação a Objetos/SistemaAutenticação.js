export class SistemaAutenticação{
    static login(funcionario, senha){
        return funcionario.senha == senha;
    }
}