
window.onload = loadScript;

// navigator.geolocation.getCurrentPosition(function(position) {
//   mine = position.coords.latitude;
//     console.log("This is something interesting: ", position.coords.latitude);
//     console.log(position.coords.longitude);
// });

// console.log(mine);

// var latitude = position.coords.latitude;
// var longitude = position.coords.longitude;

$( ".gm-style-iw" ).parent().css( "background-color", "red" );

$( "#map-canvas" ).on("click", ".gm-style-iw", function() {
  alert("Hey!");

});