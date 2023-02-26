function toMain(){
    window.location.href='main.html';
 }

 function displayMessage() {
    var input_user = document.getElementById("inputString").value;
    document.getElementById("messageDisplay").innerHTML = "The reversed string is: "+reverseString(input_user);
 }

function reverseString(str) {

    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
