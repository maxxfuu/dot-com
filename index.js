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

    animateElements();
});