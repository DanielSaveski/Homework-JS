function Book(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
    this.getReadingStatus = function() {
        if (this.readingStatus) {
            return `Already read '${this.title}' by ${this.author}.`;
        } else {
            return `You still need to read '${this.title}' by ${this.author}.`;
        }
    };
}

let title = prompt("Enter the book title:");
let author = prompt("Enter the author's name:");
let readingStatus = prompt("Have you read the book? (yes/no)").toLowerCase() === 'yes';

let book = new Book(title, author, readingStatus);

alert(book.getReadingStatus());