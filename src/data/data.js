let books = [
    {
        name: "قانون شفا",
        number: 21,
        amount: "50,000",
        due: "1401/01/12"
    },
    {
        name: "باشگاه پنج صبحی ها",
        number: 22,
        amount: "65,000",
        due: "1400/08/12"
    },
    {
        name: "خیانت",
        number:23 ,
        amount:"70,000" ,
        due: "1400/08/20"
    },
    {
        name: "مردانگی",
        number: 24,
        amount: "300,000",
        due: "1399/12/09"
    },
    {
        name: "آزادی",
        number: 25,
        amount: "50,000",
        due: "1397/05/15"
    }
];

export const getBooks = ()=> {
    return books;
}

export const getBook = (number)=> {
    return books.find(book=> (
        book.number === number
    ));
}

export const deleteBook = number=> {
    books = books.filter(book=> {
        return book.number !== number;
    });                      
}

