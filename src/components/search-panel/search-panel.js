import React from "react";
import "./search-panel.css";

const SearchPanel = (props) => {
  const onSearchChange = (e) => {
    props.onSearchChange(e.target.value);
    // console.log(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder="type to search"
      className="form-control search-input"
      onChange={onSearchChange}
    />
  );
};

export default SearchPanel;
