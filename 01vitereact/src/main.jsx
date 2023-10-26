import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";



function Eahul() {
  return (
    <div>
      <h1>hello world !</h1>
    </div>
  );
}

const customReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: 'Click and vist google'
};

const anotherElement = (
  <a href="https://google.com"> vist google</a>
)

const anotherUser = 'by Rahul'

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_target'
  },
  'vist google page',
  anotherUser
)

ReactDOM.createRoot(document.getElementById("root")).render(
  ReactElement
);
