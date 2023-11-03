import React, { useState, useEffect } from "react";
import allNotes from "./assets/AllNotes";
import MusicNotes from "./Components/Note";
import "./App.css";
import "@fontsource/poppins";

const App = () => {
  const [loop, setLoop] = useState(false);
  const [currentNote, setCurrentNote] = useState('');
  const [playNote, setPlayNote] = useState(false);

  useEffect(() => {
    if (currentNote && playNote) {
      document.getElementById(currentNote).play();
    } else if (currentNote && !playNote) {
      document.getElementById(currentNote).pause();
    }
  }, [loop, currentNote, playNote]);

  const titleStyles = {
    fontWeight: '800',
    marginBottom: '-10px'
  }

  const loopStyles = {
    background: loop ? 'none' : 'white',
    backgroundImage: loop ? 'linear-gradient(pink, red)' : 'none',
    color: loop ? 'white' : 'black',
    cursor: 'pointer',
    marginBottom: '40px',
    borderRadius: '15px',
    padding: '0px 15px'
  }

  const handlePlay = (note) => {
    const lastNote = currentNote;
    if (lastNote) {
      document.getElementById(lastNote).pause();
    };
    setCurrentNote(note.id);
    if (loop && playNote && note.id == lastNote) {
      return setPlayNote(false);
    };
    setPlayNote(true);
  };

  const handlePause = () => {
    if (loop) return;
    setPlayNote(false);
  };

  const handleLoopClick = () => {
    if (loop) {
      setPlayNote(false);
    };
    setLoop(!loop);
  };

  return (
    <div>
      <h1 style={titleStyles} className="ppTitle">Pocket Pitch</h1>
      <h3 style={{ marginTop: '0px'}}>Pitch Pipe</h3>
      <button style={loopStyles} onClick={() => handleLoopClick()}>Loop</button>
      <div style={{ display: "flex" }}>
        {allNotes.map((note) => {
          return (
            <div key={note.id} onMouseDown={() => handlePlay(note)} onMouseUp={() => handlePause()}>
              <MusicNotes  note={note} loop={loop} currentNote={currentNote} playNote={playNote}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
