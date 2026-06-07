import React, { useState } from "react";
import Nav from "./Nav";
import hogData from "../porkers_data";
import HogList from "./HogList";
import HogForm from "./HogForm";

function App() {
  const [hogs, setHogs] = useState(hogData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("none");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  function handleHide(name) {
    setHiddenHogs([...hiddenHogs, name]);
  }

  function handleAddHog(newHog) {
    setHogs([...hogs, newHog]);
  }

  let hogsToDisplay = hogs.filter((hog) => !hiddenHogs.includes(hog.name));

  if (greasedOnly) {
    hogsToDisplay = hogsToDisplay.filter((hog) => hog.greased);
  }

  if (sortBy === "name") {
    hogsToDisplay = [...hogsToDisplay].sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "weight") {
    hogsToDisplay = [...hogsToDisplay].sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="App">
      <Nav />

      <div>
        <label htmlFor="greased-filter">Greased Pigs Only?</label>
        <input
          id="greased-filter"
          type="checkbox"
          checked={greasedOnly}
          onChange={(e) => setGreasedOnly(e.target.checked)}
        />

        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="none">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>

      <HogForm onAddHog={handleAddHog} />
      <HogList hogs={hogsToDisplay} onHide={handleHide} />
    </div>
  );
}

export default App;