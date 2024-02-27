class Conta{
    constructor(){

    }
    adiocinarConta(){
        let contas = this.lerDados();
        console.log(contas)
       }
       lerDados(){
        let contas = {}
        contas.nome = document.querySelector('.nome').value;
        contas.senha = document.querySelector('.senha').value;
        contas. endereco = document.querySelector('.endereco').value;
        contas.email = document.querySelector('.email').value;
        return contas
       }
       Transportar(){
        let paginaDeLogin = document.getElementById('paginaDeLogin').innerHTML = `
        <h3>Login</h3>
        <input type="text" class="nome2" placeholder="Nome do usuario">
        <input type="text" class="senha2" placeholder="Senha">
        <button class="logar" onclick="conta.login()">Entrar</button>
        `
        return paginaDeLogin
    }
    lerContas(){
        let confirmar = {}

        confirmar.nome2 = document.querySelector('.nome2').value;
            confirmar.senha2 = document.querySelector('.senha2').value;
            return confirmar
    }
        login(){
            let confirmar = this.lerContas
        if(this.confirmar ==  this.contas){
            alert("sucesso")
            location.href="pagina3.html"
        }else{
            alert("usuario ou senha esta incorreta")
        }
        console.log(confirmar)
    };
}
let conta = new Conta()