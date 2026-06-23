const bouton = document.getElementById('change-mode')
bouton.addEventListener('click', () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        bouton.textContent = "☀️";
    } else {
        bouton.textContent = "🌙";
    }
});
