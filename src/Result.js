import React from "react";
import Meanings from "./Meanings";
import Synonyms from "./Synonyms";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h2>{props.result.word}</h2>
        <div className="phonetic">
          <p>
            <em>{props.result.phonetic}</em>
          </p>
        </div>
        <div className="meanings">
          {props.result.meanings.map((meaning, index) => {
            return (
              <div key={index}>
                <Meanings meaning={meaning} />
              </div>
            );
          })}
          <Synonyms synonyms={props.result.meanings} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
