function toMain(){
    window.location.href='main.html';
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

  