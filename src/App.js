import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import Book from './components/Book';

// Functional Components +++++++++++++++++
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <Person />
//     </div>
//   );

//   // another way --------------------
//   // return React.createElement('div', { className: "App" }, React.createElement('h1', null, "Hello World"), <Person />);
// }

// class components ++++++++++++++++
class App extends Component {
  state = {
    books: [
      { name: "1984", author: "George Orwell" },
      { name: "The Da Vinci Code", author: "Dan Brown" },
    ]

  }

  changeBookState = (newBookName) => {
    this.setState({
      books: [
        { name: newBookName, author: "George Orwell" },
        { name: "New Book", author: "Dan Brown" },
      ]
    });
  }

  changeWithInputState = event => {
    this.setState({
      books: [
        { name: event.target.value, author: "George Orwell" },
        { name: "New Book", author: "Dan Brown" },
      ]
    });
  }
  // constructor() {
  //   super();
  //   this.state = {};
  // }
  deleteBookState = (index) => {
    const books = this.state.books;
    books.splice(index, 1);
    this.setState({
      books: books
    });
  };



  render() {
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white"
    }

    const books = this.state.books.map((book, index) => {
      return (
        <Book name={book.name}
          writer={book.author}
          delete={() => this.deleteBookState(index)} />
      );
    });


    // let obj = new Component();
    return (
      <div className="App">
        <h1>Persons Details </h1>
        <Person name="Rahim" age="20" />
        <Person name="karim" age="22" />
        <Person name="solim" age="24" />
        <h2 style={style}>Book Details </h2>
        <button onClick={() => { this.changeBookState("Neneteen Ninety Nine") }}>Change State</button>
        <input type="text" onChange={this.changeWithInputState}></input>

        {books}
        {/* another way  ------------------------------------ */}
        {/* <Book name={this.state.books[0].name} author={this.state.books[0].author}
          inputName={this.changeWithInputState} />
        <Book name={this.state.books[1].name} author={this.state.books[1].author}
          change={this.changeBookState.bind(this, " New Neneteen Ninety Nine")} /> */}

      </div>
    );
  }
}



export default App;
