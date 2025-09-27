
  const bubbleLeft = document.querySelector('.bubble-left');
  const bubbleRight = document.querySelector('.bubble-right');

  document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * -30; 
    const y = (e.clientY / innerHeight - 0.5) * -30;

    if (bubbleLeft) bubbleLeft.style.transform = `translate(${x}px, ${y}px)`;
    if (bubbleRight) bubbleRight.style.transform = `translate(${x}px, ${-y}px)`; 
  });

