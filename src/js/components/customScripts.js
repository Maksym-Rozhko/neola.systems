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
});
