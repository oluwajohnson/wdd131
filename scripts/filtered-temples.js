// Temple data used to build and filter the temple cards.
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-75244-main.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  }
];

const templeGrid = document.querySelector("#temple-grid");
const pageTitle = document.querySelector("#page-title");
const filterLinks = document.querySelectorAll(".navigation a[data-filter]");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-navigation");
const menuIcon = document.querySelector(".menu-icon");

// Format the source date string for a reader-friendly card display.
function formatDedicatedDate(dateString) {
  const dateParts = dateString.split(", ");
  const date = new Date(Number(dateParts[0]), new Date(`${dateParts[1]} 1, 2000`).getMonth(), Number(dateParts[2]));
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

// Create one accessible temple card using DOM methods and textContent.
function createTempleCard(temple) {
  const card = document.createElement("article");
  card.classList.add("temple-card");

  const heading = document.createElement("h2");
  heading.textContent = temple.templeName;

  const location = document.createElement("p");
  location.innerHTML = "<strong>Location:</strong> ";
  location.append(document.createTextNode(temple.location));

  const dedicated = document.createElement("p");
  dedicated.innerHTML = "<strong>Dedicated:</strong> ";
  dedicated.append(document.createTextNode(formatDedicatedDate(temple.dedicated)));

  const area = document.createElement("p");
  area.innerHTML = "<strong>Area:</strong> ";
  area.append(document.createTextNode(`${temple.area.toLocaleString("en-US")} sq ft`));

  const image = document.createElement("img");
  image.src = temple.imageUrl;
  image.alt = `${temple.templeName} temple`;
  image.loading = "lazy";
  image.width = 400;
  image.height = 250;

  card.append(heading, location, dedicated, area, image);
  return card;
}

// Display the selected collection of temples.
function displayTemples(templeList, headingText) {
  templeGrid.replaceChildren();
  pageTitle.textContent = headingText;

  if (templeList.length === 0) {
    const message = document.createElement("p");
    message.classList.add("empty-message");
    message.textContent = "No temples match this filter.";
    templeGrid.append(message);
    return;
  }

  templeList.forEach((temple) => {
    templeGrid.append(createTempleCard(temple));
  });
}

// Filter temples according to the selected navigation item.
function filterTemples(filter) {
  let filteredTemples = temples;
  let headingText = "Home";

  switch (filter) {
    case "old":
      filteredTemples = temples.filter((temple) => Number(temple.dedicated.split(",")[0]) < 1900);
      headingText = "Old Temples";
      break;
    case "new":
      filteredTemples = temples.filter((temple) => Number(temple.dedicated.split(",")[0]) > 2000);
      headingText = "New Temples";
      break;
    case "large":
      filteredTemples = temples.filter((temple) => temple.area > 90000);
      headingText = "Large Temples";
      break;
    case "small":
      filteredTemples = temples.filter((temple) => temple.area < 10000);
      headingText = "Small Temples";
      break;
    default:
      headingText = "Home";
  }

  displayTemples(filteredTemples, headingText);
}

// Respond to navigation filter selections.
filterLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedFilter = link.dataset.filter;
    filterTemples(selectedFilter);

    filterLinks.forEach((item) => {
      item.classList.remove("active");
      item.removeAttribute("aria-current");
    });
    link.classList.add("active");
    link.setAttribute("aria-current", "page");

    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuIcon.textContent = "☰";
  });
});

// Responsive hamburger menu.
menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  menuIcon.textContent = isOpen ? "✕" : "☰";
});

// Dynamic footer information.
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Show all temple cards when the page first loads.
displayTemples(temples, "Home");
