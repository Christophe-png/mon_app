/**
 * @author Christophe CASTAN
 * Licence
 * Premier composant pure react
 */
import React from "react";
import "./StateComponent.css";

class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("label" + props.label);
    this.state = { nom: "" };
  }

  handleChange = (e) => {
    this.setState({ nom: e.target.value });
    this.props.onInputChange(e.target.value);
  };

  render() {
    return (
      <div>
        <h6 className="state-h6">Composant State {this.props.label}</h6>
        <input
          type="text"
          value={this.state.nom}
          onChange={this.handleChange.bind(this)}
        ></input>
      </div>
    );
  }
}
export default StateComponent;
