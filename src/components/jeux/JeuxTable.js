/**
 * @author Christophe CASTAN
 * Licence
 * Premier composant pure react
 */
import React from "react";
import JeuxCategory from "./JeuxCategory";
import JeuxRow from "./JeuRow";

class JeuxTable extends React.Component {
  constructor(props) {
    super(props);
    console.log("JeuxTable les jeux", props.jeux);
  }

  render() {
    return (
      <div style={{ backgroundColor: "violet" }}>
        JeuxTable
        <JeuxCategory />
        <JeuxRow />
      </div>
    );
  }
}
export default JeuxTable;
