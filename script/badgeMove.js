const container = document.querySelector('.layout-container');
const badges = document.querySelectorAll('.badge');

let lastX = null, lastY = null;
let resetTimer = null;

container.addEventListener('mousemove', e => {
  if (lastX === null) {
    lastX = e.clientX;
    lastY = e.clientY;
    return;
  }
  const deltaX = e.clientX - lastX;
  const deltaY = e.clientY - lastY;
  lastX = e.clientX;
  lastY = e.clientY;

  // apply resistance transform
  badges.forEach(badge => {
    badge.style.transform = `translate(${-deltaX * 0.5}px, ${-deltaY * 0.5}px)`;
  });

  // clear any pending reset
  clearTimeout(resetTimer);
  // schedule reset to zero, letting CSS transition animate it smoothly
  resetTimer = setTimeout(() => {
    badges.forEach(badge => {
      badge.style.transform = 'translate(0,0)';
    });
  }, 100);
});

container.addEventListener('mouseleave', () => {
  // ensure badges return when pointer leaves
  clearTimeout(resetTimer);
  badges.forEach(badge => badge.style.transform = 'translate(0,0)');
  lastX = lastY = null;
});
