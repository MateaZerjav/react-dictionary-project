import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("hello");
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  //API docu: https://www.shecodes.io/learn/apis/dictionary
  function handleResponse(response) {
    setResult(response.data);
  }

  function handleChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "636ft3f4ca7b895f0259dd71a1354d0o";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for ...."
            onChange={handleChange}
          ></input>
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <Result result={result} />
      </div>
    );
  } else {
    setLoaded(true);
    search();
    return null;
  }
}
