// --- MODO ESCURO ---
const temaBtn = document.getElementById("tema-btn");
temaBtn.onclick = () => {
    document.body.classList.toggle("dark");
    temaBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// --- BOTÃO DE VOLTAR AO TOPO ---
const topoBtn = document.getElementById("topo-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topoBtn.style.display = "block";
    } else {
        topoBtn.style.display = "none";
    }
});

topoBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


