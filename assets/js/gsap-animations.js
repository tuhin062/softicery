document.addEventListener("DOMContentLoaded", function () {
  // Check if screen is mobile (using 767px as breakpoint)
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  
  // Only run GSAP if NOT mobile
  if (!isMobile) {
      gsap.registerPlugin(ScrollTrigger);

      // 🍦 Flavour Showcase Title Image Animation
      gsap.from(".custom-image-container img", {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
              trigger: ".custom-image-container",
              start: "top 80%",
              end: "top 50%",
              scrub: false,
          },
      });

      // 🎥 Video Container Animation
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
          x: 50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
              trigger: ".custom-image-container-testimonial",
              start: "top 85%",
              end: "top 55%",
              scrub: false,
          },
      });

      // 📝 Testimonial Content Animation
      gsap.from(".testimonial", {
          opacity: 0,
          y: 30,
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

      // 👤 Testimonial Images Animation
      gsap.from(".slider-img img", {
          opacity: 0,
          x: -50,
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
          y: 20,
          duration: 3,
          ease: "power1.inOut",
          scrollTrigger: {
              trigger: ".testimonial-section + svg",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
          },
      });
  } else {
      // Mobile fallback: Immediately show all animated elements
      gsap.set([
          ".custom-image-container img",
          ".flavour-video-container",
          ".flavour-gradient-background",
          ".custom-image-container-testimonial img",
          ".testimonial",
          ".slider-img img"
      ], {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotateY: 0,
          skewX: 0
      });
  }
});