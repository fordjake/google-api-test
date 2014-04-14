var map;
var sydneyAu;
var vancouverCa;
var marker;


function initialize() {

sydneyAu = new google.maps.LatLng(-33.8600, 151.2111);
vancouverCa = new google.maps.LatLng(49.2500, -123.1000);

  var mapOptions = {
    center: vancouverCa,
    zoom: 2
  };

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  marker = new google.maps.Marker({
      position: sydneyAu,
      map: map,
      animation: google.maps.Animation.DROP,
      draggable:true,
      title: 'Hello World!'
  });

  myMarker = new google.maps.Marker({
      position: vancouverCa,
      map: map,
      animation: google.maps.Animation.DROP,
      draggable:true,
      title: 'Hello World!'
  });

  google.maps.event.addListener(marker, 'click', toggleBounce);
  google.maps.event.addListener(myMarker, 'click', toggleBounce2);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function toggleBounce2() {

  if (myMarker.getAnimation() != null) {
    myMarker.setAnimation(null);
  } else {
    myMarker.setAnimation(google.maps.Animation.BOUNCE);
  }
}



      
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&' +
      'callback=initialize';
  document.body.appendChild(script);
}