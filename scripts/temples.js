document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const body = document.body; // Referência ao body da página

    if (!menuButton || !navMenu) {
        console.error("Erro: Elementos do menu não encontrados.");
        return;
    }

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open"); // Alterna a classe 'open' para mostrar/ocultar o menu
        body.classList.toggle("menu-open"); // Adiciona ou remove a classe para empurrar o conteúdo

        // Alternar entre o ícone do menu e o 'X'
        if (navMenu.classList.contains("open")) {
            menuButton.innerHTML = "&#10006;"; // 'X' para fechar
        } else {
            menuButton.innerHTML = "&#9776;"; // ☰ para abrir
        }
    });
});
