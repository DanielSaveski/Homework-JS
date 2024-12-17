function sumArray(numbers) {
  if (numbers.length !== 5) {
      return "The array must have exactly 5 numbers.";
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }
  return sum;
}

let numbers = [1, 2, 3, 4, 5];
let result = sumArray(numbers);
console.log("The sum is:", result);