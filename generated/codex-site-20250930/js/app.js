(() => {
    const content = window.safeContent || {};
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

    document.querySelectorAll('[data-scroll-target]').forEach((button) => {
        button.addEventListener('click', () => {
            const selector = button.getAttribute('data-scroll-target');
            if (!selector) return;
            const target = document.querySelector(selector);
            if (target) {
                target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            }
        });
    });

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
            const particleCount = 90;
            const color = 'rgba(74, 111, 255, 0.55)';

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
                    radius: Math.random() * 2 + 0.6,
                    velocityX: (Math.random() - 0.5) * 0.45,
                    velocityY: (Math.random() - 0.5) * 0.45,
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
                        if (distance < 150) {
                            context.strokeStyle = `rgba(74, 111, 255, ${0.4 - distance / 360})`;
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

    const scenarioData = [
        {
            label: 'Exploration',
            title: 'Cartographier les risques',
            text: "Identifiez les cas d'usage sensibles, recensez les données critiques et clarifiez les attentes métiers pour donner un cadre au programme de sécurité IA.",
        },
        {
            label: 'Cadre',
            title: 'Structurer la gouvernance',
            text: "Mettre en place les comités, politiques et chartes qui encadrent l'usage des modèles et assignent les rôles de supervision.",
        },
        {
            label: 'Déploiement',
            title: 'Industrialiser les contrôles',
            text: "Automatisez tests, évaluations et surveillance continue pour réduire les temps de réaction face aux signaux faibles.",
        },
        {
            label: 'Optimisation',
            title: 'Mesurer et améliorer',
            text: "Consolidez vos indicateurs, partagez les leçons apprises et ajustez la feuille de route selon les incidents et retours terrain.",
        },
    ];

    const scenarioRange = document.querySelector('[data-scenario-range]');
    if (scenarioRange) {
        const labelEl = document.querySelector('[data-scenario-label]');
        const titleEl = document.querySelector('[data-scenario-title]');
        const textEl = document.querySelector('[data-scenario-text]');
        const updateScenario = (index) => {
            const step = scenarioData[index] || scenarioData[0];
            if (labelEl) labelEl.textContent = step.label;
            if (titleEl) titleEl.textContent = step.title;
            if (textEl) textEl.textContent = step.text;
        };
        scenarioRange.setAttribute('max', String(scenarioData.length - 1));
        scenarioRange.addEventListener('input', (event) => {
            const value = Number(event.target.value || 0);
            updateScenario(value);
        });
        updateScenario(Number(scenarioRange.value || 0));
    }

    const homeInsights = {
        alignement: "Un modèle modifie ses réponses selon le type d'utilisateur ? Mesurez l'alignement comportemental à l'aide de jeux de tests scénarisés et enclenchez des revues humaines.",
        interpretabilite: "Les équipes peinent à expliquer une décision critique ? Réunissez data scientists et métier pour produire une narration accessible et archiver l'analyse.",
        robustesse: "Vos stress tests révèlent des écarts extrêmes ? Priorisez les cas d'usage vitaux, ajoutez des protections en amont et surveillez la dérive.",
        gouvernance: "Plusieurs équipes déploient des modèles sans validation ? Activez votre comité IA et imposez un pipeline approuvé avant mise en production.",
    };
    const homePanel = document.querySelector('[data-home-insight-panel]');
    const homeButtons = document.querySelectorAll('[data-home-insight]');
    if (homePanel && homeButtons.length) {
        homeButtons.forEach((button) => {
            button.addEventListener('click', () => {
                homeButtons.forEach((other) => other.setAttribute('aria-selected', 'false'));
                button.setAttribute('aria-selected', 'true');
                const key = button.getAttribute('data-home-insight');
                homePanel.textContent = homeInsights[key] || '';
            });
        });
    }

    const seedRandom = (seed) => {
        let h = 0;
        for (let i = 0; i < seed.length; i += 1) {
            h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
        }
        return () => {
            h = Math.imul(h ^ h >>> 15, 1 | h);
            h = h + Math.imul(h ^ h >>> 7, 61 | h) ^ h;
            return ((h ^ h >>> 14) >>> 0) / 4294967296;
        };
    };

    const drawRoundedRect = (ctx, x, y, width, height, radius) => {
        const r = Math.min(radius, width / 2, height / 2);
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + width - r, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + r);
        ctx.lineTo(x + width, y + height - r);
        ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
        ctx.lineTo(x + r, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    };

    const createProceduralArt = (slug, palette, accent) => {
        const canvasEl = document.createElement('canvas');
        canvasEl.width = 960;
        canvasEl.height = 600;
        const ctx = canvasEl.getContext('2d');
        if (!ctx) return '';

        const random = seedRandom(slug);
        const gradient = ctx.createLinearGradient(0, 0, canvasEl.width, canvasEl.height);
        gradient.addColorStop(0, palette[0] || '#e8edff');
        gradient.addColorStop(1, palette[1] || '#f6f8ff');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

        for (let i = 0; i < 8; i += 1) {
            const cx = canvasEl.width * random();
            const cy = canvasEl.height * random();
            const radius = 180 + random() * 220;
            const gradientCircle = ctx.createRadialGradient(cx, cy, radius * 0.1, cx, cy, radius);
            gradientCircle.addColorStop(0, `${accent}33`);
            gradientCircle.addColorStop(1, '#ffffff00');
            ctx.fillStyle = gradientCircle;
            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.globalCompositeOperation = 'lighter';
        for (let i = 0; i < 60; i += 1) {
            const x1 = canvasEl.width * random();
            const y1 = canvasEl.height * random();
            const x2 = x1 + (random() - 0.5) * 220;
            const y2 = y1 + (random() - 0.5) * 220;
            ctx.strokeStyle = `${accent}${Math.floor(120 + random() * 80).toString(16)}`.slice(0, 7);
            ctx.lineWidth = 1 + random() * 2;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.quadraticCurveTo((x1 + x2) / 2 + random() * 120, (y1 + y2) / 2 + random() * 120, x2, y2);
            ctx.stroke();
        }
        ctx.globalCompositeOperation = 'source-over';

        ctx.lineWidth = 4;
        ctx.strokeStyle = `${accent}80`;
        for (let i = 0; i < 4; i += 1) {
            const startX = canvasEl.width * random();
            const startY = canvasEl.height * random();
            const width = 180 + random() * 200;
            const height = 90 + random() * 140;
            drawRoundedRect(ctx, startX, startY, width, height, 42);
            ctx.stroke();
        }

        return canvasEl.toDataURL('image/png');
    };

    const updateArtworks = () => {
        document.querySelectorAll('img[data-art]').forEach((image) => {
            const slug = image.getAttribute('data-art') || 'default';
            const palette = content[slug]?.art?.palette || ['#e9eeff', '#f6f8ff'];
            const accent = content[slug]?.art?.accent || '#3b64ff';
            const dataUrl = createProceduralArt(slug, palette, accent);
            if (dataUrl) {
                image.src = dataUrl;
            }
        });
    };
    updateArtworks();

    const topic = document.body?.dataset?.topic;
    if (topic && content[topic]) {
        const topicData = content[topic];
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', topicData.description);
        }
        if (document.title && !document.title.includes(topicData.title)) {
            document.title = `${topicData.title} – Sécurité des IA`;
        }

        document.querySelectorAll('[data-field]').forEach((element) => {
            const key = element.getAttribute('data-field');
            if (key && typeof topicData[key] === 'string') {
                element.textContent = topicData[key];
            }
        });

        const narrativeGrid = document.querySelector('[data-narrative-grid]');
        if (narrativeGrid) {
            narrativeGrid.innerHTML = '';
            topicData.narratives.forEach((item) => {
                const block = document.createElement('article');
                block.className = 'narrative-block';
                const heading = document.createElement('h3');
                heading.textContent = item.title;
                block.appendChild(heading);
                item.paragraphs.forEach((paragraph) => {
                    const p = document.createElement('p');
                    p.textContent = paragraph;
                    block.appendChild(p);
                });
                narrativeGrid.appendChild(block);
            });
        }

        const checklist = document.querySelector('[data-checklist]');
        if (checklist) {
            checklist.innerHTML = '';
            topicData.checklist.forEach((item) => {
                const li = document.createElement('li');
                const text = document.createElement('p');
                text.textContent = item;
                li.appendChild(text);
                checklist.appendChild(li);
            });
        }

        const resources = document.querySelector('[data-resources]');
        if (resources) {
            resources.innerHTML = '';
            topicData.resources.forEach((resource) => {
                const li = document.createElement('li');
                const link = document.createElement('a');
                link.href = resource.href;
                link.textContent = resource.label;
                li.appendChild(link);
                resources.appendChild(li);
            });
        }

        const timelineRange = document.querySelector('[data-timeline-range]');
        const timelineTitle = document.querySelector('[data-timeline-title]');
        const timelineText = document.querySelector('[data-timeline-text]');
        const updateTimeline = (index) => {
            const item = topicData.timeline[index] || topicData.timeline[0];
            if (timelineTitle) timelineTitle.textContent = item.label;
            if (timelineText) timelineText.textContent = item.description;
        };
        if (timelineRange) {
            timelineRange.setAttribute('max', String(topicData.timeline.length - 1));
            timelineRange.addEventListener('input', (event) => {
                const value = Number(event.target.value || 0);
                updateTimeline(value);
            });
            updateTimeline(Number(timelineRange.value || 0));
        }

        const insightTabs = document.querySelector('[data-insight-tabs]');
        const insightDisplay = document.querySelector('[data-insight-display]');
        const applyInsight = (index) => {
            const insight = topicData.insights[index] || topicData.insights[0];
            if (insightDisplay) {
                insightDisplay.textContent = insight.detail;
            }
        };
        if (insightTabs && insightDisplay) {
            insightTabs.innerHTML = '';
            topicData.insights.forEach((insight, index) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.textContent = insight.label;
                button.setAttribute('role', 'tab');
                button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
                button.addEventListener('click', () => {
                    insightTabs.querySelectorAll('button').forEach((other) => other.setAttribute('aria-selected', 'false'));
                    button.setAttribute('aria-selected', 'true');
                    applyInsight(index);
                });
                insightTabs.appendChild(button);
            });
            applyInsight(0);
        }

        const randomButtons = document.querySelectorAll('[data-random-insight]');
        if (randomButtons.length && topicData.insights.length) {
            randomButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    const index = Math.floor(Math.random() * topicData.insights.length);
                    if (insightTabs) {
                        const buttons = insightTabs.querySelectorAll('button');
                        buttons.forEach((btn, btnIndex) => btn.setAttribute('aria-selected', btnIndex === index ? 'true' : 'false'));
                    }
                    applyInsight(index);
                });
            });
        }
    }
})();
