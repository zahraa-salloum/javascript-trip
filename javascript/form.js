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


function validateEmail() 
{
    var mail = document.getElementById('email').value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}



function validatePassword() {
    var p = document.getElementById('password').value;
        errors = [];
    if (p.length < 8) {
        errors.push("Your password must be at least 8 characters"); 
    }
    if (p.search(/[A-Z]/) < 0) {
        errors.push("Your password must contain at least one capital letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit."); 
    }
    if(p.search(/[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]/) < 0){
        errors.push("Your password must contain at least one special character."); 
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    return true;
}



submit.addEventListener("click", function(){
    var data = {
        "firstName":firstname.value,
        "lastName":lastname.value,
        "username":username.value,
        "email":email.value,
        "password":password.value
    }
    
    if(validateEmail() && validatePassword()){
    jsonText.innerHTML = JSON.stringify(data)
    }
})
