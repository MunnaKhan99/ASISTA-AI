gsap.registerPlugin(ScrollTrigger);

const whySection = document.querySelector('.why-section');
const cards = gsap.utils.toArray('.why-card');

// Set initial positions and z-index
gsap.set(cards, {
  position: 'sticky',
  top: 150,
});

gsap.set(cards[0], { zIndex: 1 });
gsap.set(cards[1], { top: 200, zIndex: 2 });
gsap.set(cards[2], { top: 250, zIndex: 3 });


// Create a timeline for the stacking animation
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: whySection,
    pin: true,
    scrub: true,
    start: 'top top',
    end: '+=200%', // Controls the scroll duration
  },
});

// Animate Card 2 to replace Card 1
timeline.to(cards[1], {
  y: -50,
  ease: 'power1.inOut',
});

// Animate Card 3 to replace Card 1
timeline.to(cards[2], {
  y: -100,
  ease: 'power1.inOut',
});
