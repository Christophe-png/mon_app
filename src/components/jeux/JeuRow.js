/**
 * @author Christophe CASTAN
 * Licence
 * Premier composant pure react
 */
import React from "react";

class JeuRow extends React.Component {
  constructor(props) {
    super(props);
    console.log("le jeu", props.jeu);
  }

  render() {
    let name;
    if (this.props.jeu.stocked) {
      name = this.props.jeu.name;
    } else {
      name = <span style={{ color: "red" }}>{this.props.jeu.name}</span>;
    }
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.jeu.price}</td>
      </tr>
    );
  }
}
export default JeuRow;
