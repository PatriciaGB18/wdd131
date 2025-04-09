document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash) {
        const recipeId = window.location.hash.substring(1);
        const targetRecipe = document.getElementById(recipeId);

        if (targetRecipe) {
            targetRecipe.scrollIntoView({ behavior: "smooth" });
        }
    }

    const lastRecipe = localStorage.getItem("lastViewedRecipe");
    if (lastRecipe) {
        const message = `Welcome back! You last viewed the "${lastRecipe.replace("-", " ")}" recipe.`;
        console.log(message);

        const welcomeEl = document.getElementById("welcome-msg");
        if (welcomeEl) {
            welcomeEl.textContent = message;
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            navMenu.classList.add("active");
        } else {
            navMenu.classList.remove("active");
        }
    });

    
    const recipeLinks = document.querySelectorAll(".recipe-preview a");
    recipeLinks.forEach(link => {
        link.addEventListener("click", () => {
            const recipeId = link.getAttribute("href").split("#")[1];
            localStorage.setItem("lastViewedRecipe", recipeId);
        });
    });
});

const lastModifiedSpan = document.getElementById("lastModified");
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = new Date(document.lastModified).toLocaleString();
}

const recipeNames = ["Chocolate Cake", "Banana Cake", "Brigadeiro", "White Sauce", "Italian Pasta", "Pumpkin Soup"];

recipeNames.forEach(name => {
    console.log(`Loading recipe: ${name}`);
});
