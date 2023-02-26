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
    for(var i = 0 ; i < (str.length -1)/2 ;i++)
  {
        var x = str[i] ;
        var y = str[str.length -1-i];
        if( x != y)
        {
            return false;
        }
  }
        return true;
}

