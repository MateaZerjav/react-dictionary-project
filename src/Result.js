import React from "react";
import Meanings from "./Meanings";
import Synonyms from "./Synonyms";
import "./Result.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h4>
          <em>.you searched for word.</em>
        </h4>
        <h2>{props.result.word}</h2>
        <div className="phonetic">
          <p>
            <em>{props.result.phonetic}</em>
          </p>
        </div>
        <section className="meanings">
          {props.result.meanings.map((meaning, index) => {
            return (
              <div key={index}>
                <Meanings meaning={meaning} />
              </div>
            );
          })}
          <Synonyms synonyms={props.result.meanings} />
        </section>
      </div>
    );
  } else {
    return null;
  }
}
