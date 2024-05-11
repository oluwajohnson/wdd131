/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    return(
        document.write(new Date(document.lastModified))

    )
  }


function myFunction1() {
    return(
        document.write(new Date().getFullYear())

    )
  }

  var icon = document.querySelector('#icon');
var tmp = document.createElement("span");
tmp.innerHTML = '&#x86;';
icon.setAttribute('data-icon', tmp.innerText);