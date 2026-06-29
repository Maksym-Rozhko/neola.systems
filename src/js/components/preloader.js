function preloader(preloader) {
    const loader = document.querySelector(preloader);

    if (loader) {
        setTimeout(() => {
            loader.classList.add('remove');
        }, 3000);
        setTimeout(() => {
            loader.remove();
        }, 3500);
    }
};

preloader('.preloader');
