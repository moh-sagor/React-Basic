import React, { Component } from 'react';
import Book from '../representational/Book';
import { Link } from "react-router-dom"

class BookList extends Component {

    render() {
        return (
            this.props.books.map((book, index) => {
                return (
                    <Link to={"/book/" + -book.id} style={{ textDecoration: "none", color: "black" }}><Book name={book.name}
                        Author={book.author}
                        // delete={() => this.props.deleteBookState(index)}
                        key={book.id}
                        selectedBookHandler={() => this.props.selectedBookHandler(book.id)}
                    // inputName={(event) => this.props.changeWithInputState(event, index)}
                    />
                    </Link>
                );
            })
        );
    }
}

export default BookList; 