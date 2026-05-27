// 1. Inicialização da biblioteca de animações AOS
AOS.init({ 
    duration: 1000, 
    once: true 
});

// 2. Controle de Scroll: Efeito de transparência no Hero e Header fixo
window.addEventListener('scroll', function() {
    const scrollValue = window.scrollY;
    const hero = document.querySelector('.hero');
    const header = document.querySelector('header');

    /* 
       Efeito de Fade-out: 
       A seção hero vai perdendo opacidade até 600px de scroll.
    */
    if (scrollValue <= 600) {
        const opacity = 1 - (scrollValue / 600);
        hero.style.opacity = opacity;
    } else {
        hero.style.opacity = 0;
    }

    /* 
       Efeito do Header: 
       Adiciona fundo escuro e desfoque quando o usuário rola a página.
    */
    if (scrollValue > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});