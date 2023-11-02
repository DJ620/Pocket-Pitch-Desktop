import React, { useState } from 'react';
import "@fontsource/poppins/700.css";

const Note = ({note}) => {
  const [hover, setHover] = useState(false);
    const playNote = (note) => {
        document.getElementById(note).play();
        setHover(true);
      };
    
      const stopNote = (note) => {
          document.getElementById(note).pause();
          setHover(false);
      };

      const noteBtn = {
        height: '50px',
        width: '50px',
        borderRadius: '50px',
        color: 'red',
        fontWeight: '700',
        background: hover ? 'lightgray' : 'white',
        cursor: 'pointer',
        marginRight: '10px'
      }

  return (
    <div>
        <button style={noteBtn} onMouseDown={() => playNote(note.id)} onMouseUp={() => stopNote(note.id)} onMouseLeave={() => stopNote(note.id)}>
        {note.note}
      </button>
      <audio src={note.src} loop id={note.id}></audio>
    </div>
  )
}

export default Note;