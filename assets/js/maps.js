let map;
let places;
let infoWindow;
let markers = [];
let autocomplete;
let countryRestrict = {
    country: "default"
};
let MARKER_PATH =
    "https://developers.google.com/maps/documentation/javascript/images/marker_green";
const hostnameRegexp = new RegExp("^https?://.+?/");
let countries = {
    default: {
        center: { lat: 0, lng: 0 },
        zoom: 2,
    },
    lb: {
        center: {
            lat: 33.89231046259173,
            lng: 35.49453087184063
        },
        zoom: 12,
    },
    ae: {
        center: {
            lat: 25.12123680578581,
            lng: 55.19897185939658
        },
        zoom: 9,
    },
    tr: {
        center: {
            lat: 41.01084870068621,
            lng: 28.9654373834255
        },
        zoom: 13,
    },
    eg: {
        center: {
            lat: 30.049315710218142,
            lng: 31.233671515561262
        },
        zoom: 13,
    },
    jo: {
        center: {
            lat: 31.954123555014338,
            lng: 35.915992265811
        },
        zoom: 12,
    },
};

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: countries["default"].zoom,
        center: countries["default"].center,
        mapTypeControl: false,
        panControl: false,
        zoomControl: true,
        streetViewControl: false,
    });

    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById("places-info-window"),
    });

    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById("city-location"), {
            types: ["(cities)"],
            componentRestrictions: countryRestrict,
        }
    );

    places = new google.maps.places.PlacesService(map);
    autocomplete.addListener("place_changed", getPlacesInfo);

    mapDragSearch();

    document.getElementById('tourist_attraction').addEventListener('change', getPlacesInfo);
    document.getElementById('restaurant').addEventListener('change', getPlacesInfo);
    document.getElementById('lodging').addEventListener('change', getPlacesInfo);



    document
        .getElementById("myCountries")
        .addEventListener("change", setAutocompleteCountry);
}

function getPlacesInfo() {
    if ($("#tourist_attraction").is(':checked')) {
        let place = autocomplete.getPlace();

        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchAttraction();
        } else {
            $('#city-location').attr("placeholder", "Please type a city or town");
        }
    } else if ($("#restaurant").is(':checked')) {
        let place = autocomplete.getPlace();

        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchRestaurant();
        } else {
            $('#city-location').attr("placeholder", "Please type a city or town");
        }
    } else if ($("#lodging").is(':checked')) {
        let place = autocomplete.getPlace();

        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchLodging();
        } else {
            $('#city-location').attr("placeholder", "Please type a city or town");
        }
    }

    }


function mapDragSearch() {
    map.addListener("center_changed", function () {
        map.addListener("dragend", function () {
            if ($("#tourist_attraction").is(':checked')) {
                searchAttraction();
            } else if ($("#restaurant").is(':checked')) {
                searchRestaurant();
            } else if ($("#lodging").is(':checked')) {
                searchLodging();
            } else {
                clearResults();
                clearMarkers();
            }
        });
    });
}

function searchAttraction() {
    let search = {
        bounds: map.getBounds(),
        types: ["tourist_attraction"],
    };
    places.nearbySearch(search, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            for (let i = 0; i < results.length; i++) {
                let markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                let markerIcon = MARKER_PATH + markerLetter + ".png";
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }
    });
}

function searchRestaurant() {
    let search = {
        bounds: map.getBounds(),
        types: ["restaurant"],
    };
    places.nearbySearch(search, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            for (let i = 0; i < results.length; i++) {
                let markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                let markerIcon = MARKER_PATH + markerLetter + ".png";
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }
    });
}

function searchLodging() {
    let search = {
        bounds: map.getBounds(),
        types: ["lodging"],
    };
    places.nearbySearch(search, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            for (let i = 0; i < results.length; i++) {
                let markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                let markerIcon = MARKER_PATH + markerLetter + ".png";
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }
    });
}



function setAutocompleteCountry() {
    const country = document.getElementById("myCountries").value;

    if (country == "default") {
        autocomplete.setComponentRestrictions({ country: [] });
        map.setCenter({ lat: 15, lng: 0 });
        map.setZoom(2);
    } else {
        autocomplete.setComponentRestrictions({ country: country });
        map.setCenter(countries[country].center);
        map.setZoom(countries[country].zoom);
    }
    clearResults();
    clearMarkers();
}

function addResult(result, i) {
    const results = document.getElementById("results");
    const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
    const markerIcon = MARKER_PATH + markerLetter + ".png";
    const tr = document.createElement("tr");
    tr.style.backgroundColor = i % 2 === 0 ? "#ef7b18" : "#f7bf90";

    tr.onclick = function () {
        google.maps.event.trigger(markers[i], "click");
    };
    const iconTd = document.createElement("td");
    const nameTd = document.createElement("td");
    const icon = document.createElement("img");
    icon.src = markerIcon;
    icon.setAttribute("class", "placeIcon");
    icon.setAttribute("className", "placeIcon");
    const name = document.createTextNode(result.name);
    iconTd.appendChild(icon);
    nameTd.appendChild(name);
    tr.appendChild(iconTd);
    tr.appendChild(nameTd);
    results.appendChild(tr);
}




//This function will show the pop up info window in the google maps if the status is ok  and all the info is provided my the gmapPopUp fuction below.
function showInfoWindow() {
    let marker = this;
    places.getDetails({
        placeId: marker.placeResult.place_id
    },
                      (place, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
            return;
        }
        infoWindow.open(map, marker);
        gmapPopUp(place);
    }
                     );
}

// Get the place details for a hotel. Show the information in an info window,
// anchored on the marker for the hotel that the user selected.
function showInfoWindow() {
    const marker = this;
    places.getDetails(
        { placeId: marker.placeResult.place_id },
        (place, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }
            infoWindow.open(map, marker);
            buildIWContent(place);
        }
    );
}

// Load the place information into the HTML elements used by the info window.
function buildIWContent(place) {
    document.getElementById("iw-icon").innerHTML =
        '<img class="hotelIcon" ' + 'src="' + place.icon + '"/>';
    document.getElementById("iw-url").innerHTML =
        '<b><a href="' + place.url + '">' + place.name + "</a></b>";
    document.getElementById("iw-address").textContent = place.vicinity;

    if (place.formatted_phone_number) {
        document.getElementById("iw-phone-row").style.display = "";
        document.getElementById("iw-phone").textContent =
            place.formatted_phone_number;
    } else {
        document.getElementById("iw-phone-row").style.display = "none";
    }

    // Assign a five-star rating to the hotel, using a black star ('&#10029;')
    // to indicate the rating the hotel has earned, and a white star ('&#10025;')
    // for the rating points not achieved.
    if (place.rating) {
        let ratingHtml = "";

        for (let i = 0; i < 5; i++) {
            if (place.rating < i + 0.5) {
                ratingHtml += "&#10025;";
            } else {
                ratingHtml += "&#10029;";
            }
            document.getElementById("iw-rating-row").style.display = "";
            document.getElementById("iw-rating").innerHTML = ratingHtml;
        }
    } else {
        document.getElementById("iw-rating-row").style.display = "none";
    }

    // The regexp isolates the first part of the URL (domain plus subdomain)
    // to give a short URL for displaying in the info window.
    if (place.website) {
        let fullUrl = place.website;
        let website = String(hostnameRegexp.exec(place.website));

        if (!website) {
            website = "http://" + place.website + "/";
            fullUrl = website;
        }
        document.getElementById("iw-website-row").style.display = "";
        document.getElementById("iw-website").textContent = website;
    } else {
        document.getElementById("iw-website-row").style.display = "none";
    }
}


function dropMarker(i) {
    return function () {
        markers[i].setMap(map);
    };
}

//This function removes the markers from the map, i have used this for the reset button as well by calling the function.
function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}

//This functions clears the results found, i have used this for the reset button as well by calling the function.
function clearResults() {
    let results = document.getElementById("results");
    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
}

//This function resets all the search input fields from all the steps divs and resets the map zoom back to default and a page refresh delay of one second, the reason for page refresh sometimes the api does not fully reset.
function resetCountries() {
    clearResults();
    clearMarkers();
    $('#myCountries')[0].selectedIndex = 0;
    $('#city-location').val("");
    $('input[type=radio]').prop('checked', false);
    map.setZoom(2);
    map.setCenter(countries["default"].center);
    map.componentRestrictions = {
        'country': []
    };
}

