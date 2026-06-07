import React from "react";
import HogTile from "./HogTile";

function HogList({ hogs, onHide }) {
  return (
    <div className="ui grid container">
      {hogs.map((hog) => (
        <div className="ui eight wide column" key={hog.name}>
          <HogTile hog={hog} onHide={onHide} />
        </div>
      ))}
    </div>
  );
}

export default HogList;