import React from 'react';
import '../CSS/book.css';

const Book = (props) => {
    return (
        <div className="Book">
            <h3 onClick={props.change}>Book name:{props.name} </h3>
            <h4>Author : {props.author}</h4>
            <input type="text" onChange={props.inputName} value={props.name}></input>
        </div>)
}

export default Book;