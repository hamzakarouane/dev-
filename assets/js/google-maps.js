function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 33.2316326, lng: -8.5007116};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'ELJADIDA, MAROC' // Title Location
    });
}