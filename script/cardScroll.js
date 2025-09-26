const scrollSection = document.querySelector('.horizontal-scroll');
    const cardContainer = document.querySelector('.card-container');
    const cards = Array.from(cardContainer.children);

    // Duplicate cards for seamless infinite effect
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
      // Loop width
      const totalWidth = cardContainer.scrollWidth / 2;

      // Wrap-around effect
      let translateX = offsetX % totalWidth;
      if (translateX < 0) translateX += totalWidth;

      cardContainer.style.transform = `translateX(${-translateX}px)`;
      requestAnimationFrame(animateCarousel);
    }

    animateCarousel();

    // Vertical scroll -> horizontal movement
    window.addEventListener('scroll', () => {
      const newScrollY = window.scrollY;
      const deltaY = newScrollY - lastScrollY;

      // scroll down -> move right, scroll up -> move left
      offsetX += deltaY * 2; // multiplier for speed
      lastScrollY = newScrollY;
    });

    // Cursor drag control
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
      offsetX -= delta; // inverse direction so drag feels natural
      startX = e.pageX;
    });

    // Touch support for mobile
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