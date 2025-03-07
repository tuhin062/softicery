document.addEventListener("DOMContentLoaded", function() {
    const next = document.querySelector(".next");
    const prev = document.querySelector(".previous");
    const slides = document.querySelectorAll(".slide");
  
    let index = 0;
    display(index);
  
    function display(index) {
      slides.forEach(slide => {
        slide.classList.remove("active");
        slide.style.display = "none";
      });
      slides[index].classList.add("active");
      slides[index].style.display = "flex";
    }
  
    function nextSlide() {
      index++;
      if (index > slides.length - 1) {
        index = 0;
      }
      display(index);
    }
  
    function prevSlide() {
      index--;
      if (index < 0) {
        index = slides.length - 1;
      }
      display(index);
    }
  
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);
  
    // Optional: Auto-play functionality
    setInterval(nextSlide, 5000);
  });
  