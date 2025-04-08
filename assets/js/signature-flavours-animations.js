document.addEventListener("DOMContentLoaded", function () {
    // Check if screen is mobile (using 767px as breakpoint)
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    
    // Only run GSAP if NOT mobile
    if (!isMobile) {
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
    } else {
        // Mobile fallback: Immediately show all elements
        gsap.set(["#uniqueImageContainer", ".signature-flavour-card"], {
            opacity: 1,
            y: 0
        });
    }
});