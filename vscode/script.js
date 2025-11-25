function sumir(event, opcao) {
    event.preventDefault(); // evita trocar de página
    opcao.style.transition = "opacity 0.4s";
    opcao.style.opacity = "0";

    setTimeout(() => {
        opcao.style.display = "none";
    }, 400);
}