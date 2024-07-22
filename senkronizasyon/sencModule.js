import diziListesi from "./videoList";
// console.log(list)
let diziEl = document.getElementById("dizi");

diziEl.innerHTML = diziListesi.map((item) => {
  return `<div class="video-container" data-video-id="${item}">
                    <div class="video-placeholder" style="background-image: url('https://img.youtube.com/vi/${item}/hqdefault.jpg');">
                      <button class="play-button">
                        <img src="./images/play-icon.svg" alt="" srcset="" />
                      </button>
                    </div>
                  </div>`;
}).join('');