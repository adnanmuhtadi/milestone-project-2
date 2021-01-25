//This will dynamically list the number of countries i want to create.
let topRated = 5;
for (let i = 1; i <= topRated; i++) {
    let mainContainer = document.querySelector(".main-container");

    //The subcontainer is the ID for the counties for the drop down.
    let subContainer = document.createElement("div");
    subContainer.id = "country-container" + i;
    subContainer.className="countryList";

    //This defines the h1 element with the title to dynamically change.
    let cTitle = document.createElement("h1");
    cTitle.innerHTML = '<h1 class="country-title" id="cTitle' + i + '"></h1>';

    //This defines the div elemenet with the description to dynamically change.
    let cDescription = document.createElement("div");
    cDescription.innerHTML = '<div class="country-description" id="cDescription' + i + '"></div>';
