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

const url =
  "https://api.airtable.com/v0/appgrquFZqUAefhYP/tblVstHao8udHTwzi?view=master";
const token =
  "patkiUsl9AxawWBBO.00dde5170120efe1997d407bb1051b50622fe00e97f4ab412ac4ad42dbd1a8dc";
const partners = [];

const fetchData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data.records.map((item) => item.fields);
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

const renderPartners = (partners) => {
  const contentElement = document.querySelector(".content");
  contentElement.innerHTML = ""; // Clear existing content

  contentElement.innerHTML = partners.map((item) => {
    return `<a href="${item.link}" target="_blank">
              <img src="${item.logo[0].url}" alt="${item.isim} company logo" />
            </a>`;
  }).join("");
};

const fetchAndDisplayData = async () => {
  partners.push(...(await fetchData(url)));
  renderPartners(partners);
};

fetchAndDisplayData();
