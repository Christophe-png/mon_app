/**
 * @author Christophe CASTAN
 * Licence
 * Premier composant pure react
 */
import React from "react";

class CompoCycleDeVie extends React.Component {
  constructor(props) {
    super(props);
    console.log("Je passe dans le constructor");
  }
  componentWillMount() {
    console.log("Je passe dans le componentWillMount");
  }
  render() {
    console.log("Je passe dans le render");
    return <div></div>;
  }
  componentDidMount() {
    console.log("Je passe dans le componentDidMount");
  }
}
export default CompoCycleDeVie;
