import React from "react";

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
        </div>
      </div>
    );
  }
}
