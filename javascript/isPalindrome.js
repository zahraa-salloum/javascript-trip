function toMain(){
    window.location.href='main.html';
 }
function displayMessage() {
    var input_user = document.getElementById("inputIsPalindrome").value;
    // document.getElementById("messageDisplay").innerHTML = input_user;
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

