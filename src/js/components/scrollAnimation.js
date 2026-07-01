const scrollAnimation = endElem => {
    const elem = document.querySelector(endElem);

    const observer = new IntersectionObserver(
        entries => {
            entries[0].isIntersecting ? elem.previousElementSibling.classList.add('animated') : elem.previousElementSibling.classList.remove('animated');
        },
        {
            rootMargin: '100px',
        },
    );

    try {
        observer.observe(elem);
    } catch (error) {}
};

// const scrollSliderIndex = endElem => {
//     const elem = document.querySelector(endElem);

//     const observer = new IntersectionObserver(
//         entries => {
//             entries[0].isIntersecting ? elem.previousElementSibling.classList.add('z-index') : elem.previousElementSibling.classList.remove('z-index');
//         },
//         {
//             rootMargin: '500px',
//         },
//     );

//     try {
//         observer.observe(elem);
//     } catch (error) {}
// };

scrollAnimation('.steps .step--1 + .end-elem');
scrollAnimation('.steps .step--2 + .end-elem');
scrollAnimation('.steps .step--3 + .end-elem');
scrollAnimation('.steps .step--4 + .end-elem');
