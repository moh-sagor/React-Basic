import React from 'react';
import Book from '../representational/Book';

const BookList = (props) => {
    return (
        props.books.map((book, index) => {
            return (
                <Book name={book.name}
                    Author={book.author}
                    delete={() => props.deleteBookState(index)}
                    key={book.id}
                    inputName={(event) => props.changeWithInputState(event, index)}
                />
            );
        })
    );
}

export default BookList;  