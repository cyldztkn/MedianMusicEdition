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
const url = "https://api.airtable.com/v0/appgrquFZqUAefhYP/tblkfcppnyz5pHLW4?view=red";
const token = "patkiUsl9AxawWBBO.00dde5170120efe1997d407bb1051b50622fe00e97f4ab412ac4ad42dbd1a8dc";

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

const groupByInitialLetter = (artists) => {
  return artists.reduce((acc, artist) => {
    const initial = artist.singerName[0].toUpperCase();
    if (!acc[initial]) {
      acc[initial] = [];
    }
    acc[initial].push(artist);
    return acc;
  }, {});
};

const renderArtists = (artistsByLetter) => {
  const contentElement = document.querySelector('.content');
  const alphabetNav = document.getElementById('alphabet');
  
  contentElement.innerHTML = ''; // Clear existing content
  alphabetNav.innerHTML = ''; // Clear existing navigation

  Object.keys(artistsByLetter).sort().forEach((letter) => {
    const section = document.createElement('section');
    section.id = letter.toLowerCase();
    
    const h3 = document.createElement('h3');
    h3.textContent = letter;
    section.appendChild(h3);
    
    const ul = document.createElement('ul');
    artistsByLetter[letter].forEach((artist) => {
      const li = document.createElement('li');
      li.className = artist.type.toLowerCase(); // Add type as class to li
      const h6 = document.createElement('h6');
      h6.textContent = artist.singerName;
      li.appendChild(h6);
      ul.appendChild(li);
    });
    section.appendChild(ul);
    contentElement.appendChild(section);
    
    // Create navigation link
    const navLink = document.createElement('a');
    navLink.href = `#${letter.toLowerCase()}`;
    navLink.textContent = letter;
    alphabetNav.appendChild(navLink);
  });
};

const fetchAndDisplayArtists = async () => {
  const artists = await fetchData(url);
  const artistsByLetter = groupByInitialLetter(artists);
  renderArtists(artistsByLetter);
};

fetchAndDisplayArtists();
