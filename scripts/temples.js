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
            menuButton.innerHTML = "&#10006;"; 
        } else {
            menuButton.innerHTML = "&#9776;"; 
        }
    });

   
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    const lastModifiedSpan = document.getElementById("lastModified");
    if (lastModifiedSpan) {
        const lastModifiedDate = new Date(document.lastModified);
        lastModifiedSpan.textContent = lastModifiedDate.toLocaleDateString();
    }
});
