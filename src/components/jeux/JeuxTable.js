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
  }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    let lastCategory;

    const rows = [];
    this.props.jeux.forEach(function (jeu) {
      if (jeu.name.toLowerCase().indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !jeu.stocked) {
        return;
      }
      if (jeu.category !== lastCategory) {
        rows.push(<JeuxCategory category={jeu.category} />);
      }
      rows.push(<JeuxRow key={jeu.name} jeu={jeu} />);
      lastCategory = jeu.category;
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

          {rows}
        </table>
      </div>
    );
  }
}
export default JeuxTable;
