const bouton = document.getElementById('change-mode')
const logo = document.getElementById('logo')
const logo2 = document.getElementById('logo2')
const logo3 = document.getElementById('logo3')
const renard3 = document.getElementById('renard3')
const Save = localStorage.getItem('mode');

if (Save === 'clair') {
    document.body.classList.add('clair');
    bouton.textContent = '🌙';
    logo.src = "image/Logo_inverse.png";
    logo2.src = "image/Logo_inverse.png";
    logo3.src = "image/Logo_inverse.png";
    renard3.src = "image/Renard_3_inverse.png";
} else {
    document.body.classList.remove('clair');
    bouton.textContent = '☀️';
    logo.src = "image/Logo.png";
    logo2.src = "image/Logo.png";
    logo3.src = "image/Logo.png";
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
    logo3.classList.add("fade");

    setTimeout(() => {
        logo.src = newLogo;
        logo2.src = newLogo;
        logo3.src = newLogo;
        logo.classList.remove("fade");
        logo2.classList.remove("fade");
        logo3.classList.remove("fade");
    }, 250);
}

function Changer3(newLogo) {
    renard3.classList.add("fade");

    setTimeout(() => {
        renard3.src = newLogo;
        renard3.classList.remove("fade");
    }, 250);
}


const textes = {Lyre : document.getElementById("Details_Lyre").innerHTML,
                Musique : document.getElementById("Details_Musique").innerHTML,
                Video : document.getElementById("Details_Video").innerHTML,
                Site : document.getElementById("Details_Site").innerHTML,
                Echec : document.getElementById("Details_Echec").innerHTML};
const boites = document.querySelectorAll(".box");
const overlay = document.getElementById("overlay");
const overlayText = document.getElementById("overlay-text");

boites.forEach(boite => {
    boite.addEventListener("click", () => {
        const detail = document.getElementById(`Details_${boite.id}`)
        overlayText.innerHTML = detail.innerHTML;
        overlay.classList.add("visible");
    })
})

overlay.addEventListener("click", () => {
    overlay.classList.remove("visible");
});















