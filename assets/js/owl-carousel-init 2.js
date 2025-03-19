$(document).ready(function () {
    $(".carousel-container").owlCarousel({ // <--- Use a unique class here
        loop: true,
        margin: 5,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 5 }
        }
    });
});
