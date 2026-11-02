// Dynamically display the current year and the document's last-modified date.
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;
document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;
