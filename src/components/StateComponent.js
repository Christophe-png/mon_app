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
  }
  render() {
    return (
      <div>
        <h6 className="state-h6">Composant State</h6>
      </div>
    );
  }
}
export default StateComponent;
