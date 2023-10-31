import React from "react";
import allNotes from "./assets/AllNotes";
import MusicNotes from "./Components/Note";

const App = () => {
  return (
    <div>
      <h1>Pocket Pitch</h1>
      {allNotes.map((note) => {
        return (
          <div key={note.id}>
            <MusicNotes note={note} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
