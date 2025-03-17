document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // **Instagram Left Content Animation - Staggered & Rotational Entry**
    gsap.from(".instagram-showcase-left", {
        opacity: 0,
        x: -60, // More pronounced slide-in from left
        rotateZ: -5, // Slight tilt for a dynamic feel
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".instagram-showcase-left",
            start: "top 85%",
            scrub: 1
        }
    });

    // **Instagram Image Slider Animation - 3D Effect & Smooth Scaling**
    gsap.from(".instagram-showcase-slider", {
        opacity: 0,
        x: 60, // More pronounced slide-in from right
        scale: 0.8, // Starts smaller and scales up
        rotateZ: 5, // Slight counter tilt
        duration: 1.8,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".instagram-showcase-slider",
            start: "top 90%",
            scrub: 1
        }
    });

    // **Enhanced Staggering Effect for a Luxurious Feel**
    gsap.from(".instagram-showcase-left h3, .instagram-showcase-left img, .instagram-showcase-left p", {
        opacity: 0,
        y: 30, // Elements rise up smoothly
        duration: 1.2,
        stagger: 0.2, // Each element enters with a slight delay
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".instagram-showcase-left",
            start: "top 92%",
            scrub: 1
        }
    });
});

