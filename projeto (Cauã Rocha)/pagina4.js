const produto = [{
    id : 0 ,
    nome : "celular iphone",
    nome : document.getElementsByClassName("caixa"),
    valor : "$2330",
    img : "celular1.jpg",
    quantidade : 0
},
{
    id : 1 ,
    nome : "celular iphone2",
    nome : document.getElementsByClassName("caixa2"),
    valor : "$2200",
    img : "celular2.jpg",
    quantidade : 0
},
{
    id : 2 ,
    nome : "celular samsung",
    nome : document.getElementsByClassName("caixa3"),
    valor : "$1500",
    img : "celular3.jpg",
    quantidade : 0
},
{
    id : 3 ,
    nome : "celular xiomi",
    nome : document.getElementsByClassName("caixa4"),
    valor : "$1900",
    img : "celular4.jpg",
    quantidade : 0
}];
const colecao = document.getElementsByClassName('estante');
const input = document.getElementById('pesquisa');

const inserirdadaos = produto => {
    colecao.innerHTML="";
    produto.forEach(e => {
        colecao.innerHTML += `
        <div class = "item">
         <h3>${e.nome}</h3>
         <p>${e.categoria} </p>
         </div>
        `
    })
};
  input.addEventListener("keyup", (e)=>  {
    const search = produto.filter (i=> i.nome.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    inserirdadaos(search);
  })

window.addEventListener("load",inserirdadaos.bind(null,produto));