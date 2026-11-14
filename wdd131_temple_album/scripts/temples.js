// Responsive navigation and dynamic footer information.
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-navigation");
const menuIcon = document.querySelector(".menu-icon");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  menuIcon.textContent = isOpen ? "✕" : "☰";
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
