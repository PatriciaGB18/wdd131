document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash) {
        const recipeId = window.location.hash.substring(1);
        const targetRecipe = document.getElementById(recipeId);
        
        if (targetRecipe) {
            targetRecipe.scrollIntoView({ behavior: "smooth" });
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Garante que o menu sempre fique visível em telas maiores
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            navMenu.classList.add("active");
        } else {
            navMenu.classList.remove("active");
        }
    });
});


const lastModifiedSpan = document.getElementById("lastModified");
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = new Date(document.lastModified).toLocaleString();
}

