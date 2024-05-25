
let d= new Date();
document.getElementById("currentYear").innerHTML=`&copy; ${d.getFullYear()} - Ogunleye Johnson, Nigeria`;
document.getElementById("lastModified").textContent=`Last Modification: ${document.lastModified}`;





function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


 