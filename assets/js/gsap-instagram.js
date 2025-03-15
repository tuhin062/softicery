gsap.registerPlugin(ScrollTrigger);

let tlInstagram = gsap.timeline({
    scrollTrigger: {
        trigger: ".instagram-showcase",
        start: "top 80%",  // Animation starts earlier for better visibility
        scrub: 1,          
    }
});

// **Left Side (Heading, Image, Text)**
tlInstagram.from(".instagram-showcase-left h3", {
    opacity: 0,
    x: -60,  // Comes from the left
    duration: 0.8,
    ease: "power3.out"
}).from(".instagram-hashtag-image", {
    opacity: 0,
    scale: 0.85,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.5").from(".instagram-showcase-left p", {
    opacity: 0,
    y: 40,  // Comes from below
    duration: 0.8,
    ease: "power3.out"
}, "-=0.4");

// **Right Side Image Slider (Stronger Entrance)**
tlInstagram.from(".instagram-showcase-slider", {
    opacity: 0,
    x: 80,  // Comes from the right
    scale: 0.95,
    duration: 0.9,
    ease: "power3.out"
}, "-=0.7");

