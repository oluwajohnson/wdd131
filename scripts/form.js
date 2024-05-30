
document.getElementById("currentYear").innerHTML=`&copy; ${new Date().getFullYear()} - Product Review - Ogunleye Johnson, Nigeria`;
document.getElementById("lastModified").textContent=`Last Modification: ${document.lastModified}`;




const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];


// Function to populate the select element
function populateSelect(selectId, options) {
    const selectElement = document.getElementById(selectId);
    
    // Create and add the placeholder option
    const placeholderOption = document.createElement('option');
    placeholderOption.textContent = 'Select a Product ...';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    placeholderOption.value = ''; // Optional: set an empty value
    selectElement.appendChild(placeholderOption);

    // Loop through the options object and add each option to the select element
    for (const key in options) {
        if (options.hasOwnProperty(key)) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = options[key].name;
            selectElement.appendChild(option);
        }
    }
}
// Populate the select element with the provided options
populateSelect('selectItem', products);