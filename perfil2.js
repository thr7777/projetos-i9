const fotoPrincipal = document.getElementById("foto-principal");

//borda interativa

//quando o mouse passar em cima da foto do perfil, ela começará a brilhar
fotoPrincipal.addEventListener("mouseenter", ()=>{
    fotoPrincipal.classList.add("brilhando");
})
fotoPrincipal.addEventListener("mouseleave", () =>{
    fotoPrincipal.classList.remove("brilhando");
})