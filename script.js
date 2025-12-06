// GbitCode Interactive Enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Tool Cards Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initialize cards with animation
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        cardObserver.observe(card);
    });

    // Enhanced hover effect for tool cards
    toolCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';

            // Add subtle glow animation
            const glowAnimation = this.animate([
                { boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)' },
                { boxShadow: '0 0 40px rgba(0, 255, 0, 0.4)' }
            ], {
                duration: 300,
                fill: 'forwards'
            });
        });

        card.addEventListener('mouseleave', function() {
            this.animate([
                { boxShadow: '0 0 40px rgba(0, 255, 0, 0.4)' },
                { boxShadow: '0 0 20px rgba(0, 255, 0, 0)' }
            ], {
                duration: 300,
                fill: 'forwards'
            });
        });
    });

    // Terminal-style cursor effect for links
    const toolLinks = document.querySelectorAll('.tool-link');
    toolLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.link-icon');
            if (icon) {
                icon.style.transition = 'transform 0.3s ease';
                icon.style.transform = 'translateX(5px)';
            }
        });

        link.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.link-icon');
            if (icon) {
                icon.style.transform = 'translateX(0)';
            }
        });
    });

    // Logo animation on hover
    const logo = document.querySelector('.logo-placeholder');
    if (logo) {
        let rotationAngle = 0;

        logo.addEventListener('mouseenter', function() {
            const animation = this.animate([
                { transform: 'scale(1) rotate(0deg)' },
                { transform: 'scale(1.05) rotate(5deg)' }
            ], {
                duration: 300,
                fill: 'forwards',
                easing: 'ease-out'
            });
        });

        logo.addEventListener('mouseleave', function() {
            this.animate([
                { transform: 'scale(1.05) rotate(5deg)' },
                { transform: 'scale(1) rotate(0deg)' }
            ], {
                duration: 300,
                fill: 'forwards',
                easing: 'ease-in'
            });
        });
    }

    // Add typing effect to title (optional)
    const title = document.querySelector('.title');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        title.style.opacity = '1';

        let charIndex = 0;
        const typingSpeed = 100;

        function typeWriter() {
            if (charIndex < originalText.length) {
                title.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            }
        }

        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Smooth scroll for internal links (if any are added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add matrix-style background effect on mouse move
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Footer links animation
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(10px)' }
            ], {
                duration: 300,
                fill: 'forwards'
            });
        });

        link.addEventListener('mouseleave', function() {
            this.animate([
                { transform: 'translateX(10px)' },
                { transform: 'translateX(0)' }
            ], {
                duration: 300,
                fill: 'forwards'
            });
        });
    });

    // Add console message for fun
    console.log('%c Welcome to GbitCode! ', 'background: #00ff00; color: #0a0a0a; font-size: 20px; font-weight: bold;');
    console.log('%c Developed with ❤️ by the GbitCode team ', 'background: #0a0a0a; color: #00ff00; font-size: 12px;');
});
