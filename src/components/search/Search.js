import React from "react";
import "./Search.css";

function SearchBar(props) {
  const { value, setValue } = props;
  const search = (e) => {
    setValue(e.target.value);
  };
  console.log(value);
  return (
    <div className={"wrap-input100"}>
      <input
        type={"text"}
        placeholder="Search..."
        value={value}
        onChange={search}
        className={"input100"}
      />
    </div>
  );
}

export default SearchBar;
