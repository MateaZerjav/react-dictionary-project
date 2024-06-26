import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.synonyms) {
    return (
      <div className="Synonyms">
        <ul>
          {props.synonyms.synonyms.map(function (synonym, index) {
            return <li key={index}> {synonym} </li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
