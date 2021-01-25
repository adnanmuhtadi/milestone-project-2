//This will dynamically list the number of countries i want to create.
let topRated = 5;
for (let i = 1; i <= topRated; i++) {
    let mainContainer = document.querySelector(".main-container");

    //The subcontainer is the ID for the counties for the drop down.
    let subContainer = document.createElement("div");
    subContainer.id = "country-container" + i;
    subContainer.className = "countryList";

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

    //Appends the elements above to the parent element which is definded.
    mainContainer.appendChild(subContainer);
    subContainer.appendChild(cTitle);
    subContainer.appendChild(cDescription);
    subContainer.appendChild(topRatedCon);
}

//A contructor function that defines the title and decription of the countries.
function countryInfo(title, description) {
    this.title = title;
    this.description = description;
}

//Creating the constructor object with a string that is linked to the HTML.
//The introduction was taken from https://www.lonelyplanet.com/lebanon/beirut as it explains Beirut in a couple of lines.
let lebanon = new countryInfo("Lebanon", "If you’re looking for the real East-meets-West so talked about in the Middle East, you need look no further than Beirut. Fast-paced, fashion-conscious and overwhelmingly friendly, it's not a relaxing city to spend time in – it's too crowded, polluted and chaotic for that – but its energy, soul, diversity and intoxicating atmosphere make it a vital, addictive city.");

//The introduction was taken from https://www.lonelyplanet.com/united-arab-emirates/dubai as it explains introduces the country.
let dubai = new countryInfo("Dubai", "Dubai is a stirring alchemy of profound traditions and ambitious futuristic vision wrapped into starkly evocative desert splendour.");

//The introduction was taken from https://www.lonelyplanet.com/turkey/istanbul as it explains introduces the turkey.
let turkey = new countryInfo("Turkey", "This magical meeting place of East and West has more top-drawer attractions than it has minarets (and that's a lot).");

//The introduction was taken from https://www.lonelyplanet.com/egypt/cairo as it explains Cairo
let egypt = new countryInfo("Egypt", "Cairo is chaos at its most magnificent, infuriating and beautiful. From above, the distorted roar of the muezzins' call to prayer echoes out from duelling minarets. Below, car horns bellow tuneless symphonies amid avenues of faded 19th-century grandeur while donkey carts rattle down dusty lanes lined with colossal Fatimid and Mamluk monuments.");

//The introduction was taken from https://www.lonelyplanet.com/jordan/amman as it explains Jordan
let jordan = new countryInfo("Jordan", "As Middle Eastern cities go, Amman is a relative youth, being mostly a creation of the 20th century. But though it lacks the storied history and thrilling architectural tapestry of other regional capitals, there’s plenty here to encourage you to linger awhile before making for Petra, the Dead Sea or Wadi Rum. In fact, Amman is one of the easiest cities in which to enjoy the Middle East experience.");
