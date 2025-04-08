document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Detect mobile devices (you can also use CSS media queries in JS)
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    // Enhanced interactive animation for heading image
    gsap.from("#uniqueImageContainer", {
        opacity: 0,
        scale: 0.8,
        rotationX: isMobile ? 0 : -30, // Simpler animation on mobile
        y: isMobile ? 40 : 80, // Smaller movement on mobile
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#uniqueImageContainer",
            start: isMobile ? "top 85%" : "top 95%", // Earlier trigger on mobile
            end: isMobile ? "+=200" : "+=300", // Shorter scroll distance on mobile
            toggleActions: "play none none reverse",
            markers: false // Set to true for debugging, then false for production
        }
    });

    // Animate the flavour cards sequentially
    gsap.from(".signature-flavour-card", {
        opacity: 0,
        y: isMobile ? 30 : 50, // Smaller movement on mobile
        duration: 1,
        stagger: isMobile ? 0.2 : 0.3, // Faster stagger on mobile
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".signature-flavour-wrapper",
            start: isMobile ? "top 75%" : "top 80%", // Earlier trigger on mobile
            end: isMobile ? "+=300" : "+=400", // Shorter scroll distance
            toggleActions: "play none none reverse",
            markers: false // For debugging
        }
    });

    // Mobile-specific fixes
    if (isMobile) {
        // Refresh ScrollTrigger on mobile orientation changes
        window.addEventListener("orientationchange", () => ScrollTrigger.refresh());
        
        // Add a small delay before refreshing to account for orientation change
        window.addEventListener("resize", () => {
            setTimeout(ScrollTrigger.refresh, 500);
        });
    }
});