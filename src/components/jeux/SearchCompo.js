/**
 * @author Christophe CASTAN
 * Licence
 * Premier composant pure react
 */
import React from "react";

class SearchCompo extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    console.log(e.target.value);
  }
  handleInStockChange(e) {
    console.log(e.target.checked);
  }
  render() {
    return (
      <div style={{ backgroundColor: "red" }}>
        <input
          type="text"
          placeholder="search"
          onChange={this.handleFilterTextChange}
        />
        <input type="checkbox" onChange={this.handleInStockChange} />
        {""}
        Produit en stock seulement
      </div>
    );
  }
}
export default SearchCompo;
