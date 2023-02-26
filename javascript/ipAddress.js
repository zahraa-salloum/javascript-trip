function toMain(){
    window.location.href='main.html';
 }
 var ip;
fetch('https://api.ipify.org/').then(
  r => r.text()
).then(r => {
    ip = r
    var sum = 0;
for(var i=0; i < r.length; i++){
    if(r[i] != ".")
    {
        if(Number(r[i]) % 2 ==0){
            sum += Number(r[i]);
        }
    }
}
document.getElementById("messageDisplay").innerHTML = ip+" ,sum of even numbers is: "+sum;
   
});
