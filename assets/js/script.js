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

    //Within this div element, inside the div element is all the html which would construct my content.
    let topRatedCon = document.createElement("div");
    topRatedCon.innerHTML = `<div class="row top-rated-container">
<div class="col-6 left-col">
<h2 id="top-places">Top Rated Places</h2>
<div class="row top-rated-places" id="top-rated-place1-${i}">
<img id="place-img1-${i}" src="" class="col-4 place-image">
<div class="col-8 place-info">
<h4 id="place-name1-${i}"></h4>
<p id="place-desc1-${i}"></p>
<a href="" id="place-more1-${i}" class="more-link" target="_blank">Learn More!</a>
</div>
</div>
<div class="row top-rated-places" id="top-rated-place2-${i}">
<img id="place-img2-${i}" src="" class="col-4 place-image">
<div class="col-8 place-info">
<h4 id="place-name2-${i}"></h4>
<p id="place-desc2-${i}"></p>
<a href="" id="place-more2-${i}" class="more-link" target="_blank">Learn More!</a>
</div>
</div>
<div class="row top-rated-places" id="top-rated-place3-${i}">
<img id="place-img3-${i}" src="" class="col-4 place-image">
<div class="col-8 place-info">
<h4 id="place-name3-${i}"></h4>
<p id="place-desc3-${i}"></p>
<a href="" id="place-more3-${i}" class="more-link" target="_blank">Learn More!</a>
</div>
</div>
</div>
<div class="col-6 right-col">
<h2 id="top-food">Top Rated Cuisines</h2>
<div class="row top-rated-foods" id="top-rated-food1-${i}">
<img id="food-img1-${i}" src="" class="col-4 food-image">
<div class="col-8 food-info">
<h4 id="food-name1-${i}"></h4>
<p id="food-desc1-${i}"></p>
<a href="" id="food-more1-${i}" class="more-link" target="_blank">Learn More!</a>
</div>
</div>
<div class="row top-rated-foods" id="top-rated-food2-${i}">
<img id="food-img2-${i}" src="" class="col-4 food-image" >
<div class="col-8 food-info">
<h4 id="food-name2-${i}"></h4>
<p id="food-desc2-${i}"></p>
<a href="" id="food-more2-${i}" class="more-link" target="_blank">Learn More!</a>
</div>
</div>
<div class="row top-rated-foods" id="top-rated-food3-${i}">
<img id="food-img3-${i}" src="" class="col-4 food-image" >
<div class="col-8 food-info">
<h4 id="food-name3-${i}"></h4>
<p id="food-desc3-${i}"></p>
<a href="" id="food-more3-${i}" class="more-link" target="_blank">Learn More!</a>
</div>
</div>
</div>
</div>`;

