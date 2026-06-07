import React, { useState } from "react";

function HogTile({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div aria-label="hog card" className="ui card">
      <div onClick={() => setShowDetails(!showDetails)}>
        <div className="image">
          <img src={hog.image} alt={"Photo of " + hog.name} />
        </div>

        <div className="content">
          <h3>{hog.name}</h3>

          {showDetails && (
            <div className="description">
              <p>Specialty: {hog.specialty}</p>
              <p>{hog.weight}</p>
              <p>{hog.greased ? "Greased" : "Nongreased"}</p>
              <p>{hog["highest medal achieved"]}</p>
            </div>
          )}
        </div>
      </div>

      <button onClick={() => onHide(hog.name)}>Hide Me</button>
    </div>
  );
}

export default HogTile;