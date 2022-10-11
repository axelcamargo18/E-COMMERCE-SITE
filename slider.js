// init index and main show slide function //

let slideIndex = 1;
initSlides(slideIndex);

// controls the flow of the slideshow by adding and subtracting current index of slide //
function nextSlides(n) {
  initSlides((slideIndex += n));
}

// main function to control the slides //
function initSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-image");
  // add attribute autoplay //

  if (i == 1) {
    document.getElementById("myVideo").autoplay;
  }
  // used to control current slide index //
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }
  // going through setting all slides to display to none //
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // looking for current index and setting it to display block //
  slides[slideIndex - 1].style.display = "block";
}
