function geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        alert("Doesn't Support ")
    }
}

function showPosition(position) {
    alert("Latitude: "+position.coords.latitude + "\n"+"Longtitude: " + position.coords.longitude)
}


let map;

function initMap() {
    let myLocation = { lat:33.7368, lng: 82.7393}
    map = new google.maps.Map(document.getElementById("map"), {
        center: myLocation,
        zoom: 8,
    });
    const marker = new google.maps.Marker({
        position:  myLocation ,
        map : map,
        label: "N",
        title: "Nexus Aquarium",
        draggable: false,
        animation: google.maps.Animation.BOUNCE,
        icon: 'icon.png'
    });
}

window.initMap = initMap;

