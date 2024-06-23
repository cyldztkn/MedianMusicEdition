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