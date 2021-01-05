import React from "react";

function Searchbar(props) {
  //console.log(props);
  return (
    <form>
      <label for="booksearch">Search Books:</label>
      <input
        type="text"
        id="booksearch"
        name="searchTerm"
        onChange={props.handleInputChange}
      ></input>
      <input type="submit" onClick={props.handleFormSubmit}></input>
    </form>
  );
}

export default Searchbar;
