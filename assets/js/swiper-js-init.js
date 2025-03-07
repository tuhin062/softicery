$(document).ready(function () {
    var reviewsCarousel = $(".reviews-carousel");
    var imageCarousel = $(".image-carousel");
    var flag = false;
    var duration = 600;
  
    reviewsCarousel.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: duration,
      dots: true,
      nav: false
    }).on('changed.owl.carousel', function (e) {
      if (!flag) {
        flag = true;
        var index = e.item.index;
        // Sync image carousel to the same index
        imageCarousel.trigger('to.owl.carousel', [index, duration, true]);
        flag = false;
      }
    });
  
    imageCarousel.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: duration,
      dots: false,
      nav: false
    }).on('changed.owl.carousel', function (e) {
      if (!flag) {
        flag = true;
        var index = e.item.index;
        // Sync reviews carousel to the same index
        reviewsCarousel.trigger('to.owl.carousel', [index, duration, true]);
        flag = false;
      }
    });
  });
  