function sumMaxMin(arr) {
    let numbers = arr.filter(item => typeof item === 'number');
    if (numbers.length === 0) {
      return 'Array contains no numbers';
    }
  
    let max = numbers[0];
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }
  
    let sum = max + min;
    return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
  }
  
  let arr = [3, 5, 6, 8, 11];
  console.log(sumMaxMin(arr));