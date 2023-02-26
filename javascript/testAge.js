function toMain(){
    window.location.href='main.html';
 }
function displayMessage() {
    var input_user = Number(document.getElementById("inputYear").value);
}

function calculateAge(year){
    var current_year = new Date().getFullYear()
    return age = current_year - year;
}