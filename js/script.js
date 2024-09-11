document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate hero content
    gsap.to('.hero-content', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
    });

    // Animate header on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Animate features on scroll
    gsap.utils.toArray('.feature').forEach(feature => {
        gsap.from(feature, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: feature,
                start: "top 80%",
            }
        });
    });

    // Animate stats numbers
    const stats = {
        members: 10000,
        resources: 5000,
        events: 50,
        jobs: 1000
    };

    Object.entries(stats).forEach(([key, value]) => {
        const el = document.getElementById(`${key}-count`);
        gsap.to(el, {
            innerHTML: value,
            duration: 2,
            snap: { innerHTML: 1 },
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
            }
        });
    });
});




 
