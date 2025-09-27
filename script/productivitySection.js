
const leftBubble = document.querySelector('.productivity-bubble-left');
const rightBubble = document.querySelector('.productivity-bubble-right');

document.addEventListener('mousemove', (e) => {
    // স্ক্রিনের মধ্যবিন্দু
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // মাউস পজিশনের পার্থক্য
    const offsetX = (e.clientX - centerX) / centerX; 
    const offsetY = (e.clientY - centerY) / centerY;

    // উল্টো দিকে মুভ (মাউস নিচে গেলে bubble উপরে যাবে)
    const moveX = -offsetX * 30; // 30px পর্যন্ত ডানে/বামে
    const moveY = -offsetY * 30; // 30px পর্যন্ত উপরে/নিচে

    leftBubble.style.transform  = `translate(${moveX}px, ${moveY}px)`;
    rightBubble.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
