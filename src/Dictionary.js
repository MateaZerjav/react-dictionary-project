import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [search, setSearch] = useState("");
  function handleChange(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${search}`);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for ...."
          onChange={handleChange}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
