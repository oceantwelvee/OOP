// Classes;
// Classes;
class Book {
    constructor(title,author,year) {
        this.title = title;
        this.author = author;
        this.year = year;
        // ключевое слово this - работает только внутри constructor;
    }

    getSummary() {
        return `${this.title} was writen by ${this.author} in ${this.year}`
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'Barnes & Nuble';
    }

}

// Instantiate Object;
const book1 = new Book("Book One", "John Doe", "2018");
// book1.revise("2021")
// console.log(book1);
console.log(Book.topBookStore())
