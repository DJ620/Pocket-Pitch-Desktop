import React from "react";
import allNotes from "./assets/AllNotes";
import MusicNotes from "./Components/Note";
import "./App.css";
import "@fontsource/poppins";

const App = () => {
  return (
    <div>
      <h1 style={{ fontWeight: "800" }}>Pocket Pitch</h1>
      <div style={{ display: "flex" }}>
        {allNotes.map((note) => {
          return (
            <div key={note.id}>
              <MusicNotes note={note} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
