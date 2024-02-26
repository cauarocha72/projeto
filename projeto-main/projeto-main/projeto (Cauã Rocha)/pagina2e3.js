const nome = document.querySelector('.nome');
const senha = document.querySelector('.senha');
const endereco = document.querySelector('.endereco');
const email = document.querySelector('.email');
let entrar = document.querySelector('#transportar')
let nome2 = document.querySelector('.nome2')
let senha2 = document.querySelector('.senha2')
let paginaDeLogin = document.getElementById('#paginaDeLogin')
let logar = document.getElementById('.logar')

function Transportar(){
    let paginaDeLogin = document.getElementById('paginaDeLogin').innerHTML = `
    <h3>Login</h3>
    <input type="text" class="nome2" placeholder="Nome do usuario">
    <input type="text" class="senha2" placeholder="Senha">
    <button class="logar" onclick="login()">Entrar</button>
    `
}


let contas = []

function adiocinarConta(){
 contas.push(nome.value ,senha.value, endereco.value ,email.value)
 console.log(contas)
  
}
let confirmar = []
function login(){
    
    confirmar.push(nome2.value,senha2.value)
    if(confirmar ==  contas[nome,senha] ){
        alert("sucesso")
        location.href="pagina4.html"
    }else{
        alert("usuario ou senha esta incorreta")
    }
};

 function Transportar(){
    let paginaDeLogin = document.getElementById('paginaDeLogin').innerHTML = `
    <h3>Login</h3>
    <input type="text" class="nome2" placeholder="Nome do usuario">
    <input type="text" class="senha2" placeholder="Senha">
    <button class="logar" onclick="login()">Entrar</button>
    `
}
