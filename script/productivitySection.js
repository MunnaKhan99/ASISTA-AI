        document.addEventListener('DOMContentLoaded', function() {
            const heroSection = document.querySelector('.productivity-hero-section');
            const bubbleLeft = document.querySelector('.productivity-bubble-left');
            const bubbleRight = document.querySelector('.productivity-bubble-right');
            
            let mouseX = 0;
            let mouseY = 0;
            
            heroSection.addEventListener('mousemove', function(e) {
                // Get mouse position relative to the hero section
                const rect = heroSection.getBoundingClientRect();
                mouseX = (e.clientX - rect.left) / rect.width;
                mouseY = (e.clientY - rect.top) / rect.height;
                
                // Calculate movement based on cursor position
                // Convert mouse position to movement range (-20px to +20px)
                const moveRangeX = 30;
                const moveRangeY = 20;
                
                const leftBubbleMoveX = (mouseX - 0.5) * moveRangeX;
                const leftBubbleMoveY = (mouseY - 0.5) * moveRangeY;
                
                // Right bubble moves in opposite direction for more natural feel
                const rightBubbleMoveX = -(mouseX - 0.5) * moveRangeX;
                const rightBubbleMoveY = -(mouseY - 0.5) * moveRangeY;
                
                // Apply transforms while preserving the float animation
                bubbleLeft.style.transform = `translate(${leftBubbleMoveX}px, ${leftBubbleMoveY}px)`;
                bubbleRight.style.transform = `translate(${rightBubbleMoveX}px, ${rightBubbleMoveY}px)`;
            });
            
            // Reset bubbles when mouse leaves the section
            heroSection.addEventListener('mouseleave', function() {
                bubbleLeft.style.transform = 'translate(0px, 0px)';
                bubbleRight.style.transform = 'translate(0px, 0px)';
            });
        });