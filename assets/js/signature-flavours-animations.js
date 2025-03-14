document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Enhanced interactive animation for heading image
    gsap.from("#uniqueImageContainer", {
        opacity: 0,
        scale: 0.8,
        rotationX: -30,
        y: 80,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#uniqueImageContainer",
            start: "top 95%",
            toggleActions: "play none none reverse"
        }
    });

    // Animate the flavour cards sequentially
    gsap.from(".signature-flavour-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".signature-flavour-wrapper",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});
