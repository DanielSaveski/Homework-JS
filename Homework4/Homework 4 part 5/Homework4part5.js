function sumOfMaxAndMin(arr) {
  if (arr.length === 0) {
      return "Array is empty!";
  }

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
      if (arr[i] < min) {
          min = arr[i];
      }
  }

  let sum = max + min;

  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

const arr = [3, 5, 6, 8, 11];
console.log(sumOfMaxAndMin(arr)); // Output: Max: 11, Min: 3, Sum: 14
