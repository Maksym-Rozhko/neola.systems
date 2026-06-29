const smoothScrollToElems = (links) => {
    const anchorsLink = document.querySelectorAll(links);
    const burger = document?.querySelector('[data-burger]');
    const menu = document?.querySelector('[data-menu]');

    if (anchorsLink.length) {
        const smoothScroll = (anchors) => {
            for (let anchor of anchors) {
                const blockID = anchor.getAttribute('href');

                anchor.addEventListener('click', (e) => {

                    if (menu.classList.contains('menu--active')) {
                        burger.click();
                    }

                    if (!blockID.startsWith('#')) return;

                    if (window.location.pathname !== '/') {
                        e.preventDefault();
                        window.location.href = `/${blockID}`;
                        return;
                    }

                   e.preventDefault();

                    const el = document.querySelector(blockID);
                    if (!el) return;

                    el.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
            };
        };

        smoothScroll(anchorsLink);
    }
}
// const smoothScrollToElems = (links) => {
//     const anchorsLink = document.querySelectorAll(links);

//     if (anchorsLink) {
//         const smoothScroll = (anchors) => {
//             for (let anchor of anchors) {
//                 const blockID = anchor.getAttribute('href');

//                 anchor.addEventListener('click', (e) => {
//                     e.preventDefault();
//                     document.querySelector(blockID).scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'start'
//                     });
//                 });
//             };
//         };

//         smoothScroll(anchorsLink);
//     }
// };

smoothScrollToElems('.header .mobile-menu .nav ul a');
smoothScrollToElems('.footer .nav ul a');
