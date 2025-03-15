// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
  
    // 🌊 Bottom SVG Wave Animation (Subtle Movement)
    gsap.to(".signature-svg-bottom path", {
      y: 5, // Moves slightly up/down for a smooth effect
      duration: 3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".signature-svg-bottom",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  
    // 🍦 Flavour Showcase Title Image Animation
    gsap.from(".custom-image-container img", {
      opacity: 0,
      y: 50, // Slides up smoothly
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".custom-image-container",
        start: "top 80%",
        end: "top 50%",
        scrub: false,
      },
    });
  
    gsap.from(".flavour-video-container", {
        opacity: 0, 
        scale: 0.85,  
        x: "-12vw",  
        rotateY: -12, 
        skewX: 3,    
        duration: 1.8,
        ease: "expo.out",
        scrollTrigger: {
            trigger: ".flavour-video-container",
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse"
        }
    });
    
  
    // 🎨 Gradient Background Animation
    gsap.from(".flavour-gradient-background", {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".flavour-gradient-background",
        start: "top 90%",
        end: "top 60%",
        scrub: false,
      },
    });
  
    // 🏆 Testimonial Title Animation
    gsap.from(".custom-image-container-testimonial img", {
      opacity: 0,
      x: 50, // Slides from the right
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".custom-image-container-testimonial",
        start: "top 85%",
        end: "top 55%",
        scrub: false,
      },
    });
  
    // 📝 Testimonial Content Animation (Staggered Effect)
    gsap.from(".testimonial", {
      opacity: 0,
      y: 30, // Moves slightly up
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.2, // Each testimonial enters with a small delay
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top 80%",
        end: "top 50%",
        scrub: false,
      },
    });
  
    // 👤 Testimonial Images (Opposite Direction Effect)
    gsap.from(".slider-img img", {
      opacity: 0,
      x: -50, // Moves from the left
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top 80%",
        end: "top 50%",
        scrub: false,
      },
    });
  
    // 🌊 Top SVG Wave Animation
    gsap.to(".testimonial-section + svg path", {
      y: 20, // Moves slightly down for smooth transition
      duration: 3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".testimonial-section + svg",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
  