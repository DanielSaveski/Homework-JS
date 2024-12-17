let phonePrice = 119.95;
let taxRate = 5;
let numberOfPhones = 30;
let totalPriceBeforeTax = phonePrice * numberOfPhones;
let taxAmount = (taxRate / 100) * totalPriceBeforeTax;
let totalPriceWithTax = totalPriceBeforeTax + taxAmount;

console.log("The total price for 30 phones, including tax, is: $" + totalPriceWithTax);