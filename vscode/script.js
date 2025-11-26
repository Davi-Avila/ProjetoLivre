function sumir(event, opcao) {
    event.preventDefault(); // evita trocar de página
    opcao.style.transition = "opacity 0.4s";
    opcao.style.opacity = "0";

    setTimeout(() => {
        opcao.style.display = "none";
    }, 400);
}

function desistir(){
    const confirmar = confirm("Você tem certeza que quer desistir?");

    if (confirmar) {
        const confirmar2 = confirm("Quer mesmo perder tudo que fez até agora?");
        if(confirmar2){
            const confirmar3 = confirm("Última chance, sim ou não?");
            if(confirmar3){
                window.location.href = "index.html";
            }
        }
    } 
}
        


// Impede voltar para a página anterior
//history.pushState(null, null, location.href);
//window.onpopstate = function () {   
//    history.go(1);
//};
