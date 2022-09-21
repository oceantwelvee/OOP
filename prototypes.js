// Prototypes
// Prototypes;
function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;

//     this.getSummary = function() {
//      return `${this.title} was writen by ${this.author} in ${this.year}`; // Создаем как прототип
//     }
}

//getSummary;
Book.prototype.getSummary = function() {
    return `${this.title} was writen by ${this.author} in ${this.year}`
}

//getAge;
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

//Revise / Change Year

Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

//Instatiate an Object;
const book1 = new Book("One Book", "John Doe", "2013");
const book2 = new Book("Second Book", "Jane Doe", "2016");
console.log(book1.getAge());
book2.revise("2018");
console.log(book2)
