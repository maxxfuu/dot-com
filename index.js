document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.hero h3, .hero h1, .hero p');
    
    async function typeText(element) {
        const text = element.textContent;
        element.textContent = '';
        element.style.display = 'block';
        
        const typingAnimation = element.animate(
            [
                { width: '0%' },
                { width: '100%' }
            ],
            {
                duration: 550,
                easing: 'steps(40, end)',
                fill: 'forwards'
            }
        );

        element.textContent = text;
        return typingAnimation.finished;
    }

    async function animateElements() {
        for (const element of heroElements) {
            await typeText(element);
            await new Promise(resolve => setTimeout(resolve, 75)); // Small delay between elements
        }
    }

    // Allow cursor highlight edges of project and experience cards
    animateElements();
    const cards = document.querySelectorAll('.experience-card, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            // Get position of cursor relative to card
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the card
            const y = e.clientY - rect.top;  // y position within the card
            
            // Calculate percentage of cursor position
            const xPercent = x / rect.width * 100;
            const yPercent = y / rect.height * 100;
            
            // Update CSS variable for gradient position
            card.style.setProperty('--x', `${xPercent}%`);
            card.style.setProperty('--y', `${yPercent}%`);
        });
    });
});