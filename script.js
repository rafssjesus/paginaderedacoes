// ======== Rolagem suave ========
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute("href"));
        alvo.scrollIntoView({ behavior: "smooth" });
    });
});

// ======== Destacar link ativo conforme a seção ========
const secoes = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let atual = "";

    secoes.forEach(secao => {
        const topo = secao.offsetTop - 200;
        if (scrollY >= topo) atual = secao.getAttribute("id");
    });

    links.forEach(link => {
        link.classList.remove("ativo");
        if (link.getAttribute("href").includes(atual)) {
            link.classList.add("ativo");
        }
    });
});

// ======== Animação ao rolar ========
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".secao").forEach(secao => {
    secao.style.opacity = 0;
    secao.style.transform = "translateY(50px)";
    secao.style.transition = "0.8s ease";
    observer.observe(secao);
});


