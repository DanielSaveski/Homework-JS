let pricePerPhone = 119.95;

let taxRate = 0.05;

let numberOfPhones = 30;

let totalPriceBeforeTax = pricePerPhone * numberOfPhones;

let taxAmount = totalPriceBeforeTax * taxRate;

let totalPriceAfterTax = totalPriceBeforeTax + taxAmount;

console.log("Total price for 30 phones (including tax): $" + totalPriceAfterTax.toFixed(2));