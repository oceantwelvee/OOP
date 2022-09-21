// Constructor;
function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() { 
        return `${this.title} was writen by ${this.author} in ${this.year}`
    }
}
//Instatiate an Object;
const book1 = new Book("One Book", "John Doe", "2013");
const book2 = new Book("Second Book", "Jane Doe", "2016");
