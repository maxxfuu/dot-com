document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.hero h3, .hero h1, .hero p');
    const isMobile = window.innerWidth <= 768;
    
    async function typeText(element) {
        const text = element.textContent;
        element.textContent = '';
        element.style.display = 'block';
        
        if (isMobile) {
            // On mobile, just fade in the text without typing animation
            element.textContent = text;
            element.animate(
                [
                    { opacity: 0, transform: 'translateY(10px)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ],
                {
                    duration: 300,
                    easing: 'ease-out',
                    fill: 'forwards'
                }
            );
        } else {
            // On desktop, keep the typing animation
            const typingAnimation = element.animate(
                [
                    { width: '0%' },
                    { width: '100%' }
                ],
                {
                    duration: 600,
                    easing: 'steps(40, end)',
                    fill: 'forwards'
                }
            );
            element.textContent = text;
            return typingAnimation.finished;
        }
        
        return new Promise(resolve => setTimeout(resolve, 300));
    }

    async function animateElements() {
        for (const element of heroElements) {
            await typeText(element);
        }
    }

    animateElements();
});