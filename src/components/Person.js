import React, { Component } from "react";
// function Person() {
//     return (
//         <div>
//             <h1>Sagor</h1>
//         </div>
//     );

//     // another way ------------------
//     // return React.createElement('div', null, React.createElement('h1', null, "My name is Sagor"));
// }

// with arrow function 
// let Person = (props) => {

//     return (
//         <div>
//             <h1>Name = {props.name}</h1>
//             <h4>Age = {props.age}</h4>
//         </div>
//     );

//     // another way ------------------
//     // return React.createElement('div', null, React.createElement('h1', null, "My name is Sagor"));
// }

// with class components dynamically -----------------
class Person extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Name = {this.props.name} and Age = {this.props.age}</h1>
            </div>);

    }
}



export default Person;