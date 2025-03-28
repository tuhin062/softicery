document.querySelectorAll('.nav-512834 a').forEach(link => {
    link.addEventListener('click', function (event) {
        setTimeout(() => {
            gsap.delayedCall(0.3, () => ScrollTrigger.refresh()); 
        }, 500);
    });
});







// Ensure GSAP & ScrollTrigger are loaded first
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // **Heading Image Animation (Left Side)**
    gsap.from(".left-banner-image", {
        x: -100, // Slide in from the left
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3
    });

    // **Model Image Animation (Right Side)**
    gsap.from(".right-banner-image", {
        x: 100, // Slide in from the right
        opacity: 0,
        duration: 0.3,
        ease: "power3.out",
        delay: 0.5
    });

    // **Decorative Elements Animations**
    gsap.from(".decor-1", {
        scale: 0.6, // Starts smaller
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.7
    });

    gsap.from(".decor-2", {
        scale: 0.6, // Starts smaller
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 1
    });

    // **White Curve Background Animation**
    gsap.from(".banner-image", {
        y: -50, // Slight vertical movement
        opacity: 0,
        duration: 1.8,
        ease: "power2.out",
        delay: 0.2
    });

    // **Floating Effect for Decorative Elements**
    gsap.to(".decor-1", {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut"
    });

    gsap.to(".decor-2", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut"
    });

    // **Continuous Rotation Effect for Decor-2**
    gsap.to(".decor-2", {
        rotation: 360,
        duration: 75, // Slow rotation (increase for even slower effect)
        repeat: -1,
        ease: "linear"
    });
});

