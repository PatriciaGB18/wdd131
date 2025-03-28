document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img[loading='lazy']");

    // Configuração do Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // No seu caso, o src já está com a URL correta.
                img.classList.add("loaded"); // Adiciona a classe para a animação de fade-in
                observer.unobserve(img); // Para de observar a imagem depois que ela foi carregada
            }
        });
    }, { rootMargin: "50px" }); // Ajusta para carregar um pouco antes da imagem aparecer na tela

    // Inicia a observação de cada imagem
    images.forEach(img => observer.observe(img));

    // Atualiza o valor da data de modificação
    document.getElementById("lastModified").textContent = document.lastModified;
});
