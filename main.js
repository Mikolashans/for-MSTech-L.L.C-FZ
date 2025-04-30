const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

window.addEventListener('scroll', () => {

    const scroll = window.scrollY;
    overlay.style.opacity = '0.8';
})

let isScrolling;

window.addEventListener('scroll', () => {
    clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        overlay.style.opacity = 0; 
    }, 1000); 
});