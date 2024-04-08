import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState("");

  //API docu: https://www.shecodes.io/learn/apis/dictionary
  function handleResponse(response) {
    setInfo(response.data);
    console.log(response.data);
  }

  function handleChange(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${search}`);
    let apiKey = "636ft3f4ca7b895f0259dd71a1354d0o";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${search}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for ...."
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
