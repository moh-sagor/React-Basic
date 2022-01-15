
import React, { Component } from "react";
import books from "../assets/bookslist";
import BookList from "./lists/BookList";
import BookDetail from "./representational/BookDetail";
import NewBook from "./representational/NewBook";
import { Link, Route, Routes, Navigate } from "react-router-dom";


class MainComponent extends Component {
    // Functional Components +++++++++++++++++
    // function App() {
    //   return (
    //     <div className ="App">
    //       <h1>Hello World!</h1>
    //       <Person />
    //     </div>
    //   );

    //   // another way --------------------
    //   // return React.createElement('div', { className: "App" }, React.createElement('h1', null, "Hello World"), <Person />);
    // }

    // class components ++++++++++++++++

    constructor(props) {
        super(props);
        this.state = {
            books: books,
            showbooks: true,
            selectedBook: null
        }
    }

    selectedBookHandler = bookId => {
        const book = this.state.books.filter(book =>
            book.id === bookId)[0];
        this.setState({ selectedBook: book })
    }

    // changeBookState = (newBookName) => {
    //     this.setState({
    //         books: [
    //             { name: newBookName, author: "George Orwell" },
    //             { name: "New Book", author: "Dan Brown" },
    //         ]
    //     });
    // }

    // changeWithInputState = (event, index) => {
    //     // this.setState({
    //     //   books: [
    //     //     { name: event.target.value, author: "George Orwell" },
    //     //     { name: "New Book", author: "Dan Brown" },
    //     //   ]
    //     // });

    //     // change with seprad operator 
    //     const book = {
    //         ...this.state.books[index]
    //     }
    //     book.name = event.target.value;
    //     const books = [...this.state.books];
    //     books[index] = book;
    //     this.setState({ books: books });
    // }
    // constructor() {
    //   super();
    //   this.state = {};
    // }
    // deleteBookState = (index) => {
    //     // const books = this.state.books.slice();
    //     const books = [...this.state.books]
    //     books.splice(index, 1);
    //     this.setState({
    //         books: books
    //     });
    // };

    // toggleBookState = () => {
    //     this.setState({
    //         showbooks: !this.state.showbooks
    //     });
    // }



    render() {
        // const style = {
        //     border: "1px solid red",
        //     borderRadius: "5px",
        //     backgroundColor: "black",
        //     color: "white"
        // }
        // let books = null;
        // if (this.state.showbooks) {
        const books = <BookList books={this.state.books}
            selectedBookHandler={this.selectedBookHandler}
        // deleteBookState={this.deleteBookState}
        // changeWithInputState={this.changeWithInputState}

        />
        // }

        // let obj = new Component();
        return (
            <div className="App">
                <div className="nav-bar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {/* <li><Link to="/New Book" >New Book</Link></li> */}

                    </ul>
                </div>

                <Routes>
                    <Route path="/books" exact element={() => books} />
                    <Route path="/new-book" exact element={<NewBook />} />
                    <Route path="/book/:id" exact element={<BookDetail book={this.state.selectedBook} />} />
                    <Route path="/books" element={<Navigate to="/" />} />
                </Routes>

                {books}
                {/* <NewBook /> */}
                {/* <BookDetail book={this.state.selectedBook} /> */}

                {/* <h1>Persons Details </h1>
          <Person name="Rahim" age="20" />
          <Person name="karim" age="22" />
          <Person name="solim" age="24" /> */}
                {/* <h2 style={style}>Book Details </h2>
                {/* <button onClick={() => { this.changeBookState("Neneteen Ninety Nine") }}>Change State</button> */}
                {/* <input type="text" onChange={this.changeWithInputState}></input> */}
                {/* <button onClick={this.toggleBookState}>Toggle Books</button>
                {this.state.showbooks ? books : null} */}
                {/* another way  ------------------------------------ */}
                {/* <Book name={this.state.books[0].name} author={this.state.books[0].author}
            inputName={this.changeWithInputState} />
          <Book name={this.state.books[1].name} author={this.state.books[1].author}
            change={this.changeBookState.bind(this, " New Neneteen Ninety Nine")} /> */}

            </div >
        );
    }
}


export default MainComponent;
