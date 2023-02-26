function toMain(){
    window.location.href='main.html';
 }
function displayMessage() {
    var input_user = document.getElementById("inputString").value;
    document.getElementById("messageDisplay").innerHTML = "Your new string is: " + manipulateString(input_user);
   
    }

 function manipulateString(str) {
    
    var changed_string = "";
    var vowels = /[aeiou]/gi;
  
    
    if (str[0].match(vowels)) {
        changed_string = str + "ay";
    } else if (str.match(vowels) === null) {
        changed_string = str + "ay";
    } else {
        var vowel_index = str.indexOf(str.match(vowels)[0]);
        changed_string = str.substr(vowel_index) + str.substr(0, vowel_index) + "ay";
    }
    return changed_string;
  }

  