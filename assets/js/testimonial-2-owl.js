$(document).ready(function () {
    $("#testimonial-carousel").owlCarousel({
        loop: true,
        margin: 5,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1024: { items: 6 },
            1500: { items: 7 }
        }
    });

    // Initializing Fancybox for Gallery
    Fancybox.bind("[data-fancybox='gallery']", {
        Thumbs: false, // Disable thumbnails
        Toolbar: true, // Show toolbar
        zoom: true // Enable zoom on images
    });
});
