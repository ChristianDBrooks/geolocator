let positionElement = document.body.querySelector('#position');
var x = document.body
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      alert('Could not find coordinates.')
  }
}

function showPosition(position) {
    console.log(position);
    positionElement.textContent = "Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude;
}

getLocation();