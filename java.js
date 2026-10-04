const bouton = document.getElementById('change-mode')
const logo = document.getElementById('logo')
const logo2 = document.getElementById('logo2')
const renard3 = document.getElementById('renard3')
const Save = localStorage.getItem('mode');

if (Save === 'clair') {
    document.body.classList.add('clair');
    bouton.textContent = '🌙';
    logo.src = "image/Logo_inverse.png";
    logo2.src = "image/Logo_inverse.png";
    renard3.src = "image/Renard_3_inverse.png";
} else {
    document.body.classList.remove('clair');
    bouton.textContent = '☀️';
    logo.src = "image/Logo.png";
    logo2.src = "image/Logo.png";
    renard3.src = "image/Renard_3.png";
}


bouton.addEventListener('click', () => {
    document.body.classList.toggle("clair");
    if (document.body.classList.contains("clair")) {
        bouton.textContent = "🌙";
        ChangerLogo("image/Logo_inverse.png");
        Changer3("image/Renard_3_inverse.png");
        localStorage.setItem('mode','clair');
    } else {
        bouton.textContent = "☀️";
        ChangerLogo("image/Logo.png");
        Changer3("image/Renard_3.png");
        localStorage.setItem('mode','sombre');
    }
});


function ChangerLogo(newLogo) {
    logo.classList.add("fade");
    logo2.classList.add("fade");

    setTimeout(() => {
        logo.src = newLogo;
        logo2.src = newLogo;
        logo.classList.remove("fade");
        logo2.classList.remove("fade");
    }, 250);
}

function Changer3(newLogo) {
    renard3.classList.add("fade");

    setTimeout(() => {
        renard3.src = newLogo;
        renard3.classList.remove("fade");
    }, 250);
}





const overlay = document.getElementById("overlay");

document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("zoom");
        overlay.classList.toggle("visible");
        document.body.classList.toggle("image-open");
    });
});

overlay.addEventListener("click", () => {
    document.querySelectorAll(".zoomable.zoom").forEach(img => {
        img.classList.remove("zoom");
    });
    overlay.classList.remove("visible");
});













