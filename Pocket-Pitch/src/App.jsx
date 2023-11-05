import React, { useState, useEffect } from "react";
import allNotes from "./assets/AllNotes";
import MusicNotes from "./Components/Note";
import "./App.css";
import "@fontsource/poppins";
import header from "./assets/Images/Miscellaneous/Header.png";
import dot from "./assets/Images/Miscellaneous/Little Dot.png";

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
    marginTop: '32px',
    marginBottom: '80px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block'
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

  const copyright = {
    position: 'absolute',
    bottom: '0',
    width: '100vw',
    textAlign: 'center',
    marginBottom: '32px',
    fontSize: '12px',
    color: '#595959'
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
    <div style={{width: '100vw'}}>
      <img src={header} alt="app-title" style={titleStyles}/>
      {/* <button style={loopStyles} onClick={() => handleLoopClick()}>Loop</button> */}
      <div style={{ display: "flex" }} className="circle-wrapper">
        <img src={dot} alt="music-dot" className="musicDot" />
        {allNotes.map((note) => {
          return (
            <div key={note.id} onMouseDown={() => handlePlay(note)} onMouseUp={() => handlePause()} onMouseLeave={() => handlePause()} className={`circleNote ${note.class}`}>
              <MusicNotes  note={note} loop={loop} currentNote={currentNote} playNote={playNote}/>
            </div>
          );
        })}
      </div>
      <p style={copyright}>&copy; 2015 John Walbolt</p>
    </div>
  );
};

export default App;
