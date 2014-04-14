var map;
var sydneyAu;
var vancouverCa;
var uluruAu;

var marker;
var myMarker;
var uluruMarker

function initialize() {
 var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  sydneyAu = new google.maps.LatLng(-33.8600, 151.2111);
  vancouverCa = new google.maps.LatLng(49.2500, -123.1000);
  uluruAu = new google.maps.LatLng(-25.3450, 131.0361);

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

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  var uluruMarker = new google.maps.Marker({
      position: uluruAu,
      map: map,
      title: 'Uluru (Ayers Rock)'
  });

  google.maps.event.addListener(marker, 'click', toggleBounce);
  google.maps.event.addListener(myMarker, 'click', toggleBounce2);

  google.maps.event.addListener(uluruMarker, 'click', function() {
    infowindow.open(map, uluruMarker);
  });
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













