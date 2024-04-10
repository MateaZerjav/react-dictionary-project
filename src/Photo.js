import React from "react";
import "./Photo.css";

export default function Photo(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photo row">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div key={index} className="col-4 photo-gallery">
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt="dictionary"
                    className="img-fluid"
                  />
                </a>
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
