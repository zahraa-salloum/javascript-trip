function toMain(){
    window.location.href='main.html';
 }
function displayMessage() {
    var input_user = Number(document.getElementById("inputYear").value);
    var age = calculateAge(input_user);
    if(isPrime(age)){
        document.getElementById("messageDisplay").innerHTML = "Your age is "+age+" and it is prime";
    } else{
        document.getElementById("messageDisplay").innerHTML = "Your age is "+age+" and it is not prime";
    }
}

function calculateAge(year){
    var current_year = new Date().getFullYear()
    return age = current_year - year;
}
function isPrime(num){
    var prime = true;
    for(i = 2; i <= num - 1; i++){
        if (num % i == 0) {
            prime = false;
                break;
        }
    }
    return prime;
        
}