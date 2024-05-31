document.getElementById("currentYear").innerHTML=`&copy; ${new Date().getFullYear()} - Archiver - Ogunleye Johnson, Nigeria`;
document.getElementById("lastModified").textContent=`Last Modification: ${document.lastModified}`;


const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");

// hamburgerMenu.addEventListener("click", () => {
//     nav.classList.toggle("active")
// });



const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    
   
  ];
  


  function templeGallery(){
    document.querySelector(".gallery").innerHTML=""
    temples.forEach(item =>{
      let card=document.createElement("section")
      let name=document.createElement("h3")
      let location=document.createElement("p")
      let dedication=document.createElement("p")
      let area=document.createElement("p")
      let img=document.createElement("img")


      name.textContent=item.templeName
      location.innerHTML=`<span class="label">Location:</span> ${item.location}`
      dedication.innerHTML=`<span class="label">Since:</span> ${item.dedicated}`
      area.innerHTML=`<span class="label">Numbers of file:</span> ${item.area}`

      img.setAttribute("src",item.imageUrl)
      img.setAttribute("alt",`${item.templeName} Temple`)
      img.setAttribute("loading","lazy")

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);

      document.querySelector(".gallery").appendChild(card);


    });
  }

  



  ///----------FAQs-----------

  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }



templeGallery()




