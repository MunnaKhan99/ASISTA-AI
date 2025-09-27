function applyMouseMoveEffect(containerSelector, elementSelectors, resistance) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const elements = document.querySelectorAll(elementSelectors);
  if (elements.length === 0) return;

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

    elements.forEach(element => {
      element.style.transition = 'transform 0.1s ease-out';
      element.style.transform = `translate(${-deltaX * resistance}px, ${-deltaY * resistance}px)`;
    });

    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      elements.forEach(element => {
        element.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
        element.style.transform = 'translate(0,0)';
      });
    }, 100);
  });

  container.addEventListener('mouseleave', () => {
    clearTimeout(resetTimer);
    elements.forEach(element => {
      element.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
      element.style.transform = 'translate(0,0)';
    });
    lastX = lastY = null;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyMouseMoveEffect('.hero', '.bubble-left, .bubble-right', 0.8);
  applyMouseMoveEffect('.layout-container', '.badge', 0.5);
  applyMouseMoveEffect('.productivity-hero-wrapper', '.productivity-bubble-left, .productivity-bubble-right', 0.8);
});
