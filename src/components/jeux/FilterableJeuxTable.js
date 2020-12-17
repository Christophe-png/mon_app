/**
 * @author Christophe CASTAN
 * Licence
 * Premier composant pure react
 */
import React from "react";
import SearchCompo from "./SearchCompo";
import JeuxTable from "./JeuxTable";

class FilterableJeuxTable extends React.Component {
  constructor(props) {
    super(props);
    console.log("les jeux", props.jeux);
  }

  render() {
    return (
      <div style={{ backgroundColor: "blue" }}>
        FilterableJeuxTable
        <SearchCompo />
        <JeuxTable jeux={this.props.jeux} />
      </div>
    );
  }
}
export default FilterableJeuxTable;
