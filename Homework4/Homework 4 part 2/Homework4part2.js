function sumOfArray(arr) {
    if (arr.length !== 5) {
      console.log("Please provide exactly 5 numbers.");
      return;
    }
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log("The sum is:", sum);
    alert("15")
  }
  
  sumOfArray([1, 2, 3, 4, 5]); 