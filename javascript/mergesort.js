var arr = [];
for(var i = 0; i < 10; i++)
   arr.push(prompt("Enter a number"));

function merge(left, right) {
    var arr = []
    while (left.length && right.length) {
       if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    var half = array.length / 2
    
    if(array.length < 2){
      return array 
    }
    
    var left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }

  var sorted_arr = mergeSort(arr);