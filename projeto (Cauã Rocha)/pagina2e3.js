const nome = document.querySelector('.nome');
const senha = document.querySelector('.senha');
const endereco = document.querySelector('.endereco');
const email = document.querySelector('.email');


let contas = []

function adiocinarConta(){
 contas.push(nome.value ,senha.value, endereco.value ,email.value)
 localStorage.bancoDeDados = contas
 console.log(localStorage.bancoDeDados)
  
}

function login(){
    let nome2 = document.querySelector('.nome2').value;
    let senha2 = document.querySelector('.senha2').value;
    localStorage.bancoDeDados = contas
    if(nome2 == [nome] && senha2 == contas[senha] ){
        alert("sucesso")
        location.href="pagina4.html"
    }else{
        alert("usuario ou senha esta incorreta")
    }
    console.log(contas)
};

