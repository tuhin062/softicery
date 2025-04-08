document.addEventListener("DOMContentLoaded", function () {
    // Check if screen is mobile (adjust breakpoint as needed)
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
  
    // Only run GSAP if NOT mobile
    if (!isMobile) {
      // Animation 1
      gsap.from(".custom-image-container-choose-us img", {
        opacity: 0,
        scale: 0.85,
        y: -50,
        rotateX: -10,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".custom-image-container-choose-us",
          start: "top 100%",
          toggleActions: "play none none reverse"
        }
      });
  
      // Animation 2
      gsap.from(".carousel-container", {
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".carousel-container",
          start: "top 95%",
          toggleActions: "play none none reverse"
        }
      });
    }
  });