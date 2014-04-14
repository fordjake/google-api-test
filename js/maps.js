var map;
var sydneyAu;
var vancouverCa;

function initialize() {

sydneyAu = new google.maps.LatLng(-33.8600, 151.2111);
vancouverCa = new google.maps.LatLng(49.2500, -123.1000);

  var mapOptions = {
    center: sydneyAu,
    zoom: 2
  };

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  var marker = new google.maps.Marker({
      position: sydneyAu,
      map: map,
      title: 'Hello World!'
  });

  var myMarker = new google.maps.Marker({
      position: vancouverCa,
      map: map,
      title: 'Hello World!'
  });

  // google.maps.event.addListener(map, 'click', function(event) {
  //   placeMarker(event.latLng);
  // });

}
      
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&' +
      'callback=initialize';
  document.body.appendChild(script);
}

// function placeMarker(location) {
//   var marker = new google.maps.Marker({
//       position: location,
//       map: map
//   });

//   map.setCenter(location);
// }

// google.maps.event.addDomListener(window, 'load', initialize);
