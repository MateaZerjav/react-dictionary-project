import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms.synonyms);
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