// Mobile Menu Controller
// html elememans
const mainNavContainerEl = document.getElementById("main-nav-container");
const openButtonEl = document.getElementById("open-button");
const closeButtonEl = document.getElementById("close-button");
// functions
const menuOpener = () => {
  mainNavContainerEl.classList.remove("close");
  mainNavContainerEl.classList.add("open");
};
const menuCloser = () => {
  mainNavContainerEl.classList.remove("open");
  mainNavContainerEl.classList.add("close");
};
// listeners
openButtonEl.addEventListener("click", menuOpener);
closeButtonEl.addEventListener("click", menuCloser);

// infinty Slide
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".infinity-carousel");
  const totalSlides = 5;
  const imagesPerSlide = 9;
  const totalImages = 45;
  let currentIndex = 0;

  // Generate slides
  for (let i = 0; i < totalSlides; i++) {
    const slide = document.createElement("div");
    slide.classList.add("infinity-slide");

    for (let j = 0; j < imagesPerSlide; j++) {
      const img = document.createElement("img");
      const imgIndex = ((i * imagesPerSlide + j) % totalImages) + 1;
      img.src = `../images/logos/${imgIndex.toString().padStart(2, "0")}.png`;
      slide.appendChild(img);
    }

    carousel.appendChild(slide);
  }

  // Clone slides for infinite effect
  const firstSlide = carousel.firstElementChild.cloneNode(true);
  const lastSlide = carousel.lastElementChild.cloneNode(true);
  carousel.appendChild(firstSlide);
  carousel.insertBefore(lastSlide, carousel.firstElementChild);

  const updateCarousel = () => {
    currentIndex++;
    carousel.style.transition = "transform 0.8s ease";
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    if (currentIndex === totalSlides + 1) {
      setTimeout(() => {
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(-100%)`;
        currentIndex = 1;
      }, 500);
    }
  };

  // Initial positioning
  carousel.style.transform = `translateX(-100%)`;

  setInterval(updateCarousel, 2500);
});
