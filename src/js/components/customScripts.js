document.addEventListener('DOMContentLoaded', () => {
    const whyContainer = document.querySelector('.why .why__container');

    if (whyContainer) {
        const items = whyContainer.querySelectorAll('.item');
        const defaultItem = items[0];

        items.forEach(item => {
            item.addEventListener('mouseenter', () => {
                items.forEach(el => el.classList.remove('active'));
                item.classList.add('active');
            });
        });

        whyContainer.addEventListener('mouseleave', () => {
            items.forEach(el => el.classList.remove('active'));
            defaultItem.classList.add('active');
        });
    }

    const helpContainer = document.querySelector('.help .help__container');

    if (helpContainer) {
        const items = helpContainer.querySelectorAll('.items a');
        const defaultItem = items[0];

        const setActive = (item) => {
            items.forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        };

        const isHoverDevice = () => window.matchMedia('(hover: hover)').matches;

        items.forEach(item => {
            item.addEventListener('mouseenter', () => {
                if (isHoverDevice()) setActive(item);
            });

            item.addEventListener('click', () => {
                if (!isHoverDevice()) {
                    setActive(item);
                }
            });

            item.addEventListener('focus', () => {
                setActive(item);
            });
        });

        helpContainer.addEventListener('mouseleave', () => {
            if (isHoverDevice()) {
                setActive(defaultItem);
            }
        });
    }

    const formCheckboxes = document.querySelectorAll('.u-form');

    if (formCheckboxes) {
        formCheckboxes.forEach(form => {
            const checkbox = form.querySelector('.form__checkbox');
            const submitBtn = form.querySelector('[type="submit"]');

            if (!checkbox || !submitBtn) return;

            const toggleButton = () => {
                submitBtn.disabled = !checkbox.checked;
            };

            checkbox.addEventListener('change', toggleButton);
            toggleButton();
        });
    }

    const animatedTextElem = document.querySelector('.animation-text .scroll-text__animated');

    if (animatedTextElem) {
        const nodes = [...animatedTextElem.childNodes];

        let html = '';
        let wordIndex = 0;

        nodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                const words = node.textContent
                    .trim()
                    .split(/\s+/)
                    .filter(Boolean);

                words.forEach(word => {
                    html += `<span data-index="${wordIndex++}">${word}</span> `;
                });
            }

            if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'BR') {
                html += '<br>';
            }
        });

        animatedTextElem.innerHTML = html;

        const spans = [...animatedTextElem.querySelectorAll('span')];

        function updateText() {
            const rect = animatedTextElem.getBoundingClientRect();

            const windowHeight = window.innerHeight;

            const start = windowHeight * 0.8;
            const end = windowHeight * 0.2;

            let progress = (start - rect.top) / (start - end);

            progress = Math.max(0, Math.min(1, progress));

            const activeWords = Math.floor(progress * spans.length);

            spans.forEach((span, index) => {
                span.classList.toggle(
                    'is-active',
                    index < activeWords
                );
            });
        }

        window.addEventListener('scroll', updateText, {
            passive: true
        });

        window.addEventListener('resize', updateText);

        updateText();
    }
});
