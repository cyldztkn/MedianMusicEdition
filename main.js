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
