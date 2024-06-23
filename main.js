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

// Our Servides Slide
// Buttons
const telifButtonEl = document.getElementById("telif-button");
const lisansButtonEl = document.getElementById("lisans-button");
const senkButtonEl = document.getElementById("senk-button");
// Slides
const carouselAreaEl = document.getElementById("carousel-area");

// functions
const selectSlideOne = () => {
  // controll slide
  carouselAreaEl.classList.remove("select-two");
  carouselAreaEl.classList.remove("select-three");
  carouselAreaEl.classList.add("select-one");
  // Controll button
  telifButtonEl.classList.add("selected");
  lisansButtonEl.classList.remove("selected");
  senkButtonEl.classList.remove("selected");
};
const selectSlideTwo = () => {
  // controll slide
  carouselAreaEl.classList.remove("select-one");
  carouselAreaEl.classList.remove("select-three");
  carouselAreaEl.classList.add("select-two");
  // Controll button
  telifButtonEl.classList.remove("selected");
  lisansButtonEl.classList.add("selected");
  senkButtonEl.classList.remove("selected");
};
const selectSlideThree = () => {
  // controll slide
  carouselAreaEl.classList.remove("select-one");
  carouselAreaEl.classList.remove("select-two");
  carouselAreaEl.classList.add("select-three");
  // Controll button
  telifButtonEl.classList.remove("selected");
  lisansButtonEl.classList.remove("selected");
  senkButtonEl.classList.add("selected");
};

// Listeners
telifButtonEl.addEventListener("click", selectSlideOne);
lisansButtonEl.addEventListener("click", selectSlideTwo);
senkButtonEl.addEventListener("click", selectSlideThree);

// synchronization Slide
// Buttons
const diziButtonEl = document.getElementById("dizi-button");
const filmButtonEl = document.getElementById("film-button");
const reklamButtonEl = document.getElementById("reklam-button");

// Slider
const senkCarousel = document.getElementById("senk-carousel");

// Functions
const showDizi = () => {
  // Button
  filmButtonEl.classList.remove("selected");
  reklamButtonEl.classList.remove("selected");
  diziButtonEl.classList.add("selected");
  // slide
  senkCarousel.classList.remove("reklam");
  senkCarousel.classList.remove("film");
  senkCarousel.classList.add("dizi");
};
const showFilm = () => {
  // Button
  filmButtonEl.classList.add("selected");
  reklamButtonEl.classList.remove("selected");
  diziButtonEl.classList.remove("selected");
  // slide
  senkCarousel.classList.remove("reklam");
  senkCarousel.classList.add("film");
  senkCarousel.classList.remove("dizi");
};
const showReklam = () => {
  // Button
  filmButtonEl.classList.remove("selected");
  reklamButtonEl.classList.add("selected");
  diziButtonEl.classList.remove("selected");
  // slide
  senkCarousel.classList.add("reklam");
  senkCarousel.classList.remove("film");
  senkCarousel.classList.remove("dizi");
};

// Listeners
diziButtonEl.addEventListener("click", showDizi);
filmButtonEl.addEventListener("click", showFilm);
reklamButtonEl.addEventListener("click", showReklam);

// Video İframe Loader
document.addEventListener("DOMContentLoaded", function () {
  const videoContainers = document.querySelectorAll(".video-container");

  videoContainers.forEach((container) => {
    const placeholder = container.querySelector(".video-placeholder");
    const videoId = container.getAttribute("data-video-id");

    placeholder.addEventListener("click", function () {
      const iframe = document.createElement("iframe");
      iframe.setAttribute(
        "src",
        `https://www.youtube.com/embed/${videoId}?autoplay=1`
      );
      iframe.setAttribute("title", "YouTube video player");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      );
      iframe.setAttribute("allowfullscreen", "true");
      iframe.setAttribute("loading", "lazy");

      container.innerHTML = "";
      container.appendChild(iframe);
    });
  });
});

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
      img.src = `./images/logos/${imgIndex.toString().padStart(2, '0')}.png`;
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
