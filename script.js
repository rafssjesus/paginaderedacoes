// --------------------------------
// BOTÃO MODO ESCURO / CLARO
// --------------------------------
const temaBtn = document.getElementById("tema-btn");

temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    temaBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});


// --------------------------------
// BOTÃO VOLTAR AO TOPO
// --------------------------------
const topoBtn = document.getElementById("topo-btn");

topoBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// --------------------------------
// ANIMAÇÃO AO ROLAR (cards aparecem suavemente)
// --------------------------------
const secoes = document.querySelectorAll(".secao");

function animarSecoes() {
    secoes.forEach(secao => {
        const topo = secao.getBoundingClientRect().top;
        if (topo < window.innerHeight - 100) {
            secao.style.opacity = "1";
            secao.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", animarSecoes);
animarSecoes();



