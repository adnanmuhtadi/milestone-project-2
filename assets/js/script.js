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


//Gets the elements by their ID and adding the constructor information to the HTML, with a string and the constructor object.
document.getElementById("cTitle1").innerHTML = "Explore " + lebanon.title;
document.getElementById("cDescription1").innerHTML = lebanon.description;

document.getElementById("cTitle2").innerHTML = "Explore " + dubai.title;
document.getElementById("cDescription2").innerHTML = dubai.description;

document.getElementById("cTitle3").innerHTML = "Explore " + turkey.title;
document.getElementById("cDescription3").innerHTML = turkey.description;

document.getElementById("cTitle4").innerHTML = "Explore " + egypt.title;
document.getElementById("cDescription4").innerHTML = egypt.description;

document.getElementById("cTitle5").innerHTML = "Explore " + jordan.title;
document.getElementById("cDescription5").innerHTML = jordan.description;

//A contructor function that defines the the image that will be used, the Name of the place, the description of the place and a place holder for the URL
function placeInfo(placeImage, placeName, placeDescription, placeURL) {
    this.placeImage = placeImage;
    this.placeName = placeName;
    this.placeDescription = placeDescription;
    this.placeURL = placeURL;
}

//Creating the constructor object with a string that is linked to the HTML
//The description of the location and image (screenshot), was taken from https://www.lonelyplanet.com/lebanon/beirut/attractions/national-museum-of-beirut/a/poi-sig/418869/361093
let lebanonPlace1 = new placeInfo("assets/img/places/lebanon-img1.jpg", "National Museum of Beirut", "Beirut's major cultural institution. Its impressive, magnificently displayed collection of Lebanon’s history and the civilisations.", "https://www.lonelyplanet.com/lebanon/beirut/attractions/national-museum-of-beirut/a/poi-sig/418869/361093");
//The description of the location and image was taken from https://www.lonelyplanet.com/lebanon/beirut/attractions/maronite-cathedral-of-st-george/a/poi-sig/418885/361093
let lebanonPlace2 = new placeInfo("assets/img/places/lebanon-img2.jpg", "Maronite Cathedral of St George", "It's the seat of the city's Maronite archdiocese.", "https://www.lonelyplanet.com/lebanon/beirut/attractions/maronite-cathedral-of-st-george/a/poi-sig/418885/361093");
//The description of the location and image was taken from https://www.lonelyplanet.com/lebanon/beirut/attractions/pigeon-rocks/a/poi-sig/1574639/361093
let lebanonPlace3 = new placeInfo("assets/img/places/lebanon-img3.jpg", "Pigeon Rocks in Raouche", "These limestone outcrops are a prime selfie terriroty and a Beirut landmark.", "https://www.lonelyplanet.com/lebanon/beirut/attractions/pigeon-rocks/a/poi-sig/1574639/361093");

//The description of the location and image was taken from https://www.lonelyplanet.com/united-arab-emirates/dubai/attractions/burj-al-arab/a/poi-sig/1146398/361166
let dubaiPlace1 = new placeInfo("assets/img/places/dubai-img1.jpg", "Burj Al Arab", "The Burj is to to Dubai what the Eiffel Tower is to Paris.", "https://www.lonelyplanet.com/united-arab-emirates/dubai/attractions/burj-al-arab/a/poi-sig/1146398/361166");
//The description of the location and image was taken from https://www.lonelyplanet.com/united-arab-emirates/dubai/attractions/img-worlds-of-adventure/a/poi-sig/1558762/361166
let dubaiPlace2 = new placeInfo("assets/img/places/dubai-img2.jpg", "IMG Worlds of Adventure", "The world’s largest indoor theme park.", "https://www.lonelyplanet.com/united-arab-emirates/dubai/attractions/img-worlds-of-adventure/a/poi-sig/1558762/361166");
//The description of the location and image was taken from https://www.lonelyplanet.com/united-arab-emirates/dubai/attractions/gold-souq/a/poi-sig/397285/361166
let dubaiPlace3 = new placeInfo("assets/img/places/dubai-img3.jpg", "Gold Souq", "From delicate pearl earrings to lavish golden wedding necklaces.", "https://www.lonelyplanet.com/united-arab-emirates/dubai/attractions/gold-souq/a/poi-sig/397285/361166");

//The description of the location and image was taken from https://www.lonelyplanet.com/turkey/istanbul/attractions/topkapi-palace/a/poi-sig/402212/360887
let turkeyPlace1 = new placeInfo("assets/img/places/turkey-img1.jpg", "Topkapı Palace", "Topkapı is the subject of more colourful stories than most of the world's museums put together.", "https://www.lonelyplanet.com/turkey/istanbul/attractions/topkapi-palace/a/poi-sig/402212/360887");
//The description of the location and image was taken from https://www.lonelyplanet.com/turkey/istanbul/attractions/suleymaniye-mosque/a/poi-sig/401910/360887
let turkeyPlace2 = new placeInfo("assets/img/places/turkey-img2.jpg", "Süleymaniye Mosque", "One of İstanbul's seven hills and dominates the Golden Horn.", "https://www.lonelyplanet.com/turkey/istanbul/attractions/suleymaniye-mosque/a/poi-sig/401910/360887");
//The description of the location and image was taken from https://www.lonelyplanet.com/turkey/istanbul/attractions/kariye-museum-chora-church/a/poi-sig/402174/360887
let turkeyPlace3 = new placeInfo("assets/img/places/turkey-img3.jpg", "Kariye Museum", "Istanbul deop-dead gorgeous and mosaic church.", "https://www.lonelyplanet.com/turkey/istanbul/attractions/kariye-museum-chora-church/a/poi-sig/402174/360887");

//The description of the location and image was taken from https://www.britannica.com/topic/Pyramids-of-Giza
let egyptPlace1 = new placeInfo("assets/img/places/egypt-img1.jpg", "Pyramids of Giza", "In ancient times they were included among the Seven Wonders of the World.", "https://www.britannica.com/topic/Pyramids-of-Giza");
//The description of the location and image was taken from https://www.britannica.com/topic/Egyptian-Museum-Cairo-Egypt
let egyptPlace2 = new placeInfo("assets/img/places/egypt-img2.jpg", "Egyptian Museum", "Housing the world’s most valuable collection of its kind.", "https://www.britannica.com/topic/Egyptian-Museum-Cairo-Egypt");
//The description of the location and image was taken from https://theculturetrip.com/africa/egypt/articles/the-essential-guide-to-cairos-khan-el-khalili-market/
let egyptPlace3 = new placeInfo("assets/img/places/egypt-img3.jpg", "Khan El-Khalily Bazar", "Old Cairo has always been an important district for cultural and economic activities.", "https://theculturetrip.com/africa/egypt/articles/the-essential-guide-to-cairos-khan-el-khalili-market/");

//The description of the location and image was taken from https://www.lonelyplanet.com/jordan/amman/attractions/citadel/a/poi-sig/1443155/361068
let jordanPlace1 = new placeInfo("assets/img/places/jordan-img1.jpg", "Citadel", "Highest hill in Amman, Jebel Al Qala’a (about 850m above sea level), and is the site of ancient Rabbath-Ammon.", "https://www.lonelyplanet.com/jordan/amman/attractions/citadel/a/poi-sig/1443155/361068");
//The description of the location and image was taken from https://www.lonelyplanet.com/articles/best-stops-on-a-stroll-along-ammans-famous-rainbow-street
let jordanPlace2 = new placeInfo("assets/img/places/jordan-img2.jpg", "Rainbow Street", "Rainbow Street invites visitors and locals to do something that’s not always easy or possible in Jordan’s crowded capital: walk!", "https://www.lonelyplanet.com/articles/best-stops-on-a-stroll-along-ammans-famous-rainbow-street");
//For the description, i used https://www.lonelyplanet.com/jordan/jerash-and-the-north/irbid/attractions/jordan-natural-history-museum/a/poi-sig/1073967/361071
//For the image, i used https://www.planetware.com/jordan/top-rated-things-to-do-in-amman-jo-1-2.htm
let jordanPlace3 = new placeInfo("assets/img/places/jordan-img3.jpg", "Jordan Natural History Museum", "a good place to identify some of Jordan’s most elusive species.", "https://www.lonelyplanet.com/jordan/jerash-and-the-north/irbid/attractions/jordan-natural-history-museum/a/poi-sig/1073967/361071");

//Gets the elements by their ID and adding the constructor information to the HTML, with a string and the constructor object.
document.getElementById("place-img1-1").src = lebanonPlace1.placeImage;
document.getElementById("place-name1-1").innerHTML = lebanonPlace1.placeName;
document.getElementById("place-desc1-1").innerHTML = lebanonPlace1.placeDescription;
document.getElementById("place-more1-1").href = lebanonPlace1.placeURL;

document.getElementById("place-img2-1").src = lebanonPlace2.placeImage;
document.getElementById("place-name2-1").innerHTML = lebanonPlace2.placeName;
document.getElementById("place-desc2-1").innerHTML = lebanonPlace2.placeDescription;
document.getElementById("place-more2-1").href = lebanonPlace2.placeURL;

document.getElementById("place-img3-1").src = lebanonPlace3.placeImage;
document.getElementById("place-name3-1").innerHTML = lebanonPlace3.placeName;
document.getElementById("place-desc3-1").innerHTML = lebanonPlace3.placeDescription;
document.getElementById("place-more3-1").href = lebanonPlace3.placeURL;

document.getElementById("place-img1-2").src = dubaiPlace1.placeImage;
document.getElementById("place-name1-2").innerHTML = dubaiPlace1.placeName;
document.getElementById("place-desc1-2").innerHTML = dubaiPlace1.placeDescription;
document.getElementById("place-more1-2").href = dubaiPlace1.placeURL;

document.getElementById("place-img2-2").src = dubaiPlace2.placeImage;
document.getElementById("place-name2-2").innerHTML = dubaiPlace2.placeName;
document.getElementById("place-desc2-2").innerHTML = dubaiPlace2.placeDescription;
document.getElementById("place-more2-2").href = dubaiPlace2.placeURL;

document.getElementById("place-img3-2").src = dubaiPlace3.placeImage;
document.getElementById("place-name3-2").innerHTML = dubaiPlace3.placeName;
document.getElementById("place-desc3-2").innerHTML = dubaiPlace3.placeDescription;
document.getElementById("place-more3-2").href = dubaiPlace3.placeURL;

document.getElementById("place-img1-3").src = turkeyPlace1.placeImage;
document.getElementById("place-name1-3").innerHTML = turkeyPlace1.placeName;
document.getElementById("place-desc1-3").innerHTML = turkeyPlace1.placeDescription;
document.getElementById("place-more1-3").href = turkeyPlace1.placeURL;

document.getElementById("place-img2-3").src = turkeyPlace2.placeImage;
document.getElementById("place-name2-3").innerHTML = turkeyPlace2.placeName;
document.getElementById("place-desc2-3").innerHTML = turkeyPlace2.placeDescription;
document.getElementById("place-more2-3").href = turkeyPlace2.placeURL;

document.getElementById("place-img3-3").src = turkeyPlace3.placeImage;
document.getElementById("place-name3-3").innerHTML = turkeyPlace3.placeName;
document.getElementById("place-desc3-3").innerHTML = turkeyPlace3.placeDescription;
document.getElementById("place-more3-3").href = turkeyPlace3.placeURL;

document.getElementById("place-img1-4").src = egyptPlace1.placeImage;
document.getElementById("place-name1-4").innerHTML = egyptPlace1.placeName;
document.getElementById("place-desc1-4").innerHTML = egyptPlace1.placeDescription;
document.getElementById("place-more1-4").href = egyptPlace1.placeURL;

document.getElementById("place-img2-4").src = egyptPlace2.placeImage;
document.getElementById("place-name2-4").innerHTML = egyptPlace2.placeName;
document.getElementById("place-desc2-4").innerHTML = egyptPlace2.placeDescription;
document.getElementById("place-more2-4").href = egyptPlace2.placeURL;

document.getElementById("place-img3-4").src = egyptPlace3.placeImage;
document.getElementById("place-name3-4").innerHTML = egyptPlace3.placeName;
document.getElementById("place-desc3-4").innerHTML = egyptPlace3.placeDescription;
document.getElementById("place-more3-4").href = egyptPlace3.placeURL;

document.getElementById("place-img1-5").src = jordanPlace1.placeImage;
document.getElementById("place-name1-5").innerHTML = jordanPlace1.placeName;
document.getElementById("place-desc1-5").innerHTML = jordanPlace1.placeDescription;
document.getElementById("place-more1-5").href = jordanPlace1.placeURL;

document.getElementById("place-img2-5").src = jordanPlace2.placeImage;
document.getElementById("place-name2-5").innerHTML = jordanPlace2.placeName;
document.getElementById("place-desc2-5").innerHTML = jordanPlace2.placeDescription;
document.getElementById("place-more2-5").href = jordanPlace2.placeURL;

document.getElementById("place-img3-5").src = jordanPlace3.placeImage;
document.getElementById("place-name3-5").innerHTML = jordanPlace3.placeName;
document.getElementById("place-desc3-5").innerHTML = jordanPlace3.placeDescription;
document.getElementById("place-more3-5").href = jordanPlace3.placeURL;

//A constructor function that defines the image that will be used, the Name of the place, the description of the place and a place holder for the URL.
function foodInfo(foodImage, foodName, foodDescription, foodURL) {
    this.foodImage = foodImage;
    this.foodName = foodName;
    this.foodDescription = foodDescription;
    this.foodURL = foodURL;
}

//The description of the food and image was taken from https://www.simplyleb.com/recipe/manakeesh/
let lebanonFood1 = new foodInfo("assets/img/foods/lebanon-img4.jpg", "Manakeesh", "Manakeesh is a Lebanese flatbread topped with a variety of possibilities such as za’atar (zaatar), cheese, keshek etc.", "https://www.simplyleb.com/recipe/manakeesh/");
//The description of the food and image was taken from https://food52.com/recipes/66975-shish-barak-lebanese-lamb-dumplings-in-yogurt-sauce
let lebanonFood2 = new foodInfo("assets/img/foods/lebanon-img5.jpg", "Shish Barak", "very similar to manti, the lamb-filled dumplings eaten.", "https://food52.com/recipes/66975-shish-barak-lebanese-lamb-dumplings-in-yogurt-sauce");
//The description of the food and image was taken from https://www.arabamerica.com/recipe/bayad-maa-qawarma-eggs-preserved-meat/
let lebanonFood3 = new foodInfo("assets/img/foods/lebanon-img6.jpg", "Bayd Bi Qawarma", "Eggs and qawarma is perhaps the most common breakfast food among the villagers of Syria and Lebanon.", "https://www.arabamerica.com/recipe/bayad-maa-qawarma-eggs-preserved-meat/");

//The description of the food and image was taken from https://www.marthastewart.com/1514852/balaleet
let dubaiFood1 = new foodInfo("assets/img/foods/dubai-img4.jpg", "Balaleet", "A dish of sugared vermicelli and eggs, balaleet is a popular lower Gulf breakfast item.", "https://www.marthastewart.com/1514852/balaleet");
//The description of the food and image was taken from http://www.clubnoor.com/en/recipe/ramadan-time/lamb-machboos
let dubaiFood2 = new foodInfo("assets/img/foods/dubai-img5.jpg", "Lamb Machboos", "Machboos, or kabsa, is a popular dish in the Arabian Gulf.", "http://www.clubnoor.com/en/recipe/ramadan-time/lamb-machboos");
//The description of the food and image was taken from http://www.clubnoor.com/en/recipe/arabian/luqaimat
let dubaiFood3 = new foodInfo("assets/img/foods/dubai-img6.jpg", "Luqaimat", "A finger licking snack or dessert which is a breeze to prepare, yet tastes so divine.", "http://www.clubnoor.com/en/recipe/arabian/luqaimat");

//The description of the food and image was taken from https://www.bbcgoodfood.com/recipes/turkish-lamb-pilau
let turkeyFood1 = new foodInfo("assets/img/foods/turkey-img4.jpg", "Turkish lamb pilau", "A basmati rice one pot flavoured with cinnamon, mint and apricot, studded with tender lamb", "https://www.bbcgoodfood.com/recipes/turkish-lamb-pilau");
//The description of the food and image was taken from https://www.bbcgoodfood.com/recipes/imam-bayildi-bbq-lamb-tzatziki
let turkeyFood2 = new foodInfo("assets/img/foods/turkey-img5.jpg", "Imam bayildi with BBQ lamb & tzatziki", "There are hundreds of versions of this Turkish aubergine dish (It is authentically quite oily).", "https://www.bbcgoodfood.com/recipes/imam-bayildi-bbq-lamb-tzatziki");
//The description of the food and image was taken from https://www.bbcgoodfood.com/recipes/turkish-one-pan-eggs-peppers-menemen
let turkeyFood3 = new foodInfo("assets/img/foods/turkey-img6.jpg", "Turkish one-pan eggs & peppers (Menemen)", "This gutsy dish is genuine street food and a brilliant family dish for brunch, lunch or dinner.", "https://www.bbcgoodfood.com/recipes/turkish-one-pan-eggs-peppers-menemen");

//The description of the food and image was taken from https://www.curiouscuisiniere.com/kushari/
let egyptFood1 = new foodInfo("assets/img/foods/egypt-img4.jpg", "Kushari", "Kushari is a hearty combination of flavors and textures all topped off with spicy tomato sauce and fried onions.", "https://www.curiouscuisiniere.com/kushari/");
//The description of the food and image was taken from https://thematbakh.com/egyptian-mulukhiyah-with-roz-from-scratch/
let egyptFood2 = new foodInfo("assets/img/foods/egypt-img5.jpg", "Mulukhiyah", "One of the dishes that is ALWAYS on our dinner table when we visit Egypt.", "https://thematbakh.com/egyptian-mulukhiyah-with-roz-from-scratch/");
//The description of the food and image was taken from https://www.themediterraneandish.com/hawawshi-recipe/
let egyptFood3 = new foodInfo("assets/img/foods/egypt-img6.jpg", "Hawawshi", "Think of it as Egypt's answer to a hamburger but on steroids!", "https://www.themediterraneandish.com/hawawshi-recipe/");

//The description of the food and image was taken from https://www.international-alert.org/news/mansaf
let jordanFood1 = new foodInfo("assets/img/foods/jordan-img4.jpg", "Mansaf", "The national Jordanian dish which is a big part of all celebrations and festivals.", "https://www.international-alert.org/news/mansaf");
//The description of the food and image was taken from https://www.allrecipes.com/recipe/160087/upside-down-maqluba/
let jordanFood2 = new foodInfo("assets/img/foods/jordan-img5.jpg", "Maqluba", "It is inspired by the Arabic dish called 'Maqluba,' which translates to 'upside down.'", "https://www.allrecipes.com/recipe/160087/upside-down-maqluba/");
//The description of the food and image was taken from https://www.themediterraneandish.com/musakhan-sumac-chicken/
let jordanFood3 = new foodInfo("assets/img/foods/jordan-img6.jpg", "Musakhan", "This warm, savory Musakhan sumac chicken with caramelized onion flatbread will wow your taste buds in the best way possible!", "https://www.themediterraneandish.com/musakhan-sumac-chicken/");

//Gets the elements by their ID and adding the constructor information to the HTML, with a string and the constructor object.
document.getElementById("food-img1-1").src = lebanonFood1.foodImage;
document.getElementById("food-name1-1").innerHTML = lebanonFood1.foodName;
document.getElementById("food-desc1-1").innerHTML = lebanonFood1.foodDescription;
document.getElementById("food-more1-1").href = lebanonFood1.foodURL;

document.getElementById("food-img2-1").src = lebanonFood2.foodImage;
document.getElementById("food-name2-1").innerHTML = lebanonFood2.foodName;
document.getElementById("food-desc2-1").innerHTML = lebanonFood2.foodDescription;
document.getElementById("food-more2-1").href = lebanonFood2.foodURL;

document.getElementById("food-img3-1").src = lebanonFood3.foodImage;
document.getElementById("food-name3-1").innerHTML = lebanonFood3.foodName;
document.getElementById("food-desc3-1").innerHTML = lebanonFood3.foodDescription;
document.getElementById("food-more3-1").href = lebanonFood3.foodURL;

document.getElementById("food-img1-2").src = dubaiFood1.foodImage;
document.getElementById("food-name1-2").innerHTML = dubaiFood1.foodName;
document.getElementById("food-desc1-2").innerHTML = dubaiFood1.foodDescription;
document.getElementById("food-more1-2").href = dubaiFood1.foodURL;

document.getElementById("food-img2-2").src = dubaiFood2.foodImage;
document.getElementById("food-name2-2").innerHTML = dubaiFood2.foodName;
document.getElementById("food-desc2-2").innerHTML = dubaiFood2.foodDescription;
document.getElementById("food-more2-2").href = dubaiFood2.foodURL;

document.getElementById("food-img3-2").src = dubaiFood3.foodImage;
document.getElementById("food-name3-2").innerHTML = dubaiFood3.foodName;
document.getElementById("food-desc3-2").innerHTML = dubaiFood3.foodDescription;
document.getElementById("food-more3-2").href = dubaiFood3.foodURL;

document.getElementById("food-img1-3").src = turkeyFood1.foodImage;
document.getElementById("food-name1-3").innerHTML = turkeyFood1.foodName;
document.getElementById("food-desc1-3").innerHTML = turkeyFood1.foodDescription;
document.getElementById("food-more1-3").href = turkeyFood1.foodURL;

document.getElementById("food-img2-3").src = turkeyFood2.foodImage;
document.getElementById("food-name2-3").innerHTML = turkeyFood2.foodName;
document.getElementById("food-desc2-3").innerHTML = turkeyFood2.foodDescription;
document.getElementById("food-more2-3").href = turkeyFood2.foodURL;

document.getElementById("food-img3-3").src = turkeyFood3.foodImage;
document.getElementById("food-name3-3").innerHTML = turkeyFood3.foodName;
document.getElementById("food-desc3-3").innerHTML = turkeyFood3.foodDescription;
document.getElementById("food-more3-3").href = turkeyFood3.foodURL;

document.getElementById("food-img1-4").src = egyptFood1.foodImage;
document.getElementById("food-name1-4").innerHTML = egyptFood1.foodName;
document.getElementById("food-desc1-4").innerHTML = egyptFood1.foodDescription;
document.getElementById("food-more1-4").href = egyptFood1.foodURL;

document.getElementById("food-img2-4").src = egyptFood2.foodImage;
document.getElementById("food-name2-4").innerHTML = egyptFood2.foodName;
document.getElementById("food-desc2-4").innerHTML = egyptFood2.foodDescription;
document.getElementById("food-more2-4").href = egyptFood2.foodURL;

document.getElementById("food-img3-4").src = egyptFood3.foodImage;
document.getElementById("food-name3-4").innerHTML = egyptFood3.foodName;
document.getElementById("food-desc3-4").innerHTML = egyptFood3.foodDescription;
document.getElementById("food-more3-4").href = egyptFood3.foodURL;

document.getElementById("food-img1-5").src = jordanFood1.foodImage;
document.getElementById("food-name1-5").innerHTML = jordanFood1.foodName;
document.getElementById("food-desc1-5").innerHTML = jordanFood1.foodDescription;
document.getElementById("food-more1-5").href = jordanFood1.foodURL;

document.getElementById("food-img2-5").src = jordanFood2.foodImage;
document.getElementById("food-name2-5").innerHTML = jordanFood2.foodName;
document.getElementById("food-desc2-5").innerHTML = jordanFood2.foodDescription;
document.getElementById("food-more2-5").href = jordanFood2.foodURL;

document.getElementById("food-img3-5").src = jordanFood3.foodImage;
document.getElementById("food-name3-5").innerHTML = jordanFood3.foodName;
document.getElementById("food-desc3-5").innerHTML = jordanFood3.foodDescription;
document.getElementById("food-more3-5").href = jordanFood3.foodURL;
