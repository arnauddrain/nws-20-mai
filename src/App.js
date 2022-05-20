import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [text, setText] = React.useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to my app</p>
        <input onChange={(e) => setText(e.target.value)}></input>
        <p data-cy="upperText">{text.toUpperCase()}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
