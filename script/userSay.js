function updateFocusedCard() {
            const container = document.querySelector('.carousel-container');
            const cards = document.querySelectorAll('.testimonial-card');
            const containerCenter = container.offsetWidth / 2;
            
            cards.forEach(card => {
                const cardRect = card.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const cardCenter = cardRect.left + cardRect.width / 2 - containerRect.left;
                
                // Calculate distance from center
                const distanceFromCenter = Math.abs(cardCenter - containerCenter);
                
                // Card is considered "centered" if it's within 100px of center
                if (distanceFromCenter < 200) {
                    card.classList.add('focused');
                } else {
                    card.classList.remove('focused');
                }
            });
        }

        // Update focus every 100ms for smooth transitions
        setInterval(updateFocusedCard, 50);
        
        // Initial update
        updateFocusedCard();

        // Pause animation on hover
        const track = document.getElementById('carouselTrack');
        track.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        
        track.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });