document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const body = document.body; 

    if (!menuButton || !navMenu) {
        console.error("Erro: Elementos do menu não encontrados.");
        return;
    }

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open"); 
        body.classList.toggle("menu-open"); 

        if (navMenu.classList.contains("open")) {
            menuButton.innerHTML = "✖";  
        } else {
            menuButton.innerHTML = "☰";  
        }
    });

    
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    
    const lastModifiedSpan = document.getElementById("lastModified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = new Date(document.lastModified).toLocaleString();
    }
});
