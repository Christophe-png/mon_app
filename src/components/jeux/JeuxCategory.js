/**
 * @author Christophe CASTAN
 * Licence
 * Premier composant pure react
 */
import React from "react";

class JeuxCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}
export default JeuxCategory;
