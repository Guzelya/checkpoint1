function createBook(id, title, author, price, rating){
    let book = Object.create(bookMethods);
    book.id = id;
    book.title =title;
    book.author = author;
    book.price = price;
    book.rating =  [];
    return book;
}

const bookMethods = {
    getPrice: function(){
        console.log(`{this.price}`);
        return this.price;
    },
    getInfo: function(){
        return `${this.title} by ${this.author}`;
    },
    addRating: function(string){
        this.rating.push(string);
        return this.rating;
    },
    getRating: function(arr){
        let arrLength = arr.length;
        let str = arr.join('');
        let avr = (str.length)/(arrLength);
        return avr;
    }

}
