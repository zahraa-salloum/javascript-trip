function toMain(){
    window.location.href='main.html';
 }


var firstname = document.getElementById("firstname")
var lastname = document.getElementById("lastname")
var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")

var submit = document.getElementById("submit")
var jsonText = document.getElementById("jsontext")



submit.addEventListener("click", function(){
    var data = {
        "firstName":firstname.value,
        "lastName":lastname.value,
        "username":username.value,
        "email":email.value,
        "password":password.value
    }
    jsonText.innerHTML = JSON.stringify(data)
})