function sum_array(arr) {
  
    // store our final answer
    var sum = 0;
    
    // loop through entire array
    for (var i = 0; i < arr.length; i++) {
      
      // loop through each inner array
      for (var j = 0; j < arr[i].length; j++) {
        
        // add this number to the current final sum
        sum += arr[i][j];
        
      }
      
    }
    
    return sum;
    
  }
  
console.log(sum_array([[3, 2], [1], [4, 12]]));