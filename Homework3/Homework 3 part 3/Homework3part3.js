let accountBalance = 1000; 

function withdrawCash(amount) {
    if (amount <= 0) {
        return "Invalid amount. Please enter a positive value.";
    }

    if (amount > accountBalance) {
        return "Not enough money";
    }

    accountBalance -= amount;
    return `You have withdrawn $${amount}. Remaining balance: $${accountBalance}`;
}

console.log(withdrawCash(500));
console.log(withdrawCash(600)); 
console.log(withdrawCash(-50)); 
console.log(withdrawCash(200)); 