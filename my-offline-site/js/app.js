(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const toggle = document.querySelector('.nav__toggle');
    const list = document.querySelector('.nav__list');
    if (toggle && list) {
        toggle.addEventListener('click', () => {
            const isOpen = list.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });

        list.addEventListener('click', (event) => {
            if (event.target instanceof HTMLElement && event.target.tagName === 'A') {
                list.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    const header = document.querySelector('.header');
    if (header) {
        const updateHeader = () => {
            if (window.scrollY > 24) {
                header.classList.add('is-scrolled');
            } else {
                header.classList.remove('is-scrolled');
            }
        };
        window.addEventListener('scroll', updateHeader, { passive: true });
        updateHeader();
    }

    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length) {
        const onIntersect = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        };
        if (!prefersReducedMotion && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver(onIntersect, {
                rootMargin: '0px 0px -10%',
                threshold: 0.15,
            });
            revealElements.forEach((el) => observer.observe(el));
        } else {
            revealElements.forEach((el) => el.classList.add('is-visible'));
        }
    }

    const canvas = document.getElementById('particle-canvas');
    if (canvas && canvas instanceof HTMLCanvasElement && !prefersReducedMotion) {
        const context = canvas.getContext('2d');
        if (context) {
            const particles = [];
            const particleCount = 80;
            const color = 'rgba(77, 141, 255, 0.6)';

            const resize = () => {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
            };
            resize();
            window.addEventListener('resize', resize);

            for (let i = 0; i < particleCount; i += 1) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 0.5,
                    velocityX: (Math.random() - 0.5) * 0.4,
                    velocityY: (Math.random() - 0.5) * 0.4,
                });
            }

            const draw = () => {
                context.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach((particle) => {
                    context.beginPath();
                    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                    context.fillStyle = color;
                    context.fill();
                });
            };

            const update = () => {
                particles.forEach((particle) => {
                    particle.x += particle.velocityX;
                    particle.y += particle.velocityY;

                    if (particle.x < 0 || particle.x > canvas.width) {
                        particle.velocityX *= -1;
                    }
                    if (particle.y < 0 || particle.y > canvas.height) {
                        particle.velocityY *= -1;
                    }
                });
            };

            const connect = () => {
                for (let i = 0; i < particles.length; i += 1) {
                    for (let j = i + 1; j < particles.length; j += 1) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < 140) {
                            context.strokeStyle = `rgba(77, 141, 255, ${0.4 - distance / 360})`;
                            context.lineWidth = 0.6;
                            context.beginPath();
                            context.moveTo(particles[i].x, particles[i].y);
                            context.lineTo(particles[j].x, particles[j].y);
                            context.stroke();
                        }
                    }
                }
            };

            let animationId;
            const animate = () => {
                update();
                draw();
                connect();
                animationId = window.requestAnimationFrame(animate);
            };
            animate();

            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    window.cancelAnimationFrame(animationId);
                } else {
                    animationId = window.requestAnimationFrame(animate);
                }
            });
        }
    }
})();
