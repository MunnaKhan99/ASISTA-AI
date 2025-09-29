const wrapper = document.querySelector('.carousel-wrapper');
const cardContainer = document.querySelector('.card-container');
const cards = Array.from(cardContainer.children);

// Duplicate cards for infinite scroll
cards.forEach(card => {
    const clone = card.cloneNode(true);
    cardContainer.appendChild(clone);
});

let offsetX = 0;
let lastScrollY = window.scrollY;
let isDragging = false;
let startX = 0;

// Animate carousel continuously
function animateCarousel() {
    const totalWidth = cardContainer.scrollWidth / 2;
    let translateX = offsetX % totalWidth; /// Loop around-0width
    if (translateX < 0) translateX += totalWidth;
    cardContainer.style.transform = `translateX(${-translateX}px)`;
    requestAnimationFrame(animateCarousel);
}

animateCarousel();

// Scroll to horizontal translation
window.addEventListener('scroll', () => {
    const newScrollY = window.scrollY;
    const deltaY = newScrollY - lastScrollY;
    offsetX += deltaY * 0.5;
    lastScrollY = newScrollY;
});

// MOUSE DRAG
wrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    wrapper.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
    isDragging = false;
    wrapper.style.cursor = 'grab';
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    let delta = e.pageX - startX;
    offsetX -= delta;
    startX = e.pageX;
});

// TOUCH DRAG
wrapper.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX;
});

wrapper.addEventListener('touchend', () => {
    isDragging = false;
});

wrapper.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    let delta = e.touches[0].pageX - startX;
    offsetX -= delta;
    startX = e.touches[0].pageX;
});
