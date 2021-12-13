import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Counter from './Counter';

function hello(name) {
  if (name) {
    return <h2>Hello {name}!</h2>;
  }

  return <h2>Hello Mr. X</h2>;
}

function greet(name) {
  return <div>
    {
      name && typeof name === 'string' && name.trim() !== ""
      ? <h2>Hello {name}</h2>
      : <h2>Hello Mr. XYZ!</h2>
    }
  </div>
}

function greetTwo(name) {
  return <div>
    {
      name && <h1>Hello {name}</h1>
    }
  </div>
}

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

const name = "Harshal";
const message = <h1>Hello {fullName("Harshal", "Limaye")}!</h1>;

const id = "submit";
const btn = <button className="submit" tabIndex="0">Save!</button>;

const countries = ["India", "Japan", "Nepal", "Brazil", "South Africa"];
// const countriesJSX = [
//   <li>India</li>,
//   <li>Japan</li>,
//   <li>Nepal</li>,
//   <li>Brazil</li>,
// ];
const countriesJSX = countries.map((country, i) => <li key={i}>{country}</li>);

const users = [
  { 
    name: 'Jon Doe',
    age: 34,
    jobTitle: 'Software Developer'
  },
  { 
    name: 'Jane Doe',
    age: 56,
    jobTitle: 'Software Architect'
  },
  { 
    name: 'Sam Doe',
    age: 24,
    jobTitle: 'HR Executive'
  },
  { 
    name: 'Foo Bar',
    age: 62,
    jobTitle: 'SVP'
  },
];



ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);

// function HelloWorld() {
//   return <h1>Hello React!</h1>
// }

// class HelloReact extends React.Component {
//   render() {
//     return <h2>Hello React Component!</h2>
//   }
// }

// function One() {
//   return <h2>One!</h2>;
// }

// function Two() {
//   return <One />
// }

// class COne extends React.Component {
//   render() {
//     return <h2>Hello from component one!</h2>;
//   }
// }

// class CTwo extends React.Component {
//   render() {
//     return <COne />;
//   }
// }

// // function Message(props) {
// //   return <h1>Welcome! {props.firstName}</h1>
// // }

// // function Person() {
// //   const name = "React!"
// //   return <Message firstName={name} />;
// // }

// class Message extends React.Component {
//   render() {
//     return <h1>Hello! {this.props.firstName}</h1>
//   }
// }

// class Person extends React.Component {
//   render() {
//     const name = "React";

//     return <Message firstName={name} />
//   }
// }

// ReactDOM.render(
//   <Person />,
//   document.getElementById('root')
// );