function convertDogAge(age, isHumanToDog = true) {
    if (isHumanToDog) {
        return age * 7; 
    } else {
        return age / 7; 
    }
}

console.log("Dog's age in dog years:", convertDogAge(5)); 
console.log("Dog's age in human years:", convertDogAge(35, false)); 
