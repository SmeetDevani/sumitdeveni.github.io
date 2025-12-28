document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Island Logic (Scroll to Top on click)
    const dynamicIsland = document.getElementById('dynamicIsland');
    if (dynamicIsland) {
        dynamicIsland.addEventListener('click', (e) => {
            if (e.target === dynamicIsland) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // 2. Work Slider Loop
    const slider = document.getElementById('workSlider');
    const cards = Array.from(slider.children);

    // Clone cards for seamless loop
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        slider.appendChild(clone);
    });

    // 3. Reveal on Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Parallax effect for hero image
    const heroImage = document.querySelector('.image-wrapper');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    });

});
