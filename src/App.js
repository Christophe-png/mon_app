import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PureComponent, PureComponentProps } from "./components/PureComponent";
import StateComponent from "./components/StateComponent";
import CompoCycleDeVie from "./components/CompoCycleDeVie";
import FilterableJeuxTable from "./components/jeux/FilterableJeuxTable";

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
    let mesLabel = [];
    const JEUX = [];
    JEUX.push({
      category: "FPS",
      price: "10€",
      stocked: true,
      name: "Counter Strike",
    });
    JEUX.push({
      category: "FPS",
      price: "40€",
      stocked: true,
      name: "BattleField",
    });
    JEUX.push({ category: "FPS", price: "20€", stocked: true, name: "PUBG" });
    JEUX.push({
      category: "Aventure",
      price: "20€",
      stocked: true,
      name: "Tomb Raider",
    });
    JEUX.push({
      category: "Aventure",
      price: "40€",
      stocked: false,
      name: "Uncharted",
    });
    JEUX.push({
      category: "Aventure",
      price: "50€",
      stocked: true,
      name: "Zelda",
    });
    return (
      <div className="App">
        <header className="App-header">
          <FilterableJeuxTable jeux={JEUX} />

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
