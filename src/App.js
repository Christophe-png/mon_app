import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PureComponent, PureComponentProps } from "./components/PureComponent";
import StateComponent from "./components/StateComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StateComponent label={"Christophe"} />
        <PureComponent />
        <PureComponentProps label={"christophe"} age={48} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Christophe Modification <code>src/App.js</code> and save to
          reload.
        </p>

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
