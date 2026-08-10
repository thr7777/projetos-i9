const meio = document.getElementById("main");
const botao = document.getElementById("botao");
const titulo = document.getElementById("titulo");
const body = document.getElementById("b");
const aula = document.querySelectorAll(".aulas");

botao.addEventListener("click", ()=>{
    body.classList.toggle("tema");
    aula.forEach((aulas) =>{
        aulas.classList.toggle("caixa-tema")
    })
})