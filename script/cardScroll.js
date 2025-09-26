const scrollSection = document.querySelector('.horizontal-scroll');
const cardContainer = document.querySelector('.card-container');

window.addEventListener('scroll', () => {
    const rect = scrollSection.getBoundingClientRect();
    const scrollProgress = Math.min(Math.max(-rect.top, 0), rect.height);

    // Move horizontally based on vertical scroll
    cardContainer.style.transform = `translateX(${scrollProgress}px)`;
});

