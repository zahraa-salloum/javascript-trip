function toMain(){
    window.location.href='main.html';
 }
 var pos = document.getElementById("messageDisplay");
 function getLocation() {
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
   }
 }
 function showPosition(position) {
    pos.innerHTML = "Latitude: " + position.coords.latitude + 
     "<br>Longitude: " + position.coords.longitude;
   }
