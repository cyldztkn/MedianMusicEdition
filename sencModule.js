// Airtable API URLs and token
const URLs = {
  dizi: "https://api.airtable.com/v0/appgrquFZqUAefhYP/tblSK4POZp4QKPMAX?view=sort",
  film: "https://api.airtable.com/v0/appgrquFZqUAefhYP/tbl6TBl0E8y2oYrBe?view=sort",
  reklam: "https://api.airtable.com/v0/appgrquFZqUAefhYP/tblQqYffWaUu1n537?view=sort",
  lastJobs: "https://api.airtable.com/v0/appgrquFZqUAefhYP/tbl7ELsFSPOxT2pEk?view=sort"
};

const token = "patkiUsl9AxawWBBO.00dde5170120efe1997d407bb1051b50622fe00e97f4ab412ac4ad42dbd1a8dc";

// Lists to hold fetched video IDs
const diziList = [];
const filmList = [];
const reklamList = [];
const sonIslerList = [];

// Generic function to fetch data from Airtable
const fetchData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data.records.map((item) => {
      const videoLink = item.fields.VideoLink;
      return extractVideoID(videoLink);
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

// Function to extract video ID from URL
const extractVideoID = (url) => {
  try {
    return url.split("/")[3].split('?')[1].split('&')[0].split('=')[1];
  } catch (error) {
    console.error("Error extracting video ID: ", error);
    return null;
  }
};

// Function to update the DOM with video data
const updateDOM = () => {
  const diziEl = document.getElementById("dizi");
  const filmEl = document.getElementById("film");
  const reklamEl = document.getElementById("reklam");
  const lastJobs = document.getElementById('last-jobs');

  lastJobs.innerHTML = sonIslerList
  .map((item) => {
    return `<div class="video-container" data-video-id="${item}">
                <div class="video-placeholder" style="background-image: url('https://img.youtube.com/vi/${item}/hqdefault.jpg');">
                  <button class="play-button">
                    <img src="./images/play-icon.svg" alt="" srcset="" />
                  </button>
                </div>
              </div>`;
  })
  .join("");

  diziEl.innerHTML = diziList
    .map((item) => {
      return `<div class="video-container" data-video-id="${item}">
                  <div class="video-placeholder" style="background-image: url('https://img.youtube.com/vi/${item}/hqdefault.jpg');">
                    <button class="play-button">
                      <img src="./images/play-icon.svg" alt="" srcset="" />
                    </button>
                  </div>
                </div>`;
    })
    .join("");

  filmEl.innerHTML = filmList
    .map((item) => {
      return `<div class="video-container" data-video-id="${item}">
                  <div class="video-placeholder" style="background-image: url('https://img.youtube.com/vi/${item}/hqdefault.jpg');">
                    <button class="play-button">
                      <img src="./images/play-icon.svg" alt="" srcset="" />
                    </button>
                  </div>
                </div>`;
    })
    .join("");

  reklamEl.innerHTML = reklamList
    .map((item) => {
      return `<div class="video-container" data-video-id="${item}">
                  <div class="video-placeholder" style="background-image: url('https://img.youtube.com/vi/${item}/hqdefault.jpg');">
                    <button class="play-button">
                      <img src="./images/play-icon.svg" alt="" srcset="" />
                    </button>
                  </div>
                </div>`;
    })
    .join("");

  addEventListeners(); // Add event listeners after updating the DOM
};

// Function to add event listeners to video placeholders
const addEventListeners = () => {
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
};

// Fetch and log data for each category
const fetchAndLogData = async () => {
  diziList.push(...await fetchData(URLs.dizi));
  filmList.push(...await fetchData(URLs.film));
  reklamList.push(...await fetchData(URLs.reklam));
  sonIslerList.push(...await fetchData(URLs.lastJobs));

  console.log("Dizi List: ", diziList);
  console.log("Film List: ", filmList);
  console.log("Reklam List: ", reklamList);

  updateDOM(); // Update the DOM after fetching data
};

// Run the main function
fetchAndLogData();
