window.onload = function() {
var arr = [];

for(var i = 0; i < 10; i++)
   arr.push(Number(prompt("Enter a number")));
   
   function mergeSortedArray(left,right,arr) {
      let i = 0;
      let j = 0;
      let k = 0;
  
      while(i<left.length && j<right.length) {
          if(left[i] <= right[j]) {
              arr[k] = left[i];
              i++
          }
          else {
              arr[k] = right[j];
              j++;
          }
          k++;
      }
  
      while(j < right.length) {
          arr[k] = right[j];
          j++;
          k++
      }
  
      while(i < left.length) {
          arr[k] = left[i];
          k++;
          i++;
      }
  
      return arr;
  }
  
  var sortArray = function(arr) {
      if(arr.length === 1) {
          return arr
      }
      let mid = Math.round(arr.length/2);
      if(arr.length < 2) {
          return;
      }
      let left = [];
      let right = [];
      for(let i=0;i<mid;i++) {
          left.push(arr[i]);
      }
  
      for(let j = mid;j<arr.length;j++) {
          right.push(arr[j]);
      }
  
      sortArray(left);
      sortArray(right);
      mergeSortedArray(left,right,arr);
  
      return arr;
  }
var sorted_arr = sortArray(arr);
var message = "";

for(var i = 0; i < 10; i++)
     message += sorted_arr[i]+" "

alert("Your numbers after applying merge sort are "+message)
}

function toMain(){
   window.location.href='main.html';
}