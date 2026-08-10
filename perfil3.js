const contato = document.querySelectorAll(".contato");

//como agora teremos uma lista, precisamos passar por cada um para conseguir modifica-los
contato.forEach((contatos)=>{
    contatos.addEventListener("mouseenter", ()=>{
        console.log("ENTROU NO LINK");
        contatos.style.transform = "scale(1.05)";
    });
    

    contatos.addEventListener("mouseleave", ()=>{
        contatos.style.transform = "scale(1)";
    });
})

const tema = document.getElementById("tema");

const body = document.getElementById("b");
const caixa = document.querySelectorAll(".caixa");

tema.addEventListener("click", ()=>{
    body.classList.toggle("mudar-tema");

    caixa.forEach((caixas) =>{
        caixas.classList.toggle("mudar-caixa");
    })
    contato.forEach((contatos)=>{
        contatos.classList.toggle("mudar-cor-link");
    })
})
