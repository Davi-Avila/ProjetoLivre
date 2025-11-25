function sumir(event, opcao) {
    event.preventDefault(); // evita trocar de página
    opcao.style.transition = "opacity 0.4s";
    opcao.style.opacity = "0";

    setTimeout(() => {
        opcao.style.display = "none";
    }, 400);
}

// Impede voltar para a página anterior
//history.pushState(null, null, location.href);
//window.onpopstate = function () {   
//    history.go(1);
//};
