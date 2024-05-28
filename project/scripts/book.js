document.getElementById("currentYear").innerHTML=`&copy; ${new Date().getFullYear()} - Site Plan - Ogunleye Johnson, Nigeria`;
document.getElementById("lastModified").textContent=`Last Modification: ${document.lastModified}`;


const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
});











