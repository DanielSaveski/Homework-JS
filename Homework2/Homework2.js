
const zodiacSigns = [
    "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", 
    "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
];

function getChineseZodiac(year) {
    const zodiacIndex = (year - 4) % 12; 
    return zodiacSigns[zodiacIndex];
}

function calculateZodiac() {
    const inputYear = parseInt(prompt("Enter a year to find its Chinese Zodiac:"));
    
    if (isNaN(inputYear)) {
        alert("Please enter a valid year!");
    } else {
        const zodiac = getChineseZodiac(inputYear);
        alert(`The Chinese Zodiac for the year ${inputYear} is: ${zodiac}`);
    }
}

calculateZodiac();