import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PureComponent, PureComponentProps } from "./components/PureComponent";
import StateComponent from "./components/StateComponent";
import CompoCycleDeVie from "./components/CompoCycleDeVie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateApp: "",
    };
  }
  /*onInputChange(val) {
    console.log("val" + val);
    this.setState({ stateApp: val });
  }*/
  onInputChange = (val) => {
    this.setState({ stateApp: val });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CompoCycleDeVie />
          <StateComponent
            label={"Christophe"}
            onInputChange={this.onInputChange}
          />
          <PureComponent />
          <PureComponentProps label={this.state.stateApp} age={48} />
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
}

export default App;
