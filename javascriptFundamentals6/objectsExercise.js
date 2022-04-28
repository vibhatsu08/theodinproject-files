// objects exercise with objects in javascript
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return {
            "title": title,
            "author": author,
            "pages": pages,
            "read": read
        }
    }
}

const book1 = new Book("life of turing", "alan turing", 245, true);
const book2 = new Book("rise and fall of iron man", "tony stark", 0, false);
console.log(book1.info());
console.log(book2.info());


