function toMain(){
    window.location.href='main.html';
 }
function displayMessage() {
    var input_user = document.getElementById("inputIsPalindrome").value;
    if(checkIfPalindrome(input_user)){
        document.getElementById("messageDisplay").innerHTML = "Your string is Palindrome";
    } else{
        document.getElementById("messageDisplay").innerHTML = "Your string is not Palindrome";
    }
    
}
function checkIfPalindrome( str )
{
    if(str.length === 1) 
        return true;
    if(str.length === 2) 
        return str[0] === str[1];
    if(str[0] === str.slice(-1)) 
        return checkIfPalindrome(str.slice(1,-1))
        
    return false;
}

