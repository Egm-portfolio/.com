document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    const carouselInstances = M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: true,
    });

    // Referencia al primer carrusel
    const carouselInstance = carouselInstances[0];

    // Botones de navegación
    const prevButton = document.getElementById('prev-carousel');
    const nextButton = document.getElementById('next-carousel');

    prevButton.addEventListener('click', () => {
        carouselInstance.prev();
    });

    nextButton.addEventListener('click', () => {
        carouselInstance.next();
    });
});

