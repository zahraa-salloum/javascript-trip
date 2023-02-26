function toMain(){
    window.location.href='main.html';
 }

 function displayMessage() {
    var input_user = document.getElementById("inputString").value;
    document.getElementById("messageDisplay").innerHTML = "The reversed string is: "+reverseOnlyNumbers(input_user);
 }

 var reverseOnlyNumbers = function(str) {
    str = str.split('');
    var start = 0;
    var end = str.length - 1;
    var regex = /[0-9]/g; 
    while (start < end) {
        if (str[start].match(regex) === null) { 
            start++; 
            continue;
        }
        if (str[end].match(regex) === null) { 
            end--; 
            continue;
        }
        var tmp = str[start]; 
        str[start] = str[end];
        str[end] = tmp;
        start++;
        end--;
    }
    
    return str.join('');
};
