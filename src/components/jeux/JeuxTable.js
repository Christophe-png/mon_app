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
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    this.props.jeux.forEach((jeu) => {
      console.log("jeu", jeu.name);
      if (jeu.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !jeu.stocked) {
        return;
      }
      rows.push(<JeuxRow key={jeu.name} jeu={jeu} />);
    });
    //rows.push(<JeuxRow key="1" jeu/>);
    //rows.push(<JeuxRow key="2" />);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <JeuxCategory category={"FPS"} />
          {rows}
        </table>
      </div>
    );
  }
}
export default JeuxTable;
