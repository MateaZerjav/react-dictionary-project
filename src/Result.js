import React from "react";
import Meanings from "./Meanings";

export default function Result(props) {
  console.log(props);
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
        </div>
      </div>
    );
  } else {
    return null;
  }
}
