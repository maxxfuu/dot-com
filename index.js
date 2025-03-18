document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.hero h3, .hero h1, .hero p');
    const isMobile = window.innerWidth <= 768;
    
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
                duration: isMobile ? 300 : 600, // Faster on mobile
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
        }
    }

    animateElements();
});