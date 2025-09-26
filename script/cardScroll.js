const scrollSection = document.querySelector('.horizontal-scroll');
    const cardContainer = document.querySelector('.card-container');
    const cards = Array.from(cardContainer.children);

    cards.forEach(card => {
      const clone = card.cloneNode(true);
      cardContainer.appendChild(clone);
    });

    let offsetX = 0;
    let lastScrollY = window.scrollY;
    let isDragging = false;
    let startX = 0;
    let scrollX = 0;

    function animateCarousel() {
      const totalWidth = cardContainer.scrollWidth / 2;

      let translateX = offsetX % totalWidth;
      if (translateX < 0) translateX += totalWidth;

      cardContainer.style.transform = `translateX(${-translateX}px)`;
      requestAnimationFrame(animateCarousel);
    }

    animateCarousel();

    window.addEventListener('scroll', () => {
      const newScrollY = window.scrollY;
      const deltaY = newScrollY - lastScrollY;


      offsetX += deltaY * .5; 
      lastScrollY = newScrollY;
    });

    cardContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX;
      cardContainer.style.cursor = 'grabbing';
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
      cardContainer.style.cursor = 'default';
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      let delta = e.pageX - startX;
      offsetX -= delta; 
      startX = e.pageX;
    });

    cardContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].pageX;
    });

    cardContainer.addEventListener('touchend', () => {
      isDragging = false;
    });

    cardContainer.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      let delta = e.touches[0].pageX - startX;
      offsetX -= delta;
      startX = e.touches[0].pageX;
    });