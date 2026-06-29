function accordion(trigger, activeClass, showMoreSelector) {
    const items = document.querySelectorAll(trigger);
    const showMoreBtn = document.querySelector(showMoreSelector);

    if (items) {
        // const accordionRemoveItemElems = () => {
        //     items.forEach(item => item.parentElement.classList.remove(activeClass));
        // }

        items.forEach(elem => {
            elem.addEventListener('click', () => {
              elem.parentElement.classList.toggle(activeClass);
              // if (elem.parentElement.classList.contains(activeClass)) {
              //   accordionRemoveItemElems();
              // } else {
              //   accordionRemoveItemElems();
              //   elem.parentElement.classList.add(activeClass);
              // }
            });
          });
    }

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            items.forEach(item => {
                item.parentElement.classList.remove('d-none');
            });
            showMoreBtn.classList.add('d-none');
        });
    }
};

accordion('.tricks__question', 'tricks__item--active', '.tips .show-more');
