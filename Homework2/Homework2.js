let year = parseInt(prompt("Enter a year:"));
let zodiacIndex = (year - 4) % 12;

let zodiacAnimals = [
  "Rat", "Ox", "Tiger", "Rabbit", "Dragon", 
  "Snake", "Horse", "Goat", "Monkey", 
  "Rooster", "Dog", "Pig"
];

let zodiacAnimal = zodiacAnimals[zodiacIndex];
alert(`The year ${year} is the year of the ${zodiacAnimal}.`);