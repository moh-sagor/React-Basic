import React from "react";

const BookDetail = props => {

    if (props.book === null)
        return <div></div>
    return (
        <div>
            <h1>Book Name {props.book.name}</h1>
            <h1>Author : {props.book.author}</h1>
            <p>{props.book.description}</p>

        </div>
    );
}
export default BookDetail;