import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import Badge from "./components/Badge";

import App from "./components/App";
// const jsx = <h1>Hello, Platzi Badges from React!</h1>

//const element = React.createElement('a', { href: 'https://platzi.com'}, 'Ir a Platzi');
// const name = 'Rodo';
/* const element = React.createElement(
    'h1',
    {},
    `Hola soy ${name}`
);
const sum = () => 3+3;
const jsx = <h1> Hola soy, {sum()}</h1>;
*/
/*const element = (
  <div>
    <h1>Hola, soy Rodolfo</h1>
    <p>Soy ingeniero fronted.</p>
  </div>
); */
/*const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola soy Rodo"),
  React.createElement("p", {}, "Soy ingeniero de sistemas")
);*/
const container = document.getElementById("app");

ReactDOM.render(<App />, container);
