function topFunction() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

 function toForm() {
  window.location.href='form.html';
 }
 function toMergeSort(){
  window.location.href='mergesort.html';
 }
 function toIsPalindrome(){
  window.location.href='isPalindrome.html';
 }
function toTestAge(){
  window.location.href='testAge.html';
}
function toReverseString(){
  window.location.href='reverseString.html';
}
function toManipulateString(){
  window.location.href='manipulateString.html';
}
function toIPAddress(){
  window.location.href='ipAddress.html';
}
function toCurrentLocation(){
  window.location.href='currentLocation.html';
}

var alertTriggered = false;
function isInViewport(element) {
  var bounding = element.getBoundingClientRect();
  if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
      return true;
  } else {
      alertTriggered = false;
      return false;
  }
}

window.addEventListener('scroll', function (event) {
  if (isInViewport(document.getElementById('ipBtn')) && !alertTriggered) {
    alertTriggered = true;
    alert("You reached button 8, the IP address button")
  }
}, false);



var car;
            
function init() {
  car = document.getElementById('image');
  car.style.position= 'relative'; 
  car.style.left = '-400px'; 
}
function moveRight() {
  car.style.left = parseInt(car.style.left) + 10 + 'px';
}
            
window.onload = init;