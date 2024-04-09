import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  if (props.meaning.example) {
    return (
      <div className="Meanings">
        <h3 className="text-start">{props.meaning.partOfSpeech}</h3>
        <div>
          <p>
            <em>{props.meaning.definition}</em>
            <br />
            <br />
            <em>
              <strong>{props.meaning.example}</strong>
            </em>
          </p>
          <Synonyms synonyms={props.meaning} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Meanings">
        <h3 className="text-start">{props.meaning.partOfSpeech}</h3>
        <div>
          <p>
            <em>{props.meaning.definition}</em>
          </p>
          <Synonyms synonyms={props.meaning} />
        </div>
      </div>
    );
  }
}
