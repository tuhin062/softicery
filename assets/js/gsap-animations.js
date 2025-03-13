gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".flavour-showcase-section",
        start: "top 80%",  
        end: "bottom 20%", 
        scrub: 1.5, 
    }
});

// Background Image Animation
tl.from(".custom-image-container", {
    opacity: 0,
    scale: 0.85,
    y: -50,
    duration: 1.2,
    ease: "power3.out"
});

// **Jaw-Dropping Video Animation (Fixed)**
tl.from(".flavour-video-container", {
    opacity: 0, 
    scale: 0.85,  
    x: "-12vw",  
    rotateY: -12, 
    skewX: 3,    
    duration: 1.8,
    ease: "expo.out"
}, "-=0.7");

// Gradient Background Smooth Reveal
tl.from(".flavour-gradient-background", {
    height: "0%",
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
}, "-=0.7");

// Custom Testimonial Image
tl.from(".custom-image-container-testimonial img", {
    opacity: 0,
    x: -100,
    rotateZ: -4, 
    duration: 1.6,
    ease: "power3.out"
}, "-=1.0");


gsap.utils.toArray(".slide").forEach((slide, i) => {
    gsap.from(slide, {
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,  // Slightly reduced movement for smoother entry
        scale: 0.97,  // Subtle scale effect for depth
        duration: 1.0,  // Faster entry animation
        ease: "power2.out",  // Balanced easing for a professional feel
        scrollTrigger: {
            trigger: slide,
            start: "top 98%",  // Earlier trigger point
            end: "top 80%",   // Ends animation in a shorter range
            scrub: false,  // Instant animation instead of smooth scroll syncing
            toggleActions: "play none none reverse"
        }
    });
});
